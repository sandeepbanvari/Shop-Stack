import { Link } from "react-router-dom";
import "./AboutCTA.css";

export const AboutCTA = () => {
    return (

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

    );
};
