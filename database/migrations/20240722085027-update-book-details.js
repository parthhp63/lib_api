'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.addColumn("book_details", "author_id", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
        queryInterface.addConstraint("book_details", {
          fields: ["author_id"],
          type: "foreign key",
          references: {
            table: "author_details",
            field: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
    */
         await queryInterface.removeColumn("book_details", "author_id");

  }
};
