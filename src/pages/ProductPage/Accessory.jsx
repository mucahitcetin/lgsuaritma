import React from "react";
import ProductCard from "./ProductCard";
import products from "../../data/product";

const Accessory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 bg-gray-100">
      {products.accessory.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Accessory;
