import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    FaFire,
    FaBolt,
    FaStar,
    FaHeart,
    FaCartShopping,
    FaMagnifyingGlass,
    FaArrowDownShortWide,
    FaTag,
    FaCheck,
    FaShieldHalved,
    FaEye,
} from "react-icons/fa6";
import "./DealsGrid.css";

export const DealsGrid = ({ onAddToCart, onToggleWishlist, wishlistIds = [] }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("discount-desc");
    const [addedProducts, setAddedProducts] = useState({});

    // Fetch deals products
    useEffect(() => {
        let isMounted = true;

        async function fetchDealsData() {
            try {
                setLoading(true);
                const { data } = await axios.get("https://dummyjson.com/products?limit=100");
                if (!isMounted) return;

                const allItems = data.products || [];
                // Filter for products that have a discount percentage >= 8%
                const dealsOnly = allItems.filter(
                    (p) => p.discountPercentage && p.discountPercentage >= 8
                );

                setProducts(dealsOnly.length > 0 ? dealsOnly : allItems);
                setError(null);
            } catch (err) {
                console.error("Deals fetch error:", err);
                if (isMounted) {
                    setError("Failed to load deals. Please refresh or try again.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchDealsData();

        return () => {
            isMounted = false;
        };
    }, []);

    // Category Filter & Search Logic
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            // Category check
            const cat = (p.category || "").toLowerCase();
            const disc = p.discountPercentage || 0;
            const price = p.price || 0;

            let matchesCategory = true;
            if (activeCategory === "top50") matchesCategory = disc >= 15;
            else if (activeCategory === "tech") {
                matchesCategory =
                    cat.includes("laptop") ||
                    cat.includes("smart") ||
                    cat.includes("phone") ||
                    cat.includes("tablet") ||
                    cat.includes("audio");
            } else if (activeCategory === "fashion") {
                matchesCategory =
                    cat.includes("shirt") ||
                    cat.includes("dress") ||
                    cat.includes("shoes") ||
                    cat.includes("watch") ||
                    cat.includes("bag") ||
                    cat.includes("cloth") ||
                    cat.includes("jewel") ||
                    cat.includes("sunglass");
            } else if (activeCategory === "beauty") {
                matchesCategory =
                    cat.includes("beauty") ||
                    cat.includes("skin") ||
                    cat.includes("fragrance");
            } else if (activeCategory === "home") {
                matchesCategory =
                    cat.includes("furniture") ||
                    cat.includes("home") ||
                    cat.includes("kitchen") ||
                    cat.includes("grocer");
            } else if (activeCategory === "under50") {
                matchesCategory = price <= 50;
            }

            // Search query check
            let matchesSearch = true;
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                const title = (p.title || "").toLowerCase();
                const brand = (p.brand || "").toLowerCase();
                matchesSearch = title.includes(query) || brand.includes(query) || cat.includes(query);
            }

            return matchesCategory && matchesSearch;
        });
    }, [products, activeCategory, searchQuery]);

    // Sorting Logic
    const sortedProducts = useMemo(() => {
        const list = [...filteredProducts];

        if (sortBy === "discount-desc") {
            list.sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
        } else if (sortBy === "price-asc") {
            list.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
            list.sort((a, b) => b.price - a.price);
        } else if (sortBy === "rating-desc") {
            list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        return list;
    }, [filteredProducts, sortBy]);

    const handleAddToCartClick = (e, product) => {
        e.preventDefault();
        e.stopPropagation();

        setAddedProducts((prev) => ({ ...prev, [product.id]: true }));
        setTimeout(() => {
            setAddedProducts((prev) => ({ ...prev, [product.id]: false }));
        }, 2200);

        if (onAddToCart) {
            onAddToCart(product);
        }
    };

    const handleWishlistClick = (e, product) => {
        e.preventDefault();
        e.stopPropagation();

        if (onToggleWishlist) {
            onToggleWishlist(product);
        }
    };

    // Calculate stock percentage claimed based on product id
    const getStockPercentage = (id) => {
        return 60 + ((id * 7) % 36); // Produces 60% to 95%
    };

    const getStockRemaining = (id) => {
        return Math.max(2, 12 - (id % 10)); // Produces 2 to 12 items left
    };

    return (
        <section id="deals-grid-section" className="deals-grid-section">
            {/* Section Header */}
            <div className="deals-grid-header">
                <div className="deals-grid-title-area">
                    <div className="deals-grid-badge">
                        <FaBolt className="bolt-flash" />
                        <span>LIVE FLASH SHOWCASE</span>
                    </div>
                    <h2>Today's Exclusive Flash Steals</h2>
                    <p>High-demand products with massive discounts. Stocks are strictly limited per user.</p>
                </div>

                {/* Filter and Search Toolbar */}
                <div className="deals-toolbar">
                    <div className="deals-search-box">
                        <FaMagnifyingGlass className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search deals by product, brand or category..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search flash deals"
                        />
                        {searchQuery && (
                            <button
                                className="clear-search-btn"
                                onClick={() => setSearchQuery("")}
                                title="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <div className="deals-sort-box">
                        <FaArrowDownShortWide className="sort-icon" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            aria-label="Sort Deals"
                        >
                            <option value="discount-desc">🔥 Highest Discount</option>
                            <option value="price-asc">💵 Price: Low to High</option>
                            <option value="price-desc">💎 Price: High to Low</option>
                            <option value="rating-desc">⭐ Top Customer Rating</option>
                        </select>
                    </div>
                </div>

                {/* Category Filter Pills */}
                <div className="deals-category-nav">
                    <button
                        className={`deals-category-btn ${activeCategory === "all" ? "active" : ""}`}
                        onClick={() => setActiveCategory("all")}
                    >
                        <FaBolt /> All Steals ({products.length})
                    </button>
                    <button
                        className={`deals-category-btn ${activeCategory === "top50" ? "active" : ""}`}
                        onClick={() => setActiveCategory("top50")}
                    >
                        <FaFire /> 15%+ Mega Discounts
                    </button>
                    <button
                        className={`deals-category-btn ${activeCategory === "tech" ? "active" : ""}`}
                        onClick={() => setActiveCategory("tech")}
                    >
                        📱 Tech & Gadgets
                    </button>
                    <button
                        className={`deals-category-btn ${activeCategory === "fashion" ? "active" : ""}`}
                        onClick={() => setActiveCategory("fashion")}
                    >
                        👗 Fashion & Style
                    </button>
                    <button
                        className={`deals-category-btn ${activeCategory === "beauty" ? "active" : ""}`}
                        onClick={() => setActiveCategory("beauty")}
                    >
                        ✨ Beauty & Scents
                    </button>
                    <button
                        className={`deals-category-btn ${activeCategory === "home" ? "active" : ""}`}
                        onClick={() => setActiveCategory("home")}
                    >
                        🛋️ Home & Living
                    </button>
                    <button
                        className={`deals-category-btn ${activeCategory === "under50" ? "active" : ""}`}
                        onClick={() => setActiveCategory("under50")}
                    >
                        🏷️ Under $50
                    </button>
                </div>
            </div>

            {/* Content Display */}
            {loading ? (
                <div className="deals-loading-state">
                    <div className="deals-loading-spinner"></div>
                    <h3>Curating live discounts...</h3>
                    <p>Fetching the best verified bargains just for you.</p>
                </div>
            ) : error ? (
                <div className="deals-error-state">
                    <p>{error}</p>
                    <button
                        className="deals-retry-btn"
                        onClick={() => window.location.reload()}
                    >
                        Reload Deals
                    </button>
                </div>
            ) : sortedProducts.length === 0 ? (
                <div className="deals-empty-state">
                    <div className="empty-icon-wrapper">
                        <FaTag />
                    </div>
                    <h3>No Deals Matched Your Filters</h3>
                    <p>Try clearing your search query or selecting a different category tab.</p>
                    <button
                        className="reset-filters-btn"
                        onClick={() => {
                            setActiveCategory("all");
                            setSearchQuery("");
                        }}
                    >
                        Reset All Filters
                    </button>
                </div>
            ) : (
                <>
                    <div className="deals-count-banner">
                        <span>Showing <strong>{sortedProducts.length}</strong> active flash bargains</span>
                    </div>

                    <div className="deals-cards-grid">
                        {sortedProducts.map((product) => {
                            const discountPct = Math.round(product.discountPercentage || 15);
                            const currentPrice = Number(product.price);
                            // Calculate original MSRP price
                            const originalPrice = (
                                currentPrice / (1 - discountPct / 100)
                            ).toFixed(2);
                            const dollarsSaved = (originalPrice - currentPrice).toFixed(2);

                            const stockClaimed = getStockPercentage(product.id);
                            const stockLeft = getStockRemaining(product.id);
                            const isAdded = !!addedProducts[product.id];
                            const isWishlisted = wishlistIds.includes(product.id);

                            return (
                                <div key={product.id} className="deal-item-card">
                                    {/* Discount Badge */}
                                    <div className="deal-badge-pill">
                                        <FaFire /> {discountPct}% OFF
                                    </div>

                                    {/* Wishlist Button */}
                                    <button
                                        type="button"
                                        className={`deal-wishlist-toggle ${isWishlisted ? "wishlisted" : ""}`}
                                        onClick={(e) => handleWishlistClick(e, product)}
                                        aria-label="Wishlist"
                                        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                                    >
                                        <FaHeart />
                                    </button>

                                    {/* Card Main Link */}
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="deal-item-clickable"
                                    >
                                        {/* Product Image Container */}
                                        <div className="deal-image-wrapper">
                                            <img
                                                src={product.thumbnail}
                                                alt={product.title}
                                                loading="lazy"
                                            />
                                            <div className="deal-quickview-overlay">
                                                <span><FaEye /> View Details</span>
                                            </div>
                                        </div>

                                        {/* Meta Information */}
                                        <div className="deal-item-body">
                                            <div className="deal-brand-row">
                                                <span className="deal-brand-name">
                                                    {product.brand || product.category || "ShopStack"}
                                                </span>
                                                <div className="deal-rating-pill">
                                                    <FaStar className="star-gold" />
                                                    <span>{product.rating ? Number(product.rating).toFixed(1) : "4.8"}</span>
                                                </div>
                                            </div>

                                            <h3 className="deal-item-title" title={product.title}>
                                                {product.title}
                                            </h3>

                                            <p className="deal-item-desc" title={product.description}>
                                                {product.description}
                                            </p>

                                            {/* Price and Savings */}
                                            <div className="deal-pricing-container">
                                                <div className="deal-current-price">
                                                    <span className="price-currency">$</span>
                                                    {currentPrice.toFixed(2)}
                                                </div>
                                                <div className="deal-original-price">
                                                    ${originalPrice}
                                                </div>
                                                <div className="deal-savings-tag">
                                                    Save ${dollarsSaved}
                                                </div>
                                            </div>

                                            {/* Scarcity Progress Bar */}
                                            <div className="deal-stock-box">
                                                <div className="deal-stock-info">
                                                    <span className="claimed-text">
                                                        <FaBolt /> {stockClaimed}% Claimed
                                                    </span>
                                                    <span className="stock-remaining-text">
                                                        Only {stockLeft} Left!
                                                    </span>
                                                </div>
                                                <div className="deal-progress-track">
                                                    <div
                                                        className="deal-progress-fill"
                                                        style={{ width: `${stockClaimed}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Action Buttons */}
                                    <div className="deal-card-actions">
                                        <button
                                            type="button"
                                            className={`deal-claim-btn ${isAdded ? "claimed" : ""}`}
                                            onClick={(e) => handleAddToCartClick(e, product)}
                                        >
                                            {isAdded ? (
                                                <>
                                                    <FaCheck /> Added to Bag!
                                                </>
                                            ) : (
                                                <>
                                                    <FaCartShopping /> Claim Deal
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
};

export default DealsGrid;
