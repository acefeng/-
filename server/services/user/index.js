const user = require('../../dao/user');

exports.addUser = function (id, name, age) {
  return user.addUser({id, name, age});
};