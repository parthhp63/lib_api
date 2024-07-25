'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pivot_roles_permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        type: Sequelize.INTEGER
      },
      permission_id: {
        type: Sequelize.INTEGER
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

    queryInterface.addConstraint('pivot_roles_permissions',{
      fields:['role_id'],
      type:'foreign key',
      name:'fk14',

      references:{
        table:'roles',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });

    queryInterface.addConstraint('pivot_roles_permissions',{
      fields:['permission_id'],
      type:'foreign key',
      name:'fk15',

      references:{
        table:'permissions',
        field:'id',
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pivot_roles_permissions');
  }
};