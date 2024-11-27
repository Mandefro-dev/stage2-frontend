import React from "react";
import shoes from "../../../assets/shoes.png";

import "./main.css";
function Mian() {
  return (
    <div className="checkout_detials">
      <div className="first_el">
        <div className="shipping_addres">
          <div>
            <h1>Shipping Address</h1>
          </div>
          <div>
            <h3>Name</h3>
            <input type="text" placeholder="First and Last Name" />
          </div>
          <div>
            <h3>Address1</h3>
            <input type="text" placeholder="42, Dubai street" />
          </div>

          <div>
            <h3>Address 3</h3>
          </div>
          <div>
            <div>
              <h3>Entr City</h3>
              <input type="text" placeholder="city" />
            </div>
            <div>
              <h3>Entr City</h3>
              <input type="text" placeholder="city" />
            </div>
            <div>
              <h3>Entr City</h3>
              <input type="text" placeholder="city" />
            </div>
          </div>
        </div>

        <div className="order_summery">
          <div className="title">
            <h1>Order summery</h1>
            <hr className="hr" />
          </div>

          <div className="detials_abt">
            <div className="shoes_detail">
              <img src={shoes} alt="" />
              <div>
                <h2>Burrbey Shine</h2>
                <h4>FENDI</h4>
              </div>
            </div>
          </div>

          <div className="ordering">
            <div className="total">
              <h3>Total</h3>
              <h3>$165</h3>
            </div>
            <button>Place Order</button>
          </div>
        </div>
      </div>

      <div className="Payment">
        <h1>Payment System</h1>
        <div className="choice_system">
          <div className="method">Card</div>
          <div className="method">Wallet</div>
          <div className="method">Bank Transfer</div>
        </div>
        <div>
          <div>
            <h2>Name on card</h2>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <h2>Name on card</h2>
            <input type="text" placeholder="Full Name" />
          </div>
        </div>
        <div>
          <div>
            <h2>EXPIREY</h2>
            <h2>CVV</h2>
          </div>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mian;
