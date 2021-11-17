require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "allergens",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists restaurants; CREATE TABLE restaurants (
      id INT(255) NOT NULL AUTO_INCREMENT,
      restaurant varchar(255) NOT NULL,
      allergyMenu varchar(255) NOT NULL,
      typeOfFoodID INT(255) NOT NULL,
      glovoLink varchar(255) NOT NULL,
      uberEatsLink varchar(255) NOT NULL,
      glovoRating DECIMAL(65) NOT NULL,
      uberEatsRating DECIMAL (65) NOT NULL,
      imgLink varchar(255) NOT NULL,
      PRIMARY KEY (id)); 
      DROP TABLE if exists typeOfFoods; CREATE TABLE foodTypes (
    id INT(255) NOT NULL AUTO_INCREMENT,
    typeOfFood varchar(255) NOT NULL,
    icon varchar(255) NOT NULL,
    PRIMARY KEY (id)
  );CREATE TABLE users (userId INT AUTO_INCREMENT, username VARCHAR(15), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (userId));`;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `restaurants and typeOfFoods` was successful!");

    console.log("Closing...");
  });

  con.end();
});
