import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

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
      {foodTypes.map((foodType) => (
        <div>
          <Link to={`/${foodType.id}`} key={foodType.id}>
            {foodType.typeOfFood}
          </Link>{" "}
        </div>
      ))}
      <Outlet />
    </div>
  );
}
