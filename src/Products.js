import React, { useContext } from "react";
import { CartContext } from "./App";

export default function Products() {
  const { addProductToCart } = useContext(CartContext);

  const items = [
    { name: "Product 1", desc: "Product 1", price: 30 },
    { name: "Product 2", desc: "Product 2", price: 80 },
    { name: "Product 3", desc: "Product 3", price: 90 },
    { name: "Product 4", desc: "Product 4", price: 90 },
    { name: "Product 5", desc: "Product 5", price: 90 }
  ];

  return (
    <>
      <h2>Available Products</h2>
      {items.map((product, index) => (
        <div className="App-item" key={index}>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <h4>${product.price}</h4>
          <button onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </>
  );
}