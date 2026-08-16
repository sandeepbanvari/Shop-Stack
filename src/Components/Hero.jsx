import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">

          <span className="hero-badge">
            ✨ New Collection 2026
          </span>

          <h1 className="hero-title">
            Everything You Need. <br />
            <span className="accent-text">All in One Place.</span>
          </h1>

          <p className="hero-description">
            Discover quality products, exclusive deals, and everyday essentials
            carefully selected to make your shopping experience better.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-btn primary-btn"
            >
              Shop Collection
            </Link>

            <Link
              to="/deals"
              className="hero-btn secondary-btn"
            >
              View Deals
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};
