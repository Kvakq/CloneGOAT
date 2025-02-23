import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./resources/components/Header.jsx";
import Footer from "./resources/components/Footer.jsx";
import HomePage from "./resources/pages/HomePage.jsx";
import ProductPage from "./resources/pages/ProductPage.jsx";
// import CartPage from "./resources/pages/CartPage.jsx";
import EditorialPage from "./resources/pages/EditorialPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/editorial" element={<EditorialPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
