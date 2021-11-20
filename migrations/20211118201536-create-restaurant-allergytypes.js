"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RestaurantAllergytypes", {
      RestaurantId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Restaurants",
          key: "id",
        },
        allowNull: false,
      },
      AllergytypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Allergytypes",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RestaurantAllergytypes");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
