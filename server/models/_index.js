'use strict';

const path = require('path');
const fs = require('fs');
const sequelize = require('../sequelize');

let models = {};
fs.readdirSync(__dirname + '/')
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== '_index.js') && (file !== 'package.json');
    }).forEach(function(file) {
        let model = sequelize.import(path.join(__dirname + '/', file));
        models[model.name] = model;
    });
    
module.exports = models;
