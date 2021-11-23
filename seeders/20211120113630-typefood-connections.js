"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Restaurantfoodtypes",
      [
        {
          RestaurantId: 1,
          FoodtypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          FoodtypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          FoodtypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 6,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 7,
          FoodtypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          FoodtypeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 11,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          FoodtypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          FoodtypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          FoodtypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          FoodtypeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          FoodtypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          FoodtypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 1,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          FoodtypeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 5,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 6,
          FoodtypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 9,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          FoodtypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 11,
          FoodtypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          FoodtypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          FoodtypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 18,
          FoodtypeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 20,
          FoodtypeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 1,
          FoodtypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 3,
          FoodtypeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 6,
          FoodtypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          RestaurantId: 11,
          FoodtypeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          FoodtypeId: 6,
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
    await queryInterface.bulkDelete("Restaurantfoodtypes", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
