import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Restaurants() {
  let [restaurants, setRestaurants] = useState([]);
  //let params = useParams();
  //let id = parseInt(params.typeOfFoodID);
  let { typeOfFoodID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/foodTypes/${typeOfFoodID}/restaurants`);
      const restaurants = await response.json();
      setRestaurants(restaurants);
    };
    fetchData();
  }, [typeOfFoodID]);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div>
          <div>{restaurant.restaurant}</div>
          <div> {restaurant.allergyMenu} </div>
          <div>{restaurant.glovoLink}</div>
          <div>{restaurant.glovoRating * 100}%</div>
        </div>
      ))}
    </div>
  );
}
