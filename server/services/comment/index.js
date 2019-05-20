const comment = require('../../dao/comment');
const order = require('../../dao/order');
const moment = require('moment');

/**
 * 删除评论
 */
exports.deleteComment = async function (commentId) {
  return await comment.deleteComment(commentId);
};

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
  if(isNull > 0) {
    return true;
  } else {
    return false;
  }
};

exports.addComment = async function (goodsId, user_id, userName, textarea) {
  let data = {
    goods_comment_main: textarea,
    goods_id: goodsId,
    comment_user_id: user_id,
    comment_user_name: userName
  }
  const isTrue = await comment.addComment(data);
  if(isTrue) {
    return await this.getGoodsComment(goodsId);
  }
}