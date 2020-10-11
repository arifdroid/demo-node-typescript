'use strict';

// import yenv from 'yenv';
// const yenv = require('yenv');
// const config = yenv('env.yaml', { env: 'development' });

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = process.env;

const db = {};

let sequelize;
if (config) {
  // sequelize = new Sequelize(process.env[config.use_env_variable], config);
  // console.log('\n\nconfig datase username ->',process.env.DATABASE_USERNAME,'\n\n')
  console.log('\n\nconfig datase connected -> ',config,'\n\n')
  sequelize = new Sequelize(config.DATABASE_DATABASE, config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
    host: config.DATABASE_HOST,
    dialect: config.DATABASE_DIALECT
  });
} else {
  // sequelize = new Sequelize(config.database, config.username, config.password, config);
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });
}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

