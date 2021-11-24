var express = require("express");
var router = express.Router();
var models = require("../models");

//obtener todos los tipos de alergias
router.get("/", async (req, res) => {
  try {
    const allergytypes = await models.AllergyType.findAll();
    res.send(allergytypes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//post one new allergy - not very common but can be
router.post("/", function (req, res) {
  models.AllergyType.create(req.body)
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.delete("/:id", async function (req, res, next) {
  try {
    await models.AllergyType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send(data); //check como lo hice en el otro
  } catch (error) {
    res.status(500).send(error);
  }
});

//not used but maybe
//if i'm allergic to.... those are the restaurants
router.get("/:id/restaurants", function (req, res) {
  const { id } = req.params;

  models.AllergyType.findOne({
    where: {
      id,
    },
    // include: models.Restaurant,
  })
    .then((allergytype) => {
      allergytype
        .getRestaurants()
        .then((restaurants) => res.send(restaurants))
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.post("/:id/restaurants", function (req, res) {
  const { id } = req.params;
  const { typeOfAllergy } = req.body;

  models.AllergyType.findOne({
    where: {
      id,
    },
  })
    .then((allergytype) => {
      allergytype
        .createRestaurant({ typeOfAllergy })
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

router.put("/:id/restaurants", async (req, res) => {
  const { id } = req.params;
  const { restaurants } = req.body;

  try {
    const allergytype = await models.AllergyType.findOne({
      where: {
        id,
      },
    });

    const data = await allergytype.addRestaurants(restaurants);

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
