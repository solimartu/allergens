var express = require("express");
var router = express.Router();

var models = require("../models");

//GET all the restaurants list WORKING
router.get("/", async function (req, res) {
  try {
    const restaurants = await models.Restaurant
      .findAll
      //   {
      //   include: [
      //     { model: models.FoodType },
      //     { model: models.AllergyType },
      //     { model: models.DeliveryService },
      //   ],
      // }
      (); // idem a SELECT * FROM restaurants;
    res.send(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get("/", async function (req, res) {
//   // const { typeOfFood, typeOfAllergy } = req.query;
//   try {
//     const restaurants = await models.Restaurant.findAll({
//       where: {
//         foodTypeId: 5,
//       },
//     }); // idem a SELECT * FROM restaurants;
//     res.send(restaurants);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

//GET ONE restaurant by id WORKING
router.get("/:id", async function (req, res) {
  try {
    const restaurant = await models.Restaurant.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        { model: models.FoodType },
        { model: models.AllergyType },
        { model: models.DeliveryService },
      ],
      //or
      // include: { all: true },
    });
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get("/", function (req, res) {
//   models.Restaurant.findAll({
//     where: {
//       FoodtypeId: 1,
//       [Op.and]: { AllergyType: 1 },
//     },
//   })
//     .then((data) => res.send(data))
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// });

//see if it is the same for me or not... post a many to many
router.post("/", async (req, res) => {
  try {
    const {
      restaurant,
      glovoLink,
      glovoRating,
      uberEatsLink,
      uberEatsRating,
      imgLink,
      address,
      allergyMenu,
      typeOfFood,
      typeOfAllergy,
      name,
    } = req.body;
    const newRestaurant = await models.Restaurant.create({
      restaurant,
      glovoLink,
      glovoRating,
      uberEatsLink,
      uberEatsRating,
      imgLink,
      address,
      allergyMenu,
    });
    if (typeOfFood) await newRestaurant.setFoodTypes(typeOfFood);
    if (typeOfAllergy) await newRestaurant.setAllergyTypes(typeOfAllergy);
    if (name) await newRestaurant.setDeliveryServices(name);
    res.status(201).send(newRestaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.post("/", async function (req, res) => {
//   try {
//     const resto = await Restaurant.setFoodType()

//   }
// })

//OLD SCHOOL
//DELETE one restaurant by ID NOT WORKING
router.delete("/:id", async function (req, res, next) {
  try {
    const restaurant = await models.Restaurant.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

//no segura porque me crea uno nuevo...
router.post("/:id/foodtypes", function (req, res) {
  const { id } = req.params;
  const { typeOfFood } = req.body;

  models.Restaurant.findOne({
    where: {
      id,
    },
  })
    .then((restaurant) => {
      restaurant
        .createFoodType({ typeOfFood })
        .then((data) => {
          res.send(data);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//get tipos de comida de un determinado restaurant... serviría al reves... los restaurantes de tal tipo de comida, no?
router.get("/:id/foodtypes", function (req, res) {
  models.Restaurant.findOne({
    where: {
      id,
    },
  }).then((restaurant) => {
    restaurant.createFoodtype({ typeOfFood }).then((data) => {
      res.send(data);
    });
  });
});

//no entiendo esto
router.get("/raw", async function (req, res) {
  const [results, metadata] = await models.sequelize.query(
    "SELECT `Restaurant`.`id`, `Restaurant`.`restaurant`, `Restaurant`.`createdAt`, `Restaurant`.`updatedAt`, `FoodType`.`id` AS `FoodType.id`, `FoodType`.`typeOfFood` AS `FoodType.typeOfFood`, `FoodType`.`createdAt` AS `FoodType.createdAt`, `FoodType`.`updatedAt` AS `FoodType.updatedAt`, `FoodType->restaurantfoodtypes`.`createdAt` AS `FoodType.restaurantfoodtypes.createdAt`, `FoodType->restaurantfoodtypes`.`updatedAt` AS `FoodType.restaurantfoodtypes.updatedAt`, `FoodType->restaurantfoodtypes`.`restaurantId` AS `FoodType.restaurantfoodtypes.restaurantId`, `FoodType->restaurantfoodtypes`.`FoodtypeId` AS `FoodType.restaurantfoodtypes.FoodtypeId` FROM `Restaurants` AS `Restaurant` LEFT OUTER JOIN ( `restaurantfoodtypes` AS `Restaurant->restaurantfoodtypes` INNER JOIN `FoodType` AS `FoodType` ON `FoodType`.`id` = `FoodType->restaurantfoodtypes`.`FoodtypeId`) ON `Restaurant`.`id` = `FoodType->restaurantfoodtypes`.`RestaurantId`;"
  );
  res.send(results);
});

module.exports = router;
