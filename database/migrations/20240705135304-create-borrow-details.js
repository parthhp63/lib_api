'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('borrow_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      isbn_id: {
        type: Sequelize.INTEGER
      },
      borrow_period: {
        type: Sequelize.INTEGER
      },
      issue_date: {
        type: Sequelize.DATE
      },
      due_date: {
        type: Sequelize.DATE
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

    queryInterface.addConstraint('borrow_details',{
      fields:['isbn_id'],
      type:'foreign key',
      name:'fk4',

      references:{
        table:'book_details',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('borrow_details',{
      fields:['user_id'],
      type:'foreign key',
      name:'fk5',

      references:{
        table:'users',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('borrow_details');
  }
};