import React from "react";

import Productdesc from "./productdesc/Productdesc";
import Overview from "./overviewPage/Overview";
import Footer from "../footer/Footer";

function Cart({}) {
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
