'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book_categories.hasMany(models.book_details,{foreignKey:"category_id"})
    }
  }
  book_categories.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book_categories',
    paranoid:true
  });
  return book_categories;
};