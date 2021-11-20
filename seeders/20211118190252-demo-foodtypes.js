"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Foodtypes",
      [
        {
          typeOfFood: "Burgers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Italian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Asian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Mediterranean",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Latin American",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Healthy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfFood: "Breakfast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Foodtypes", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
