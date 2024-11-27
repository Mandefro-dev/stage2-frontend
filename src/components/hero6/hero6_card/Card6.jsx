import React from "react";
import "./card6.css";

function Card6({ img, title, text }) {
  return (
    <div className="card6">
      <div className="img_cont">
        <img src={img} alt="" />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <h4>{text}</h4>
      </div>
    </div>
  );
}
export default Card6;
