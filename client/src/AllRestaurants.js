import React, { useEffect, useState } from "react";
import "./Restaurants.css";

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

  const sortArray = (type) => {
    const types = {
      rating: "glovoRating",
      name: "restaurant",
    };
    const sortProperty = types[type];

    const sorted = [...allRestaurants].sort(
      (a, b) => b[sortProperty] - a[sortProperty]
    );
    setAllRestaurants(sorted);
  };

  const sortByName = () => {
    const sorted = [...allRestaurants].sort((a, b) =>
      a.restaurant.localeCompare(b.restaurant)
    );
    setAllRestaurants(sorted);
  };

  return (
    <div>
      <div className="box cardBox header">
        <div className="card">
          sort by:
          <button value="rating" onClick={(e) => sortArray(e.target.value)}>
            rating
          </button>
          <button onClick={(e) => sortByName(e)} value="name">
            restaurant name
          </button>
        </div>
        {allRestaurants.map((restaurant) => (
          <div className="cardBox">
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
          </div>
        ))}
      </div>
    </div>
  );
}
