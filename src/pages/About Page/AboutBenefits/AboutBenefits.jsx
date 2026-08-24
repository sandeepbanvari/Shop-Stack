import { Link } from "react-router-dom";
import "./AboutBenefits.css";

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

export const AboutBenefits = () => {
    return (

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

    );
};
