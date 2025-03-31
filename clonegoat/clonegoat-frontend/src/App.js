import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./resources/components/Header.jsx";
import Footer from "./resources/components/Footer.jsx";
import HomePage from "./resources/pages/HomePage.jsx";
import ProductPage from "./resources/pages/ProductPage.jsx";
import ShoesPage from "./resources/pages/ShoesPage.jsx";
import AccountPage from "./resources/pages/AccountPage.jsx";
// import CartPage from "./resources/pages/CartPage.jsx";
import EditorialPage from "./resources/pages/EditorialPage.jsx";
import CreateAccountPage from "./resources/pages/CreateAccountPage.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/editorial" element={<EditorialPage />} />
          <Route path="/shoes" element={<ShoesPage />} />
          <Route path="/account" element={<AccountPage hideFooter />} />
        </Routes>
      </main>
      <Routes>
        <Route path="/account" element={null} />
        <Route
          path="/create-account"
          element={<CreateAccountPage hideFooter />}
        />
        <Route path="*" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
