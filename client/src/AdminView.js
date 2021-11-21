import React, { useState, useEffect } from "react";

import "./AdminView.css";
import Restaurants from "./Restaurants";

export default function AdminView() {
  let [input, setInput] = useState({
    restaurant: "",
    address: "",
    allergyMenu: "",
    imgLink: null,
    glovoLink: "",
    glovoRating: null,
    uberEatsLink: "",
    uberEatsRating: null,
    typeOfFood: [],
    typeOfAllergy: [],
    deliveryServices: [],
  });
  let [restaurante, setRestaurante] = useState(null);
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [foodTypes, setFoodTypes] = useState([]);
  let [allergyTypes, setAllergyTypes] = useState([]);
  let [deliveryServices, setDeliveryServices] = useState([]);
  let [error, setError] = useState(null);

  // const onMultipleSelection = () => {
  //   const
  //   setRestFoodtypes((state) => ({
  //     ...state, restaurantId: restaurants.id, FoodtypeId:
  //   }))
  // }

  const {
    restaurant,
    allergyMenu,
    typeOfFoodID,
    glovoLink,
    uberEatsLink,
    glovoRating,
    uberEatsRating,
    imgLink,
    address,
  } = input;

  useEffect(() => {
    fetchData();
    getFoodTypes();
    getAllergyTypes();
    getDeliveryServices();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`/restaurants`);
    const allRestaurants = await response.json();
    setAllRestaurants(allRestaurants);
  };

  const getFoodTypes = () => {
    fetch("/foodtypes")
      .then((response) => response.json())
      .then((foodtypes) => setFoodTypes(foodtypes));
    // .catch((error) => setError(error));
  };

  const getAllergyTypes = () => {
    fetch("/allergytypes")
      .then((response) => response.json())
      .then((allergytypes) => setAllergyTypes(allergytypes));
    // .catch((error) => setError(error));
  };

  const getDeliveryServices = () => {
    fetch("/deliveryservices")
      .then((response) => response.json())
      .then((deliveryservices) => setDeliveryServices(deliveryservices));
    // .catch((error) => setError(error));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInput({ ...input, [name]: value }); //
  };

  const handleSubmit = (event) => {
    addRestaurant();
  };

  //doesn't update the table until the page refreshes
  const addRestaurant = async () => {
    //event.preventDefault();
    try {
      const res = await fetch("/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant,
          allergyMenu,
          typeOfFoodID,
          glovoLink,
          uberEatsLink,
          glovoRating,
          uberEatsRating,
        }),
      });

      setInput("");
      const data = await res.json();
      setRestaurante(data);
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
      <div className="adminContainer p-2">
        <form className="adminForm" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h5 className="adminHeader">Add Restaurant to Database</h5>
          </div>
          <div className="d-flex">
            <div className="form-group col-6">
              <label htmlFor="restaurant">Restaurant Name</label>
              <input
                onChange={(e) => handleChange(e)}
                value={restaurant}
                placeholder="restaurant"
                name="restaurant"
                className="form-control"
              ></input>
            </div>
            <div className="form-group col-6">
              <label htmlFor="address">Address</label>
              <input
                onChange={(e) => handleChange(e)}
                value={address}
                placeholder="Carrer de ..."
                name="address"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-6">
              <label htmlFor="allergyMenu">Link to Allergy Menu</label>
              <input
                onChange={(e) => handleChange(e)}
                value={allergyMenu}
                placeholder="allergyMenu"
                name="allergyMenu"
                className="form-control"
              ></input>
            </div>
            <div className="form-group col-6">
              <label htmlFor="imgLink">Image Link</label>
              <input
                onChange={(e) => handleChange(e)}
                value={imgLink}
                placeholder="imgLink"
                name="imgLink"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-8">
              <label htmlFor="glovoLink">Link to Glovo</label>
              <input
                onChange={(e) => handleChange(e)}
                value={glovoLink}
                placeholder="glovoLink"
                name="glovoLink"
                className="form-control"
              ></input>
            </div>

            <div className="form-group col-4">
              <label htmlFor="glovoRating">Glovo Rating</label>
              <input
                onChange={(e) => handleChange(e)}
                value={glovoRating}
                placeholder="glovoRating"
                name="glovoRating"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-8">
              <label htmlFor="uberEatsLink">Link to UberEats</label>
              <input
                onChange={(e) => handleChange(e)}
                value={uberEatsLink}
                placeholder="uberEatsLink"
                name="uberEatsLink"
                className="form-control"
              ></input>
            </div>

            <div className="form-group col-4">
              <label htmlFor="uberEatsRating">UberEats Rating</label>
              <input
                onChange={(e) => handleChange(e)}
                value={uberEatsRating}
                placeholder="uberEatsRating"
                name="uberEatsRating"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="d-flex">
            <div className="form-group col-4">
              <label htmlFor="foodTypes">Type of Food</label>
              <select
                multiple
                class="form-control"
                name="foodTypes"
                id="foodTypes"
                value={foodTypes}
                // onMultipleSelection={()=> }
              >
                {foodTypes.map((foodtype) => (
                  <option key={foodtype.id}>{foodtype.typeOfFood}</option>
                ))}
              </select>
              {/* <input
                onChange={(e) => handleChange(e)}
                value={input.typeOfFoodID}
                placeholder="typeOfFoodID"
                name="typeOfFoodID"
                className="form-control"
              ></input> */}
            </div>

            <div class="form-group col-4">
              <label htmlFor="allergyTypes">Type of Allergies</label>
              <select
                multiple
                class="form-control"
                name="allergyTypes"
                id="allergyTypes"
                value={allergyTypes}
              >
                {allergyTypes.map((allergytype) => (
                  <option key={allergytype.id}>
                    {allergytype.typeOfAllergy}
                  </option>
                ))}
              </select>
            </div>
            <div class="form-group col-4">
              <label htmlFor="deliveryServices">Delivery Services</label>
              <select
                multiple
                class="form-control"
                name="deliveryServices"
                id="deliveryServices"
                value={deliveryServices}
              >
                {deliveryServices.map((deliveryservice) => (
                  <option key={deliveryservice.id}>
                    {deliveryservice.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button className="submitButton mt-2 mb-2">Add Restaurant</button>
          </div>
        </form>

        <div className="table-wrapper-scroll-y my-custom-scrollbar adminBox">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">Id</th>
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
      {restaurante ? `${restaurante.restaurant} was added correctly` : ""}
    </div>
  );
}
