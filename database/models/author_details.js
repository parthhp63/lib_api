'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      author_details.hasMany(models.pivot_books_authors,{ foreignKey:'author_id'})
      author_details.hasMany(models.book_details,{foreignKey:'author_id'})
    }
  }
  author_details.init({
    name: DataTypes.STRING,
    contact: DataTypes.INTEGER,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    unique_id:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'author_details',
    paranoid:true
  });
  return author_details;
};