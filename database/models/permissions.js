'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      permissions.hasMany(models.roles,{foreignKey:"permission_id"})
      permissions.hasMany(models.pivot_roles_permissions,{foreignKey:"permission_id"})

    }
  }
  permissions.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'permissions',
    paranoid:true
  });
  return permissions;
};