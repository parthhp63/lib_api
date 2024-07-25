'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('borrow_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      req: {
        type: Sequelize.TINYINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    queryInterface.addConstraint('borrow_requests',{
      fields:['user_id'],
      type:'foreign key',
      name:'fk17',

      references:{
        table:'users',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('borrow_requests',{
      fields:['book_id'],
      type:'foreign key',
      references:{
        table:'book_details',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('borrow_requests');
  }
};