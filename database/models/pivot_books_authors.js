'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pivot_books_authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pivot_books_authors.belongsTo(models.book_details,{foreignKey:'book_id'})
      pivot_books_authors.belongsTo(models.author_details,{foreignKey:'author_id'})
    }
  }
  pivot_books_authors.init({
    book_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pivot_books_authors',
  });
  return pivot_books_authors;
};