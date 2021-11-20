import React from "react";
import UserView from "./UserView.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Restaurants from "./Restaurants.js";
import AdminView from "./AdminView.js";
import AllRestaurants from "./AllRestaurants.js";
import SearchResults from "./SearchResults.js";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<UserView />} />
          <Route path="allRestaurants" element={<AllRestaurants />} />
          <Route path="users/login" element={<Login />} />
          <Route
            path="*"
            element={<p className="card"> there's nothing here </p>}
          />
          <Route path=":typeOfFoodID" element={<Restaurants />} />
          <Route path="adminView" element={<AdminView />} />

          <Route path="search-results/:input" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
