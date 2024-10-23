import React from "react";
import { Helmet } from "react-helmet-async";
import HeroPage from "./HeroPage";
import About from "./About";
import Product from "./Product";
import Comments from "./Comments";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LG Su Arıtma | Anasayfa</title>
        <meta name="description" content="LG Su Arıtma ile sağlıklı suya kavuşun. İstanbul Avrupa Merkez'de kaliteli su arıtma çözümleri." />
      </Helmet>
      <HeroPage />
      <About />
      <Product />
      <Comments />
      <Contact />
    </>
  );
};

export default Home;
