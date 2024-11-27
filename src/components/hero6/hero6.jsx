import React from "react";
import "./hero6.css";
import Heronav from "../Hero2/heronav/Heronav";
import Card6 from "./hero6_card/Card6";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
function Hero6() {
  return (
    <div>
      <Heronav title="Browse by catagory" />
      <div className="hero6_products">
        <Card6
          img={product1}
          title="Casual wear"
          text="Over 20 in catagoires in stock"
        />
        <Card6
          img={product2}
          title="Casual wear"
          text="Over 20 in catagoires in stock"
        />
        <Card6
          img={product3}
          title="Casual wear"
          text="Over 20 in catagoires in stock"
        />
        <Card6
          img={product4}
          title="Casual wear"
          text="Over 20 in catagoires in stock"
        />
      </div>
    </div>
  );
}

export default Hero6;
