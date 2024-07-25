'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('roles', [
    {
      role_name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      role_name: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], {}),

down: async (queryInterface) => {
  await queryInterface.bulkDelete('roles', {});
}
};
