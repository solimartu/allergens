import React from "react";
import UserView from "./UserView.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Restaurants from "./Restaurants.js";
import AdminView from "./AdminView.js";
import AllRestaurants from "./AllRestaurants.js";
import SearchResults from "./SearchResults.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserView />} />
          <Route path="*" element={<UserView />} />
          <Route path=":typeOfFoodID" element={<Restaurants />} />
          <Route path="adminView" element={<AdminView />} />
          <Route path="allRestaurants" element={<AllRestaurants />} />
          <Route path="restaurants/:name" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
