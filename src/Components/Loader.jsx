import { useEffect, useState } from "react";
import "./Loader.css";

const LOADING_MESSAGES = [
  "Preparing your shopping experience...",
  "Curating handpicked deals & collections...",
  "Setting up your personal storefront...",
  "Loading fresh trends & catalog...",
];

export const Loader = ({
  message,
  subtext,
  fullScreen = true,
}) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (message) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [message]);

  const activeMessage = message || LOADING_MESSAGES[messageIndex];

  return (
    <div
      className={`shopstack-lazy-loader ${fullScreen ? "fullscreen" : "inline"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {/* Ambient background glow orbs */}
      <div className="lazy-loader-ambient" aria-hidden="true">
        <span className="ambient-orb ambient-orb-1" />
        <span className="ambient-orb ambient-orb-2" />
        <span className="ambient-orb ambient-orb-3" />
      </div>

      {/* Centerpiece Frosted Glass Card */}
      <div className="lazy-loader-card">
        {/* Brand Tag Badge */}
        <div className="lazy-loader-badge">
          <span className="badge-pulse-dot" />
          <span className="badge-text">ShopStack Store</span>
        </div>

        {/* Centerpiece Emblem with Double Orbital Rings */}
        <div className="lazy-loader-emblem-wrap">
          {/* Outer Rotating Glowing Ring */}
          <div className="orbital-ring orbital-outer" />

          {/* Orbiting Satellite Dot */}
          <div className="orbital-satellite-track">
            <span className="orbital-satellite-dot" />
          </div>

          {/* Inner Counter-Rotating Ring */}
          <div className="orbital-ring orbital-inner" />

          {/* Central Logo Badge */}
          <div className="lazy-loader-logo-disk">
            {!imageError ? (
              <img
                src="/ShopStack-Shopping-Logo.png"
                alt="ShopStack"
                className="lazy-loader-logo-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="lazy-loader-fallback-logo">
                <i className="fa-solid fa-bag-shopping" />
              </div>
            )}
          </div>
        </div>

        {/* Brand Title */}
        <h2 className="lazy-loader-brand">
          Shop<span className="brand-accent">Stack</span>
        </h2>

        {/* Indeterminate Shimmer Progress Bar */}
        <div className="lazy-loader-progress-track">
          <div className="lazy-loader-progress-bar" />
        </div>

        {/* Dynamic Rotating Status Message */}
        <div className="lazy-loader-status">
          <span key={activeMessage} className="status-text">
            {activeMessage}
          </span>
          <span className="status-dots" aria-hidden="true">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
          </span>
        </div>

        {/* Optional Secondary Subtext */}
        {subtext && <p className="lazy-loader-subtext">{subtext}</p>}
      </div>
    </div>
  );
};

export default Loader;