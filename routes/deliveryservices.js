var express = require("express");
var router = express.Router();
var models = require("../models");

//
router.get("/", function (req, res) {
  models.DeliveryService.findAll({ include: models.Restaurant })
    .then((data) => res.send(data))
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

router.post("/", function (req, res) {
  models.DeliveryService.create(req.body)
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.get("/search", function (req, res) {
  models.DeliveryService.findAll({
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

router.get("/:id", function (req, res) {
  const { id } = req.params;
  models.DeliveryService.findOne({
    where: {
      id,
    },
    include: models.Restaurant,
  })
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.get("/:id/restaurants", function (req, res) {
  const { id } = req.params;

  models.DeliveryService.findOne({
    where: {
      id,
    },
    // include: models.Restaurant,
  })
    .then((deliveryservice) => {
      deliveryservice
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
  const { name } = req.body;

  models.DeliveryService.findOne({
    where: {
      id,
    },
  })
    .then((deliveryservice) => {
      deliveryservice
        .createRestaurant({ name })
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
    const deliveryservice = await models.DeliveryService.findOne({
      where: {
        id,
      },
    });

    const data = await deliveryservice.addRestaurants(restaurants);

    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
