import React from "react";
import ProductCard from "./ProductCard";
import products from "../../data/product";

const Filter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-100">
      {products.filter.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Filter;
