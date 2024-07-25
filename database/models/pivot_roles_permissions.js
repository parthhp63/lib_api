'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pivot_roles_permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pivot_roles_permissions.belongsTo(models.roles,{foreignKey:'role_id'})
      pivot_roles_permissions.belongsTo(models.permissions,{foreignKey:'permission_id'})


      
    }
  }
  pivot_roles_permissions.init({
    role_id: DataTypes.INTEGER,
    permission_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pivot_roles_permissions',
  });
  return pivot_roles_permissions;
};