import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaBolt,
    FaPercent,
    FaClock,
    FaFire,
    FaShieldHalved,
    FaStar,
    FaCartShopping,
    FaCheck,
    FaMobileScreenButton,
} from "react-icons/fa6";
import "./MegaDeal.css";

export const MegaDeal = ({ onAddToCart }) => {
    const [claimed, setClaimed] = useState(false);
    const [megaTimer, setMegaTimer] = useState({
        hours: 5,
        minutes: 42,
        seconds: 19,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMegaTimer((prev) => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    hours = 5;
                    minutes = 42;
                    seconds = 19;
                }
                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const spotlightProduct = {
        id: 1001,
        title: "Apple iPhone 15 Pro Max (256GB - Natural Titanium)",
        brand: "Apple",
        category: "Smartphones",
        price: 899.99,
        originalPrice: 1199.99,
        discountPercentage: 25,
        rating: 4.9,
        thumbnail: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700&auto=format&fit=crop&q=80",
    };

    const handleClaim = () => {
        setClaimed(true);
        setTimeout(() => setClaimed(false), 2400);

        if (onAddToCart) {
            onAddToCart(spotlightProduct);
        }
    };

    return (
        <section className="mega-deal-section">
            <div className="mega-deal-card">
                {/* Background decorations */}
                <div className="mega-deal-dots"></div>
                <div className="mega-circle mega-circle-one"></div>
                <div className="mega-circle mega-circle-two"></div>
                <div className="mega-glow-effect"></div>

                {/* Left Content Area */}
                <div className="mega-content">
                    <div className="mega-top-meta">
                        <div className="mega-badge">
                            <FaFire className="mega-fire-icon" />
                            <span>DEAL OF THE DAY SPOTLIGHT</span>
                        </div>

                        <div className="mega-mini-timer">
                            <FaClock />
                            <span>
                                Ends in {String(megaTimer.hours).padStart(2, "0")}:
                                {String(megaTimer.minutes).padStart(2, "0")}:
                                {String(megaTimer.seconds).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    <h2 className="mega-title">
                        Apple iPhone 15 Pro
                        <span className="mega-gradient-text">Max Titanium Edition</span>
                    </h2>

                    <p className="mega-description">
                        Forged in aerospace-grade natural titanium with the powerhouse A17 Pro chip, customizable
                        Action button, and 48MP Pro camera system with 5x optical zoom.
                    </p>

                    {/* Features list */}
                    <div className="mega-features-list">
                        <div className="mega-feat-item">
                            <FaCheck /> <span>A17 Pro Chip with 6-Core Monster GPU</span>
                        </div>
                        <div className="mega-feat-item">
                            <FaCheck /> <span>48MP Pro Camera System + 5x Telephoto Zoom</span>
                        </div>
                        <div className="mega-feat-item">
                            <FaCheck /> <span>Aerospace-Grade Titanium & Ceramic Shield</span>
                        </div>
                        <div className="mega-feat-item">
                            <FaCheck /> <span>Official Apple 1-Year Brand Warranty</span>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="mega-price-wrapper">
                        <div className="mega-price-main">
                            <span className="mega-price-val">$899.99</span>
                            <span className="mega-price-msrp">$1,199.99</span>
                        </div>

                        <div className="mega-discount-tag">
                            <FaPercent />
                            <span>SAVE $300 (25% OFF)</span>
                        </div>
                    </div>

                    {/* Stock Progress */}
                    <div className="mega-stock-track">
                        <div className="mega-stock-labels">
                            <span>⚡ 92% Claimed by Shoppers</span>
                            <span className="mega-stock-urgency">Only 3 Units Left!</span>
                        </div>
                        <div className="mega-progress-bar">
                            <div className="mega-progress-fill" style={{ width: "92%" }}></div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mega-action-row">
                        <button
                            type="button"
                            className={`mega-claim-button ${claimed ? "is-claimed" : ""}`}
                            onClick={handleClaim}
                        >
                            {claimed ? (
                                <>
                                    <FaCheck /> Added to Bag!
                                </>
                            ) : (
                                <>
                                    <FaCartShopping /> Claim iPhone Deal
                                </>
                            )}
                        </button>

                        <Link to="/products" className="mega-browse-all">
                            Browse All Phones <FaArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Right Visual Area */}
                <div className="mega-visual">
                    <div className="mega-product-frame">
                        <img
                            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700&auto=format&fit=crop&q=80"
                            alt="Apple iPhone 15 Pro Max Spotlight Deal"
                            className="mega-product-img"
                        />
                    </div>

                    {/* Floating percentage badge */}
                    <div className="mega-floating-percent">
                        <strong>25%</strong>
                        <span>OFF</span>
                    </div>

                    {/* Floating star review */}
                    <div className="mega-floating-tag">
                        <FaStar style={{ color: "#fbbf24" }} />
                        <span>4.9 (4.8k+ Reviews)</span>
                    </div>

                    <div className="mega-floating-guarantee">
                        <FaShieldHalved />
                        <span>Official Apple Warranty</span>
                    </div>

                    {/* Decorative rings */}
                    <div className="mega-ring mega-ring-one"></div>
                    <div className="mega-ring mega-ring-two"></div>
                </div>
            </div>
        </section>
    );
};

export default MegaDeal;