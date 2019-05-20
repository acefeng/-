const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const customer = require('../../services/customer');

class customerIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('customer', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    })
  }

  async getCustomerList(ctx) {
    const userId = ctx.session.userId;
    const result = await customer.getCustomerList(userId);
    ctx.body = {
      code: 200,
      result
    }
  }

  async getSelectCustomerList(ctx) {
    const userId = ctx.session.userId;
    const { orderTime,customerName,customerPhone } = ctx.request.body;
    let result = await customer.getCustomerList(userId);
    if(orderTime) {
      let arr = [];
      result.forEach(item => {
        if(new Date(orderTime[0]) < new Date(item.updated_time) && new Date(item.updated_time) < new Date(orderTime[1])) {
          arr.push(item);
        }
      });
      result = arr;
    }
    if(customerName !== '') {
      let arr = [];
      const reg = new RegExp(customerName);
      for(let i=0;i<result.length;i++) {
        if(reg.test(result[i].customer_name)) {
          arr.push(result[i]); 
        }
      }
      result = arr;
    }
    if(customerPhone !== '') {
      let arr = [];
      const reg = new RegExp(customerPhone);
      for(let i=0;i<result.length;i++) {
        if(reg.test(result[i].phone)) {
          arr.push(result[i]); 
        }
      }
      console.log('!!!1', arr);
      result = arr;
    }
    ctx.body = {
      code: 200,
      result
    }
  }

  async getAddCustomerTag(ctx) {
    const userId = ctx.session.userId;
    const { tagName } = ctx.request.body;
    const result = await customer.addCustomerTag(userId, tagName);
    ctx.body = {
      code:200,
      result
    }
  }

  async getALlCustomerTag(ctx) {
    const userId = ctx.session.userId;
    const result = await customer.getCustomerTag(userId);
    ctx.body = {
      code:200,
      result
    }
  }

  async postAddTagCustomerMain(ctx) {
    const { addChoiceCustomer, tag_id, customerName } = ctx.request.body;
    const result = await customer.addTagCustomerMain(tag_id, addChoiceCustomer, customerName);
    ctx.body = {
      code: 200,
      result
    }
  }

  async postDeleteTagCustomer(ctx) {
    const { id } = ctx.request.body;
    const result = await customer.deleteTagCustomer(id);
    ctx.body = {
      code: 200,
      result
    }
  }

  async postDeleteCustomerTag(ctx) {
    const { id } = ctx.request.body;
    const result = await customer.deleteCustomerTag(id);
    ctx.body = {
      code: 200,
      result
    }
  }
}

module.exports = customerIndex;
