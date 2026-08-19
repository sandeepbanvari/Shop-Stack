import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaClock,
    FaTag,
    FaPercent,
    FaBagShopping,
    FaBolt,
    FaFire,
    FaTruckFast,
    FaShieldHalved,
    FaArrowRotateLeft,
    FaUsers,
} from "react-icons/fa6";

import { motion } from "framer-motion";

import "./DealsHero.css";


/* =========================================================
   SMOOTH FRAMER MOTION
========================================================= */

const heroContainerVariants = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.12,
        },
    },
};


const heroItemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


export const DealsHero = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 38,
        seconds: 45,
    });


    const [liveShoppers, setLiveShoppers] = useState(1482);


    // Live ticking countdown timer
    useEffect(() => {

        const timer = setInterval(() => {

            setTimeLeft((prev) => {

                let {
                    days,
                    hours,
                    minutes,
                    seconds
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

                } else {

                    days = 2;
                    hours = 14;
                    minutes = 38;
                    seconds = 45;

                }


                return {
                    days,
                    hours,
                    minutes,
                    seconds
                };

            });

        }, 1000);


        return () => clearInterval(timer);

    }, []);


    // Random shopper count fluctuation
    useEffect(() => {

        const shopperInterval = setInterval(() => {

            setLiveShoppers((prev) => {

                const delta =
                    Math.floor(Math.random() * 7) - 3;

                return Math.max(
                    1350,
                    Math.min(
                        1600,
                        prev + delta
                    )
                );

            });

        }, 4000);


        return () =>
            clearInterval(shopperInterval);

    }, []);


    const scrollToSection = (id) => {

        const el =
            document.getElementById(id);

        if (el) {

            el.scrollIntoView({
                behavior: "smooth"
            });

        }

    };


    return (

        <section className="deals-hero-container">

            <div className="deals-hero">


                {/* =================================================
                    BACKGROUND DECORATIONS
                ================================================= */}

                <motion.div
                    className="hero-dot-pattern"

                    initial={{
                        opacity: 0
                    }}

                    animate={{
                        opacity: 1
                    }}

                    transition={{
                        duration: 1.2
                    }}
                />


                <motion.div
                    className="hero-circle hero-circle-one"

                    initial={{
                        opacity: 0,
                        scale: 0.85
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                />


                <motion.div
                    className="hero-circle hero-circle-two"

                    initial={{
                        opacity: 0,
                        scale: 0.85
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: 1.2,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                />


                <motion.div
                    className="hero-glow-orb"

                    animate={{
                        scale: [1, 1.04, 1],
                        opacity: [0.7, 0.9, 0.7]
                    }}

                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />


                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <motion.div
                    className="deals-hero-content"

                    variants={heroContainerVariants}

                    initial="hidden"

                    animate="show"
                >


                    {/* Live Urgency Badge */}

                    <motion.div
                        className="deals-live-bar"

                        variants={heroItemVariants}
                    >

                        <div className="deals-label">

                            <motion.div
                                animate={{
                                    y: [-1, 1, -1]
                                }}

                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <FaBolt className="bolt-icon" />
                            </motion.div>

                            <span>
                                LIMITED TIME MEGA SALE
                            </span>

                        </div>


                        <motion.div
                            className="deals-shoppers-badge"

                            whileHover={{
                                scale: 1.03
                            }}

                            transition={{
                                duration: 0.3
                            }}
                        >

                            <span className="live-shopper-pulse"></span>

                            <FaUsers />

                            <span>
                                {liveShoppers.toLocaleString()}
                                {" "}
                                shopping live
                            </span>

                        </motion.div>

                    </motion.div>


                    {/* Main Heading */}

                    <motion.h1
                        className="deals-hero-h1"

                        variants={heroItemVariants}
                    >

                        Deals You'll Love.

                        <span className="deals-hero-gradient-text">
                            Prices You'll Remember.
                        </span>

                    </motion.h1>


                    {/* Description */}

                    <motion.p
                        className="deals-hero-desc"

                        variants={heroItemVariants}
                    >

                        Unlock up to <strong>70% OFF</strong> across
                        premium electronics, luxury apparel,
                        designer beauty & smart home essentials.
                        Verified deals ending soon!

                    </motion.p>


                    {/* =================================================
                        COUNTDOWN
                    ================================================= */}

                    <motion.div
                        className="deals-countdown-section"

                        variants={heroItemVariants}
                    >

                        <div className="deal-timer-title">

                            <motion.div
                                animate={{
                                    rotate: [0, -4, 4, 0]
                                }}

                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >

                                <FaClock className="clock-icon" />

                            </motion.div>

                            <span>
                                Mega Flash Sale Ends In
                            </span>

                        </div>


                        <div className="deal-timer">


                            {/* Days */}

                            <motion.div
                                className="timer-box"

                                whileHover={{
                                    y: -3,
                                    scale: 1.03
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                            >

                                <strong>
                                    {String(timeLeft.days)
                                        .padStart(2, "0")}
                                </strong>

                                <span>
                                    DAYS
                                </span>

                            </motion.div>


                            <div className="timer-colon">
                                :
                            </div>


                            {/* Hours */}

                            <motion.div
                                className="timer-box"

                                whileHover={{
                                    y: -3,
                                    scale: 1.03
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                            >

                                <strong>
                                    {String(timeLeft.hours)
                                        .padStart(2, "0")}
                                </strong>

                                <span>
                                    HOURS
                                </span>

                            </motion.div>


                            <div className="timer-colon">
                                :
                            </div>


                            {/* Minutes */}

                            <motion.div
                                className="timer-box"

                                whileHover={{
                                    y: -3,
                                    scale: 1.03
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                            >

                                <strong>
                                    {String(timeLeft.minutes)
                                        .padStart(2, "0")}
                                </strong>

                                <span>
                                    MINS
                                </span>

                            </motion.div>


                            <div className="timer-colon">
                                :
                            </div>


                            {/* Seconds */}

                            <motion.div
                                className="timer-box"

                                whileHover={{
                                    y: -3,
                                    scale: 1.03
                                }}

                                transition={{
                                    duration: 0.3
                                }}
                            >

                                <strong>
                                    {String(timeLeft.seconds)
                                        .padStart(2, "0")}
                                </strong>

                                <span>
                                    SECS
                                </span>

                            </motion.div>

                        </div>

                    </motion.div>


                    {/* =================================================
                        ACTION BUTTONS
                    ================================================= */}

                    <motion.div
                        className="deals-hero-actions"

                        variants={heroItemVariants}
                    >

                        <motion.button
                            type="button"

                            className="shop-deals-btn"

                            onClick={() =>
                                scrollToSection(
                                    "deals-grid-section"
                                )
                            }

                            whileHover={{
                                y: -3,
                                scale: 1.02
                            }}

                            whileTap={{
                                scale: 0.97
                            }}

                            transition={{
                                duration: 0.3
                            }}
                        >

                            <FaFire />

                            <span>
                                Shop Flash Deals
                            </span>

                            <motion.div
                                whileHover={{
                                    x: 4
                                }}
                            >
                                <FaArrowRight />
                            </motion.div>

                        </motion.button>


                        <motion.button
                            type="button"

                            className="view-coupons-btn"

                            onClick={() =>
                                scrollToSection(
                                    "deal-coupons-section"
                                )
                            }

                            whileHover={{
                                y: -3,
                                scale: 1.02
                            }}

                            whileTap={{
                                scale: 0.97
                            }}

                            transition={{
                                duration: 0.3
                            }}
                        >

                            <FaTag />

                            <span>
                                Claim Coupons
                            </span>

                        </motion.button>

                    </motion.div>

                </motion.div>


                {/* =================================================
                    RIGHT VISUAL
                ================================================= */}

                <motion.div
                    className="hero-deal-visual"

                    initial={{
                        opacity: 0,
                        x: 35,
                        scale: 0.95
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1
                    }}

                    transition={{
                        duration: 0.9,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >


                    {/* Discount Badge */}

                    <motion.div
                        className="discount-circle"

                        animate={{
                            y: [-4, 4, -4]
                        }}

                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}

                        whileHover={{
                            scale: 1.04
                        }}
                    >

                        <FaPercent className="discount-percent-icon" />

                        <strong>
                            70%
                        </strong>

                        <span>
                            UP TO OFF
                        </span>

                    </motion.div>


                    {/* Floating Tag */}

                    <motion.div
                        className="floating-tag"

                        animate={{
                            y: [-3, 3, -3],
                            rotate: [-1, 1, -1]
                        }}

                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <FaTag />

                        <span>
                            BEST PRICE MATCH
                        </span>

                    </motion.div>


                    {/* Floating Bag */}

                    <motion.div
                        className="floating-bag"

                        animate={{
                            y: [3, -3, 3],
                            rotate: [0, 3, 0]
                        }}

                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}

                        whileHover={{
                            scale: 1.08
                        }}
                    >

                        <FaBagShopping />

                    </motion.div>


                    {/* Fast Shipping */}

                    <motion.div
                        className="floating-fast-ship"

                        animate={{
                            y: [-2, 3, -2]
                        }}

                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >

                        <FaTruckFast />

                        <span>
                            FREE EXPRESS DISPATCH
                        </span>

                    </motion.div>


                    {/* Decorative Rings */}

                    <motion.div
                        className="visual-ring visual-ring-one"

                        animate={{
                            rotate: 360
                        }}

                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />


                    <motion.div
                        className="visual-ring visual-ring-two"

                        animate={{
                            rotate: -360
                        }}

                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                </motion.div>

            </div>


            {/* =================================================
                PERKS
            ================================================= */}

            <motion.div
                className="deals-perks-row"

                initial={{
                    opacity: 0,
                    y: 20
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true,
                    amount: 0.15
                }}

                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >


                <motion.div
                    className="deals-perk-card"

                    whileHover={{
                        y: -5
                    }}

                    transition={{
                        duration: 0.3
                    }}
                >

                    <div className="deals-perk-icon fire-icon">
                        <FaFire />
                    </div>

                    <div className="deals-perk-info">

                        <h4>
                            Flash Discounts
                        </h4>

                        <p>
                            Save up to 70% on verified retail brands
                        </p>

                    </div>

                </motion.div>


                <motion.div
                    className="deals-perk-card"

                    whileHover={{
                        y: -5
                    }}

                    transition={{
                        duration: 0.3
                    }}
                >

                    <div className="deals-perk-icon truck-icon">
                        <FaTruckFast />
                    </div>

                    <div className="deals-perk-info">

                        <h4>
                            Free Express Delivery
                        </h4>

                        <p>
                            Fast dispatch on all flash deal orders
                        </p>

                    </div>

                </motion.div>


                <motion.div
                    className="deals-perk-card"

                    whileHover={{
                        y: -5
                    }}

                    transition={{
                        duration: 0.3
                    }}
                >

                    <div className="deals-perk-icon shield-icon">
                        <FaShieldHalved />
                    </div>

                    <div className="deals-perk-info">

                        <h4>
                            100% Genuine Guarantee
                        </h4>

                        <p>
                            Direct authentic supply from verified brands
                        </p>

                    </div>

                </motion.div>


                <motion.div
                    className="deals-perk-card"

                    whileHover={{
                        y: -5
                    }}

                    transition={{
                        duration: 0.3
                    }}
                >

                    <div className="deals-perk-icon return-icon">
                        <FaArrowRotateLeft />
                    </div>

                    <div className="deals-perk-info">

                        <h4>
                            30-Day Hassle Free Returns
                        </h4>

                        <p>
                            Instant refunds & zero-cost returns
                        </p>

                    </div>

                </motion.div>

            </motion.div>

        </section>
    );
};


export default DealsHero;