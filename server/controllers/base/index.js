const n_env = process.env.NODE_ENV == 'development';

// 子类中使用 await super.isLogin(ctx) 检测是否登录
class BaseControllers {
  async isLogin(ctx){
    if(JSON.stringify(ctx.session) === '{}') {
      ctx.redirect('/login');
    }
  }
}

module.exports = BaseControllers;
