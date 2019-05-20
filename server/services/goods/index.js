const goods = require('../../dao/goods');

/**
 * goods_id查询商品信息
 */
exports.getGoodsMainById = function (goods_id) {
  return goods.getGoodsMainById(goods_id);
};

/**
 * 更改商品状态
 */
exports.changeGoodsState = function (arr) {
  let data = [];
  console.log(1231231, arr);
  arr.forEach(item => {
    data.push(item.id);
  });
  return goods.changeGoodsState(data);
};

/**
 * 查询所有商品
 */
exports.searchAllGoods = function (userId) {
  return goods.searchAllGoods(userId);
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
exports.addGoods = function (userId, pushGoodsName, pushGoodsType, pushGoodsGroup, pushShopPrice, pushGoodsNum, pushGoodsDelivery, imgURL, goodsState) {
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
    goods_group_id: pushGoodsGroup,
    goods_state: goodsState
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
 * 1.根据商品分组中的id 
 * 2.查询在分组中的商品
 */
exports.getGoodsGroupMain = async function (user_id) {
  let result = [];
  await goods.searchGoodsTag(user_id).then((data) => {
    result = data;
  }).catch((err) => {
    console.log(err)
  })
  const results =await Promise.all(result.map(async item => {
    return await goods.countGoodsByGroupId(item.id)
  }));
  for(let i=0; i<result.length; i++) {
    result[i].countGoods = results[i];
  }
  return result;
};

/**
 * 删除group分组
 */
exports.deleteGoodsGroup = async function (id) {
  return await goods.deleteGoodsGroup(id);
}
