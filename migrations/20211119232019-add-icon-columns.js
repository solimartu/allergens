"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await [
      queryInterface.addColumn("allergytypes", "icon", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("foodtypes", "icon", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("deliveryservices", "icon", {
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
      queryInterface.removeColumn("allergytypes", "icon"),
      queryInterface.removeColumn("foodtypes", "icon"),
      queryInterface.removeColumn("deliveryservices", "icon"),
    ];
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
