var express = require("express");
var router = express.Router();
var models = require("../models");

//or GET all the foodtypes WORKING
router.get("/", async function (req, res) {
  try {
    const foodtypes = await models.FoodType.findAll();
    res.send(foodtypes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//the restaurants divided by type of food ME LO DA TRIPLICADO (?)
router.get("/:id/restaurants", function (req, res) {
  const { id } = req.params;

  models.FoodType.findOne({
    where: {
      id,
    },
    // include: models.Restaurant,
  })
    .then((foodtype) => {
      foodtype
        .getRestaurants({ attributes: ["restaurant"] })
        .then((restaurants) => res.send(restaurants))
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

//get all with the restaurants inside, but idk if it is what i need
router.get("/", async function (req, res) {
  try {
    const foodtypes = await models.FoodType.findAll({
      include: models.Restaurant,
    });
    res.send(foodtypes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET foodtypes by id WORKING
router.get("/:id", async function (req, res) {
  try {
    const foodtype = await models.FoodType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(foodtype);
  } catch (error) {
    res.status(500).send(error);
  }
});

//subir un nuevo tipo de comida
router.post("/", async (req, res) => {
  try {
    const foodtype = await models.FoodType.create(req.body);
    res.send(foodtype);
  } catch (error) {
    res.status(500).send(error);
  }
});

//obtener una busqueda por tipo de comidA?
router.get("/search", function (req, res) {
  models.FoodType.findAll({
    where: {
      Restaurant: 1,
    },
    include: models.Restaurant,
  })
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

// get all artists with their album counts:
router.get("/restaurantcount", function (req, res) {
  models.FoodType.findAll({
    attributes: {
      include: [
        [
          models.Sequelize.fn("COUNT", models.Sequelize.col("restaurant.id")),
          "restaurantCount",
        ],
      ],
    },
    include: {
      model: models.Restaurant,
      attributes: [], // important
    },
    group: ["FoodType.id"], // necessary when selecting many records
  })
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.delete("/:id", async function (req, res, next) {
  try {
    await models.FoodType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(data); //check como lo hice en el otro
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
