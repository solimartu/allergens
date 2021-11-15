import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer sticky-bottom">
      <Link style={{ textDecoration: "none" }} to={"/"}>
        {" "}
        <button className="footerButton material-icons">chevron_left</button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"allRestaurants"}>
        {" "}
        <button className="footerButton material-icons">chevron_right</button>
      </Link>
    </div>
  );
}
