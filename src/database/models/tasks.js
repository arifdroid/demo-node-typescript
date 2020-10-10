'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes ) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tasks.hasMany(models.files_test_1s,{
        as:'files_1_task',
        foreignKey:'belongsToId',
        scope:{
          belongsTo:models.files_test_1s.getTableName(),
          belongsToColumn:'files_1_task'
        }
      })
    }
  };
  tasks.init({
    task_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};