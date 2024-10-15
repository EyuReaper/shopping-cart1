import React from "react";

const ProductList = ({ products, addToCart }) => {
    return (
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map(product => (
                <div key = {product.id} className = "border p-4 rounded shadow hover:shadow-lg">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-lg">{product.price}</p>
                    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick = {() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;