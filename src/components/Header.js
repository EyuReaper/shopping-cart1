// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold">
        Shopping Cart
      </Link>
      <Link to="/cart" className="flex items-center">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
        Cart
      </Link>
    </header>
  );
};

export default Header;