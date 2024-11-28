import React from "react";
import "./Overview.css";
import Card from "../../Hero2/card/card";
import shoes1 from "../../../assets/shoes_img1.png";
import shoes2 from "../../../assets/shoes_img2.png";

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
          <Card
            img={shoes1}
            type="Kids"
            rating="2k rating"
            text="Butlin Blue"
            smalltext="FENDI"
            price="$180"
          />
          <Card
            img={shoes2}
            type="kids"
            rating="2k rating"
            text="Pink cherry"
            smalltext="FENDI"
            price="$120"
          />
        </div>
      </div>
    </div>
  );
}
