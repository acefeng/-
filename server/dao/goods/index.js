const models = require('../../models');
/**
 * 查询所有商品列表
 */
exports.searchAllGoods = function () {
  return models.Goods.findAll({
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
 * 添加商品
 */
exports.addGoods = function (data) {
  return models.Goods.create(data, {raw: true})
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 添加商品分组
 */
exports.addGoodsTag = function (data) {
  return models.GoodsGroup.create(data, {raw: true})
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 根据用户id搜索商品分组
 */
exports.searchGoodsTag = function (user_id) {
  return models.GoodsGroup.findAll({
    where: {
      user_id
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
 * 分组id查询分组内部的商品
 */