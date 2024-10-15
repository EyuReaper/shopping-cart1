import React from "react";
import CartItem from './CartItem';

const Cart = ({items}) => {
    return(
        <div className = "bg-gray-100 p-4">
            <h2 className="text-2xl">Your Cart</h2>
            {items.length === 0 ? (
                <p className="text-grey-500">No items in the cart.</p>
                ):(
                    items.map(item => <CartItem key={item.id} item={item}/>)
            )}
        </div>
    );
};

export default Cart;