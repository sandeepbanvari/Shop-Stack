import "./Categories.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaLaptop,
    FaSprayCan,
    FaBagShopping,
    FaCouch,
    FaMobile
} from "react-icons/fa6";

export const Categories = () => {

    const categories = [
        {
            name: "Beauty",
            icon: <FaBagShopping />,
            slug: "beauty",
            color: "#ec4899"
        },
        {
            name: "Fragrances",
            icon: <FaSprayCan />,
            slug: "fragrances",
            color: "#8b5cf6"
        },
        {
            name: "Furniture",
            icon: <FaCouch />,
            slug: "furniture",
            color: "#f59e0b"
        },
        {
            name: "Groceries",
            icon: <FaBagShopping />,
            slug: "groceries",
            color: "#10b981"
        },
        {
            name: "Laptops",
            icon: <FaLaptop />,
            slug: "laptops",
            color: "#3b82f6"
        },
        {
            name: "Smartphones",
            icon: <FaMobile />,
            slug: "smartphones",
            color: "#ef4444"
        }
    ];

    return (
        <section className="categories-section">

            {/* Section Heading */}

            <motion.div
                className="section-title"
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true,
                    amount: 0.3
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut"
                }}
            >

                <h2>Shop by Category</h2>

                <p>
                    Explore top trending categories
                </p>

            </motion.div>


            {/* Categories */}

            <div className="categories-grid">

                {categories.map((cat, index) => (

                    <motion.div
                        key={cat.slug}

                        initial={{
                            opacity: 0,
                            y: 60,
                            scale: 0.95
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1
                        }}

                        viewport={{
                            once: true,
                            amount: 0.2
                        }}

                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}

                        whileHover={{
                            y: -8,
                            scale: 1.03
                        }}

                        whileTap={{
                            scale: 0.97
                        }}
                    >

                        <Link
                            to={`/products?category=${cat.slug}`}
                            className="category-card"
                        >

                            <motion.div
                                className="category-icon"

                                style={{
                                    backgroundColor: `${cat.color}15`,
                                    color: cat.color
                                }}

                                whileHover={{
                                    rotate: 8,
                                    scale: 1.12
                                }}

                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 12
                                }}
                            >
                                {cat.icon}
                            </motion.div>


                            <h3>
                                {cat.name}
                            </h3>

                        </Link>

                    </motion.div>

                ))}

            </div>

        </section>
    );
};