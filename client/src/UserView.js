import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function UserView() {
  let [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/foodTypes");
      const foodTypes = await response.json();
      console.log(foodTypes);
      setFoodTypes(foodTypes);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1></h1>
      <div className="container">
        <div className="box">
          {foodTypes.map((foodType) => (
            <div>
              <Link
                to={`/${foodType.id}`}
                key={foodType.id}
                style={{ textDecoration: "none" }}
              >
                <div className="card">{foodType.typeOfFood}</div>
              </Link>{" "}
            </div>
          ))}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
