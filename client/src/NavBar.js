import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

export default function NavBar() {
  let [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  return (
    <div className="d-flex sticky-top justify-content-between Navigation">
      <Link style={{ textDecoration: "none" }} to="/">
        <button className="homeButton">HOME</button>
      </Link>
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          onChange={(e) => handleChange(e)}
          className="input"
          name="restaurant"
          value={input}
          placeholder="search..."
          aria-label="Search"
        ></input>
        <Link
          style={{ textDecoration: "none" }}
          key={input}
          to={`search-results/${input}`}
        >
          <button className="material-icons searchButton">search</button>
        </Link>
      </form>
      {/* <Login to="/users/login">
        <button className="homeButton">Log in</button>
      </Login> */}
      <div className="dropdown">
        <button className="dropbtn">VIEW</button>
        <div className="dropdown-content">
          {" "}
          <Link style={{ textDecoration: "none" }} to="adminView">
            {" "}
            <div className="dropdown-item">ADMIN VIEW </div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <div className="dropdown-item">USER VIEW </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
