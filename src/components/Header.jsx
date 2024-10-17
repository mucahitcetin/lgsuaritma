import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";

const Marquee = () => {
  return (
    <div className="bg-primary text-white text-lg  py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4">Tüm ürünlerde ücretsiz kargo</span>
        <span className="mx-4">100 günde iade garantisi</span>
        <span className="mx-4">81 ilde ücretsiz kurulum</span>
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    if (window.innerWidth < 1024) {
      setMenuOpen(false);
    }
  };
  
  return (
    <div className="relative">
      {/* Üst Animasyonlu Yazı */}
      <Marquee />

      {/* Header */}
      <header className="bg-white text-primary flex items-center lg:justify-around justify-between px-8 py-3 top-0 left-0 w-full z-50">
        <Link to="/">
          <h3 className="text-3xl font-bold">LOGO</h3>
        </Link>
        <nav className="flex gap-6 max-lg:hidden">
          <Link to="/hakkimizda" className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg">Hakkımızda</Link>
          <Link to="/ürünler" className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg">Ürünler</Link>
          <Link to="/yorumlar" className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg">Yorumlar</Link>
          <Link to="/iletişim" className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg">İletişim</Link>
        </nav>
          {/* hamburger menü */}
          <div className='max-lg:hidden'></div>
      <div className="flex sm:gap-7 gap-4 z-50 items-center justify-center mr-5 lg:hidden">
        <MdOutlineMenu
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer lg:hidden text-white bg-primary w-8 h-8 rounded-md"
        />
      </div>
      </header>
    </div>
  );
};

export default Header;
