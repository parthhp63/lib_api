'use strict';

const { name } = require('ejs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // async up (queryInterface, Sequelize) {
  //   await queryInterface.bulkInsert('permissions',[{
  //     name:'Read',
  //     name:'Write',
  //     name:'Edit'
  //   }])

    up: async (queryInterface) => queryInterface.bulkInsert('permissions', [
      {
        name: 'Read',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Write',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {}),
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  // },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('permissions', {});
  }

  // async down (queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  //    await queryInterface.bulkDelete('permissions', null, {});

  // }
};
