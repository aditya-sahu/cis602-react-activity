import React, { useState } from 'react';
/*
Make your own Cart component, inside the components folder to show the number of the items in the Cart
*/
export default function Cart ({info}){
    console.log("cart.jsx: ",info);
    return(
        <div>
            <h1>Cart</h1>
            <p>Number of items in the cart: {info.number}</p>
            <p>Total price: {info.totalPrice.toFixed(2)}</p> 
        </div>
    )
}