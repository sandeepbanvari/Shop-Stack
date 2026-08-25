import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptop,
  FaShirt,
  FaSprayCan,
  FaCouch,
} from "react-icons/fa6";
import "./CartCategories.css";

export const CartCategories = () => {
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

  return (
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
  );
};
