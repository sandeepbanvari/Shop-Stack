import { Link } from "react-router-dom";
import "./AboutHero.css";

export const AboutHero = () => {
    return (

        <section className="about-hero">

            <div className="about-hero-inner">

                <div className="about-hero-content">

                    <span className="about-eyebrow">
                        ABOUT SHOPSTACK
                    </span>

                    <h1>
                        Shopping should be
                        <span> simple.</span>
                    </h1>

                    <p>
                        We created ShopStack to bring quality products,
                        great value, and a smooth shopping experience
                        together in one place.
                    </p>

                    <div className="about-hero-actions">

                        <Link
                            to="/products"
                            className="about-primary-btn"
                        >
                            Explore Products
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>

                        <Link
                            to="/deals"
                            className="about-secondary-btn"
                        >
                            View Deals
                        </Link>

                    </div>

                </div>


                <div className="about-hero-visual">

                    <div className="hero-circle hero-circle-one"></div>

                    <div className="hero-product-box">

                        <div className="hero-bag-icon">
                            <i className="fa-solid fa-bag-shopping"></i>
                        </div>

                        <span>SHOPSTACK</span>

                        <small>
                            SHOP • DISCOVER • ENJOY
                        </small>

                    </div>

                    <div className="hero-floating floating-one">
                        <i className="fa-solid fa-star"></i>
                        <span>Quality Products</span>
                    </div>

                    <div className="hero-floating floating-two">
                        <i className="fa-solid fa-tag"></i>
                        <span>Great Deals</span>
                    </div>

                </div>

            </div>

        </section>

    );
};
