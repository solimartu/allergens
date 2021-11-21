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

// router.get("/raw", async function (req, res) {
//   const [results, metadata] = await models.sequelize.query(
//     "SELECT `Actor`.`id`, `Actor`.`name`, `Actor`.`createdAt`, `Actor`.`updatedAt`, `Movies`.`id` AS `Movies.id`, `Movies`.`name` AS `Movies.name`, `Movies`.`createdAt` AS `Movies.createdAt`, `Movies`.`updatedAt` AS `Movies.updatedAt`, `Movies->ActorMovies`.`createdAt` AS `Movies.ActorMovies.createdAt`, `Movies->ActorMovies`.`updatedAt` AS `Movies.ActorMovies.updatedAt`, `Movies->ActorMovies`.`ActorId` AS `Movies.ActorMovies.ActorId`, `Movies->ActorMovies`.`MovieId` AS `Movies.ActorMovies.MovieId` FROM `Actors` AS `Actor` LEFT OUTER JOIN ( `ActorMovies` AS `Movies->ActorMovies` INNER JOIN `Movies` AS `Movies` ON `Movies`.`id` = `Movies->ActorMovies`.`MovieId`) ON `Actor`.`id` = `Movies->ActorMovies`.`ActorId`;"
//   );
//   res.send(results);
// });

//post one new allergy - not very common but can be
router.post("/", function (req, res) {
  models.AllergyType.create(req.body)
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.get("/search", function (req, res) {
  models.AllergyType.findAll({
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
