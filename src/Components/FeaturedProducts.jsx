import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
// import "./FeaturedProducts.css";


const gridVariants = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.1,
        },
    },
};


const itemVariants = {
    hidden: {
        opacity: 0,
        y: 35,
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


export const FeaturedProducts = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

        async function dataApi() {

            try {

                const { data } = await axios.get(
                    "https://dummyjson.com/products?limit=150"
                );

                setProducts(data.products || []);

            } catch (error) {

                console.error(
                    "Featured Products Error:",
                    error
                );

            }

        }

        dataApi();

    }, []);


    return (

        <section className="featured">

            {/* =================================================
                Section Header
            ================================================= */}

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
                    OUR COLLECTION
                </span>

                <h2>
                    Featured Products
                </h2>

                <p>
                    Discover our latest collection
                </p>

            </motion.div>


            {/* =================================================
                Products
            ================================================= */}

            <motion.div
                className="products-grid"

                variants={gridVariants}

                initial="hidden"

                whileInView="show"

                viewport={{
                    once: true,
                    amount: 0.15,
                }}
            >

                {products.slice(0, 7).map((product) => (

                    <motion.div
                        key={product.id}
                        variants={itemVariants}
                    >

                        <ProductCard
                            product={product}
                        />

                    </motion.div>

                ))}


                {/* =================================================
                    View All
                ================================================= */}

                <motion.div
                    className="view-all-card"

                    variants={itemVariants}

                    onClick={() =>
                        navigate("/products")
                    }

                    whileHover={{
                        y: -6,
                    }}

                    whileTap={{
                        scale: 0.98,
                    }}
                >

                    <div className="view-all-content">

                        <div className="view-all-icon">

                            <FaArrowRight />

                        </div>


                        <span>
                            EXPLORE
                        </span>


                        <h3>
                            View All Products
                        </h3>


                        <p>
                            Explore full catalog
                        </p>

                    </div>

                </motion.div>

            </motion.div>

        </section>

    );
};