const models = require('../../models');

/**
 * 删除评论
 */
exports.deleteComment = function (commentId) {
  return models.Comment.destroy({
    where: {
      id: commentId
    },
    raw: true
  })
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 根据goodsid查看comment
 */
exports.getGoodsComment = function (goodsId) {
  return models.Comment.findAll({
    where: {
      goods_id: goodsId
    },
    raw: true
  })
  .then((result) => {
    return result;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 添加新的评论
 */
exports.addComment = function (data) {
  return models.Comment.create(data, {raw: true})
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};
