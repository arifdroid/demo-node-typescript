'use strict';
// export{}

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class files extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      files.hasMany(models.files_test_1s,{
        foreignKey:'file_id'
      })
    }
  };
  files.init({
    file_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'files',
  });
  return files;
};