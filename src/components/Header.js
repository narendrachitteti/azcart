// src/components/Header.js
import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header>
      <div>
        <h1>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEja7xRPh20ShY-76jSbFed4lD2GLYOLqbQggrXYnCKhyphenhyphenqhrfmuDNebOZQbPj0bfQ-r1nD6LReBDkNOOMNgOGn8jDSXwVUS7KHKZXUdWUifhZg604KKCloyzRq0Y2fZ4uLxtEIiGYIUq9kQBzYJjwob14NOGv3xNZzV-qYh_euWfsVm279Nq7Izjhyv_1CaJ/s378/1702100022771.jpg"
            alt="logo"
          />
          <p>AZcart Let's Get Smart</p>
        </h1>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
