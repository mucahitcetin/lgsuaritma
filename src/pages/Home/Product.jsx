import React from 'react';
import { useNavigate } from 'react-router-dom';

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
      image: '/ürün2.jpg',
      url: '/ürünler/filtreler',
    },
    {
      title: 'Su Arıtma Yedek Parçaları ve Aksesuarları',
      image: '/ürün3.jpg',
      url: '/ürünler/aksesuarlar',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="relative h-64 rounded-lg shadow-md overflow-hidden cursor-pointer"
          onClick={() => navigate(product.url)}
        >
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain opacity-75"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">{product.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
