import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Sayfa Bulunamadı | LG Su Arıtma</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. Anasayfaya dönmek için buraya tıklayın." />
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-primary text-center p-6">
        <h1 className="text-7xl font-extrabold mb-4 animate-bounce">404</h1>
        <p className="text-2xl font-semibold mb-2">Sayfa Bulunamadı</p>
        <p className="text-lg mb-6">Üzgünüz, aradığınız sayfa mevcut değil.</p>

        <Link
          to="/"
          className="bg-primary text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-200"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </>
  );
};

export default NotFound;

