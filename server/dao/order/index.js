const models = require('../../models');

/**
 * 更改订单状态
 */
exports.changeOrderState = function (order_id) {
  return models.Order.update({
    order_state: 2
  },{
    where: {
      id: order_id
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
 * 添加新订单
 */
exports.addOrder = function (data) {
  return models.Order.create(data, {raw: true})
  .then((result) => {
    return result.id;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 通过店主id搜索所有订单
 */
exports.searchAllOrder = function (user_id) {
  return models.Order.findAll({
    where: {
      shopkeeper_id: user_id
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
 * 通过customer_id和用户id搜索订单
 */
exports.searchOrderByCustomerId = function (goodsId, user_id) {
  return models.Order.findAll({
    where: {
      goods_id: goodsId,
      customer_id: user_id
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