import React, { useState } from "react";

import "./Product.css";
function Product({ img, productName, text }) {
  return (
    <div className="product">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <div className="product_text">
        <h2>{productName}</h2>
        <h4>See All Collections.</h4>
      </div>
    </div>
  );
}
export default Product;
