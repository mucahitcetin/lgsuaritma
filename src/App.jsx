import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ContactButton from "./components/ContactButton";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen"> {/* Flex ve min-h-screen kullanıyoruz */}
        <Header />
        <main className="flex-grow"> {/* Ana içeriğin esnemesini sağlar */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ContactButton /> {/* İletişim butonu */}
    </BrowserRouter>
  );
};

export default App;
