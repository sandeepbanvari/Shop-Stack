import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaClock,
    FaTag,
    FaPercent,
    FaBagShopping,
    FaBolt,
} from "react-icons/fa6";

import "./DealsHero.css";

export const DealsHero = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 12,
        minutes: 40,
        seconds: 0,
    });

    /* ==========================================
       COUNTDOWN TIMER
    ========================================== */

    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft((prev) => {

                let {
                    days,
                    hours,
                    minutes,
                    seconds,
                } = prev;

                if (seconds > 0) {

                    seconds--;

                } else if (minutes > 0) {

                    minutes--;
                    seconds = 59;

                } else if (hours > 0) {

                    hours--;
                    minutes = 59;
                    seconds = 59;

                } else if (days > 0) {

                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;

                }

                return {
                    days,
                    hours,
                    minutes,
                    seconds,
                };

            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);


    return (
        <section className="deals-hero">

            {/* ==========================================
                BACKGROUND DECORATION
            ========================================== */}

            <div className="hero-dot-pattern"></div>

            <div className="hero-circle hero-circle-one"></div>

            <div className="hero-circle hero-circle-two"></div>


            {/* ==========================================
                LEFT CONTENT
            ========================================== */}

            <div className="deals-hero-content">

                {/* Limited offer badge */}

                <div className="deals-label">

                    <FaBolt />

                    <span>
                        LIMITED TIME OFFER
                    </span>

                </div>


                {/* Main heading */}

                <h1>

                    Deals You'll Love.

                    <span>
                        Prices You'll Remember.
                    </span>

                </h1>


                {/* Description */}

                <p>

                    Discover exclusive discounts, special offers
                    and limited-time deals across your favorite
                    categories.

                </p>


                {/* Timer title */}

                <div className="deal-timer-title">

                    <FaClock />

                    <span>
                        Offer ends in
                    </span>

                </div>


                {/* Countdown */}

                <div className="deal-timer">

                    {/* Days */}

                    <div className="timer-box">

                        <strong>
                            {String(timeLeft.days).padStart(2, "0")}
                        </strong>

                        <span>
                            DAYS
                        </span>

                    </div>


                    <div className="timer-colon">
                        :
                    </div>


                    {/* Hours */}

                    <div className="timer-box">

                        <strong>
                            {String(timeLeft.hours).padStart(2, "0")}
                        </strong>

                        <span>
                            HOURS
                        </span>

                    </div>


                    <div className="timer-colon">
                        :
                    </div>


                    {/* Minutes */}

                    <div className="timer-box">

                        <strong>
                            {String(timeLeft.minutes).padStart(2, "0")}
                        </strong>

                        <span>
                            MIN
                        </span>

                    </div>


                    <div className="timer-colon">
                        :
                    </div>


                    {/* Seconds */}

                    <div className="timer-box">

                        <strong>
                            {String(timeLeft.seconds).padStart(2, "0")}
                        </strong>

                        <span>
                            SEC
                        </span>

                    </div>

                </div>


                {/* Shop button */}

                <Link
                    to="/products"
                    className="shop-deals-btn"
                >

                    <span>
                        Shop Deals
                    </span>

                    <FaArrowRight />

                </Link>

            </div>


            {/* ==========================================
                RIGHT VISUAL
            ========================================== */}

            <div className="hero-deal-visual">


                {/* Main discount circle */}

                <div className="discount-circle">

                    <FaPercent className="discount-percent-icon" />

                    <strong>
                        50%
                    </strong>

                    <span>
                        OFF
                    </span>

                </div>


                {/* Best deal tag */}

                <div className="floating-tag">

                    <FaTag />

                    <span>
                        BEST DEAL
                    </span>

                </div>


                {/* Shopping bag */}

                <div className="floating-bag">

                    <FaBagShopping />

                </div>


                {/* Small decorative circles */}

                <div className="visual-ring visual-ring-one"></div>

                <div className="visual-ring visual-ring-two"></div>

            </div>

        </section>
    );
};