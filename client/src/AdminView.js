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
    typeOfFood: "",
    typeOfAllergy: "",
    name: "",
  });
  let [restaurante, setRestaurante] = useState(null);
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [foodTypes, setFoodTypes] = useState([]);
  let [allergyTypes, setAllergyTypes] = useState([]);
  let [deliveryServices, setDeliveryServices] = useState([]);
  let [error, setError] = useState(null);

  // let [toF, setToF] = useState({ toF: "", icon: "" });

  const {
    restaurant,
    allergyMenu,
    glovoLink,
    uberEatsLink,
    glovoRating,
    uberEatsRating,
    imgLink,
    address,
    typeOfFood,
    typeOfAllergy,
    name,
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
    console.log(allRestaurants);
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
    event.preventDefault();
    addRestaurant();
  };
  let arr = [];
  const handleMultipleFoodTypes = (event) => {
    // const name = event.target.name;
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setInput({ ...input, typeOfFood: value });
  };

  const handleMultipleAllergyTypes = (event) => {
    // const name = event.target.name;
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setInput({ ...input, typeOfAllergy: value });
    // setEveryrtoa(value);
  };

  const handleMultipleDeliveryServices = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setInput({ ...input, name: value });
    // setEveryrtod(value);
  };

  //doesn't update the table until the page refreshes
  const addRestaurant = async () => {
    try {
      const res = await fetch("/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          input
          //   {
          //   restaurant,
          //   allergyMenu,
          //   glovoLink,
          //   uberEatsLink,
          //   glovoRating,
          //   uberEatsRating,
          //   typeOfFood,
          //   typeOfAllergy,
          //   name,
          // }
        ),
      });

      const data = await res.json();
      console.log(data);
      // setAllRestaurants(data);
      fetchData();
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
      // setAllRestaurants(data);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  // const handleChangeForToF = (event) => {
  //   const value = event.target.value;
  //   // const name = event.target.name;
  //   setToF({ ...toF, toF: value, icon: value }); //
  // };

  // const handleSubmitToF = (event) => {
  //   event.preventDefault();
  //   addToF();
  // };

  // const addToF = async () => {
  //   let any = "";
  //   try {
  //     const res = await fetch("/foodtypes", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(any),
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     // setAllRestaurants(data);
  //     // fetchData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div>
      <div className="adminContainer p-2 d-flex">
        <div className="col-5">
          <form className="adminForm" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <h5 className="adminHeader pt-2">Add Restaurant to Database</h5>
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
                <label htmlFor="typeOfFood">Type of Food</label>

                <select
                  multiple
                  class="form-control"
                  size={foodTypes.length}
                  name="typeOfFood"
                  onChange={(e) => handleMultipleFoodTypes(e)}
                >
                  {foodTypes.map((foodtype) => (
                    <option value={Number(foodtype.id)}>
                      {foodtype.typeOfFood}
                    </option>
                  ))}
                </select>
              </div>

              <div class="form-group col-4">
                <label htmlFor="typeOfAllergy">Type of Allergies</label>
                <select
                  multiple
                  class="form-control"
                  name="typeOfAllergy"
                  size={allergyTypes.length}
                  onChange={(e) => handleMultipleAllergyTypes(e)}
                >
                  {allergyTypes.map((allergytype) => (
                    <option key={allergytype.id} value={allergytype.id}>
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
                  size={deliveryServices.length}
                  name="name"
                  onChange={(e) => handleMultipleDeliveryServices(e)}
                >
                  {deliveryServices.map((deliveryservice) => (
                    <option key={deliveryservice.id} value={deliveryservice.id}>
                      {deliveryservice.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="submitButton mt-3 mb-3">Add Restaurant</button>
            </div>
          </form>

          <form className="adminForm mt-4">
            <div>
              <h5 className="adminHeader pt-2">Add a New Food Type</h5>
            </div>
            <div className="d-flex">
              <div className="form-group col-6">
                <label htmlFor="type-of-food">Type of Food</label>
                <input
                  // onChange={(e) => handleChangeForToF(e)}
                  placeholder="type of food"
                  name="toF"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-6">
                <label htmlFor="icon">Icon</label>
                <input
                  // onChange={(e) => handleChangeForToF(e)}
                  placeholder="local_dining"
                  name="icon"
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="submitButton mt-3 mb-3">
                Add type of Food
              </button>
            </div>
          </form>

          <form className="adminForm mt-4 mb-4">
            <div>
              <h5 className="adminHeader pt-2">Add a New Allergy</h5>
            </div>
            <div className="d-flex">
              <div className="form-group col-6">
                <label htmlFor="type-of-food">Type of Allergy</label>
                <input
                  placeholder="Apple"
                  name="toF"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group col-6">
                <label htmlFor="icon">Icon</label>
                <input
                  placeholder="apple"
                  name="icon"
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="submitButton mt-3 mbgig">
                Add type of allergy
              </button>
            </div>
          </form>
        </div>

        <div className="col-6">
          <table className="table table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">Restaurant Name</th>
                {/* <th scope="col">Allergy Menu</th> */}
                {/* <th scope="col">Glovo Link</th> */}
                <th scope="col">Glovo Rating</th>
                {/* <th scope="col">UberEats Link</th> */}
                <th scope="col">UberEats Rating</th>
              </tr>
            </thead>
            <tbody>
              {allRestaurants.map((restaurant) => (
                <tr>
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
                  {/* <td>{restaurant.allergyMenu}</td>
                  <td>{restaurant.glovoLink}</td> */}
                  <td className="text-center">{restaurant.glovoRating}</td>
                  {/* <td>{restaurant.uberEatsLink}</td> */}
                  <td className="text-center">{restaurant.uberEatsRating}</td>
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
