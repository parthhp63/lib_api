'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrow_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      borrow_details.belongsTo(models.users,{foreignKey:'user_id'})
      borrow_details.belongsTo(models.book_details,{foreignKey:'isbn_id'})
    }
  }
  borrow_details.init({
    user_id: DataTypes.INTEGER,
    isbn_id: DataTypes.INTEGER,
    borrow_period: DataTypes.INTEGER,
    issue_date: DataTypes.DATE,
    due_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'borrow_details',
    paranoid:true
  });
  return borrow_details;
};