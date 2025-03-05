import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>

      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/shop" className="nav-link">
          Products
        </NavLink>
        <NavLink to="/editorial" className="nav-link">
          Editorial
        </NavLink>
      </nav>

      <div className="account-section">
        <NavLink to="/account" className="nav-link">
          Account
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
