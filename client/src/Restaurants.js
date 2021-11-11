import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Restaurants.css";

export default function Restaurants() {
  let [restaurants, setRestaurants] = useState([]);
  let [title, setTitle] = useState([]);
  let { typeOfFoodID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/restaurants/?typeOfFood=${typeOfFoodID}`);
      const restaurants = await response.json();

      setRestaurants(restaurants);
    };
    fetchData();
  }, [typeOfFoodID]);

  useEffect(() => {
    const fetchData = async () => {
      const response2 = await fetch(`foodTypes/${typeOfFoodID}`);
      const title = await response2.json();
      setTitle(title);
    };
    fetchData();
  }, [typeOfFoodID]);

  return (
    <div>
      <div className="container">
        {title.map((title) => (
          <div className="header">
            <h1>{title.typeOfFood}</h1>
          </div>
        ))}
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
      </div>
    </div>
  );
}
