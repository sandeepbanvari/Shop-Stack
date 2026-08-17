import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaBagShopping,
    FaBolt,
    FaPercent,
} from "react-icons/fa6";

import "./MegaDeal.css";

export const MegaDeal = () => {
    return (
        <section className="mega-deal-section">

            <div className="mega-deal-card">

                {/* Background decoration */}
                <div className="mega-deal-dots"></div>

                <div className="mega-circle mega-circle-one"></div>
                <div className="mega-circle mega-circle-two"></div>


                {/* ===============================
                    LEFT CONTENT
                =============================== */}

                <div className="mega-content">

                    <div className="mega-badge">
                        <FaBolt />
                        <span>WEEKEND SPECIAL</span>
                    </div>

                    <h2>
                        Mega
                        <span>Deal</span>
                    </h2>

                    <p>
                        Upgrade your lifestyle with amazing
                        products at unbeatable prices.
                    </p>

                    <div className="mega-discount">
                        <FaPercent />

                        <strong>50%</strong>

                        <span>OFF</span>
                    </div>

                    <Link
                        to="/products"
                        className="mega-btn"
                    >
                        Shop Collection
                        <FaArrowRight />
                    </Link>

                </div>


                {/* ===============================
                    RIGHT VISUAL
                =============================== */}

                <div className="mega-visual">

                    <div className="mega-product-circle">

                        <FaBagShopping />

                    </div>


                    {/* Floating percentage */}

                    <div className="mega-floating-percent">
                        <strong>50%</strong>
                        <span>OFF</span>
                    </div>


                    {/* Floating tag */}

                    <div className="mega-floating-tag">
                        <FaBolt />
                        HOT DEAL
                    </div>


                    {/* Decorative rings */}

                    <div className="mega-ring mega-ring-one"></div>
                    <div className="mega-ring mega-ring-two"></div>

                </div>

            </div>

        </section>
    );
};