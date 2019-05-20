const models = require('../../models');

/**
 * 添加新的用户标签
 */
exports.addCustomerTag = function (data) {
  return models.CustomerTag.create(data, {raw: true})
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 根据goodsid查看commentTag
 */
exports.getCustomerTag = function (user_id) {
  return models.CustomerTag.findAll({
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
 * 添加新的用户标签内部的用户
 */
exports.addCustomerTagInner = function (data) {
  return models.CustomerTagRelation.create(data, {raw: true})
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 根据tagId查看内部的所有用户
 */
exports.getCustomerTagInner = function (tag_id) {
  return models.CustomerTagRelation.findAll({
    where: {
      tag_id
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
 * 添加用户标签内部的用户
 */
exports.addTagCustomerMain = function (data) {
  return models.CustomerTagRelation.create(data, {raw: true})
  .then((result) => {
    return true;
  }).catch((err) => {
    console.error(err);
    return false;
  })
};

/**
 * 根据id删除分组内部的customer
 */
exports.deleteTagCustomer = function (id) {
  return models.CustomerTagRelation.destroy({
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
 * 根据tag_id删除分组内部的customer
 */
exports.deleteTagCustomerByTagId = function (tag_id) {
  return models.CustomerTagRelation.destroy({
    where: {
      tag_id
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
exports.deleteCustomerTag = function (id) {
  return models.CustomerTag.destroy({
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



