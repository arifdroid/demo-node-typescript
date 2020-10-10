'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sample_modules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sample_modules.init({
    name_model: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sample_modules',
  });
  return sample_modules;
};