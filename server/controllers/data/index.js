const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const Goods = require('../../services/goods');
const order = require('../../services/order');
const moment = require('moment');

class dataIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('data', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    })
  }

  async getDataSummary(ctx) {
    const userId = ctx.session.userId;
    let result = {};
    await Goods.searchAllGoods(userId).then((data) => {
      let obj = {
        goodsKindArr: [['', 0],['', 0],['', 0],['', 0],['', 0]],
        goodsKindSum: 0,
      };
      obj.goodsKindArr[0][0] = moment(new Date(new Date().getTime()-5*24*60*60*1000)).format('YYYY-MM-DD');
      obj.goodsKindArr[1][0] = moment(new Date(new Date().getTime()-4*24*60*60*1000)).format('YYYY-MM-DD');
      obj.goodsKindArr[2][0] = moment(new Date(new Date().getTime()-3*24*60*60*1000)).format('YYYY-MM-DD');
      obj.goodsKindArr[3][0] = moment(new Date(new Date().getTime()-2*24*60*60*1000)).format('YYYY-MM-DD');
      obj.goodsKindArr[4][0] = moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD');
      data.forEach(item => {
        if(item.goods_state !== 2) {
          obj.goodsKindSum++;
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-5*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-5*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.goodsKindArr[0][1] ++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-4*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-4*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.goodsKindArr[1][1] ++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-3*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-3*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.goodsKindArr[2][1] ++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-2*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-2*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.goodsKindArr[3][1] ++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.goodsKindArr[4][1] ++;
          }
        }
      });
      result.goods = obj;
    }).catch(err => {
      console.log(err);
    })

    await order.searchAllOrder(userId)
    .then((data) => {
      let obj = {
        salesVolumeNum: 0,
        salesVolumeArr: [['', 0],['', 0],['', 0],['', 0],['', 0]],
        orderSize: 0,
        orderShow: [['', 0],['', 0],['', 0],['', 0],['', 0]],
        yesCustomer: 0,
        customer: 0
      };
      obj.orderShow[0][0] = obj.salesVolumeArr[0][0] = moment(new Date(new Date().getTime()-5*24*60*60*1000)).format('YYYY-MM-DD');
      obj.orderShow[1][0] = obj.salesVolumeArr[1][0] = moment(new Date(new Date().getTime()-4*24*60*60*1000)).format('YYYY-MM-DD');
      obj.orderShow[2][0] = obj.salesVolumeArr[2][0] = moment(new Date(new Date().getTime()-3*24*60*60*1000)).format('YYYY-MM-DD');
      obj.orderShow[3][0] = obj.salesVolumeArr[3][0] = moment(new Date(new Date().getTime()-2*24*60*60*1000)).format('YYYY-MM-DD');
      obj.orderShow[4][0] = obj.salesVolumeArr[4][0] = moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD');
      let arr = [];
      data.forEach(item => {
        if(item.order_state !== 3) {
          //以下为订单数据
          obj.orderSize++;
          if(arr.indexOf(data.customer_id) === -1) {
            arr.push(data.customer_id);
            obj.customer++;
            if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
              && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
                obj.yesCustomer++;
            }
          }
          // 以下为销售额数据
          obj.salesVolumeNum += item.goods_true_price;
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-5*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-5*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.salesVolumeArr[0][1] += item.goods_true_price;
              obj.orderShow[0][1]++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-4*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-4*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.salesVolumeArr[1][1] += item.goods_true_price;
              obj.orderShow[1][1]++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-3*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-3*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.salesVolumeArr[2][1] += item.goods_true_price;
              obj.orderShow[2][1]++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-2*24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-2*24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.salesVolumeArr[3][1] += item.goods_true_price;
              obj.orderShow[3][1]++;
          }
          if(moment(item.created_time).isAfter(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 00:00:00')) 
            && moment(item.created_time).isBefore(moment(new Date(new Date().getTime()-24*60*60*1000)).format('YYYY-MM-DD 23:59:59'))) {
              obj.salesVolumeArr[4][1] += item.goods_true_price;
              obj.orderShow[4][1]++;
          }
        }
      })
      result.order = obj;
    }).catch(err => {
      console.log(err);
    })
    ctx.body = {
      code: 200,
      result
    }
  }
}

module.exports = dataIndex;
