import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        CloneGOAT
      </a>
      <nav className="nav">
        <a href="/products">Products</a>
        <a href="/hoodies">Hoodies</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
