'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publisher_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    publisher_details.hasMany(models.book_details,{foreignKey:'publisher_id'})  
    }
  }
  publisher_details.init({
    name: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    address: DataTypes.STRING,
    unique_id:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'publisher_details',
    paranoid:true
  });
  return publisher_details;
};