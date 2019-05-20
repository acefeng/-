const order = require('../../dao/order');
const goods = require('../../dao/goods');
const comment = require('../../dao/comment');
const moment = require('moment');

/**
 * 更改订单状态
 */
exports.changeOrderState = function (order_id) {
  return order.changeOrderState(order_id);
};


/**
 * 搜索所有订单
 */
exports.searchAllOrder = function (user_id) {
  return order.searchAllOrder(user_id);
};

/**
 * 搜索所有订单评论
 */
exports.searchAllOrderComment = async function (user_id) {
  let goodsDate = [];
  await goods.searchAllGoods(user_id).then(data => {
    data.forEach(item => {
      goodsDate.push({
        goodsId: item.id,
        goodsName: item.goods_name
      })
    });
  }).catch(err => {
    console.log(err);
  });
  return await Promise.all(goodsDate.map(async item => {
    return await comment.getGoodsComment(item.goodsId).then(comList => {
      if(comList.length > 0) {
        comList.forEach(commentMain => {
          commentMain.created_time = moment(commentMain.created_time).format('YYYY-MM-DD HH:mm');
        })
      }
      item.commentList = comList;
      return item;
    }).catch(err => {
      console.log(err);
    })
  }));
};


/**
 * 添加新订单
 * 1.根据goods_id找到商品卖出数量
 * 2.生成订单（注意风险控制。如果生成订单失败就不修改卖出）
 * 3.修改商品卖出数量
 */
exports.addOrder =async function (data) {
  const goodsMain = await goods.getGoodsMainById(data.goods_id);
  let goodsPayNum = goodsMain.goods_pay_number;
  const result = await order.addOrder(data);
  if(result) {
    const updateResult = await goods.updateGoodsPayNum(data.goods_id, parseInt(goodsPayNum)+parseInt(data.goods_number));
    if(updateResult) {
      return result;
    }
  }
};
