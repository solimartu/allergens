"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DeliveryService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DeliveryService.belongsToMany(models.Restaurant, {
        through: "restaurantdeliveryservices",
      });
      // define association here
    }
  }
  DeliveryService.init(
    {
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DeliveryService",
    }
  );
  return DeliveryService;
};
