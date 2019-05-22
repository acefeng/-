'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('GoodsShowNumber', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    goods_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'goods_id'
    },
    goods_show_num: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'goods_show_num'
    },
    goods_user_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'goods_user_id'
    },
  }, {
    tableName: 'goods_show_number'
  });
};
