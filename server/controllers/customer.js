const n_env = process.env.NODE_ENV == 'development';

class customerIndex {
  async getIndex(ctx){
    await ctx.render('customer', {
        title: '后台商品管理系统',
        n_env
    })
  }
}

module.exports = customerIndex;
