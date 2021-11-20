var express = require("express");
var router = express.Router();
// const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// INSERT a new food type into the DB
router.post("/foodTypes", async (req, res) => {
  const typeOfFood = req.body.typeOfFood;

  try {
    await db(`INSERT INTO foodTypes (typeOfFood) VALUES ("${typeOfFood}");`);

    const results = await db("SELECT * FROM foodTypes;");

    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// INSERT a new restaurant into the DB
router.post("/restaurants", async (req, res) => {
  const restaurant = req.body.restaurant;
  const allergyMenu = req.body.allergyMenu;
  const typeOfFoodID = req.body.typeOfFoodID;
  const glovoLink = req.body.glovoLink;
  const uberEatsLink = req.body.uberEatsLink;
  const glovoRating = req.body.glovoRating;
  const uberEatsRating = req.body.uberEatsRating;
  const imgLink = req.body.imgLink;

  try {
    await db(
      `INSERT INTO restaurants (restaurant, allergyMenu, typeOfFoodID, glovoLink, uberEatsLink, glovoRating, uberEatsRating, imgLink) 
      VALUES ("${restaurant}", "${allergyMenu}", ${typeOfFoodID}, "${glovoLink}", "${uberEatsLink}", ${glovoRating}, ${uberEatsRating}, "${imgLink}");`
    );

    const results = await db(
      "SELECT * FROM restaurants ORDER BY id DESC LIMIT 1;"
    );

    res.status(201).send(results.data[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET typeOfFood by id tendria que ir a typefood
router.get("/foodTypes/:id", async function (req, res) {
  const { id } = req.params;
  try {
    const results = await db(`SELECT * FROM foodTypes WHERE id = ${id};`);
    res.status(200).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET list of restaurants - ya no lo necesito porque tengo un endpoint para restaurants PERO creo que necesito los RAW para queries
router.get("/restaurants/", async function (req, res) {
  let restaurant = req.query.name;
  let typeOfFood = req.query.typeOfFood;

  try {
    if (!restaurant && !typeOfFood) {
      const results = await db(`SELECT * FROM restaurants;`);
      res.status(200).send(results.data);
    } else if (!typeOfFood) {
      const searchResults = await db(
        `SELECT * FROM restaurants WHERE restaurant LIKE '%${restaurant}%';`
      );
      res.status(200).send(searchResults.data);
    } else {
      const results = await db(
        `SELECT * FROM restaurants WHERE typeOfFoodID = ${typeOfFood};`
      );
      res.status(200).send(results.data);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET one restaurant by ID // Don't use this now, but might have a use later?
router.get("/restaurants/:id", async function (req, res) {
  const { id } = req.params;
  try {
    console.log("here");
    const results = await db(`SELECT * FROM restaurants WHERE id = ${id}`);
    res.status(200).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
