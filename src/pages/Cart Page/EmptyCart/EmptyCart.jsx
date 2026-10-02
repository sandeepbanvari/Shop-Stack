import { Link } from "react-router-dom";
import { FaCartShopping, FaArrowRight } from "react-icons/fa6";
import "./EmptyCart.css";

export const EmptyCart = () => {
  return (
    <section className="empty-cart-section" aria-labelledby="empty-cart-title">
      <div className="empty-cart-card">
        {/* Soft Ambient Background Glow */}
        <div className="card-ambient-glow" aria-hidden="true" />

        {/* 🛒 Shopping Cart Icon */}
        <div className="empty-cart-icon-wrapper" aria-hidden="true">
          <div className="empty-cart-icon-bubble">
            <FaCartShopping className="empty-cart-icon" />
          </div>
          <div className="empty-cart-icon-halo" />
        </div>

        {/* Typography Content */}
        <div className="empty-cart-body">
          <h2 id="empty-cart-title" className="empty-cart-title">
            Your Cart is Empty
          </h2>
          <p className="empty-cart-desc">
            <span>You haven&apos;t added anything yet.</span>
            <span>Explore our products and shop.</span>
          </p>

          {/* Primary CTA Button */}
          <div className="cta-button-container">
            <Link
              to="/products"
              className="start-shopping-btn"
              id="start-shopping-btn"
              aria-label="Start shopping and explore products"
            >
              <span className="btn-text">Start Shopping</span>
              <FaArrowRight className="btn-arrow-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;

