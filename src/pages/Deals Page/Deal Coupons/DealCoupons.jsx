import { useState } from "react";
import {
    FaBagShopping,
    FaCopy,
    FaPercent,
    FaTag,
    FaCheck,
} from "react-icons/fa6";

import "./DealCoupons.css";

export const DealCoupons = () => {

    const [copiedCode, setCopiedCode] = useState("");

    const coupons = [
        {
            code: "SAVE10",
            title: "10% OFF",
            description: "Get 10% OFF on orders above ₹999",
            icon: <FaPercent />,
        },
        {
            code: "SAVE20",
            title: "20% OFF",
            description: "Get 20% OFF on orders above ₹1999",
            icon: <FaTag />,
        },
        {
            code: "FIRST50",
            title: "₹50 OFF",
            description: "Get ₹50 OFF on your first order",
            icon: <FaBagShopping />,
        },
    ];


    const copyCoupon = async (code) => {

        try {

            await navigator.clipboard.writeText(code);

            setCopiedCode(code);

            setTimeout(() => {
                setCopiedCode("");
            }, 2000);

        } catch (error) {

            console.error("Failed to copy coupon:", error);

        }

    };


    return (
        <section className="deal-coupons-section">

            {/* ==============================
                SECTION HEADER
            ============================== */}

            <div className="deal-coupons-header">

                <span className="deal-coupons-label">
                    EXTRA SAVINGS
                </span>

                <h2>
                    More Ways To Save
                </h2>

                <p>
                    Grab an exclusive coupon and save more
                    on your next ShopStack order.
                </p>

            </div>


            {/* ==============================
                COUPON CARDS
            ============================== */}

            <div className="deal-coupons-grid">

                {coupons.map((coupon) => (

                    <div
                        className="deal-coupon-card"
                        key={coupon.code}
                    >

                        {/* Decorative circles */}

                        <div className="coupon-decoration-left"></div>

                        <div className="coupon-decoration-right"></div>


                        {/* Icon */}

                        <div className="deal-coupon-icon">
                            {coupon.icon}
                        </div>


                        {/* Content */}

                        <div className="deal-coupon-content">

                            <span>
                                SPECIAL OFFER
                            </span>

                            <h3>
                                {coupon.title}
                            </h3>

                            <div className="coupon-code">
                                {coupon.code}
                            </div>

                            <p>
                                {coupon.description}
                            </p>

                        </div>


                        {/* Copy Button */}

                        <button
                            type="button"
                            className={`coupon-copy-btn ${
                                copiedCode === coupon.code
                                    ? "copied"
                                    : ""
                            }`}
                            onClick={() => copyCoupon(coupon.code)}
                        >

                            {copiedCode === coupon.code ? (
                                <>
                                    <FaCheck />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <FaCopy />
                                    Copy Code
                                </>
                            )}

                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
};