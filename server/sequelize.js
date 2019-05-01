'use strict';

const Sequelize = require('sequelize');

var config = {
  database: 'gruaduation_pro',
  user: 'root',
  password: 'root'
}

var option = {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
  },

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  define: {
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time',
    hooks: {}
  },
  timezone: '+08:00'
};
let sequelize = new Sequelize(config.database, config.user, config.password, option);

module.exports = sequelize;
