import React, { useState } from "react";
import shoes from "../../../assets/shoes.png";
import { CiCreditCard1 } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";

import "./main.css";

function Mian() {
  const [popup, setPopup] = useState(false);
  function handlePopupMessage() {
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  }
  return (
    <div className="checkout_detial">
      <div className="first_el">
        <div className="shipping_addres">
          <div className="adress_title">
            <h1>Shipping Address</h1>
          </div>

          <div className="username">
            <h3>Name</h3>
            <input type="text" placeholder="First and Last Name" />
          </div>
          <div className="username">
            <h3>Address1</h3>
            <input type="text" placeholder="42, Dubai street" />
          </div>

          <div className="username">
            <h3>Address 2</h3>
            <input type="text" placeholder="42, Dubai street" />
          </div>

          <div className="cities">
            <div className="citiy">
              <h3>Enter City</h3>
              <input type="text" placeholder="city" />
            </div>
            <div className="citiy">
              <h3>State</h3>
              <select className="input_like" name="select state">
                <option value="Select State">Select State</option>
              </select>
            </div>
            <div className="citiy">
              <h3>Zip Code</h3>
              <input type="text" placeholder="Zip" />
            </div>
          </div>
        </div>

        <div className="order_summery">
          <div className="order_title">
            <h1>Order summery</h1>
          </div>
          <hr className="hr" />

          <div className="detials_abt">
            <div className="shoes_pic">
              <img src={shoes} alt="" />
            </div>
            <div className="shoes_text">
              <h2>Burrbey Shine</h2>
              <h4>FENDI</h4>
            </div>
          </div>

          <div className="ordering">
            <div className="price_detail">
              <div className="prcie_current">
                <h2>SubTotal</h2>
                <h3>$150</h3>
              </div>
              <div className="prcie_current">
                <h2>Shipping</h2>
                <h3>$50</h3>
              </div>
              <div className="prcie_current">
                <h2>Tax</h2>
                <h3>$5</h3>
              </div>
            </div>
            <hr style={{ width: "420px" }} className="hr" />

            <div className="total">
              <h3>Total</h3>
              <h3>$165</h3>
            </div>
            <button onClick={handlePopupMessage} className="order_button">
              Place Order
            </button>
            {popup && (
              <div className="popup">
                <h3>Ordered Sucessfully</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="payment">
        <h1>Payment Method</h1>
        <div className="choice_system">
          <div style={{ backgroundColor: "#FEA301" }} className="method">
            <CiCreditCard1 size={32} />
            Card
          </div>
          <div className="method">
            <CiWallet size={32} />
            Wallet
          </div>
          <div className="method">
            <BiTransfer size={32} />
            Bank Transfer
          </div>
        </div>

        <div className="name_card">
          <h3>Name on card</h3>
          <input type="text" placeholder="First name and Last name" />
        </div>

        <div className="name_card">
          <h3>Card Number</h3>
          <input type="text" placeholder="0000 0000 0000 0000" />
        </div>

        <div className="inputs">
          <div className="expirey_cvv">
            <h2>Expirey</h2>
            <h2>CVV</h2>
          </div>

          <div className="select_inputs">
            <select className="input_like" name="" id="">
              <option value="">MM</option>
            </select>
            <select className="input_like" name="" id="">
              <option value="">YYYY</option>
            </select>
            <select className="input_like" name="" id="">
              <option value="">CVV</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mian;
