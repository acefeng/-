'use strict';

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CustomerTagRelation', {
    id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    tag_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'tag_id'
    },
    customer_id: {
      type: DataTypes.BIGINT(20),
      allowNull: false,
      field: 'customer_id'
    },
    customer_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'customer_name'
    }
  }, {
    tableName: 'customer_tag_relation'
  });
};
