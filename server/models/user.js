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
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'name'
    },
    age: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      field: 'age'
    }
  }, {
    tableName: 'user'
  });
};
