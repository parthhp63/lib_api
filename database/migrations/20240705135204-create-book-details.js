'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('book_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      publisher_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },

      isbn: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        defaultValue:null,
        type: Sequelize.DATE
      }
    });

    queryInterface.addConstraint('book_details',{
      fields:['category_id'],
      type:'foreign key',
      name:'fk1',
      references:{
        table:'book_categories',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('book_details',{
      fields:['publisher_id'],
      type:'foreign key',
      name:'fk2',

      references:{
        table:'publisher_details',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('book_details');
  }
};