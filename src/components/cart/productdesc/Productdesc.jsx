import React, { useState } from "react";
import "./productdesc.css";
import shoes from "../../../assets/shoes.png";
import shoes1 from "../../../assets/shoes1.png";
import shoes2 from "../../../assets/shoes2.png";
import shoes3 from "../../../assets/shoes3.png";
import shoes4 from "../../../assets/shoes4.png";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
function Productdesc() {
  const [num, setNum] = useState(0);
  function handleClick() {
    setNum(num + 1);
  }
  function handleMinusClick() {
    num > 0 && setNum(num - 1);
  }

  return (
    <div className="product_detail_desc">
      <div className="products_left">
        <div className="left_product_img">
          <div className="main_pic">
            <img src={shoes} alt="" />
          </div>
          <div className="many_pics">
            <div className="each_pic">
              <img src={shoes1} alt="" />
            </div>
            <div className="each_pic">
              <img src={shoes2} alt="" />
            </div>
            <div className="each_pic">
              {" "}
              <img src={shoes3} alt="" />
            </div>
            <div className="each_pic">
              {" "}
              <img src={shoes4} alt="" />
            </div>
          </div>

          <div className="contacts">
            <h3>Share this Products</h3>
            <div className="contact_links">
              <CiInstagram size={32} color="black" />
              <FaWhatsapp size={32} color="black" />
              <FaXTwitter size={32} color="black" />
            </div>
          </div>
        </div>

        <div className="product_detials">
          <div className="title_logo">
            <div className="titles">
              <h1>Burrbery Shine</h1>
              <h3>Brand:FENDI</h3>
            </div>
            <div className="heart_logo">
              <CiHeart width={8} />
            </div>
          </div>

          <hr className="hr1" />

          <div className="price">
            <h2>
              <span className="right_price">$150</span>{" "}
              <span className="first_price">$300</span>{" "}
              <span className="inpercent">-50%</span>
            </h2>
            <p className="txt_left">50 units left.</p>
            <p>+ Shipping fee may vary on location</p>
            <p>1k+ rating</p>
          </div>

          <div className="quantity">
            <h3 className="title">Quantity:</h3>
            <div className="button_s">
              <div onClick={handleMinusClick} className="left">
                -
              </div>
              <div className="middle">{num}</div>
              <div
                onClick={handleClick}
                className="right
              "
              >
                +
              </div>
            </div>
          </div>

          <div className="sizes">
            <div className="first_sizes">
              <h3>Size:</h3>
              <div className="items">
                <div className="item_size">20</div>
                <div className="item_size">25</div>
                <div className="item_size">32</div>
                <div className="item_size">32</div>
              </div>
            </div>

            <div className="text_guide">
              <p>See all size guides</p>
            </div>
          </div>

          <div className="colors">
            <h2>Color:</h2>
            <div className="div_color">
              <div className="color-1 color ">
                {" "}
                <div></div>
              </div>
              <div className="color-2 color">
                <div></div>
              </div>
              <div className="color-3 color">
                <div></div>
              </div>
              <div className="color-4 color">
                <div></div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="btn">
              <button className="save">
                <div>
                  <FaBagShopping width={32} />
                </div>
                <span> Save for later</span>
              </button>
              <button className="buy_now">Buy now</button>
            </div>

            <div className="text_div">
              <h3>Pick up and pay on collection availavbel</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="product_delivery_details">
        <h2>Delivery and Returns</h2>

        <hr />
        <div className="locations">
          <h3>Location</h3>
          <div className="location">
            <select className="input" name="Location">
              <option value="red">Location</option>
            </select>
          </div>
          <div className="location">
            <select className="input" name="Sub loction">
              <option value="red">Sub Location</option>
            </select>
          </div>
          <div>{/* <input type="radio" placeholder="Sub-location" /> */}</div>
        </div>
        <div className="delivery">
          <div className="name_logo">
            <div className="logo_bus">
              <TbBus width={32} color="black" />
            </div>
            <h1>Delivery</h1>
          </div>

          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            officiis delectus pariatur laborum quis dolorum error, repudiandae
            iste aspernatur eaque magnam consequuntur ratione alias eum amet
            quas necessitatibus eveniet!
          </h4>
        </div>

        <div className="delivery">
          <div className="name_logo">
            <div className="logo_bus">
              <MdOutlinePolicy width={32} color="black" />
            </div>
            <h1>Return and Policy</h1>
          </div>
          <h4>
            For details about return shipping options, please visit our Contact
            page
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Productdesc;
