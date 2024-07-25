'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pivot_books_authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_id: {
        type: Sequelize.INTEGER
      },
      author_id: {
        type: Sequelize.INTEGER
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

    queryInterface.addConstraint('pivot_books_authors',{
      fields:['author_id'],
      type:'foreign key',
      name:'fk12',

      references:{
        table:'author_details',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('pivot_books_authors',{
      fields:['book_id'],
      type:'foreign key',
      name:'fk13',

      references:{
        table:'book_details',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pivot_books_authors');
  }
};