import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./UserView.css";

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
      <div></div>
      <div className="menu">
        <input className="menuInput" type="checkbox" id="toggle" />
        <label id="show-menu" for="toggle">
          <div class="btn">
            <i class="material-icons md-36 toggleBtn menuBtn">menu</i>
            <i class="material-icons md-36 toggleBtn closeBtn">close</i>
          </div>
          {foodTypes.map((foodType) => (
            <div className="btn">
              <Link
                to={`/${foodType.id}`}
                key={foodType.id}
                style={{ textDecoration: "none" }}
              >
                <i className="material-icons md-36">{foodType.icon}</i>
              </Link>{" "}
            </div>
          ))}
          <Outlet />
        </label>
      </div>
    </div>
  );
}
