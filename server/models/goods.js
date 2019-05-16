'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Goods', {
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
    goods_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'goods_name'
    },
    goods_price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_price'
    },
    goods_activity_price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_activity_price'
    },
    goods_number: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_number'
    },
    goods_pay_number: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_pay_number'
    },
    goods_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'goods_type'
    },
    goods_delivery: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'goods_delivery'
    },
    goods_img: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'goods_img'
    },
    goods_group_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'goods_group_id'
    },
    goods_state: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'goods_state'
    },
    goods_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'goods_name'
    }
  }, {
    tableName: 'goods'
  });
};