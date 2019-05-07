const n_env = process.env.NODE_ENV == 'development';

class orderIndex {
  async getIndex(ctx){
    await ctx.render('order', {
        title: '后台商品管理系统',
        n_env
    })
  }
}

module.exports = orderIndex;
