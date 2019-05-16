const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const order = require('../../services/order');

class orderIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('order', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    })
  }

  async getAllOrder(ctx) {
    const user_id = ctx.session.userId;
    await order.searchAllOrder(user_id)
    .then((data) => {
      ctx.body = {
        code: 200,
        result: data
      }
    }).catch(err => {
      console.log(err);
    })
  }

  async getSelectOrder(ctx) {
    const user_id = ctx.session.userId;
    const { orderId, customerName, orderTime, orderGoodsName, orderDelivery } = ctx.request.body;
    let result = [];
    console.log(ctx.request.body)
    await order.searchAllOrder(user_id)
    .then((data) => {
      result = data;
    }).catch(err => {
      console.log(err);
    });
    if(orderId) {
      let arr = [];
      result.forEach(item => {
        if(item.id == orderId) {
          arr.push(item);
        }
      });
      result = arr;
    }
    if(customerName) {
      let arr = [];
      const reg = new RegExp(customerName);
      result.forEach(item => {
        if(reg.test(item.customer_name)) {
          arr.push(item);
        }
      });
      result = arr;
    }
    if(orderGoodsName) {
      let arr = [];
      const reg = new RegExp(orderGoodsName);
      result.forEach(item => {
        if(reg.test(item.goods_name)) {
          arr.push(item);
        }
      });
      result = arr;
    }
    if(orderTime) {
      let arr = [];
      result.forEach(item => {
        if(new Date(orderTime[0]) < item.created_time < new Date(orderTime[1])) {
          arr.push(item);
        }
      });
      result = arr;
    }
    if(orderDelivery) {
      let arr = [];
      result.forEach(item => {
        if(item.delivery_type == orderDelivery) {
          arr.push(item);
        }
      });
      result = arr;
    }
    console.log(result);
    ctx.body = {
      code: 200,
      result
    }
  }

  async getChangeOrderState(ctx) {
    const { id } = ctx.request.body;
    const result = await order.changeOrderState(id);
    if(result[0] == 1) {
      ctx.body = {
        code: 200,
        result: true
      }
    } else {
      ctx.body = {
        code: 200,
        result: false
      }
    }
  }
}

module.exports = orderIndex;
