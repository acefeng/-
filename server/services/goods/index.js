const goods = require('../../dao/goods');

/**
 * 查询所有商品
 */
exports.searchAllGoods = function () {
  return goods.searchAllGoods();
};

/**
 * 添加商品分组
 */
exports.addGoodsTag = function (id, user_id, group_name) {
  return goods.addGoodsTag({id, user_id, group_name});
};
/**
 * 添加商品
 */
exports.addGoods = function (userId, pushGoodsName, pushGoodsType, pushGoodsGroup, pushShopPrice, pushGoodsNum, pushGoodsDelivery, imgURL) {
  return goods.addGoods({
    user_id: userId,
    goods_name: pushGoodsName,
    goods_price: pushShopPrice,
    goods_activity_price: pushShopPrice,
    goods_number: pushGoodsNum,
    goods_pay_number: 0,
    goods_type: pushGoodsType,
    goods_delivery: pushGoodsDelivery,
    goods_img: imgURL,
    goods_group_id: pushGoodsGroup
  });
};

/**
 * 搜索商品分组列表
 */
exports.searchGoodsTagList = function (user_id) {
  return goods.searchGoodsTag(user_id);
};

/**
 * 商品分组列表及内部商品数量
 * 根据用户id搜索商品分组
 * 根据商品分组中的id 查询在分组中的商品
 */