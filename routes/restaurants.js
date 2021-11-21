var express = require("express");
var router = express.Router();

var models = require("../models");

//GET all the restaurants list WORKING
router.get("/", async function (req, res) {
  try {
    const restaurants = await models.Restaurant.findAll(); // idem a SELECT * FROM restaurants;
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
    const result = await models.Restaurant.create({
      restaurant,
      glovoLink,
      glovoRating,
      uberEatsLink,
      uberEatsRating,
      imgLink,
      address,
      allergyMenu,
    });
    if (typeOfFood) await setFoodType.setFoodType(typeOfFood);
    if (typeOfAllergy) await Restaurant.setAllergyType(typeOfAllergy);
    if (name) await Restaurant.setDeliveryService(name);
    res.status(201).send(result);
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
// router.delete("/:id", async function (req, res, next) {
//   try {
//     const restaurant = await models.Restaurant.findOne({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(restaurant);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
