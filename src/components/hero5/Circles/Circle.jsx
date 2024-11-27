import React from "react";
import "./circle.css";

function Circle({ width, height, bgc }) {
  return (
    <div
      className="circle"
      style={{ width: { width }, height: { height }, background: { bgc } }}
    >
      hi
    </div>
  );
}
export default Circle;
