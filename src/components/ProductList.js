import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaSmile, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#232f3e', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja7xRPh20ShY-76jSbFed4lD2GLYOLqbQggrXYnCKhyphenhyphenqhrfmuDNebOZQbPj0bfQ-r1nD6LReBDkNOOMNgOGn8jDSXwVUS7KHKZXUdWUifhZg604KKCloyzRq0Y2fZ4uLxtEIiGYIUq9kQBzYJjwob14NOGv3xNZzV-qYh_euWfsVm279Nq7Izjhyv_1CaJ/s378/1702100022771.jpg"
            alt="logo"
            style={{ height: '80px' }}
          />
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '8px 40px 8px 12px', borderRadius: '4px', border: '1px solid #ccc', width: '150px' }}
          />
          <FaSearch style={{ position: 'absolute', right: '12px', color: '#888' }} />
        </div>
      </header>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4', fontSize: '1.2rem', fontWeight: 'bold' }}>
        <FaSmile style={{ color: '#FFA500', marginRight: '8px' }} /> Happy Shopping with AZ Cart!
      </div>
      <div
        id="productsContainer"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#f4f4f4',
          flex: '1',
        }}
      >
        {filteredProducts.map((product, index) => (
          <div
            className="product"
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '200px',
                objectFit: 'contain',
                backgroundColor: '#f9f9f9',
              }}
            />
            <div style={{ padding: '10px' }}>
              <p
                style={{
                  margin: '10px 0',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textAlign: 'center',
                }}
              >
                {product.name}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  marginTop: '10px',
                  padding: '10px 0',
                  backgroundColor: '#007BFF',
                  color: '#fff',
                  textDecoration: 'none',
                  textAlign: 'center',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                }}
              >
                <FaShoppingCart style={{ marginRight: '8px' }} /> View Product
              </a>
            </div>
          </div>
        ))}
      </div>
      <footer style={{ padding: '20px', backgroundColor: '#232f3e', textAlign: 'center', borderTop: '1px solid #ddd', color: '#fff' }}>
        <p style={{ margin: '0 0 10px', fontSize: '1rem' }}>© 2024 AZ Cart. Your trusted affiliate partner for top Amazon products.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem' }}>
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem' }}>
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem' }}>
            <FaInstagram />
          </a>
        </div>
      </footer>
      <style>
  {`
    #productsContainer {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    @media (max-width: 768px) {
      #productsContainer {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 10px;
        padding: 10px;
      }
    }
    @media (max-width: 480px) {
      #productsContainer {
        grid-template-columns: repeat(1, 1fr) !important;
      }
    }
  `}
</style>


    </div>
  );
};

export default ProductSearch;
