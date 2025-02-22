import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./resources/components/Header.jsx";
import Footer from "./resources/components/Footer.jsx";
import HomePage from "./resources/pages/HomePage.jsx";
import ProductPage from "./resources/pages/ProductPage.jsx";
import CartPage from "./resources/pages/CartPage.jsx";
import CheckoutPage from "./resources/pages/CheckoutPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
