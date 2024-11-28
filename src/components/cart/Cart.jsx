import React from "react";
import Header from "../Header/Header";
import { MdOutlineNavigateNext } from "react-icons/md";
import Productdesc from "./productdesc/Productdesc";
import Overview from "./overviewPage/Overview";
import Footer from "../footer/Footer";

function Cart({ cartItems, setCartItems }) {
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
