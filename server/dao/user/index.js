const models = require('../../models');

exports.addUser = function (userMain) {
  return models.User.create(userMain, {raw: true})
  .then((result) => {
    return result;
  })
};