const BaseControllers = require('../base/index');
const order = require('../../services/order');
const n_env = process.env.NODE_ENV == 'development';
const moment = require('moment');

class capitalIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('capital', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    })
  }

  async getCapitalShopData(ctx) {
    const user_id = ctx.session.userId;
    let result = {
      sumMoney: 0,
    };
    await order.searchAllOrder(user_id)
    .then((data) => {
      data.forEach(item => {
        item.updated_time = moment(item.updated_time).format('YYYY-MM-DD HH:mm');
        result.sumMoney += item.goods_true_price;
      });
      result.arrList = data.slice(0, 10);
    }).catch(err => {
      console.log(err);
    })
    ctx.body = {
      code: 200,
      result
    }
  }
}

module.exports = capitalIndex;
