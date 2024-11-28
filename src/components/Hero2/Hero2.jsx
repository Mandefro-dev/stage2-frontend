import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import "./hero2.css";
import bag from "../../assets/bag1.png";
import dress from "../../assets/dress.png";
import shoes from "../../assets/shoes.png";
import Card from "./card/card";
import Heronav from "./heronav/Heronav";

function Hero2({ addtocart }) {
  const products = [
    {
      id: 1,
      img: { bag },
      type: "Women",
      rating: "2k+ rating",
      text: "French kiss bag",
      smalltext: "ALDO",
      price: 500,
    },
    {
      id: 2,
      img: { shoes },
      type: "Kids",
      rating: "1k+ rating",
      text: "Burberry shine",
      smalltext: "FENDI",
      price: 150,
    },

    {
      id: 3,
      img: { dress },
      type: "Women",
      rating: "5k+ rating",
      text: "Alvero Gown",
      smalltext: "DIVINE",
      price: 150,
    },
  ];
  return (
    <>
      <div className="Hero2_container">
        <Heronav title="Latest Collections" />
        <div className="cards">
          {products.map((product) => (
            <Card
              key={product.id}
              img={product.image}
              type={product.type}
              rating={product.rating}
              text={product.text}
              smalltext={product.smalltext}
              price={product.price}
              onclick={() => addtocart(product)}
            />
          ))}
          <Card
            img={bag}
            type="Women"
            rating="2k+ rating"
            text="French kiss bag"
            smalltext="ALDO"
            price={500}
          />
          <Card
            img={shoes}
            type="Kids"
            rating="1k+ rating"
            text="Burberry shine"
            smalltext="FENDI"
            price={150}
          />
          <Card
            img={dress}
            type="Women"
            rating="5k+ rating"
            text="Alvero Gown"
            smalltext="DIVINE"
            price={300}
          />
        </div>
      </div>
    </>
  );
}

export default Hero2;
