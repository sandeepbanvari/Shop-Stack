import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaClock,
    FaTag,
    FaPercent,
    FaBagShopping,
    FaBolt,
    FaFire,
    FaTruckFast,
    FaShieldHalved,
    FaArrowRotateLeft,
    FaUsers,
} from "react-icons/fa6";
import "./DealsHero.css";

export const DealsHero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 38,
        seconds: 45,
    });

    const [liveShoppers, setLiveShoppers] = useState(1482);

    // Live ticking countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                } else {
                    // Loop timer for dynamic showcase
                    days = 2;
                    hours = 14;
                    minutes = 38;
                    seconds = 45;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Random shopper count fluctuation for realistic live urgency
    useEffect(() => {
        const shopperInterval = setInterval(() => {
            setLiveShoppers((prev) => {
                const delta = Math.floor(Math.random() * 7) - 3;
                return Math.max(1350, Math.min(1600, prev + delta));
            });
        }, 4000);

        return () => clearInterval(shopperInterval);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="deals-hero-container">
            <div className="deals-hero">
                {/* Background Decorations */}
                <div className="hero-dot-pattern"></div>
                <div className="hero-circle hero-circle-one"></div>
                <div className="hero-circle hero-circle-two"></div>
                <div className="hero-glow-orb"></div>

                {/* Left Content Area */}
                <div className="deals-hero-content">
                    {/* Live Urgency Badge */}
                    <div className="deals-live-bar">
                        <div className="deals-label">
                            <FaBolt className="bolt-icon" />
                            <span>LIMITED TIME MEGA SALE</span>
                        </div>
                        <div className="deals-shoppers-badge">
                            <span className="live-shopper-pulse"></span>
                            <FaUsers />
                            <span>{liveShoppers.toLocaleString()} shopping live</span>
                        </div>
                    </div>

                    {/* Main Headings */}
                    <h1 className="deals-hero-h1">
                        Deals You'll Love.
                        <span className="deals-hero-gradient-text">Prices You'll Remember.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="deals-hero-desc">
                        Unlock up to <strong>70% OFF</strong> across premium electronics, luxury apparel,
                        designer beauty & smart home essentials. Verified deals ending soon!
                    </p>

                    {/* Countdown Timer */}
                    <div className="deals-countdown-section">
                        <div className="deal-timer-title">
                            <FaClock className="clock-icon" />
                            <span>Mega Flash Sale Ends In</span>
                        </div>

                        <div className="deal-timer">
                            {/* Days */}
                            <div className="timer-box">
                                <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
                                <span>DAYS</span>
                            </div>

                            <div className="timer-colon">:</div>

                            {/* Hours */}
                            <div className="timer-box">
                                <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
                                <span>HOURS</span>
                            </div>

                            <div className="timer-colon">:</div>

                            {/* Minutes */}
                            <div className="timer-box">
                                <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
                                <span>MINS</span>
                            </div>

                            <div className="timer-colon">:</div>

                            {/* Seconds */}
                            <div className="timer-box">
                                <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
                                <span>SECS</span>
                            </div>
                        </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="deals-hero-actions">
                        <button
                            type="button"
                            className="shop-deals-btn"
                            onClick={() => scrollToSection("deals-grid-section")}
                        >
                            <FaFire />
                            <span>Shop Flash Deals</span>
                            <FaArrowRight />
                        </button>

                        <button
                            type="button"
                            className="view-coupons-btn"
                            onClick={() => scrollToSection("deal-coupons-section")}
                        >
                            <FaTag />
                            <span>Claim Coupons</span>
                        </button>
                    </div>
                </div>

                {/* Right Visual Area */}
                <div className="hero-deal-visual">
                    {/* Main discount badge */}
                    <div className="discount-circle">
                        <FaPercent className="discount-percent-icon" />
                        <strong>70%</strong>
                        <span>UP TO OFF</span>
                    </div>

                    {/* Floating Badges */}
                    <div className="floating-tag">
                        <FaTag />
                        <span>BEST PRICE MATCH</span>
                    </div>

                    <div className="floating-bag">
                        <FaBagShopping />
                    </div>

                    <div className="floating-fast-ship">
                        <FaTruckFast />
                        <span>FREE EXPRESS DISPATCH</span>
                    </div>

                    {/* Decorative Concentric Rings */}
                    <div className="visual-ring visual-ring-one"></div>
                    <div className="visual-ring visual-ring-two"></div>
                </div>
            </div>

            {/* Perks & Trust Badges Row */}
            <div className="deals-perks-row">
                <div className="deals-perk-card">
                    <div className="deals-perk-icon fire-icon">
                        <FaFire />
                    </div>
                    <div className="deals-perk-info">
                        <h4>Flash Discounts</h4>
                        <p>Save up to 70% on verified retail brands</p>
                    </div>
                </div>

                <div className="deals-perk-card">
                    <div className="deals-perk-icon truck-icon">
                        <FaTruckFast />
                    </div>
                    <div className="deals-perk-info">
                        <h4>Free Express Delivery</h4>
                        <p>Fast dispatch on all flash deal orders</p>
                    </div>
                </div>

                <div className="deals-perk-card">
                    <div className="deals-perk-icon shield-icon">
                        <FaShieldHalved />
                    </div>
                    <div className="deals-perk-info">
                        <h4>100% Genuine Guarantee</h4>
                        <p>Direct authentic supply from verified brands</p>
                    </div>
                </div>

                <div className="deals-perk-card">
                    <div className="deals-perk-icon return-icon">
                        <FaArrowRotateLeft />
                    </div>
                    <div className="deals-perk-info">
                        <h4>30-Day Hassle Free Returns</h4>
                        <p>Instant refunds & zero-cost returns</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealsHero;