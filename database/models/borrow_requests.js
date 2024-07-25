'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrow_requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      borrow_requests.belongsTo(models.users, {
        foreignKey: 'user_id'
      });

      borrow_requests.belongsTo(models.book_details, {
        foreignKey: 'book_id'
      });
    }
  }
  borrow_requests.init({
    user_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    req: DataTypes.TINYINT,

  }, {
    sequelize,
    modelName: 'borrow_requests',
  });
  return borrow_requests;
};