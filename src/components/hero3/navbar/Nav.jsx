import React, { useState } from "react";
import "./nav.css";
function Nav() {
  return (
    <div className="Nav">
      <ul className="Nav_list">
        <li className="Item">Men</li>
        <li className="Item" id="women">
          Women
        </li>
        <li className="Item">Kids</li>
        <li className="Item">Perfumes</li>
        <li className="Item">Spot </li>
        <li className="Item">Jewelry</li>
      </ul>
    </div>
  );
}

export default Nav;
