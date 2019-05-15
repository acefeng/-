'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    login_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'login_name'
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'password'
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
      field: 'phone'
    },
    user_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'user_name'
    }
  }, {
    tableName: 'user'
  });
};
