'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('GoodsGroup', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    user_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'user_id'
    },
    group_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'group_name'
    }
  }, {
    tableName: 'goods_group'
  });
};
