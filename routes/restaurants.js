var express = require("express");
var router = express.Router();

var models = require("../models");

//GET all the restaurants list WORKING
router.get("/", async function (req, res) {
  try {
    const restaurants = await models.Restaurant.findAll({
      include: [
        {
          model: models.FoodType,
          through: {
            where: req.query.foodTypes
              ? {
                  FoodtypeId: req.query.foodTypes.split(","),
                }
              : true,
          },
          required: true,
        },
        {
          model: models.DeliveryService,
          through: {
            where: req.query.deliveryServices
              ? {
                  DeliveryServiceId: req.query.deliveryServices.split(","),
                }
              : true,
          },
          required: true,
        },
        {
          model: models.AllergyType,
          through: {
            where: req.query.allergyTypes
              ? {
                  AllergytypeId: req.query.allergyTypes.split(","),
                }
              : true,
          },
          required: true,
        },
      ],
    }); // idem a SELECT * FROM restaurants;
    res.send(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});

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
    });
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
});

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

module.exports = router;
