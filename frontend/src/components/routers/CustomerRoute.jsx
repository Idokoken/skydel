import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../cart/Cart";
import RestaurantDetails from "../restaurant/RestaurantDetails";
import Home from "../../pages/Home";
import Profile from "../profile/Profile";
import Header from "../Header";
import Auth from "../auth/Auth";
import LoginForm from "../Auth/LoginForm";

function CustomerRoute() {
  return (
    <div>
      {" "}
      <Header />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
        {/* <Route path="/account/login" element={<LoginForm />} /> */}
      </Routes>
      <Auth />
    </div>
  );
}

export default CustomerRoute;
