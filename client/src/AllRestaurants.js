import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function AllRestaurants() {
  let [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/restaurants`);
      const allRestaurants = await response.json();
      setAllRestaurants(allRestaurants);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
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
    </div>
  );
}
