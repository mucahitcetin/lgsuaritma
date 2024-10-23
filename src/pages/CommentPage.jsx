import React from "react";
import { Helmet } from "react-helmet-async";
import Comment from "./Home/Comments";

const CommentPage = () => {
  return (
    <>
      <Helmet>
        <title>Yorumlar | LG Su Arıtma</title>
        <meta name="description" content="Müşteri yorumlarımızı inceleyin ve su arıtma deneyimlerimizi keşfedin." />
      </Helmet>
      <section className="p-6"><Comment /></section>
    </>
  );
};

export default CommentPage;
