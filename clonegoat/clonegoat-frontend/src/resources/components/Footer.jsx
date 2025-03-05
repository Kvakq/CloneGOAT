import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">CloneGOAT</div>
      <nav className="footer__nav">
        <a href="/terms" className="footer__link">
          Terms of Service
        </a>
        <a href="/privacy" className="footer__link">
          Privacy Policy
        </a>
      </nav>
      <div className="footer__section">
        <p>2025 GOAT Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
