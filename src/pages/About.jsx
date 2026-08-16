import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "./About.css";

export const About = () => {

    const values = [
        {
            icon: "fa-solid fa-bag-shopping",
            title: "Simple Shopping",
            description:
                "Find what you need quickly with a clean and effortless shopping experience."
        },
        {
            icon: "fa-solid fa-gem",
            title: "Quality First",
            description:
                "We focus on products that offer great quality, useful features, and real value."
        },
        {
            icon: "fa-solid fa-heart",
            title: "Made for You",
            description:
                "Every part of ShopStack is designed around making your shopping journey better."
        }
    ];


    const benefits = [
        {
            icon: "fa-solid fa-layer-group",
            title: "Wide Product Selection",
            text: "Explore products across multiple categories in one convenient place."
        },
        {
            icon: "fa-solid fa-tag",
            title: "Better Deals",
            text: "Discover competitive prices, special offers, and exciting deals."
        },
        {
            icon: "fa-solid fa-truck-fast",
            title: "Fast Delivery",
            text: "Get your favorite products delivered without unnecessary waiting."
        },
        {
            icon: "fa-solid fa-headset",
            title: "Customer Support",
            text: "We're here to help whenever you need assistance."
        }
    ];


    const stats = [
        { number: "500+", label: "Products" },
        { number: "50+", label: "Categories" },
        { number: "10K+", label: "Customers" },
        { number: "24/7", label: "Support" },
    ];


    return (
        <>
            <Header />

            <main className="about-page">

                {/* =================================================
                    HERO
                ================================================= */}

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


                {/* =================================================
                    STORY
                ================================================= */}

                <section className="about-story">

                    <div className="about-container">

                        <div className="story-grid">

                            <div className="story-label">

                                <span>
                                    OUR STORY
                                </span>

                                <div className="story-line"></div>

                            </div>


                            <div className="story-content">

                                <h2>
                                    A better way to
                                    <span> shop online.</span>
                                </h2>

                                <p>
                                    Shopping online should not feel complicated.
                                    ShopStack was created with one simple idea:
                                    make discovering and buying products easier.
                                </p>

                                <p>
                                    From everyday essentials to products worth
                                    discovering, we bring everything together in
                                    a clean and convenient marketplace.
                                </p>

                                <p>
                                    Our goal is simple — give you more choice,
                                    better value, and a shopping experience you
                                    actually enjoy.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    VALUES
                ================================================= */}

                <section className="about-values">

                    <div className="about-container">

                        <div className="section-heading">

                            <span>
                                WHAT MATTERS TO US
                            </span>

                            <h2>
                                Built around
                                <em> you.</em>
                            </h2>

                            <p>
                                Everything we do comes back to creating a
                                better experience for our customers.
                            </p>

                        </div>


                        <div className="values-grid">

                            {values.map((item) => (

                                <div
                                    className="value-item"
                                    key={item.title}
                                >

                                    <div className="value-icon">
                                        <i className={item.icon}></i>
                                    </div>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    WHY SHOPSTACK
                ================================================= */}

                <section className="about-benefits">

                    <div className="about-container">

                        <div className="benefits-grid">

                            <div className="benefits-intro">

                                <span>
                                    WHY SHOPSTACK
                                </span>

                                <h2>
                                    More than a
                                    <em> marketplace.</em>
                                </h2>

                                <p>
                                    We combine variety, value, and convenience
                                    to create a shopping experience that keeps
                                    things simple.
                                </p>

                                <Link
                                    to="/products"
                                    className="text-link"
                                >
                                    Start Shopping
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>

                            </div>


                            <div className="benefits-list">

                                {benefits.map((item, index) => (

                                    <div
                                        className="benefit-row"
                                        key={item.title}
                                    >

                                        <span className="benefit-number">
                                            0{index + 1}
                                        </span>

                                        <div className="benefit-icon">
                                            <i className={item.icon}></i>
                                        </div>

                                        <div className="benefit-content">

                                            <h3>
                                                {item.title}
                                            </h3>

                                            <p>
                                                {item.text}
                                            </p>

                                        </div>

                                        <i className="fa-solid fa-arrow-up-right-from-square benefit-arrow"></i>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    STATS
                ================================================= */}

                <section className="about-stats">

                    <div className="about-container">

                        <div className="stats-header">

                            <span>
                                SHOPSTACK BY THE NUMBERS
                            </span>

                            <h2>
                                Growing with our
                                <em> community.</em>
                            </h2>

                        </div>


                        <div className="stats-grid">

                            {stats.map((item) => (

                                <div
                                    className="stat-item"
                                    key={item.label}
                                >

                                    <strong>
                                        {item.number}
                                    </strong>

                                    <span>
                                        {item.label}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* =================================================
                    CTA
                ================================================= */}

                <section className="about-final">

                    <div className="about-container">

                        <div className="final-content">

                            <span className="final-icon">
                                <i className="fa-solid fa-bag-shopping"></i>
                            </span>

                            <h2>
                                Your next favorite
                                <span> product is waiting.</span>
                            </h2>

                            <p>
                                Discover something new, find a great deal,
                                and make your next shopping experience better.
                            </p>

                            <Link
                                to="/products"
                                className="final-button"
                            >
                                Start Shopping
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
};



export default About;