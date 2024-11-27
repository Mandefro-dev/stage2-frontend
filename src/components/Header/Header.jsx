import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import uk from "../../assets/united-kingdom.png";
import Dropown from "./dropdown/dropdown";
import { IoPerson } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <ul className="header_list">
        <div className="header_logo">
          <img src={logo} alt="Logo" />
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <IoPerson color="black" size={30} />
          <Dropown baseTitle="Register" items={["Sign In", "Register"]} />
        </div>

        <li className="home">Home</li>
        <li className="list_items">Men</li>
        <li className="list_items">Women</li>
        <li className="list_items">Kids</li>
        <li className="list_items">Accessories</li>

        <Dropown
          baseTitle="More"
          items={[
            "Perfumes",
            "Jewelries",
            "Gym Wear",
            "Vintage Wear",
            "Sport Wear",
            "Pajamas",
            "Slippers",
          ]}
        />

        <li className="search_input">
          <CiSearch />
          <input type="text" placeholder="Search here..." />
          <CiSearch />
        </li>

        <li className="ukFlag">
          <img src={uk} alt="UK Flag" />
          <p>EN/Currency</p>
          <IoIosArrowDown />
        </li>

        <li className="cart_container">
          <MdShoppingBag className="shop" />
          <p className="cart_number">2</p>
        </li>
      </ul>
    </div>
  );
}

export default Header;
