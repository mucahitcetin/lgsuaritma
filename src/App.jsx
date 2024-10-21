import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ContactButton from "./components/ContactButton";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage/";
import CommentPage from "./pages/CommentPage";
import ContactPage from "./pages/ContactPage";
import Filter from "./pages/ProductPage/Filter";
import Accessory from "./pages/ProductPage/Accessory";
import Device from "./pages/ProductPage/Device";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/ürünler" element={<ProductPage />} />
            <Route path="/yorumlar" element={<CommentPage />} />
            <Route path="/iletişim" element={<ContactPage />} />
            <Route path="/ürünler/cihazlar" element={<Device />} />
            <Route path="/ürünler/filtreler" element={<Filter />} /> 
            <Route path="/ürünler/aksesuarlar" element={<Accessory />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ContactButton />
    </BrowserRouter>
  );
};

export default App;
