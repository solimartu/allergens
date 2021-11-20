var express = require("express");
var router = express.Router();
const db = require("../model/helper");
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//REGISTER a new user
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await db(
      `INSERT INTO users (username, password, email) VALUES ("${username}", "${hash}", "${email}")`
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//first i create a new table in my db called users with userId, username, email and password columns
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const results = await db(
      `SELECT * FROM users WHERE username = "${username}"`
    );
    const user = results.data[0];
    if (user) {
      const userId = user.userId;
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error("Incorrect password");
      var token = jwt.sign({ userId }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//GET the profile
router.get("/profile", userShouldBeLoggedIn, function (req, res, next) {
  res.send({
    message: "Here is the PROTECTED data for user " + req.userId,
  });
});

module.exports = router;
