import React from "react";
import { Helmet } from "react-helmet-async";
import About from "./Home/About";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | LG Su Arıtma</title>
        <meta name="description" content="LG Su Arıtma olarak İstanbul Avrupa Merkez'de en kaliteli arıtma çözümlerini sunuyoruz." />
      </Helmet>
      <section><About /></section>
    </>
  );
};

export default AboutPage;
