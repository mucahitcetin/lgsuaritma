import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const Product = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: 'Su Arıtma Cihazları',
      image: '/ürün4.jpg',
      url: '/ürünler/cihazlar',
    },
    {
      title: 'Su Arıtma Filtreleri',
      image: '/filter2.jpg',
      url: '/ürünler/filtreler',
    },
    {
      title: 'Su Arıtma Yedek Parçaları ve Aksesuarları',
      image: '/aksesuvar5.jpg',
      url: '/ürünler/aksesuarlar',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık */}
      <h1 className="text-3xl lg:text-4xl font-semibold mt-6 mb-8 text-center text-blue-600">
        ÜRÜNLER
      </h1>

      {/* Ürün Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative h-64 rounded-lg shadow-md overflow-hidden cursor-pointer group"
            onClick={() => navigate(product.url)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-contain opacity-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
              <h2 className="text-white text-2xl text-center font-bold group-hover:translate-x-1 transition-opacity duration-300">
                {product.title}
              </h2>
              <div className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaChevronRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
