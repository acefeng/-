const n_env = process.env.NODE_ENV == 'development';

class dataIndex {
  async getIndex(ctx){
    await ctx.render('data', {
        title: '后台商品管理系统',
        n_env
    })
  }
}

module.exports = dataIndex;
