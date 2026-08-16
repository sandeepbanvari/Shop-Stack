import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import "./SinglePageProduct.css";

export const SinglePageProduct = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    let [product, setProduct] = useState(null);
    let [quantity, setQuantity] = useState(1);
    let [cartMsg, setCartMsg] = useState("");

    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                console.log(data);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        getProducts();
    }, [id]);

    const handleAddToCart = () => {
        setCartMsg("Added to cart!");
        setTimeout(() => setCartMsg(""), 2500);
    };

    const renderStars = (rating) => {
        const full = Math.floor(rating || 0);
        const half = (rating % 1) >= 0.5;
        return (
            <span className="stars">
                {"★".repeat(full)}
                {half ? "½" : ""}
                {"☆".repeat(Math.max(0, 5 - full - (half ? 1 : 0)))}
            </span>
        );
    };

    if (!product) {
        return (
            <>
                <Header />
                <section className="spd-loading">
                    <div className="spd-loading-container">
                        <div className="spd-shimmer spd-shimmer-img"></div>
                        <div className="spd-loading-details">
                            <div className="spd-shimmer spd-shimmer-line w60"></div>
                            <div className="spd-shimmer spd-shimmer-line w40"></div>
                            <div className="spd-shimmer spd-shimmer-line w80"></div>
                            <div className="spd-shimmer spd-shimmer-line w80"></div>
                            <div className="spd-shimmer spd-shimmer-line w30"></div>
                            <div className="spd-shimmer spd-shimmer-btn"></div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    const discountedPrice = product.discountPercentage 
        ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
        : product.price;

    return (
        <>
            <Header />
            <div className="spd-wrapper">

                {/* Back Button */}
                <button className="spd-back-btn" onClick={() => navigate(-1)}>
                    ← Back to Products
                </button>

                {/* Main Product Section */}
                <div className="spd-container">

                    {/* Left Column — Image */}
                    <div className="spd-image-col">
                        <div className="spd-main-image">
                            <img src={product.thumbnail} alt={product.title} />
                            {product.discountPercentage > 0 && (
                                <span className="spd-discount-badge">
                                    -{Math.round(product.discountPercentage)}%
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right Column — Details */}
                    <div className="spd-details-col">

                        {product.category && (
                            <span className="spd-category-tag">{product.category}</span>
                        )}
                        
                        {product.brand && (
                            <p className="spd-brand">{product.brand}</p>
                        )}
                        
                        <h1 className="spd-title">{product.title}</h1>

                        {/* Rating Row */}
                        <div className="spd-rating-row">
                            {renderStars(product.rating)}
                            <span className="spd-rating-num">{product.rating}</span>
                            <span className="spd-reviews-count">
                                ({product.reviews ? product.reviews.length : 0} reviews)
                            </span>
                        </div>

                        <p className="spd-description">{product.description}</p>

                        <hr className="spd-divider" />

                        {/* Price Row */}
                        <div className="spd-price-row">
                            <span className="spd-price">${discountedPrice}</span>
                            {product.discountPercentage > 0 && (
                                <span className="spd-original-price">${product.price}</span>
                            )}
                        </div>

                        {/* Stock */}
                        <div className={`spd-stock ${product.stock < 10 ? "low" : ""}`}>
                            {product.stock > 0
                                ? `In Stock — ${product.stock} available`
                                : "Out of Stock"}
                        </div>

                        {/* Quantity Selector */}
                        <div className="spd-qty-row">
                            <span className="spd-qty-label">Qty:</span>
                            <div className="spd-qty-control">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => Math.min(product.stock || 99, q + 1))}>+</button>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="spd-actions">
                            <button className="spd-btn-cart" onClick={handleAddToCart}>
                                🛒 Add to Cart
                            </button>
                            <button className="spd-btn-buy">
                                ⚡ Buy Now
                            </button>
                        </div>
                        {cartMsg && <p className="spd-cart-msg">{cartMsg}</p>}

                        {/* Meta Info */}
                        <div className="spd-meta">
                            {product.sku && <span><strong>SKU:</strong> {product.sku}</span>}
                            {product.warrantyInformation && (
                                <span><strong>Warranty:</strong> {product.warrantyInformation}</span>
                            )}
                            {product.shippingInformation && (
                                <span><strong>Shipping:</strong> {product.shippingInformation}</span>
                            )}
                            {product.returnPolicy && (
                                <span><strong>Returns:</strong> {product.returnPolicy}</span>
                            )}
                        </div>

                    </div>
                </div>

                {/* Customer Reviews Section */}
                {product.reviews && product.reviews.length > 0 && (
                    <div className="spd-reviews-section">
                        <h2 className="spd-reviews-title">
                            ⭐ Customer Reviews ({product.reviews.length})
                        </h2>
                        <div className="spd-reviews-grid">
                            {product.reviews.map((review, i) => (
                                <div key={i} className="spd-review-card">
                                    <div className="spd-review-header">
                                        <div className="spd-reviewer-avatar">
                                            {review.reviewerName ? review.reviewerName[0].toUpperCase() : "U"}
                                        </div>
                                        <div>
                                            <p className="spd-reviewer-name">{review.reviewerName || "Anonymous"}</p>
                                            <p className="spd-review-date">
                                                {review.date ? new Date(review.date).toLocaleDateString() : ""}
                                            </p>
                                        </div>
                                        <span className="spd-review-rating">
                                            {"★".repeat(review.rating)}{"☆".repeat(Math.max(0, 5 - review.rating))}
                                        </span>
                                    </div>
                                    <p className="spd-review-body">"{review.comment}"</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
            <Footer />
        </>
    );
};
