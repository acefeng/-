'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Comment', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    goods_comment_main: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'goods_comment_main'
    },
    goods_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'goods_id'
    },
    comment_user_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'comment_user_id'
    },
    comment_user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'comment_user_name'
    }
  }, {
    tableName: 'comment'
  });
};
