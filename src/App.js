import "./App.css";
import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.text === item.text
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.text === item.text
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };
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
