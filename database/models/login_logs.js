'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class login_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      login_logs.belongsTo(models.users,{foreignKey:'user_id'})
    }
  }
  login_logs.init({
    user_id: DataTypes.INTEGER,
    logs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'login_logs',
    paranoid:true
  });
  return login_logs;
};