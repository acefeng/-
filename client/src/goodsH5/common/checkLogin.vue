<template>
  <el-dialog
    title="请登录"
    :visible.sync="checkLogin"
    width="300px"
    :before-close="handleClose">
    <div>
      <el-input v-model="userName" placeholder="请输入用户名" size="mini"></el-input>
    </div>
    <div class="password_c">
      <el-input v-model="password" placeholder="请输入密码" size="mini" show-password></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    checkLogin: Boolean,
    disDiv: Function
  },
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
    handleClose(done) {
      this.disDiv(false);
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    }
  }
}
</script>

<style lang="scss">
.password_c {
  margin-top: 10px;
}
</style>
