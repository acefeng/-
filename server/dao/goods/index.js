const models = require('../../models');

/**
 * 更新商品状态
 */
exports.changeGoodsState = function (data) {
  return models.Goods.update({
    goods_state: 2
  },{
    where: {
      id:{
        $or: data
      }
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
 * 通过goods_id查询商品
 */
exports.getGoodsMainById = function (goods_id) {
  return models.Goods.findOne({
    where: {
      id: goods_id
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
 * 查询所有商品列表
 */
exports.searchAllGoods = function (user_id) {
  return models.Goods.findAll({
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
 * 根据分组id搜索商品数量
 */
exports.countGoodsByGroupId = function (goods_group_id) {
  return models.Goods.count({
    where: {
      goods_group_id
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
 * 删除分组
 */
exports.deleteGoodsGroup = function (id) {
  return models.GoodsGroup.destroy({
    where: {
      id
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
 * 更改商品卖出数量
 */
exports.updateGoodsPayNum = function (id, payNum) {
  return models.Goods.update({
    goods_pay_number: payNum
  },{
    where: {
      id
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
 * 查询商品的浏览次数
 */
exports.searchGoodsShowNum = function (goods_id, user_id) {
  return models.GoodsShowNumber.findCreateFind({
    where: {
      goods_id
    },
    defaults: {
      id: 0,
      goods_id,
      goods_show_num: 1,
      goods_user_id: user_id
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
 * 更改商品的浏览次数
 */
exports.addGoodsShowNum = function (goods_id, goods_show_num) {
  return models.GoodsShowNumber.update({
    goods_show_num: goods_show_num - 0 +1 
  },{
    where: {
      goods_id
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
 * 查看商品浏览次数表
 */
exports.getGoodsShowNum = function (user_id) {
  return models.GoodsShowNumber.findAll({
    where: {
      goods_user_id: user_id
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
