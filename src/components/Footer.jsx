import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4 text-center">
      {/* Logo */}
      <div className="text-center mb-4">
        <Link to="/" className="text-white font-bold text-lg">
          Su Arıtma Sitesi
        </Link>
      </div>

      {/* Adres */}
      <div className="text-center mb-4">
        <p>Adres: Örnek Mah. No: 123, İstanbul</p>
      </div>

      {/* Sosyal Medya Logoları */}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://wa.me/905061010501" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-white text-3xl hover:opacity-80" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white text-3xl hover:opacity-80" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-3xl hover:opacity-80" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-3xl hover:opacity-80" />
        </a>
      </div>

      {/* Menü */}
      <div className="flex flex-col md:flex-row justify-center mb-4 text-center">
        <div className="mb-2 md:mb-0 md:mr-8 ">
          <Link to="/hakkımızda" className="rounded cursor-pointer transition-all duration-200 text-hover-underline">Hakkımızda</Link>
        </div>
        <div className="mb-2 md:mb-0 md:mr-8">
          <Link to="/ürünler" className="rounded cursor-pointer transition-all duration-200 text-hover-underline">Ürünler</Link>
        </div>
        <div className="mb-2 md:mb-0 md:mr-8">
          <Link to="/yorumlar" className="rounded cursor-pointer transition-all duration-200 text-hover-underline">Yorumlar</Link>
        </div>
        <div>
          <Link to="/iletişim" className="rounded cursor-pointer transition-all duration-200 text-hover-underline">İletişim</Link>
        </div>
      </div>

      {/* Copyright ve İsim */}
      <p className="text-center text-sm mt-4 mb-4">
        © {new Date().getFullYear()} Su Arıtma Sitesi. Tüm hakları saklıdır.
      </p>
      <a href='https://www.linkedin.com/in/mucahitcetin1/' target='_blank' className="text-center text-sm ">
        Design By <span className="font-bold">Mücahit Çetin</span>
      </a>
    </footer>
  );
};

export default Footer;
