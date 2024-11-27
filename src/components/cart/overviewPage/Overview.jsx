import React from "react";
import "./Overview.css";
import Card from "../../Hero2/card/card";

export default function Overview() {
  return (
    <div className="overview">
      <div className="navbars">
        <div className="navbar_buttons yellow">Overview</div>
        <div className="navbar_buttons">Description</div>
        <div className="navbar_buttons">Warrently</div>
        <div className="navbar_buttons">Reviews</div>
      </div>

      <div className="reviews">
        <ul>
          <li>
            Available in a wide range of colors, patterns, and patterns and
            themes to appeal to kids.
          </li>
          <li>
            Available in a wide range of colors, patterns, and patterns and
            themes to appeal to kids.
          </li>
          <li>
            Available in a wide range of colors, patterns, and patterns and
            themes to appeal to kids.
          </li>
          <li>
            Available in a wide range of colors, patterns, and patterns and
            themes to appeal to kids.
          </li>
        </ul>
      </div>

      <div className="div_cards">
        <h1>Similar Items you may like</h1>
        <div className="cards">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
