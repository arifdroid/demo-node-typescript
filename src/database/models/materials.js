'use strict';
// export{}

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      materials.belongsTo(models.site_logs,{
        as:'site_logs',
        foreignKey:'siteLogsId'
      })
    }
  };
  materials.init({
    material_name: DataTypes.STRING,
    number: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'materials',
  });
  return materials;
};