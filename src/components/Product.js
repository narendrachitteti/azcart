// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        View Product
      </a>
    </div>
  );
};

export default Product;
