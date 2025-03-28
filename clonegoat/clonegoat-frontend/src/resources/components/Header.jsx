import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handeleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handeleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handeleClickOutside);
    return () => {
      document.removeEventListener("click", handeleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>

      <nav className="nav">
        <NavLink to="/" className="nav-link" onClick={handeleClick}>
          Home
        </NavLink>

        <div className="nav-item">
          <button
            className="nav-link dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            Products
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <NavLink
                to="/shoes"
                className="nav-link dropdown-link"
                onClick={handeleClick}
              >
                Shoes
              </NavLink>
              <NavLink
                to="/shop/clothing"
                className="nav-link dropdown-link"
                onClick={handeleClick}
              >
                Clothing
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/editorial" className="nav-link" onClick={handeleClick}>
          Editorial
        </NavLink>
      </nav>

      <div className="account-section">
        <NavLink to="/account" className="nav-link" onClick={handeleClick}>
          Account
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
