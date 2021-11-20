"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Allergytypes",
      [
        {
          typeOfAllergy: "Milk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Eggs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Peanuts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Soy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Wheat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Tree nuts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Fish",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeOfAllergy: "Shellfish",
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
    await queryInterface.bulkDelete("Allergytypes", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
