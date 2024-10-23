import React from "react";
import { Helmet } from "react-helmet-async";
import Contact from "./Home/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>İletişim | LG Su Arıtma</title>
        <meta name="description" content="Bize ulaşın: 0543 831 5966 veya lgisuaritma@hotmail.com." />
      </Helmet>
      <section><Contact /></section>
    </>
  );
};

export default ContactPage;
