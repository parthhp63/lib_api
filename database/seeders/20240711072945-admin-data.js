'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [
    {
      role_id:1,
      fname:'admin1',
      lname	:'adminl',
      contact:1223455,
      address:'DFSDSDSJDV',
      profession:'admin'	,
      gender:'male',
      password:'1234'	,
      email:'admin1@gmail.com',
      createdAt:'2024-07-11 06:21:34',
      updatedAt:'2024-07-11 06:21:34'
    },
  
  ], {}),

down: async (queryInterface) => {
  await queryInterface.bulkDelete('users', {});
}
};
