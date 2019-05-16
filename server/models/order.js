'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Order', {
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
    customer_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'customer_id'
    },
    shopkeeper_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'shopkeeper_id'
    },
    delivery_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'delivery_type'
    },
    goods_price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_price'
    },
    goods_true_price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_true_price'
    },
    order_state: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'order_state'
    },
    order_address: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'order_address'
    },
    goods_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'goods_name'
    },
    goods_number: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      field: 'goods_number'
    },
    customer_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'customer_name'
    }
  }, {
    tableName: 'order'
  });
};