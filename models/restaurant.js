"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurant.belongsToMany(models.FoodType, {
        through: "restaurantfoodtypes",
      });
      Restaurant.belongsToMany(models.AllergyType, {
        through: "restaurantallergytypes",
      });
      Restaurant.belongsToMany(models.DeliveryService, {
        through: "restaurantdeliveryservices",
      });
      // define association here
    }
  }
  Restaurant.init(
    {
      restaurant: DataTypes.STRING,
      allergyMenu: DataTypes.STRING,
      glovoLink: DataTypes.STRING,
      glovoRating: DataTypes.DECIMAL,
      uberEatsLink: DataTypes.STRING,
      uberEatsRating: DataTypes.DECIMAL,
      imgLink: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Restaurant",
    }
  );
  return Restaurant;
};
