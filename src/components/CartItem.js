import React from "react";

const CartItem = ({item}) => {
    return(
        <div className="cart-item">
            <h3>{item.name}</h3>
            <p>price: {item.price}</p>
        </div>
    );
};

export default CartItem;