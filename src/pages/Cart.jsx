import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import {
  FaBagShopping,
  FaCartShopping,
  FaArrowRight,
  FaLaptop,
  FaShirt,
  FaSprayCan,
  FaCouch,
  FaTruckFast,
  FaArrowRotateLeft,
  FaShieldHalved,
  FaStar,
} from "react-icons/fa6";
import "./Cart.css";

export const Cart = () => {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      tagline: "Laptops, audio & smart tech",
      icon: <FaLaptop />,
      link: "/products?category=laptops",
      themeColor: "#2b6cb0",
      accentBg: "rgba(43, 108, 176, 0.08)",
      tag: "Trending",
    },
    {
      id: "fashion",
      name: "Fashion",
      tagline: "Apparel, footwear & accessories",
      icon: <FaShirt />,
      link: "/products?category=fragrances",
      themeColor: "#9333ea",
      accentBg: "rgba(147, 51, 234, 0.08)",
      tag: "New In",
    },
    {
      id: "beauty",
      name: "Beauty",
      tagline: "Skincare, wellness & scents",
      icon: <FaSprayCan />,
      link: "/products?category=beauty",
      themeColor: "#db2777",
      accentBg: "rgba(219, 39, 119, 0.08)",
      tag: "Popular",
    },
    {
      id: "home",
      name: "Home & Living",
      tagline: "Furniture, decor & lighting",
      icon: <FaCouch />,
      link: "/products?category=furniture",
      themeColor: "#d97706",
      accentBg: "rgba(217, 119, 6, 0.08)",
      tag: "Curated",
    },
  ];

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
    <div className="cart-page-wrapper">
      <Header />

      <main className="cart-page" id="main-content">
        {/* =========================================================
            1. PAGE HEADER SECTION
        ========================================================= */}
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

        {/* =========================================================
            2 & 3. EMPTY CART MAIN SHOWCASE & FLOATING VISUAL
        ========================================================= */}
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

        {/* =========================================================
            4. EXPLORE CATEGORIES SECTION
        ========================================================= */}
        <section
          className="explore-categories-section"
          aria-labelledby="explore-categories-heading"
        >
          <div className="categories-header-block">
            <div className="categories-label-row">
              <span className="categories-accent-line" aria-hidden="true"></span>
              <span className="categories-eyebrow">Discover More</span>
              <span className="categories-accent-line" aria-hidden="true"></span>
            </div>
            <h2 id="explore-categories-heading" className="categories-main-title">
              Explore Categories
            </h2>
            <p className="categories-sub-desc">
              Browse top categories crafted for your everyday lifestyle
            </p>
          </div>

          <div className="categories-cards-grid" role="list">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="category-pill-card"
                role="listitem"
                aria-label={`Explore ${cat.name} products`}
                style={{
                  "--cat-color": cat.themeColor,
                  "--cat-bg": cat.accentBg,
                }}
              >
                <div className="category-pill-header">
                  <div className="category-icon-box">{cat.icon}</div>
                  <span className="category-pill-badge">{cat.tag}</span>
                </div>

                <div className="category-pill-content">
                  <span className="category-pill-name">{cat.name}</span>
                  <span className="category-pill-tagline">{cat.tagline}</span>
                </div>

                <div className="category-pill-footer">
                  <span className="pill-cta-text">Shop Collection</span>
                  <span className="pill-arrow-circle" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
