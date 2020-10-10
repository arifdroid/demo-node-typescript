'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize , DataTypes) => {
  class files_test_2s extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  files_test_2s.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'files_test_2s',
  });
  return files_test_2s;
};