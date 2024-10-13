// src/components/ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div id="productsContainer">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
