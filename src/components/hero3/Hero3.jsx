import React, { useState } from "react";
import "./hero3.css";
import Nav from "./navbar/Nav";
import Product from "./ProductCard/Product";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

import { MdNavigateNext } from "react-icons/md";

function Hero3() {
  return (
    <div className="hero3">
      <Nav />
      <div className="product_list">
        <Product img={img1} productName="Shoes" />
        <Product img={img2} productName="Bags" />
        <Product img={img3} productName="Jackets" />
        <Product img={img4} productName="Lingerie" />
        <Product img={img5} productName="Belts" />
        <Product img={img6} productName="Street Wear" />
      </div>
      <div className="product_list" id="list2">
        <Product img={img1} productName="Shoes" />
        <Product img={img2} productName="Bags" />
        <Product img={img3} productName="Jackets" />
        <Product img={img4} productName="Lingerie" />
        <Product img={img5} productName="Belts" />
        <Product img={img6} productName="Street Wear" />
      </div>

      <div className="button">
        <button>
          See more
          {/* <MdNavigateNext />
          <MdNavigateNext />
          <MdNavigateNext /> */}
        </button>
      </div>
    </div>
  );
}

export default Hero3;
