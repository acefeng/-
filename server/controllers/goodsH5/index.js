const n_env = process.env.NODE_ENV == 'development';

class goodsH5Index {
  async getIndex(ctx){
    await ctx.render('goodsH5', {
        title: 'goodsH5',
        n_env
    })
  }
}

module.exports = goodsH5Index;
