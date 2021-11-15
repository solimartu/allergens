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
      <div className="resultsTitle">Showing results for {input}...</div>
      <div className="sort">
        <div className="dropdown2">
          <button className="dropbtn2">SORT BY</button>
          <div className="dropdown-content2">
            <button
              value="rating"
              onClick={(e) => sortArray(e.target.value)}
              className="dropdown-item2"
            >
              RATING
            </button>

            <button
              onClick={(e) => sortByName(e)}
              value="name"
              className="dropdown-item2"
            >
              RESTAURANT
            </button>
          </div>
        </div>
      </div>
      {allRestaurants.length !== 0 ? (
        <div className="box header">
          {allRestaurants.map((restaurant) => (
            <div className="card-deck">
              <div className="card" style={{ height: "13rem" }}>
                <img
                  class="card-img"
                  src={restaurant.imgLink}
                  alt="Card image cap"
                />
                <div className="card-img-overlay">
                  <div className="card-body">
                    <h4 className="card-title">{restaurant.restaurant}</h4>
                    <div className="card-text">
                      <div className="allergyLink">
                        <a href={restaurant.allergyMenu}>
                          <button className="allergy">Allergy Menu</button>
                        </a>
                      </div>
                      <div className="text-muted">
                        <div className="material-icons"> thumb_up </div>
                        {restaurant.glovoRating * 100}%{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <div>
                      <a href={restaurant.glovoLink}>
                        <button className="glovo">Glovo</button>
                      </a>
                    </div>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loading">
          <div className="material-icons">restaurant</div>
        </div>
      )}
    </div>
  );
}
