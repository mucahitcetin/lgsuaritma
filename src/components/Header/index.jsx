import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import Head from './Head';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative">
      {/* Üst Animasyonlu Yazı */}
      <Head />

      {/* Header */}
      <header className="bg-white text-primary flex items-center lg:justify-around justify-between px-8 py-3 top-0 left-0 w-full z-50">
        <Link to="/">
          <h3 className="text-3xl font-bold">LOGO</h3>
        </Link>

        {/* Navigasyon Menüsü */}
        <nav className={`lg:flex gap-6 ${menuOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/hakkimizda"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Hakkımızda
          </Link>

          <Link
            to="/ürünler"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Ürünler
          </Link>
          <Link
            to="/cihazlar"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Cihazlar
          </Link>

          <Link
            to="/yorumlar"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Yorumlar
          </Link>
          <Link
            to="/iletişim"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            İletişim
          </Link>
        </nav>

        {/* Hamburger Menü */}
        <div className="lg:hidden flex items-center">
          <MdOutlineMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-white bg-primary w-8 h-8 rounded-md"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
