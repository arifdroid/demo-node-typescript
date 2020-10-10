'use strict';
// export{}

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class workforces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  workforces.init({
    sub_con_name: DataTypes.STRING,
    ehtnicity: DataTypes.STRING,
    number: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'workforces',
  });
  return workforces;
};