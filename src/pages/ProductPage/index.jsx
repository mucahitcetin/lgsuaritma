import React from "react";
import { Helmet } from "react-helmet-async";
import Product from "../Home/Product";

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Ürünler | LG Su Arıtma</title>
        <meta name="description" content="Cihazlar, filtreler ve aksesuarlar gibi su arıtma ürünlerimizi inceleyin." />
      </Helmet>
      <section className="p-6"><Product /></section>
    </>
  );
};

export default ProductPage;
