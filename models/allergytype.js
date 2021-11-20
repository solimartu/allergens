"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllergyType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AllergyType.belongsToMany(models.Restaurant, {
        through: "restaurantallergytypes",
      });
      // define association here
    }
  }
  AllergyType.init(
    {
      typeOfAllergy: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AllergyType",
    }
  );
  return AllergyType;
};
