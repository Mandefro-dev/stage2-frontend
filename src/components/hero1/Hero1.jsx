import React from "react";
import person from "../../assets/person.jfif";
import Tshirt from "../../assets/Tshirt.jfif";
import whiteShoe from "../../assets/whiteShoes.jfif";
import "./hero1.css";
function Hero1() {
  return (
    <>
      <div className="hero1">
        <div className="div1">
          <h1>GEBEYA</h1>
          <img src={whiteShoe} alt="" />
        </div>
        <div className="div2">
          <img src={person} alt="" />
          <button>Explore Now</button>
        </div>
        <div className="div3">
          <p>
            Discover a world of convenience with our user-friendly platform,
            curaated collections, and exceptional customer service
          </p>
          <h1>SHOP</h1>
          <img src={Tshirt} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero1;
