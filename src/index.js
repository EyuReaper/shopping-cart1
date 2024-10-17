import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import App from './App';
import './index.css';
import { CartProvider } from './CartContext';

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App inside the CartProvider
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);