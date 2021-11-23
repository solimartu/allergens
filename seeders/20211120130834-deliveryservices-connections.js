"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Restaurantdeliveryservices",
      [
        {
          RestaurantId: 1,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 2,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 3,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 4,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 5,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 6,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 6,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 7,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 8,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 9,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 10,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 11,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 11,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 12,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 13,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 14,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 15,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 16,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 17,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 18,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          DeliveryServiceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 19,
          DeliveryServiceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          RestaurantId: 20,
          DeliveryServiceId: 1,
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
    await queryInterface.bulkDelete("Restaurantdeliveryservices", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
