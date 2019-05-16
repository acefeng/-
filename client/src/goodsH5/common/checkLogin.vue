<template>
  <el-dialog
    title="请登录"
    :visible.sync="isShow"
    width="300px">
    <div>
      <el-input v-model="userName" placeholder="请输入用户名" size="mini"></el-input>
    </div>
    <div class="password_c">
      <el-input v-model="password" placeholder="请输入密码" size="mini" show-password></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="loginH5">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    checkLogin: Boolean,
    disDiv: Function,
    disLogin: Function
  },
  data() {
    return {
      userName: '',
      password: '',
      isShow: false
    };
  },
  watch: {
    checkLogin(next) {
      this.isShow=next;
    },
    isShow(next) {
      if(next == false) {
        this.disLogin();
      }
    }
  },
  methods: {
    loginH5() {
      let _ = this;
      this.$axios({
        method: "post",
        url: "/loginH5",
        data: {
          loginName: this.userName,
          password: this.password
        }
      }).then((res) => {
        if(res.data.result === '登录成功') {
          window._global = res.data.data;
          this.$message.success(res.data.result);
          setTimeout(() => {
            _.disDiv(true);
            _.disLogin();
          }, 500);
        } else {
          this.$message.error(res.data.result);
        }
      }).catch((err) => {
        this.$message.error('登录失败');
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss">
.password_c {
  margin-top: 10px;
}
</style>
