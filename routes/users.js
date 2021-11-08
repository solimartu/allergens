var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// INSERT a new food type into the DB
router.post("/users", async (req, res) => {
  //your code here
  const { typeOfFood } = req.body;

  try {
    await db(`INSERT INTO (typeOfFood) VALUES ("${typeOfFood}");`);

    const results = await db("SELECT * FROM foodTypes;");
    // everything is awesome
    res.status(201).send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
