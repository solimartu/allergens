import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

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
    <div className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between">
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
          placeholder="restaurant name"
          aria-label="Search"
        ></input>
        <Link
          style={{ textDecoration: "none" }}
          key={input}
          to={`search-results/${input}`}
        >
          <button className="searchButton">search</button>
        </Link>
      </form>
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
