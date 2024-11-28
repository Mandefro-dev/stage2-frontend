import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import bag from "../../../assets/bag1.png";
import "./card.css";

function Card({ img, type, rating, text, smalltext, price, onclick }) {
  return (
    <div className="card">
      <div className="imgContianer">
        <div className="icons">
          <div className="icon">
            <CiHeart className="icon" />
          </div>
          <div className="icon_text">In Stock</div>
        </div>

        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="cardCenter">
        <div className="typeofcard">{type}</div>
        <div className="rating">{rating}</div>
      </div>

      <div className="cardText">
        <h3>{text}</h3>
        <p> {smalltext}</p>
      </div>
      <div className="cardPrice">
        <div className="price">${price}</div>
        <button onClick={onclick}>Add cart</button>
      </div>
    </div>
  );
}

export default Card;
