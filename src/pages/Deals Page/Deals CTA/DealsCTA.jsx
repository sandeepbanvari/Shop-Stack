import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaBagShopping,
    FaBolt,
    FaHeart,
    FaStar,
} from "react-icons/fa6";

import "./DealsCTA.css";

export const DealsCTA = () => {
    return (
        <section className="deals-cta-section">

            {/* Background decorations */}
            <div className="cta-dots"></div>

            <div className="cta-circle cta-circle-one"></div>
            <div className="cta-circle cta-circle-two"></div>


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

                <div className="cta-icon">
                    <FaBagShopping />
                </div>


                <span className="cta-label">
                    DON'T MISS OUT
                </span>


                <h2>
                    Your Next
                    <span>Great Deal</span>
                    Is Waiting.
                </h2>


                <p>
                    Discover amazing products, exclusive offers
                    and limited-time discounts waiting for you
                    on ShopStack.
                </p>


                <div className="cta-actions">

                    <Link
                        to="/products"
                        className="cta-primary-btn"
                    >
                        Explore Products
                        <FaArrowRight />
                    </Link>


                    <Link
                        to="/"
                        className="cta-secondary-btn"
                    >
                        Continue Shopping
                    </Link>

                </div>

            </div>

        </section>
    );
};