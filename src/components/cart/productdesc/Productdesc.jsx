import React from "react";
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
function Productdesc() {
  return (
    <div className="product_detail_desc">
      <div className="products_left">
        <div className="product_img">
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
          <div>
            <div className="contacts">
              <div className="links">
                <CiInstagram size={32} color="black" />
                <FaWhatsapp size={32} color="black" />
                <FaXTwitter size={32} color="black" />
              </div>
            </div>
          </div>
        </div>

        <div className="product_detials">
          <div className="titles">
            <h1>Burrbery Shine</h1>
            <h3>Brand:FENDI</h3>
          </div>
          <hr />
          <div className="price">
            <h2>
              $150 <span>$300</span> <span>-50%</span>
            </h2>
          </div>

          <div>
            <div className="quantity">12</div>
            <div className="sizes">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="colors">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div>
              <button>Save for later</button>
              <button>Buy now</button>
            </div>
            <div>
              <h3>Pick up and pay on collection availavbel</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="product_delivery_details">
        <h2>Delivery and Returns</h2>
        <hr />
        <div className="locations">
          <h3>Locaion</h3>
          <input type="text" />
          <input type="text" />
        </div>
        <div className="Delivery">
          <div>
            <TbBus />
            <h1>DELIVERY</h1>
          </div>

          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe
            officiis delectus pariatur laborum quis dolorum error, repudiandae
            iste aspernatur eaque magnam consequuntur ratione alias eum amet
            quas necessitatibus eveniet!
          </h4>
        </div>
        <div className="policy">
          <div>
            <MdOutlinePolicy /> <h3>Return and Policy</h3>
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
