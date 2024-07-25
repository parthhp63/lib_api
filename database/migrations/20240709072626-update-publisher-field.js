'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.updateConstraint('publisher_details',['address'],{})
    queryInterface.changeColumn('publisher_details', 'address', {
      type: Sequelize.STRING,
      allowNull: true,
  })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
