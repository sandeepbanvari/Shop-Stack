import React, { useState } from "react";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { DealsHero } from "./Deals Hero/DealsHero";
import { DealsSchedule } from "./Deals Schedule/DealsSchedule";
import { DealsGrid } from "./Deals Grid/DealsGrid";
import { MegaDeal } from "./Mega Deal/MegaDeal";
import { DealCoupons } from "./Deal Coupons/DealCoupons";
import { DealsCTA } from "./Deals CTA/DealsCTA";
import { FaCircleCheck, FaBell, FaBagShopping, FaCopy, FaHeart } from "react-icons/fa6";
import "./DealsPage.css";

export const DealsPage = () => {
    const [toast, setToast] = useState(null);
    const [wishlistIds, setWishlistIds] = useState([]);

    const showToast = (message, iconType = "check") => {
        setToast({ message, iconType });
        setTimeout(() => {
            setToast((prev) => (prev?.message === message ? null : prev));
        }, 3200);
    };

    // Handler when item is claimed/added to cart
    const handleAddToCart = (product) => {
        showToast(
            `"${product.title?.substring(0, 26)}..." added to your bag!`,
            "cart"
        );
    };

    // Handler when wishlist is toggled
    const handleToggleWishlist = (product) => {
        setWishlistIds((prev) => {
            const exists = prev.includes(product.id);
            if (exists) {
                showToast(`Removed from your wishlist`, "heart");
                return prev.filter((id) => id !== product.id);
            } else {
                showToast(`Added to your wishlist!`, "heart");
                return [...prev, product.id];
            }
        });
    };

    // Handler when drop reminder is toggled
    const handleSetReminder = (slot, isSet) => {
        if (isSet) {
            showToast(`🔔 Reminder set! We'll notify you for the ${slot.time} drop.`, "bell");
        } else {
            showToast(`Reminder removed for ${slot.time} drop.`, "bell");
        }
    };

    // Handler when coupon is copied
    const handleCopyCoupon = (coupon) => {
        showToast(`Coupon code ${coupon.code} copied! Apply at checkout for ${coupon.discount}.`, "copy");
    };

    // Handler when newsletter is submitted
    const handleNewsletterSubmit = (email) => {
        showToast(`Welcome! 15% VIP Voucher sent to ${email}`, "check");
    };

    return (
        <div className="deals-page-container">
            <Header />

            {/* Floating Toast Notification */}
            {toast && (
                <div className="deals-floating-toast">
                    <div className="toast-icon-wrap">
                        {toast.iconType === "cart" && <FaBagShopping />}
                        {toast.iconType === "copy" && <FaCopy />}
                        {toast.iconType === "bell" && <FaBell />}
                        {toast.iconType === "heart" && <FaHeart />}
                        {toast.iconType === "check" && <FaCircleCheck />}
                    </div>
                    <span className="toast-message-text">{toast.message}</span>
                </div>
            )}

            {/* 1. Hero & Perks */}
            <DealsHero />

            {/* 2. Daily Flash Drop Rounds & Timers */}
            <DealsSchedule onSetReminder={handleSetReminder} />

            {/* 3. Live Flash Deals Showcase & Searchable Grid */}
            <DealsGrid
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
            />

            {/* 4. Weekend Mega Deal Spotlight Banner */}
            <MegaDeal onAddToCart={handleAddToCart} />

            {/* 5. Interactive Promo Coupons & Vouchers */}
            <DealCoupons onCopyCoupon={handleCopyCoupon} />

            {/* 6. VIP Early Access Newsletter & CTA */}
            <DealsCTA onNewsletterSubmit={handleNewsletterSubmit} />

            <Footer />
        </div>
    );
};

export default DealsPage;