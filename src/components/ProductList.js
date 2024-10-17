// src/components/ProductList.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-lg"
            />
          </Link>
          <div className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
              onClick={() => addToCart(product)}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;