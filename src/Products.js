import React from "react";
import { useState } from "react";
export default function Products() {
  const items = [
    { name: "Product 1", desc: "This is a dummy description", price: 30 },
    { name: "Product 2", desc: "This is a dummy description", price: 80 },
    { name: "Product 3", desc: "This is a dummy description", price: 90 },
    { name: "Product 4", desc: "This is a dummy description", price: 50 },
    { name: "Product 5", desc: "This is a dummy description", price: 40 },
    { name: "Product 6", desc: "This is a dummy description", price: 50 },
    { name: "Product 7", desc: "This is a dummy description", price: 70 },
    { name: "Product 8", desc: "This is a dummy description", price: 50 },
  ];
  const [products, setProducts] = useState(items);
  return (
    <div className="App-products">
      {products.map((value, index) => (
        <div className="App-item">
          
          <h3>{value.name}</h3>
          <p>{value.desc}</p>
          <h4>{value.price}</h4>
          <button>Add</button>
          
          </div>
      ))}
    </div>
  );
}
