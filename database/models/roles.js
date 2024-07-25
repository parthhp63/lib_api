'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roles.hasMany(models.users,{foreignKey:'role_id'})
      roles.hasMany(models.pivot_roles_permissions,{foreignKey:"role_id"})

    }
  }
  roles.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'roles',
    paranoid:true
  });
  return roles;
};