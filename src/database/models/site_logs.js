'use strict';
// export{}

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class site_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      site_logs.hasMany(models.workforces,{          
          as:'workforces',
          foreignKey:'siteLogsId'
      })
      
      site_logs.hasMany(models.tools,{          
          as:'tools',
          foreignKey:'siteLogsId'
      })

      site_logs.hasMany(models.materials,{
          as:'materials',
          foreignKey:'siteLogsId'
      })

      site_logs.belongsTo(models.users,{
        foreignKey:'user_id'
      })
    }
  };
  site_logs.init({
    project_name: DataTypes.STRING,
    location:DataTypes.STRING,
    contractor:DataTypes.STRING,
    contractor_no:DataTypes.STRING,
    weather:DataTypes.STRING,
    rain_start:DataTypes.TIME,
    rain_stop:DataTypes.TIME,
    site_condition:DataTypes.STRING,
    work_done:DataTypes.STRING,
    work_delayed:DataTypes.STRING,
    instructions:DataTypes.STRING,
    visitor:DataTypes.STRING,
    test_done:DataTypes.STRING,
    site_supervisor_comment:DataTypes.STRING,
    status:DataTypes.STRING,
    date:DataTypes.DATE

  }, {
    sequelize,
    modelName: 'site_logs',
  });
  return site_logs;
};