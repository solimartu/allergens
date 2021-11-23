"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Restaurants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurant: {
        type: Sequelize.STRING,
      },
      allergyMenu: {
        type: Sequelize.STRING,
      },
      glovoLink: {
        type: Sequelize.STRING,
      },
      glovoRating: {
        type: Sequelize.DECIMAL,
      },
      uberEatsLink: {
        type: Sequelize.STRING,
      },
      uberEatsRating: {
        type: Sequelize.DECIMAL,
      },
      imgLink: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Restaurants");
  },
};
