const BaseControllers = require('../base/index');
const n_env = process.env.NODE_ENV == 'development';
const Goods = require('../../services/goods');
const moment = require('moment');

class goodsIndex extends BaseControllers{
  async getIndex(ctx){
    await super.isLogin(ctx);
    await ctx.render('goods', {
        title: '后台商品管理系统',
        n_env,
        global: JSON.stringify(ctx.session)
    })
  }
  /**
   * 增加商品分组
   */
  async postAddGoodsTag(ctx) {
    const { groupName } = ctx.request.body;
    const userId = ctx.session.userId;
    const result = await Goods.addGoodsTag(0, userId, groupName);
    if(result) {
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
  /**
   * 通过限制获取不同种商品数据
   * @param {*} ctx 
   */
  async postSelectSearchGoods(ctx) {
    const userId = ctx.session.userId;
    const { 
      searchByNameOrId, 
      searchBySaleNumMax, 
      searchBySaleNumMin, 
      searchByGoodsGroups, 
      searchByPriceMin, 
      searchByPriceMax,
      searchByGoodsType 
    } = ctx.request.body;
    await Goods.searchAllGoods().then((data) => {
      for(let i=0;i<data.length;i++) {
        data[i].updated_time = moment(data[i].updated_time).format('YYYY-MM-DD HH:mm');
      }
      let result = data;
      if(searchByNameOrId) {
        let arr = [];
        const reg = new RegExp(searchByNameOrId);
        for(let i=0;i<result.length;i++) {
          if(reg.test(result[i].goods_name)) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      if(searchByPriceMin) {
        let arr = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].goods_price >= searchByPriceMin) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      if(searchByPriceMax) {
        let arr = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].goods_price <= searchByPriceMax) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      if(searchByGoodsGroups) {
        let arr = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].goods_group_id == searchByGoodsGroups) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      if(searchBySaleNumMin) {
        let arr = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].goods_pay_number >= searchBySaleNumMin) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      if(searchBySaleNumMax) {
        let arr = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].goods_pay_number <= searchBySaleNumMax) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      if(searchByGoodsType) {
        let arr = [];
        for(let i=0;i<result.length;i++) {
          if(result[i].goods_type == searchByGoodsType) {
            arr.push(result[i]); 
          }
        }
        result = arr;
      }
      ctx.body = {
        code: 200,
        result
      }
    });
    

  }
  /**
   * 刷新页面主要数据 查看商品和获取分组
   */
  async postResetMainData(ctx) {
    const userId = ctx.session.userId;
    let results = {};
    await Goods.searchGoodsTagList(userId).then((data) => {
      data.forEach(element => {
        element.created_time = moment(element.created_time).format('YYYY-MM-DD HH:mm');
      });
      results.goodsTagList = data;
    });
    await Goods.searchAllGoods().then((data) => {
      for(let i=0;i<data.length;i++) {
        data[i].updated_time = moment(data[i].updated_time).format('YYYY-MM-DD HH:mm');
      }
      results.goodsList = data;
    });
    ctx.body = {
      code: 200,
      result: results
    }
  }

  /**
   * 增加商品
   */
  async postAddGoods(ctx) {
    const { pushGoodsName, pushGoodsType, pushGoodsGroup, pushShopPrice, pushGoodsNum, pushGoodsDelivery, imgURL } = ctx.request.body;
    const userId = ctx.session.userId;  
    await Goods.addGoods(userId, pushGoodsName, pushGoodsType, pushGoodsGroup, pushShopPrice, pushGoodsNum, pushGoodsDelivery, imgURL);
    await Goods.searchAllGoods().then((data) => {
      for(let i=0;i<data.length;i++) {
        data[i].updated_time = moment(data[i].updated_time).format('YYYY-MM-DD HH:mm');
      }
      ctx.body = {
        code: 200,
        result: data
      }
    });
  }
}

module.exports = goodsIndex;
