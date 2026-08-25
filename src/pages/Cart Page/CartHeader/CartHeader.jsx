import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./CartHeader.css";

export const CartHeader = () => {
  return (
    <section className="cart-header" aria-labelledby="cart-page-title">
      <div className="cart-badge-pill">
        <span className="badge-pulse-dot" aria-hidden="true"></span>
        <FaCartShopping className="badge-cart-icon" />
        <span className="badge-text">Shopping Bag</span>
      </div>

      <h1 id="cart-page-title" className="cart-header-title">
        Your Shopping Cart
      </h1>

      <p className="cart-header-subtitle">
        Your selected items will appear here
      </p>
    </section>
  );
};
