'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    queryInterface.addColumn(
      'publisher_details', 
      'unique_id', 
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    ),

    queryInterface.addColumn(
      'author_details', 
      'unique_id', 
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    )
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('author_details','unique_id')
    await queryInterface.removeColumn('publisher_details','unique_id')

  }
};
