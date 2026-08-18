import React, { useState } from "react";
import {
    FaBagShopping,
    FaCopy,
    FaPercent,
    FaTag,
    FaCheck,
    FaTruckFast,
    FaGift,
    FaFire,
} from "react-icons/fa6";
import "./DealCoupons.css";

export const DealCoupons = ({ onCopyCoupon }) => {
    const [copiedCode, setCopiedCode] = useState("");

    const coupons = [
        {
            code: "FLASH20",
            discount: "20% OFF",
            title: "Tech & Audio Super Saver",
            description: "Get 20% OFF instantly on orders over $99.",
            expiresIn: "Expires in 2 days",
            category: "Electronics",
            icon: <FaPercent />,
            accentColor: "#a9552f",
        },
        {
            code: "MEGA35",
            discount: "35% OFF",
            title: "Fashion & Luxury Footwear",
            description: "Save 35% on apparel, shoes & accessories.",
            expiresIn: "Limited vouchers left",
            category: "Fashion",
            icon: <FaTag />,
            accentColor: "#e53e3e",
        },
        {
            code: "FREESHIP",
            discount: "FREE SHIPPING",
            title: "Zero-Cost Express Delivery",
            description: "Enjoy complimentary fast priority shipping.",
            expiresIn: "No minimum spend",
            category: "All Orders",
            icon: <FaTruckFast />,
            accentColor: "#0284c7",
        },
        {
            code: "VIP50",
            discount: "$50 FLAT OFF",
            title: "VIP Mega Cart Reward",
            description: "Flat $50 rebate on high-value carts over $200.",
            expiresIn: "VIP Members Only",
            category: "VIP Exclusive",
            icon: <FaGift />,
            accentColor: "#10b981",
        },
    ];

    const copyCoupon = async (coupon) => {
        try {
            await navigator.clipboard.writeText(coupon.code);
            setCopiedCode(coupon.code);

            setTimeout(() => {
                setCopiedCode("");
            }, 2500);

            if (onCopyCoupon) {
                onCopyCoupon(coupon);
            }
        } catch (error) {
            console.error("Failed to copy coupon:", error);
        }
    };

    return (
        <section id="deal-coupons-section" className="deal-coupons-section">
            {/* Header */}
            <div className="deal-coupons-header">
                <span className="deal-coupons-label">
                    <FaFire /> EXTRA SAVINGS VOUCHERS
                </span>
                <h2>Stack More Discounts At Checkout</h2>
                <p>
                    Copy an exclusive promo voucher code and apply it during checkout to maximize your savings.
                </p>
            </div>

            {/* Coupons Grid */}
            <div className="deal-coupons-grid">
                {coupons.map((coupon) => (
                    <div
                        className="deal-coupon-ticket"
                        key={coupon.code}
                        style={{ "--accent-color": coupon.accentColor }}
                    >
                        {/* Notch cutouts for ticket look */}
                        <div className="coupon-notch notch-left"></div>
                        <div className="coupon-notch notch-right"></div>

                        {/* Top Banner */}
                        <div className="coupon-ticket-top">
                            <div className="coupon-icon-box" style={{ background: coupon.accentColor }}>
                                {coupon.icon}
                            </div>
                            <div className="coupon-meta-badge">
                                <span>{coupon.category}</span>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="deal-coupon-content">
                            <div className="coupon-discount-val">{coupon.discount}</div>
                            <h3 className="coupon-title">{coupon.title}</h3>
                            <p className="coupon-desc">{coupon.description}</p>
                            <span className="coupon-expiry">{coupon.expiresIn}</span>
                        </div>

                        {/* Dashed Separator */}
                        <div className="coupon-dashed-divider"></div>

                        {/* Voucher Bottom Action */}
                        <div className="coupon-bottom-action">
                            <div className="coupon-code-pill">
                                <code>{coupon.code}</code>
                            </div>

                            <button
                                type="button"
                                className={`coupon-copy-btn ${copiedCode === coupon.code ? "copied" : ""}`}
                                onClick={() => copyCoupon(coupon)}
                                title="Copy voucher code"
                            >
                                {copiedCode === coupon.code ? (
                                    <>
                                        <FaCheck /> Copied!
                                    </>
                                ) : (
                                    <>
                                        <FaCopy /> Copy
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DealCoupons;