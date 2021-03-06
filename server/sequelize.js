'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

var config = {
  database: 'gruaduation_pro',
  user: 'root',
  password: 'root'
}
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};
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
  timezone: '+08:00',
  operatorsAliases
};
let sequelize = new Sequelize(config.database, config.user, config.password, option);

module.exports = sequelize;
