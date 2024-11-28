import "./App.css";
import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
