import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { ProductCard } from "../Components/ProductCard";
import { FaFire, FaBolt, FaTag, FaShieldHalved, FaTruckFast } from "react-icons/fa6";
import "./Deals.css";

export const Deals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");

    // Countdown Timer state: Initialized around 2h 14m 35s
    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 14,
        seconds: 35
    });

    // Real-time ticking countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
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
                    // Reset to loop for endless live demo feel
                    hours = 2;
                    minutes = 14;
                    seconds = 35;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Format numbers with leading zeros (e.g., 02 : 14 : 35)
    const formatNumber = (num) => String(num).padStart(2, "0");

    // Fetch Deals / Discounted Products from API
    useEffect(() => {
        async function fetchDeals() {
            try {
                setLoading(true);
                const { data } = await axios.get("https://dummyjson.com/products?limit=100");
                const allProducts = data.products || [];

                // Filter products with good discounts and sort highest discount first
                const dealProducts = allProducts
                    .filter((p) => p.discountPercentage && p.discountPercentage >= 10)
                    .sort((a, b) => b.discountPercentage - a.discountPercentage);

                setProducts(dealProducts);
            } catch (error) {
                console.error("Error fetching deals:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchDeals();
    }, []);

    // Filter deals based on active category / discount tab
    const filteredProducts = products.filter((p) => {
        if (activeTab === "top70") return p.discountPercentage >= 18;
        if (activeTab === "tech") return p.category?.includes("phone") || p.category?.includes("laptop") || p.category?.includes("smart");
        if (activeTab === "fashion") return p.category?.includes("dress") || p.category?.includes("shirt") || p.category?.includes("shoes") || p.category?.includes("watch");
        if (activeTab === "beauty") return p.category?.includes("beauty") || p.category?.includes("fragrance") || p.category?.includes("skin");
        return true;
    });

    const scrollToDeals = () => {
        const section = document.getElementById("deals-showcase");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="deals-page">
            <Header />

            {/* =========================================================
                🔥 MEGA DEALS HERO BANNER
            ========================================================= */}
            <section className="deals-hero">
                <div className="deals-hero-content">

                    {/* 🔥 MEGA DEALS ARE LIVE */}
                    <div className="deals-live-badge">
                        <FaFire className="deals-fire-icon" />
                        <span>🔥 MEGA DEALS ARE LIVE</span>
                    </div>

                    {/* UP TO 70% OFF */}
                    <h1 className="deals-main-title">
                        UP TO 70% OFF
                    </h1>

                    {/* Discover amazing products at unbelievable prices */}
                    <p className="deals-subtitle">
                        Discover amazing products
                        <span>at unbelievable prices</span>
                    </p>

                    {/* [ SHOP DEALS ] */}
                    <button className="shop-deals-btn" onClick={scrollToDeals}>
                        <FaBolt /> SHOP DEALS
                    </button>

                    {/* Ends in 02 : 14 : 35 */}
                    <div className="deals-timer-wrapper">
                        <span className="deals-timer-label">Ends in</span>
                        <div className="deals-countdown-box">
                            <div className="timer-unit">
                                <span className="timer-digit">{formatNumber(timeLeft.hours)}</span>
                                <span className="timer-tag">Hours</span>
                            </div>
                            <span className="timer-colon">:</span>
                            <div className="timer-unit">
                                <span className="timer-digit">{formatNumber(timeLeft.minutes)}</span>
                                <span className="timer-tag">Mins</span>
                            </div>
                            <span className="timer-colon">:</span>
                            <div className="timer-unit">
                                <span className="timer-digit">{formatNumber(timeLeft.seconds)}</span>
                                <span className="timer-tag">Secs</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================================
                PERKS ROW
            ========================================================= */}
            <div className="deals-perks-row">
                <div className="deals-perk-card">
                    <div className="deals-perk-icon" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#ef4444" }}>
                        <FaFire />
                    </div>
                    <div className="deals-perk-info">
                        <h4>Flash Discounts</h4>
                        <p>Save up to 70% on top gear</p>
                    </div>
                </div>

                <div className="deals-perk-card">
                    <div className="deals-perk-icon" style={{ background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }}>
                        <FaTruckFast />
                    </div>
                    <div className="deals-perk-info">
                        <h4>Express Delivery</h4>
                        <p>Free priority shipping on all deals</p>
                    </div>
                </div>

                <div className="deals-perk-card">
                    <div className="deals-perk-icon" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10b981" }}>
                        <FaShieldHalved />
                    </div>
                    <div className="deals-perk-info">
                        <h4>100% Genuine</h4>
                        <p>Direct from verified top brands</p>
                    </div>
                </div>

                <div className="deals-perk-card">
                    <div className="deals-perk-icon" style={{ background: "rgba(236, 72, 153, 0.15)", color: "#ec4899" }}>
                        <FaTag />
                    </div>
                    <div className="deals-perk-info">
                        <h4>Limited Quantities</h4>
                        <p>Deals expire when stock runs out</p>
                    </div>
                </div>
            </div>

            {/* =========================================================
                DEALS PRODUCTS SHOWCASE
            ========================================================= */}
            <section id="deals-showcase" className="deals-section">
                <div className="deals-filter-bar">
                    <div className="deals-filter-heading">
                        <h3>
                            <FaBolt style={{ color: "#ff4b2b" }} /> Hot Flash Deals
                        </h3>
                        <p>Grab your favorites before the timer runs out!</p>
                    </div>

                    <div className="deals-tabs">
                        <button
                            className={`deals-tab-btn ${activeTab === "all" ? "active" : ""}`}
                            onClick={() => setActiveTab("all")}
                        >
                            All Deals ({products.length})
                        </button>
                        <button
                            className={`deals-tab-btn ${activeTab === "top70" ? "active" : ""}`}
                            onClick={() => setActiveTab("top70")}
                        >
                            🔥 Best Discounts
                        </button>
                        <button
                            className={`deals-tab-btn ${activeTab === "tech" ? "active" : ""}`}
                            onClick={() => setActiveTab("tech")}
                        >
                            📱 Tech & Gadgets
                        </button>
                        <button
                            className={`deals-tab-btn ${activeTab === "fashion" ? "active" : ""}`}
                            onClick={() => setActiveTab("fashion")}
                        >
                            👗 Fashion
                        </button>
                        <button
                            className={`deals-tab-btn ${activeTab === "beauty" ? "active" : ""}`}
                            onClick={() => setActiveTab("beauty")}
                        >
                            ✨ Beauty & Care
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="deals-loading-wrapper">
                        <div className="deals-spinner"></div>
                        <p>Loading hot mega deals...</p>
                    </div>
                ) : (
                    <div className="deals-grid">
                        {filteredProducts.slice(0, 16).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default Deals;