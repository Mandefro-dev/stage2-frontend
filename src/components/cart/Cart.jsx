import React from "react";
import Header from "../Header/Header";
import { MdOutlineNavigateNext } from "react-icons/md";
import Productdesc from "./productdesc/Productdesc";
import Overview from "./overviewPage/Overview";
import Footer from "../footer/Footer";

function Cart({ cartItems, setCartItems }) {
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  // Function to remove item
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <div>
      <Header />
      <Productdesc />
      <Overview />
      <Footer />
    </div>
  );
}
export default Cart;
