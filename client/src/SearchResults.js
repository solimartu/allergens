import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./Restaurants.css";

export default function AllRestaurants() {
  let [allRestaurants, setAllRestaurants] = useState([]);
  let { input } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/restaurants/?name=${input}`);
      const allRestaurants = await response.json();
      setAllRestaurants(allRestaurants);
    };
    fetchData();
  }, [input]);

  return (
    <div>
      <div className="card">Showing results for {input}...</div>
      {allRestaurants.length !== 0 ? (
        <div className="box">
          {allRestaurants.map((restaurant) => (
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
      ) : (
        <div className="card">Restaurant Not Found</div>
      )}
    </div>
  );
}
