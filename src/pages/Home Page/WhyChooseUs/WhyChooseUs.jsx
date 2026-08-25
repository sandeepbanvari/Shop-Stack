import {
    FaTruckFast,
    FaCreditCard,
    FaRotateLeft,
    FaHeadset,
} from "react-icons/fa6";

import { motion } from "framer-motion";

import "./WhyChooseUs.css";


const features = [
    {
        id: 1,
        icon: <FaTruckFast />,
        title: "Free Shipping",
        desc: "Free shipping on all orders over $99.",
    },
    {
        id: 2,
        icon: <FaCreditCard />,
        title: "Secure Payment",
        desc: "100% secure online payment system.",
    },
    {
        id: 3,
        icon: <FaRotateLeft />,
        title: "Easy Returns",
        desc: "7-day easy return and refund policy.",
    },
    {
        id: 4,
        icon: <FaHeadset />,
        title: "24/7 Support",
        desc: "Friendly customer support anytime.",
    },
];


const containerVariants = {
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


const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};


export const WhyChooseUs = () => {

    return (
        <section className="why-choose-us">

            {/* Section Heading */}

            <motion.div
                className="section-title"

                initial={{
                    opacity: 0,
                    y: 25,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                viewport={{
                    once: true,
                    amount: 0.3,
                }}

                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                }}
            >

                <span className="section-label">
                    SHOP WITH CONFIDENCE
                </span>

                <h2>
                    Why Choose Us?
                </h2>

                <p>
                    We provide the best shopping experience.
                </p>

            </motion.div>


            {/* Features */}

            <motion.div
                className="features"

                variants={containerVariants}

                initial="hidden"

                whileInView="show"

                viewport={{
                    once: true,
                    amount: 0.2,
                }}
            >

                {features.map((item) => (

                    <motion.div
                        className="feature-card"
                        key={item.id}

                        variants={itemVariants}

                        whileHover={{
                            y: -6,
                        }}

                        transition={{
                            duration: 0.25,
                        }}
                    >

                        <div className="feature-icon">
                            {item.icon}
                        </div>

                        <h3>
                            {item.title}
                        </h3>

                        <p>
                            {item.desc}
                        </p>

                    </motion.div>

                ))}

            </motion.div>

        </section>
    );
};