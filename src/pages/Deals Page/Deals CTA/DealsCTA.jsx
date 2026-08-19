import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaBagShopping,
    FaBolt,
    FaHeart,
    FaStar,
    FaEnvelope,
    FaCheck,
    FaGift,
} from "react-icons/fa6";

import { motion } from "framer-motion";

import "./DealsCTA.css";


/* =========================================================
   SMOOTH MOTION VARIANTS
========================================================= */

const contentVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};


const floatingVariants = {
    initial: {
        y: 0,
        rotate: 0,
    },

    animate: {
        y: [-4, 4, -4],
        rotate: [-2, 2, -2],

        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};


export const DealsCTA = ({ onNewsletterSubmit }) => {

    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email.trim() || !email.includes("@")) return;

        setIsSubmitted(true);

        if (onNewsletterSubmit) {
            onNewsletterSubmit(email);
        }
    };


    return (

        <section className="deals-cta-section">

            {/* =================================================
                BACKGROUND DECORATIONS
            ================================================= */}

            <motion.div
                className="cta-dots"

                initial={{
                    opacity: 0,
                }}

                whileInView={{
                    opacity: 0.4,
                }}

                viewport={{
                    once: true,
                }}

                transition={{
                    duration: 1.2,
                }}
            />

            <motion.div
                className="cta-circle cta-circle-one"

                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}

                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}

                viewport={{
                    once: true,
                }}

                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />

            <motion.div
                className="cta-circle cta-circle-two"

                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}

                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}

                viewport={{
                    once: true,
                }}

                transition={{
                    duration: 1.2,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />

            <div className="cta-glow-mesh"></div>


            {/* =================================================
                FLOATING DECORATIONS
            ================================================= */}

            <motion.div
                className="cta-floating cta-floating-one"

                variants={floatingVariants}

                initial="initial"

                animate="animate"
            >
                <FaStar />
            </motion.div>


            <motion.div
                className="cta-floating cta-floating-two"

                variants={floatingVariants}

                initial="initial"

                animate="animate"

                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                }}
            >
                <FaHeart />
            </motion.div>


            <motion.div
                className="cta-floating cta-floating-three"

                variants={floatingVariants}

                initial="initial"

                animate="animate"

                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                }}
            >
                <FaBolt />
            </motion.div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <motion.div
                className="deals-cta-content"

                initial="hidden"

                whileInView="show"

                viewport={{
                    once: true,
                    amount: 0.25,
                }}
            >

                {/* Icon */}

                <motion.div
                    className="cta-icon-wrapper"

                    variants={contentVariants}

                    whileHover={{
                        scale: 1.06,
                        rotate: -4,
                    }}

                    transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <FaBagShopping />
                </motion.div>


                {/* Label */}

                <motion.span
                    className="cta-label"

                    variants={contentVariants}
                >
                    <FaGift /> VIP EARLY FLASH ACCESS
                </motion.span>


                {/* Heading */}

                <motion.h2
                    className="cta-heading"

                    variants={contentVariants}
                >
                    Never Miss A <span>Great Deal</span> Again.
                </motion.h2>


                {/* Description */}

                <motion.p
                    className="cta-description"

                    variants={contentVariants}
                >
                    Join 45,000+ smart shoppers. Get instant flash sale alerts,
                    secret 24-hour drops, and a
                    <strong> flat 15% VIP discount voucher</strong>
                    directly in your inbox.
                </motion.p>


                {/* =================================================
                    NEWSLETTER
                ================================================= */}

                <motion.div
                    className="cta-newsletter-wrapper"

                    variants={contentVariants}
                >

                    {isSubmitted ? (

                        <motion.div
                            className="cta-success-box"

                            initial={{
                                opacity: 0,
                                scale: 0.95,
                                y: 10,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}

                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            <motion.div
                                className="cta-success-icon"

                                initial={{
                                    scale: 0,
                                }}

                                animate={{
                                    scale: 1,
                                }}

                                transition={{
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                <FaCheck />
                            </motion.div>


                            <div>

                                <h4>
                                    You're on the VIP Flash List!
                                </h4>

                                <p>
                                    Use code{" "}
                                    <strong>
                                        VIP15NOW
                                    </strong>{" "}
                                    for 15% off your next purchase.
                                </p>

                            </div>

                        </motion.div>

                    ) : (

                        <motion.form
                            className="cta-email-form"

                            onSubmit={handleSubmit}

                            whileFocus={{
                                scale: 1.01,
                            }}
                        >

                            <div className="cta-input-box">

                                <FaEnvelope
                                    className="cta-envelope-icon"
                                />

                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                    aria-label="Email for deals newsletter"
                                />

                            </div>


                            <motion.button
                                type="submit"

                                className="cta-submit-btn"

                                whileHover={{
                                    scale: 1.03,
                                    x: 2,
                                }}

                                whileTap={{
                                    scale: 0.97,
                                }}

                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                            >

                                <span>
                                    Get 15% VIP Pass
                                </span>

                                <motion.span
                                    whileHover={{
                                        x: 4,
                                    }}
                                >
                                    <FaArrowRight />
                                </motion.span>

                            </motion.button>

                        </motion.form>

                    )}

                </motion.div>


                {/* =================================================
                    SECONDARY ACTIONS
                ================================================= */}

                <motion.div
                    className="cta-actions"

                    variants={contentVariants}
                >

                    <motion.div
                        whileHover={{
                            y: -3,
                        }}

                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >

                        <Link
                            to="/products"
                            className="cta-primary-btn"
                        >
                            Explore Full Catalog

                            <motion.span
                                whileHover={{
                                    x: 4,
                                }}
                            >
                                <FaArrowRight />
                            </motion.span>

                        </Link>

                    </motion.div>


                    <motion.div
                        whileHover={{
                            y: -3,
                        }}

                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >

                        <Link
                            to="/"
                            className="cta-secondary-btn"
                        >
                            Back to Homepage
                        </Link>

                    </motion.div>

                </motion.div>

            </motion.div>

        </section>
    );
};


export default DealsCTA;