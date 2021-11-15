import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Restaurants.css";
import Masonry from "react-masonry-css";

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

  const sortArray = (type) => {
    const types = {
      rating: "glovoRating",
      name: "restaurant",
    };
    const sortProperty = types[type];

    const sorted = [...restaurants].sort(
      (a, b) => b[sortProperty] - a[sortProperty]
    );
    setRestaurants(sorted);
  };

  const sortByName = () => {
    const sorted = [...restaurants].sort((a, b) =>
      a.restaurant.localeCompare(b.restaurant)
    );
    setRestaurants(sorted);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
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
      <div>
        {title.map((title) => (
          <div className="restaurantsHeader">
            <h1>{title.typeOfFood}</h1>
          </div>
        ))}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {restaurants.map((restaurant) => (
            <div>
              <div className="card grid-item">
                <img
                  className="card-img-top"
                  src={restaurant.imgLink}
                  alt="Card image cap"
                />

                <div className="card-body">
                  <h4 className="card-title">{restaurant.restaurant}</h4>
                  <div className="card-text">
                    <div className="allergyLink">
                      <a href={restaurant.allergyMenu}>
                        <button className="allergy">Allergy Menu</button>
                      </a>

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
        </Masonry>
      </div>
    </div>
  );
}
