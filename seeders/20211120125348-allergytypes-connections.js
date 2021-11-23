"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Restaurantallergytypes",
      [
        {
          RestaurantId: 1,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 1,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 6,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 7,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 7,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 7,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 11,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          AllergytypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          AllergytypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          AllergytypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          AllergytypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          AllergytypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          AllergytypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          AllergytypeId: 5,
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
    await queryInterface.bulkDelete("Restaurantallergytypes", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
