var express = require("express");
var router = express.Router();
var models = require("../models");

//or GET all the foodtypes WORKING
// router.get("/", async function (req, res) {
//   try {
//     const foodtypes = await models.FoodType.findAll();
//     res.send(foodtypes);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

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

module.exports = router;
