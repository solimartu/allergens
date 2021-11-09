import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Restaurants.css";

export default function Restaurants() {
  let [restaurants, setRestaurants] = useState([]);
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
    <div className="box">
      {restaurants.map((restaurant) => (
        <div className="card">
          <h4 className="card-title">{restaurant.restaurant}</h4>
          <div className="card-text">
            <div className="rating">
              Glovo Rating: {restaurant.glovoRating * 100}%
            </div>
            <div className="allergyLink">
              <a href={restaurant.allergyMenu}>
                <button className="allergy">Allergy Menu</button>
              </a>
            </div>
            <div className="glovoLink">
              <a href={restaurant.glovoLink}>
                <button className="glovo">Glovo</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
