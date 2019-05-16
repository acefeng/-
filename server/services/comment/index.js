const comment = require('../../dao/comment');
const order = require('../../dao/order');
const moment = require('moment');

/**
 * goods_id查询商品信息
 */
exports.getGoodsComment = async function (goodsId) {
  return await comment.getGoodsComment(goodsId).then(data => {
    data.forEach((element,index) => {
      data[index].created_time = moment(element.created_time).format('YYYY-MM-DD HH:mm');
    });
    return data;
  }).catch(err => {
    console.log(err);
  });
};

/**
 * 查看是否有提交权限
 */
exports.checkPushComment = async function (goodsId, user_id) {
  let isNull = [];
  await order.searchOrderByCustomerId(goodsId, user_id).then((data) => {
    isNull = data.length;
  }).catch(err => {
    console.log(err);
  })
  if(isNull !== 0) {
    
  }
};