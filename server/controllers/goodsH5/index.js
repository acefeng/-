const n_env = process.env.NODE_ENV == 'development';
const Goods = require('../../services/goods');
const User = require('../../services/user');
const Order = require('../../services/order');
const Comment = require('../../services/comment');

class goodsH5Index {
  async getIndex(ctx){
    const goodsId = ctx.query.goods_id;
    const globalGoods = await Goods.getGoodsMainById(goodsId);
    const globalComment = await Comment.getGoodsComment(goodsId);
    await Goods.addGoodsShowNum(goodsId, globalGoods.user_id);
    await ctx.render('goodsH5', {
        title: 'goodsH5',
        n_env,
        globalGoods: JSON.stringify(globalGoods),
        globalComment: JSON.stringify(globalComment)
    })
  }

  /**
   * 用户登录
   */
  async postLoginH5(ctx) {
    const {loginName, password} = ctx.request.body;
    const result = await User.loginUser(loginName);
    if(result === null) {
      ctx.body = {
        code: 200,
        result: '账号不存在'
      }
      return;
    }
    if(result.password === password) {
      let obj = {
        userId: result.id,
        loginName: result.login_name,
        userName: result.user_name,
        phone: result.phone
      };
      ctx.session = obj;
      ctx.body = {
        code: 200,
        result: '登录成功',
        data: obj
      }
    } else {
      ctx.body = {
        code: 200,
        result: '密码错误'
      }
    }
  }

  /**
   * 添加新订单
   */
  async postPushOrder(ctx) {
    const {orderGoodsNum, orderTruePrice, orderGoodsId, orderGoodsName, customerId, shopkeeperId, deliveryType, goodsPrice, orderAddress, customerName} = ctx.request.body;
    let data = {
      goods_id: orderGoodsId,    
      goods_name:  orderGoodsName,     
      customer_id: customerId,  
      shopkeeper_id: shopkeeperId, 
      delivery_type: deliveryType,  
      goods_number: parseInt(orderGoodsNum),  
      goods_true_price: orderTruePrice,  
      goods_price: goodsPrice,  
      order_state: 1,
      order_address: orderAddress,
      customer_name: customerName
    };
    const result = await Order.addOrder(data);
    if(result) {
      ctx.body = {
        code: 200,
        result
      }
    }
  }

  /**
   * 添加新评论
   */
  async postPushComment(ctx) {
    const { goodsId, textarea } = ctx.request.body
    const { userId=null, userName=null } = ctx.session;
    if (!userId) {
      ctx.body={
        code: 200,
        result: '请登录后评论(点击立即购买可登录)'
      }
      return;
    }
    const canPush = await Comment.checkPushComment(goodsId, userId);
    if(canPush) {
      const data = await Comment.addComment(goodsId, userId, userName, textarea)
      ctx.body={
        code: 200,
        result: '评论添加成功',
        data
      }
    } else {
      ctx.body={
        code: 200,
        result: '请购买后评论'
      }
    }
  }

}

module.exports = goodsH5Index;
