'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CustomerTag', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    tag_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tag_name'
    },
    user_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'user_id'
    }
  }, {
    tableName: 'customer_tag'
  });
};
