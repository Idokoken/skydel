import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import Orders from "./pages/Order"   
import PlaceOrder from "./components/PlaceOrder"

// import ScrollToTop from './ScrollToTop';

function App() {


  return (
    <>
     <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />

          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
