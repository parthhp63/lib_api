'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model { 
    static associate(models) {
      users.belongsTo(models.roles,{foreignKey:'role_id'})
      users.hasMany(models.login_logs,{foreignKey:'user_id'})
      users.hasMany(models.sessions,{foreignKey:'user_id'})
      users.hasMany(models.borrow_details,{foreignKey:'user_id'})
      users.hasMany(models.borrow_requests,{foreignKey:'user_id'})
    }
  }
  users.init({
    role_id: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    address: DataTypes.STRING,
    profession: DataTypes.STRING,
    gender: DataTypes.STRING,
    password: DataTypes.STRING,
    password_update: DataTypes.STRING,
    email: DataTypes.STRING
  },{
    sequelize,
    modelName: 'users',
    paranoid:true
  });
  return users;
};