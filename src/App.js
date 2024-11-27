import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <p>
          <Link to="/content">Home</Link> |<Link to="/cart">Cart</Link>
        </p>
        <hr></hr>
        <Routes>
          <Route index element={<Content />} />
          <Route path="content" element={<Content />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
