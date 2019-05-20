const comment = require('../../dao/comment');
const order = require('../../dao/order');
const user = require('../../dao/user');
const custermerTag = require('../../dao/customerTag');
const moment = require('moment');

/**
 * 根据userId 查询订单表
 */
exports.getCustomerList = async function (userId) {
  let orderList = [];
  await order.searchAllOrder(userId).then(data => {
    let arr = [];
    data.forEach(item => {
      if(arr.indexOf(item.customer_id) === -1){
        arr.push(item.customer_id);
        orderList.push(item);
      }
    });
  }).catch(err => {
    console.log(err);
  })
  return await Promise.all(orderList.map(async (item) => {
    const userMain = await user.searchUserById(item.customer_id);
    item.updated_time = moment(item.updated_time).format('YYYY-MM-DD HH:mm');
    item.phone = userMain.phone;
    return item;
  }));
};

/**
 * 添加新的用户分组
 */
exports.addCustomerTag = async function (userId, tagName) {
  return await custermerTag.addCustomerTag({
    user_id: userId, 
    tag_name: tagName
  });
};

/**
 * 查看所有的用户分组
 */
exports.getCustomerTag = async function (userId) {
  let result = [];
  await custermerTag.getCustomerTag(userId).then(data => {
    result = data;
  }).catch(err => {
    console.log(err);
  });
  const results = await Promise.all(result.map(async (item) => {
    return await custermerTag.getCustomerTagInner(item.id).then((tagCustomerList) => {
      item.tagCustomerList = tagCustomerList;
      return item;
    }).catch(err => {
      console.log(err);
    })
  }))
  return results;
};

/**
 * 添加用户标签内部的用户
 */
exports.addTagCustomerMain = async function (tag_id, customer_id, customer_name) {
  return await custermerTag.addTagCustomerMain({
    tag_id, 
    customer_id,
    customer_name
  });
};

/**
 * 删除tag内部的customer
 */
exports.deleteTagCustomer = async function (id) {
  return await custermerTag.deleteTagCustomer(id);
};

/**
 * 删除tag
 */
exports.deleteCustomerTag = async function (id) {
  return await Promise.all([
    custermerTag.deleteCustomerTag(id),
    custermerTag.deleteTagCustomerByTagId(id)
  ]);
};

