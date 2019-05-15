<template>
  <div>
    <header>注册</header>
    <main>
      <div class="urlType">
        <div><a href="/login#/">登录</a></div>
        <div><a href="/login#/register">注册</a></div>
      </div>
      <div class="userName">
        <input type="text" placeholder="请输入登录用户名" v-model="loginName">
      </div>
      <div class="userName">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="userName">
        <input type="text" placeholder="请输入用户名" v-model="userName">
      </div>
      <div class="userName">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="subBut">
         <el-button type="primary" @click="registerReq">注册</el-button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginName: '',
      password: '',
      userName: '',
      phone: ''
    }
  },
  methods: {
    registerReq() {
      this.$axios({
        method: 'post',
        url: '/login/register',
        data: {
          loginName: this.loginName,
          password: this.password,
          userName: this.userName,
          phone: this.phone
        }
      }).then((res) => {
        if(res.data.result) {
          this.$message.success('注册成功');
        } else {
          this.$message.error('注册失败');
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-top: 20px;
  color: #333;
  font-size: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-bottom: 1px solid #e5e5e5;
}
main {
  width: 410px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0 0 6px rgba(0,0,0,.08);
  margin: 50px auto;

  .urlType {
    font-size: 18px;
    font-weight: 700;
    
    &>div:nth-child(1) {
      display:inline-block;
      padding: 0 15px;
      border-right: 1px solid #e5e5e5;
      a {
        color: #999;
        text-decoration: none;
      }
    }
    &>div:nth-child(2) {
      display:inline-block;
      padding: 0 15px;
      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
  .userName {
    margin-left: 15px;
    margin-top:  30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;

    input {
      outline: none;
      border: none;
      margin-left: 20px;
    }
  }
  .subBut {
    text-align: center;
    margin: 20px 0px;
    
    button {
      width: 100%;
    }
  }
}
</style>
