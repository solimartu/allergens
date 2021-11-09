import React from "react";
import "./App.css";
import UserView from "./UserView.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Restaurants from "./Restaurants.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserView />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
          <Route path=":typeOfFoodID" element={<Restaurants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
