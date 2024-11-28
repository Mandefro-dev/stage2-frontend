import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero1 from "./components/hero1/Hero1";
import Hero2 from "./components/Hero2/Hero2";
import Hero3 from "./components/hero3/Hero3";
import Hero5 from "./components/hero5/Hero5";
import Hero6 from "./components/hero6/hero6";
import Footer from "./components/footer/Footer";

function Home() {
  const [cart, setCart] = useState([]);
  function handleCart(product) {
    setCart((prev) => [...prev, product]);
  }
  return (
    <div>
      <Header />
      <Hero1 />
      <Hero2 addtocart={handleCart} />
      <Hero3 />
      <Hero5 />
      <Hero6 />
      <Footer />
    </div>
  );
}
export default Home;
