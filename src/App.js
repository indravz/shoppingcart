import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <div>
            <h1>Shopping Cart</h1>
          </div>
          <div>
            <Link to="/products">Products</Link>|<Link to="/login">Login</Link>|
            <Link to="/cart">Cart</Link>
          </div>
        </div>
        <div>
          <Routes>
            <Route index element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
