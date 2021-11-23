import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Restaurants.css";
import Masonry from "react-masonry-css";

export default function Restaurants() {
  let [restaurants, setRestaurants] = useState([]);
  let [title, setTitle] = useState([]);

  let [error, setError] = useState([]);

  let [foodTypes, setFoodTypes] = useState([]);
  let [allergyTypes, setAllergyTypes] = useState([]);
  let [deliveryServices, setDeliveryServices] = useState([]);

  useEffect(() => {
    getFoodTypes();
    getAllergyTypes();
    getDeliveryServices();
  }, []);

  useEffect(() => {
    getFilteredRestaurants();
  }, [foodTypes, allergyTypes, deliveryServices]);

  const getFoodTypes = () => {
    fetch("/foodtypes")
      .then((response) => response.json())
      .then((foodTypes) =>
        setFoodTypes(foodTypes.map((el) => ({ ...el, checked: false })))
      )
      .catch((error) => setError(error));
  };
  const changeCheck = (id) => {
    setFoodTypes((state) =>
      state.map((el) => ({
        ...el,
        checked: el.id === id ? !el.checked : el.checked,
      }))
    );
  };

  const getAllergyTypes = () => {
    fetch("/allergytypes")
      .then((response) => response.json())
      .then((allergyTypes) =>
        setAllergyTypes(allergyTypes.map((el) => ({ ...el, checked: false })))
      )
      .catch((error) => setError(error));
  };
  const changeCheckA = (id) => {
    setAllergyTypes((state) =>
      state.map((el) => ({
        ...el,
        checked: el.id === id ? !el.checked : el.checked,
      }))
    );
  };

  const getDeliveryServices = () => {
    fetch("/deliveryservices")
      .then((response) => response.json())
      .then((deliveryServices) =>
        setDeliveryServices(
          deliveryServices.map((el) => ({ ...el, checked: false }))
        )
      )
      .catch((error) => setError(error));
  };
  const changeCheckD = (id) => {
    setDeliveryServices((state) =>
      state.map((el) => ({
        ...el,
        checked: el.id === id ? !el.checked : el.checked,
      }))
    );
  };

  const getFilteredRestaurants = () => {
    const selectedFoods = foodTypes
      .filter((foodType) => foodType.checked) // filtro solo los que seleccioné (checked true)
      .map((foodType) => foodType.id) // los dispongo todos, mostrando sus ids
      .join(","); // los uno resultando una string separada por comas
    const selectedAllergies = allergyTypes
      .filter((allergyType) => allergyType.checked)
      .map((allergyType) => allergyType.id)
      .join(",");
    const selectedDeliveries = deliveryServices
      .filter((deliveryService) => deliveryService.checked)
      .map((deliveryService) => deliveryService.id)
      .join(",");
    console.log("selected foods", selectedFoods);
    //necesito un objeto, conteniendo cada uno de los tipos de comida seleccionados, en el tipo "{typeOfFood:1}"
    const filtro = {};
    console.log("filtro", filtro);
    if (selectedFoods.length !== 0) filtro.foodTypes = selectedFoods; //{"foodTypes":"1,4,5"}
    if (selectedAllergies.length !== 0) filtro.allergyTypes = selectedAllergies;
    if (selectedDeliveries.length !== 0)
      filtro.deliveryServices = selectedDeliveries;
    //necesito traducirlo a querymode

    const filtroCombinado = [];
    // console.log("filtro combinado", filtroCombinado);
    for (const key in filtro) {
      filtroCombinado.push(`${key}=${filtro[key]}`); //voy tirando cada selección (traducida en una string) a un array que luego desintegraré
    }
    //para la query los necesito como "typeOfFood=1,4,7&" y si tengo más de un tipo de selección incluida deben estar unidos entre si con &
    const combinedQueryStringified =
      filtroCombinado.length !== 0 ? `?${filtroCombinado.join("&")}` : "";

    fetch(`/restaurants/${combinedQueryStringified}`)
      .then((response) => response.json())
      .then((restaurants) => setRestaurants(restaurants))
      .catch((error) => setError(error));
  };

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
        <div className="row px-4">
          {/* <button className="dropbtn2">SORT BY</button>
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
          </div> */}
          <div className="d-flex align-items-center">
            <div className="col-1 text-center text-glovo-inv d-flex flex-column">
              <h6 className="text-center mbm1">FILTER</h6>
              <h3 className="text-center bold let25">BY</h3>
            </div>
            <div className="col-3 roundedbig bg-glovo-inv shadow flex-column p-2">
              <h6 className="text-glovo-inv mb-1 let25">TYPE OF FOOD</h6>
              <div className="d-flex flex-wrap justify-content-center">
                {foodTypes.length > 0 &&
                  foodTypes.map((foodType) => (
                    <div className="bg-glovo-light rounded shadow p-1 m-1">
                      <input
                        type="checkbox"
                        id="food"
                        name=""
                        key={foodType.id}
                        checked={foodType.checked}
                        onChange={() => changeCheck(foodType.id)}
                        className=""
                      ></input>
                      <label for="food" className="text-glovo ml-1">
                        {foodType.typeOfFood}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-1 text-center text-glovo-inv d-flex flex-column">
              <h6 className="text-center mbm1 let20">AND</h6>
              <h3 className="text-center bold let25">OR</h3>
            </div>
            <div className="col-3 roundedbig bg-glovo-inv shadow flex-column p-2">
              <h6 className="text-glovo-inv mb-1 let25">TYPE OF ALLERGY</h6>
              <div className="d-flex flex-wrap justify-content-center">
                {allergyTypes.length > 0 &&
                  allergyTypes.map((allergyType) => (
                    <div className="bg-glovo-light rounded shadow p-1 m-1">
                      <input
                        type="checkbox"
                        id="allergy"
                        name=""
                        key={allergyType.id}
                        checked={allergyType.checked}
                        onChange={() => changeCheckA(allergyType.id)}
                        className=""
                      ></input>
                      <label for="allergy" className="text-glovo ml-1">
                        {allergyType.typeOfAllergy}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-1 text-center text-glovo-inv d-flex flex-column">
              <h6 className="text-center mbm1 let20">AND</h6>
              <h3 className="text-center bold let25">OR</h3>
            </div>
            <div className="col-3 roundedbig bg-glovo-inv shadow flex-column p-2">
              <h6 className="text-glovo-inv mb-1 let25">DELIVERY SERVICE</h6>
              <div className="d-flex flex-wrap justify-content-center">
                {deliveryServices.length > 0 &&
                  deliveryServices.map((deliveryService) => (
                    <div className="bg-glovo-light rounded shadow p-1 m-1">
                      <input
                        type="checkbox"
                        id="ds"
                        name=""
                        key={deliveryService.id}
                        checked={deliveryService.checked}
                        onChange={() => changeCheckD(deliveryService.id)}
                        className=""
                      ></input>
                      <label for="ds" className="text-glovo ml-1">
                        {deliveryService.name}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
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
                    </div>
                    <div className="text-muted">
                      <div className="material-icons"> thumb_up </div>
                      {restaurant.glovoRating * 100}%{" "}
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <div>
                      <>
                        {restaurant.glovoLink !== null ? (
                          <a href={restaurant.glovoLink}>
                            <button className="glovo">Glovo</button>
                          </a>
                        ) : (
                          ""
                        )}
                      </>
                      {restaurant.uberEatsLink !== null ? (
                        <a href={restaurant.uberEatsLink}>
                          <button className="ubereats">
                            Uber<span>Eats</span>
                          </button>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
        <div></div>
      </div>
    </div>
  );
}
