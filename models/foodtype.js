"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FoodType.belongsToMany(models.Restaurant, {
        through: "restaurantfoodtypes",
      });
      // define association here
    }
  }
  FoodType.init(
    {
      typeOfFood: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FoodType",
    }
  );
  return FoodType;
};
