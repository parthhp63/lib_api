'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book_details.belongsTo(models.book_categories,{foreignKey:'category_id'})
      book_details.belongsTo(models.publisher_details,{foreignKey:'publisher_id'})
      book_details.hasMany(models.pivot_books_authors,{foreignKey:"book_id"})
      book_details.hasMany(models.borrow_details,{foreignKey:'isbn_id'})
      book_details.hasMany(models.borrow_requests,{foreignKey:'book_id'})  
      book_details.belongsTo(models.author_details,{foreignKey:'author_id'})
    }
  }
  book_details.init({
    category_id: DataTypes.INTEGER,
    publisher_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    price: DataTypes.FLOAT,
    author_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book_details',
    paranoid:true
  });
  return book_details;
};