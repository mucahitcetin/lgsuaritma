import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-80 mx-auto mb-4 border-primary/50 border ">
      <div className="border-gray border-2 px-6 py-3  rounded-xl shadow-lg">
      {/* Üstteki indirim etiketi */}
      <div className="bg-red-500 text-white text-sm px-2 py-1 rounded-tl-lg rounded-br-lg w-max ">
        {product.discount.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })} tasarruf edin
      </div>

      {/* Ürün Görseli */}
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mt-2" />

      {/* Ürün Bilgisi */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        {/* Ürün Fiyatı */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500 font-bold text-xl">
            {product.price.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
          </span>
          <span className="line-through text-gray-500">
            {product.oldPrice.toLocaleString("tr-TR", { style: "currency", currency: "TRY" })}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="ml-1">{product.rating}</span>
        </div>
      </div>
      </div>
    </div>
  );
};


export default ProductCard;
