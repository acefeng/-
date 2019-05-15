const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';

class dataIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('data', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    })
  }
}

module.exports = dataIndex;
