import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function NavBar() {
  return (
    <div className="d-flex flex-row-reverse">
      <Link style={{ textDecoration: "none" }} to="adminView">
        <div className="adminView">ADMIN VIEW</div>{" "}
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="userView">USER VIEW</div>{" "}
      </Link>

      <input className="input" placeholder="search"></input>

      <Link style={{ textDecoration: "none" }} to="/">
        <div className="home">HOME</div>
      </Link>
      <Outlet />
    </div>
  );
}
