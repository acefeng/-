const models = require('../../models');

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