const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const User = require('../../services/user');
class loginIndex extends BaseControllers{
  async getIndex(ctx){
    await ctx.render('login', {
        title: '后台商品管理系统',
        n_env,
        _global: {}
    })
  }

  /**
   * 用户登录
   */
  async postLogin(ctx) {
    const {loginName, password} = ctx.request.body;
    const result = await User.loginUser(loginName);
    if(result === null) {
      ctx.body = {
        code: 200,
        result: '账号不存在'
      }
      return;
    }
    if(result.password === password) {
      ctx.session={
        userId: result.id,
        loginName: result.login_name,
        userName: result.user_name,
        phone: result.phone
      }
      ctx.body = {
        code: 200,
        result: '登录成功'
      }
    } else {
      ctx.body = {
        code: 200,
        result: '密码错误'
      }
    }
  }
 
  /**
   * 注册用户
   */
  async createUser(ctx){
    const {loginName, password, userName, phone} = ctx.request.body;
    const result = await User.addUser(0, loginName, password, phone, userName); 
    ctx.body = {
      code: 200,
      result
    }
  }
}

module.exports = loginIndex;
