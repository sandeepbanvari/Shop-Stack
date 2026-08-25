import React from "react";
import { Link } from "react-router-dom";
import {
  FaBagShopping,
  FaArrowRight,
  FaTruckFast,
  FaArrowRotateLeft,
  FaShieldHalved,
  FaStar,
} from "react-icons/fa6";
import "./EmptyCart.css";

export const EmptyCart = () => {
  const shoppingPerks = [
    {
      icon: <FaTruckFast />,
      title: "Free Express Shipping",
      desc: "On all orders above $50",
    },
    {
      icon: <FaArrowRotateLeft />,
      title: "30-Day Easy Returns",
      desc: "Guaranteed simple refunds",
    },
    {
      icon: <FaShieldHalved />,
      title: "Secure Checkout",
      desc: "256-bit encrypted payments",
    },
  ];

  return (
    <section className="empty-cart-section" aria-labelledby="empty-cart-title">
      <div className="empty-cart-card">
        {/* Ambient Background Glow Layers */}
        <div className="card-ambient-glow" aria-hidden="true"></div>

        {/* Visual Centerpiece */}
        <div className="empty-visual-wrapper">
          <div className="aura-ring aura-ring-outer" aria-hidden="true"></div>
          <div className="aura-ring aura-ring-inner" aria-hidden="true"></div>

          {/* Floating Celestial Particles */}
          <div className="sparkle-particle particle-1" aria-hidden="true">
            <FaStar />
          </div>
          <div className="sparkle-particle particle-2" aria-hidden="true">
            <FaStar />
          </div>
          <div className="floating-dot dot-1" aria-hidden="true"></div>
          <div className="floating-dot dot-2" aria-hidden="true"></div>
          <div className="floating-dot dot-3" aria-hidden="true"></div>
          <div className="floating-dot dot-4" aria-hidden="true"></div>

          {/* Floating Shopping Bag Podium */}
          <div className="floating-bag-podium" aria-hidden="true">
            <div className="bag-bubble-glass">
              <div className="bag-bubble-reflection"></div>
              <FaBagShopping className="floating-bag-svg" />
            </div>
            <div className="bag-ground-shadow"></div>
          </div>
        </div>

        {/* Typography Content */}
        <div className="empty-cart-body">
          <span className="empty-status-tag">0 Items in bag</span>
          <h2 id="empty-cart-title" className="empty-cart-title">
            Your Cart is Empty
          </h2>
          <p className="empty-cart-desc">
            Looks like you haven&apos;t added anything yet. Discover our curated collections and find something extraordinary.
          </p>

          {/* Primary CTA Button */}
          <div className="cta-button-container">
            <Link
              to="/products"
              className="start-shopping-btn"
              aria-label="Start shopping and browse our product catalog"
            >
              <span className="btn-shine" aria-hidden="true"></span>
              <span className="btn-text">Start Shopping</span>
              <span className="btn-arrow-wrapper" aria-hidden="true">
                <FaArrowRight className="btn-arrow-icon" />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Trust & Assurance Perks */}
        <div className="cart-perks-grid">
          {shoppingPerks.map((perk, index) => (
            <div key={index} className="perk-card">
              <div className="perk-icon-bubble">{perk.icon}</div>
              <div className="perk-details">
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-desc">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
