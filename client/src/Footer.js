import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Link to={"allRestaurants"}>
        {" "}
        <button>see all restaurants</button>
      </Link>
    </div>
  );
}
