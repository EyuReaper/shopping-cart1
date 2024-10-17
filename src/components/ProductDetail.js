// src/components/ProductDetail.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ product, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 text-xl mb-4">{product.price}</p>
        <p className="mb-4">{product.description}</p>
        <button
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300 flex items-center"
          onClick={() => addToCart(product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;