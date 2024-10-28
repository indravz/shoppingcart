import React, { useContext } from 'react';
import { CartContext } from './App';

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.desc} - Rs.{item.price} (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}