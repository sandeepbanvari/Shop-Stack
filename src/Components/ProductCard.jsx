import { FaStar, FaHeart, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './ProductCard.css'

export const ProductCard = ({ product }) => {

    return (
        <div className="product-card">

            {product.discountPercentage && (
                <span className="discount-badge">
                    {Math.round(product.discountPercentage)}% OFF
                </span>
            )}

            <button
                className="wishlist-btn"
                title="Add to Wishlist"
            >
                <FaHeart />
            </button>

            <Link
                to={`/products/${product.id}`}
                className="product-card-link"
            >

                <div className="product-image">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                </div>

                <div className="product-info">

                    {product.brand && (
                        <p className="brand">
                            {product.brand}
                        </p>
                    )}

                    <h3>{product.title}</h3>

                    <p className="category">
                        {product.category}
                    </p>                    
                    <p className="desc">
                        {product.description}
                    </p>

                    <div className="rating">
                        <FaStar />
                        <span>{product.rating}</span>
                    </div>

                    <div className="price">
                        <h2>${product.price}</h2>
                    </div>

                </div>

            </Link>

            <button
                className="cart-btn"
            >
                <FaCartShopping />
                Add to Cart
            </button>

        </div>
    );
};