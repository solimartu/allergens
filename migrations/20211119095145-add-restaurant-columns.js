"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await [
      queryInterface.addColumn("restaurants", "allergyMenu", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("restaurants", "glovoLink", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("restaurants", "glovoRating", {
        type: Sequelize.DECIMAL,
      }),
      queryInterface.addColumn("restaurants", "uberEatsLink", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("restaurants", "uberEatsRating", {
        type: Sequelize.DECIMAL,
      }),
      queryInterface.addColumn("restaurants", "imgLink", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("restaurants", "address", {
        type: Sequelize.STRING,
      }),
    ];
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await [
      queryInterface.removeColumn("restaurants", "allergyMenu"),
      queryInterface.removeColumn("restaurants", "glovoLink"),
      queryInterface.removeColumn("restaurants", "glovoRating"),
      queryInterface.removeColumn("restaurants", "uberEatsLink"),
      queryInterface.removeColumn("restaurants", "uberEatsRating"),
      queryInterface.removeColumn("restaurants", "imgLink"),
      queryInterface.removeColumn("restaurants", "address"),
    ];
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
