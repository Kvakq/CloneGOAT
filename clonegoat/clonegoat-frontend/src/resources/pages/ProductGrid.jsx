import React from "react";
import "../styles/ProductGird.css";

function ProductGrid({ title, products }) {
  return (
    <div className="product-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="item-count">{products.length} Items</span>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-year">{product.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
