// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.css'; // You can still use a CSS file for styling.

const products = [
  {
    name: 'samsung',
    image: 'https://m.media-amazon.com/images/I/5134aj-bXnL._SX300_SY300_QL70_FMwebp_.jpg',
    link: 'https://amzn.eu/d/hphceWP',
  },
  {
    name: 'redmi',
    image: 'https://m.media-amazon.com/images/I/41lvprpWDjL._SX300_SY300_QL70_FMwebp_.jpg',
    link: 'https://amzn.eu/d/gJPkDbR',
  },
  {
    name: 'oppo',
    image: 'https://m.media-amazon.com/images/I/41ljAmAbilL._SX300_SY300_QL70_FMwebp_.jpg',
    link: 'https://amzn.eu/d/gJKB9Qe',
  },
  {
    name: 'vivo',
    image: 'https://m.media-amazon.com/images/I/61eE9egC8UL._SX679_.jpg',
    link: 'https://amzn.eu/d/9tiCPJU',
  },
  {
    name: 'Apple iPhone',
    image: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg',
    link: 'https://amzn.eu/d/8qegMaE',
  },
  {
    name: 'Sony TV',
    image: 'https://m.media-amazon.com/images/I/81MRU+3RJLL._SL1500_.jpg',
    link: 'https://amzn.eu/d/fvGBavE',
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
