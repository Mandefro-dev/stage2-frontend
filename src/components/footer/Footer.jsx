import React from "react";
import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="logo_links">
        <div className="logos">
          <div className="logo">
            <div className="white-logo "></div>
            <div style={{ display: "flex" }}>
              <div className="hidden_part"></div>
              <div className="white_logo2  "></div>
            </div>
          </div>
          <div className="logo">
            <div className="white-logo "></div>
            <div style={{ display: "flex" }}>
              <div className="white_logo2  "></div>
              <div className="hidden_part hidden_part2"></div>
            </div>
          </div>
        </div>

        <div className="links">
          <CiInstagram size={32} color="white" />
          <FaWhatsapp size={32} color="white" />
          <FaXTwitter size={32} color="white" />
        </div>
      </div>

      <div className="about_page">
        <ul className="list">
          <h1>About</h1>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">News & Blog</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
        </ul>

        <ul className="list">
          <h1>Products</h1>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
        </ul>

        <ul className="list">
          <h1>Discover</h1>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">Customers</a>
          </li>
          <li>
            <a href="">Affilates</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
