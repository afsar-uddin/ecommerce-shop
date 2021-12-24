import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import Success from "./pages/Success";

function App() {
  const user = true;
  let categoryName = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        {user ? <Route path="/login" element={<Navigate to="/" />} /> : <Route path="/login" element={<Login />} />}
        {user ? <Route path="/register" element={<Navigate to="/" />} /> : <Route path="/register" element={<Register />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
