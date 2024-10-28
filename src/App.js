import React, { useState, createContext } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name);
      if (existingProduct) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const value = {
    cart,
    setCart,
    addProductToCart,
  };

  return (
    <CartContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <div className="App-header">
            <h1>Shopping Cart</h1>
            <div>
              <Link to="/products">Products</Link> | 
              <Link to="/cart">Cart</Link>
            </div>
          </div>
          <div>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;