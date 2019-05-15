const user = require('../../dao/user');

exports.addUser = function (id, login_name, password, phone, user_name) {
  return user.addUser({id, login_name, password, phone, user_name});
};

exports.loginUser = function (login_name) {
  return user.loginUser(login_name);
};