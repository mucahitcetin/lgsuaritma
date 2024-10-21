import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-primary text-center">
      <h1 className="text-5xl font-bold mb-4">404 - Sayfa Bulunamadı</h1>
      <p className="text-lg mb-6">Aradığınız sayfa mevcut değil.</p>
      <Link
        to="/"
        className="bg-primary text-white py-2 px-4 rounded transition duration-200 hover:bg-opacity-80"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;
