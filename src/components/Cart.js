// src/components/Cart.js
import React from 'react';

const Cart = ({ items, removeFromCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
              <button
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;