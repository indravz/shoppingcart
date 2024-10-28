// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ componentChildren }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { name: "Product 1", desc: "This is a dummy description", price: 30 },
    { name: "Product 2", desc: "This is a dummy description", price: 80 },
    { name: "Product 3", desc: "This is a dummy description", price: 90 },
    { name: "Product 4", desc: "This is a dummy description", price: 50 },
    { name: "Product 5", desc: "This is a dummy description", price: 40 },
    { name: "Product 6", desc: "This is a dummy description", price: 50 },
    { name: "Product 7", desc: "This is a dummy description", price: 70 },
    { name: "Product 8", desc: "This is a dummy description", price: 50 },
  ]);

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const incrementProductQuantity = (product) => {
    console.log("Incrementing", product.name);
  };

  const decrementProductQuantity = (product) => {
    console.log("Decrementing", product.name);
  };

  return (
    <CartContext.Provider value={{ cart, products, addProductToCart, incrementProductQuantity, decrementProductQuantity }}>
      {componentChildren}
    </CartContext.Provider>
  );
};
