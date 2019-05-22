const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const order = require('../../services/order');
const Goods = require('../../services/goods');
const moment = require('moment');

class shopIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('shop', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    });
  }

  async getShopAllDate(ctx) {
    const userId = ctx.session.userId;
    let result = {
      money: 0,
      yesMoney: 0,
      orderNum: 0,
      yesOrderNum: 0,
      customer: 0,
      yesCustomer: 0,
      checkOrderState: 0,
      showGoodsNum: 0,
      timer: moment(new Date()).format('YYYY-MM-DD 00:00:00')
    };
    await order.searchAllOrder(userId)
    .then((data) => {
      console.log(data);
      let arr = [];
      let arr1 = [];
      data.forEach(item => {
        if(item.order_state !== 3) {
          result.money += item.goods_true_price;
          result.orderNum++;
          if(arr.indexOf(item.customer_id) === -1) {
            arr.push(item.customer_id);
            result.customer++;
          }
          if(item.order_state === 1) {
            result.checkOrderState++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              result.yesMoney += item.goods_true_price;
              result.yesOrderNum++;
              if(arr1.indexOf(item.customer_id) === -1) {
                arr1.push(item.customer_id);
                result.yesCustomer++;
              }
          }
        }
      })
    }).catch(err => {
      console.log(err);
    })

    await Goods.getGoodsShowNum(userId).then(data => {
      data.forEach(item => {
        result.showGoodsNum += item.goods_show_num;
      })
    }).catch((err) => {
      console.log(err);
    })
    ctx.body = {
      code: 200,
      result
    }
  }
}

module.exports = shopIndex;
