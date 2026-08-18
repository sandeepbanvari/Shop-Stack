import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaBagShopping,
    FaBolt,
    FaHeart,
    FaStar,
    FaEnvelope,
    FaCheck,
    FaGift,
} from "react-icons/fa6";
import "./DealsCTA.css";

export const DealsCTA = ({ onNewsletterSubmit }) => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !email.includes("@")) return;

        setIsSubmitted(true);
        if (onNewsletterSubmit) {
            onNewsletterSubmit(email);
        }
    };

    return (
        <section className="deals-cta-section">
            {/* Background decorations */}
            <div className="cta-dots"></div>
            <div className="cta-circle cta-circle-one"></div>
            <div className="cta-circle cta-circle-two"></div>
            <div className="cta-glow-mesh"></div>

            {/* Floating decorations */}
            <div className="cta-floating cta-floating-one">
                <FaStar />
            </div>

            <div className="cta-floating cta-floating-two">
                <FaHeart />
            </div>

            <div className="cta-floating cta-floating-three">
                <FaBolt />
            </div>

            {/* Main content */}
            <div className="deals-cta-content">
                <div className="cta-icon-wrapper">
                    <FaBagShopping />
                </div>

                <span className="cta-label">
                    <FaGift /> VIP EARLY FLASH ACCESS
                </span>

                <h2 className="cta-heading">
                    Never Miss A <span>Great Deal</span> Again.
                </h2>

                <p className="cta-description">
                    Join 45,000+ smart shoppers. Get instant flash sale alerts, secret 24-hour drops, and a
                    <strong> flat 15% VIP discount voucher</strong> directly in your inbox.
                </p>

                {/* Newsletter Form */}
                <div className="cta-newsletter-wrapper">
                    {isSubmitted ? (
                        <div className="cta-success-box">
                            <div className="cta-success-icon">
                                <FaCheck />
                            </div>
                            <div>
                                <h4>You're on the VIP Flash List!</h4>
                                <p>Use code <strong>VIP15NOW</strong> for 15% off your next purchase.</p>
                            </div>
                        </div>
                    ) : (
                        <form className="cta-email-form" onSubmit={handleSubmit}>
                            <div className="cta-input-box">
                                <FaEnvelope className="cta-envelope-icon" />
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-label="Email for deals newsletter"
                                />
                            </div>
                            <button type="submit" className="cta-submit-btn">
                                <span>Get 15% VIP Pass</span>
                                <FaArrowRight />
                            </button>
                        </form>
                    )}
                </div>

                {/* Secondary Actions */}
                <div className="cta-actions">
                    <Link to="/products" className="cta-primary-btn">
                        Explore Full Catalog
                        <FaArrowRight />
                    </Link>

                    <Link to="/" className="cta-secondary-btn">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DealsCTA;