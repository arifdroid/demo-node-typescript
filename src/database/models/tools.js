'use strict';
// export{}

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tools extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tools.belongsTo(models.site_logs,{
        as:'site_logs',
        foreignKey:'siteLogsId'
      })
    }
  };
  tools.init({
    tool_name: DataTypes.STRING,
    number: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'tools',
  });
  return tools;
};