import React, { useState, useEffect } from "react";

import "./AdminView.css";

export default function AdminView() {
  let [input, setInput] = useState({
    restaurant: "",
    allergyMenu: "",
    typeOfFoodID: null,
    glovoLink: "",
    uberEatsLink: "",
    glovoRating: null,
    uberEatsRating: null,
    imgLink: null,
  });
  let [restaurant, setRestaurant] = useState(null);
  let [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/restaurants`);
      const allRestaurants = await response.json();
      setAllRestaurants(allRestaurants);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    addRestaurant();
  };

  //doesn't update the table until the page refreshes
  const addRestaurant = async () => {
    try {
      const res = await fetch("/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant: input.restaurant,
          allergyMenu: input.allergyMenu,
          typeOfFoodID: input.typeOfFoodID,
          glovoLink: input.glovoLink,
          uberEatsLink: input.uberEatsLink,
          glovoRating: input.glovoRating,
          uberEatsRating: input.uberEatsRating,
        }),
      });

      setInput("");
      const restaurant = await res.json();
      setRestaurant(restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      const res = await fetch(`/restaurants/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setAllRestaurants(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="adminContainer">
        <form className="adminForm" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h5 className="adminHeader">Add Restaurant to Database</h5>
          </div>
          <div className="form-group">
            <label htmlFor="restaurant">Restaurant Name</label>
            <input
              onChange={(e) => handleChange(e)}
              value={input.restaurant}
              placeholder="restaurant"
              name="restaurant"
              className="form-control rInput"
            ></input>
          </div>
          <div className="d-flex">
            <div className="form-group">
              <label htmlFor="allergyMenu">Link to Allergy Menu</label>
              <input
                onChange={(e) => handleChange(e)}
                value={input.allergyMenu}
                placeholder="allergyMenu"
                name="allergyMenu"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="typeOfFoodID">Type of Food ID</label>
              <input
                onChange={(e) => handleChange(e)}
                value={input.typeOfFoodID}
                placeholder="typeOfFoodID"
                name="typeOfFoodID"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group">
              <label htmlFor="glovoLink">Link to Glovo</label>
              <input
                onChange={(e) => handleChange(e)}
                value={input.glovoLink}
                placeholder="glovoLink"
                name="glovoLink"
                className="form-control"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="uberEatsLink">Link to UberEats</label>
              <input
                onChange={(e) => handleChange(e)}
                value={input.uberEatsLink}
                placeholder="uberEatsLink"
                name="uberEatsLink"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group">
              <label htmlFor="glovoRating">Glovo Rating</label>
              <input
                onChange={(e) => handleChange(e)}
                value={input.glovoRating}
                placeholder="glovoRating"
                name="glovoRating"
                className="form-control"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="uberEatsRating">UberEats Rating</label>
              <input
                onChange={(e) => handleChange(e)}
                value={input.uberEatsRating}
                placeholder="uberEatsRating"
                name="uberEatsRating"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="imgLink">Image Link</label>
            <input
              onChange={(e) => handleChange(e)}
              value={input.imgLink}
              placeholder="imgLink"
              name="imgLink"
              className="form-control rInput"
            ></input>
          </div>
          <button className="submitButton">Add Restaurant</button>
        </form>

        <div className="table-wrapper-scroll-y my-custom-scrollbar adminBox">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Restaurant Name</th>
              </tr>
            </thead>
            <tbody>
              {allRestaurants.map((restaurant) => (
                <tr>
                  <td>{restaurant.id}.</td>{" "}
                  <td>
                    {restaurant.restaurant}{" "}
                    <button
                      className="deleteButton"
                      onClick={() => {
                        const confirmBox = window.confirm(
                          "Do you really want to delete this Restaurant?"
                        );
                        if (confirmBox === true) {
                          deleteRestaurant(restaurant.id);
                        }
                      }}
                    >
                      {" "}
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {restaurant ? `${restaurant.restaurant} was added correctly` : ""}
    </div>
  );
}
