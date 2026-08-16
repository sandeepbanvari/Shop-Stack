import axios from "axios";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductCard } from "../../Components/ProductCard";
import "./ProductsData.css"
import { useSearchParams } from "react-router-dom";


// =====================================================
// Grid Animation
// =====================================================

const gridVariants = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.08,
        },
    },

    exit: {
        opacity: 0,

        transition: {
            duration: 0.2,
        },
    },
};


// =====================================================
// Product Animation
// =====================================================

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.96,
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,

        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },

    exit: {
        opacity: 0,
        y: -20,

        transition: {
            duration: 0.2,
        },
    },
};


// =====================================================
// Pagination Animation
// =====================================================

const paginationVariants = {
    hidden: {
        opacity: 0,
        y: 15,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.4,
            delay: 0.3,
        },
    },
};


export const ProductsData = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [page, setPage] = useState(1);
    
    const [searchParams, setSearchParams] = useSearchParams();

    const perPage = 10;


    // =====================================================
    // Get Categories
    // =====================================================

    useEffect(() => {

        async function dataApi() {

            try {

                const { data } = await axios.get(
                    "https://dummyjson.com/products/category-list"
                );

                setCategoryList(data);

            } catch (error) {

                console.error("Category API Error:", error);

            }

        }

        dataApi();

    }, []);




     /* =====================================================
       READ CATEGORY FROM URL
    ===================================================== */

    useEffect(() => {

        const urlCategory =
            searchParams.get("category") || "";

        setCategory(urlCategory);
        setSearch("");
        setPage(1);

    }, [searchParams]);



    // =====================================================
    // Get Products
    // =====================================================

    useEffect(() => {

        async function productsApi() {

            try {

                let api;

                if (category) {

                    api = `https://dummyjson.com/products/category/${category}`;

                } else if (search) {

                    api = `https://dummyjson.com/products/search?q=${search}`;

                } else {

                    api = "https://dummyjson.com/products?limit=100";

                }


                const { data } = await axios.get(api);

                const allProducts = data.products || [];

                setProducts(allProducts);

            } catch (error) {

                console.error("Products API Error:", error);

                setProducts([]);

            }

        }

        productsApi();

    }, [category, search]);


    // =====================================================
    // Pagination
    // =====================================================

    const currentProducts = products.slice(
        (page - 1) * perPage,
        page * perPage
    );


    const viewBtn = Math.ceil(
        products.length / perPage
    );


    return (

        <section className="featured">


            {/* =================================================
                Search + Category Filter
            ================================================= */}

            <div className="products-filter-container">

                <div className="filter-search-box">

                    <i className="ri-search-line search-icon"></i>

                    <input
                        type="search"
                        className="filter-search-input"
                        placeholder="Search for products...."
                        value={search}
                        onChange={(e) => {

                            setCategory("");
                            setSearch(e.target.value);
                            setPage(1);

                        }}
                    />

                </div>


                <div className="filter-select-box">

                    <select
                        className="filter-category-select"
                        value={category}
                        onChange={(e) => {

                            setCategory(e.target.value);
                            setSearch("");
                            setPage(1);

                        }}
                    >

                        <option value="">
                            All Categories
                        </option>


                        {categoryList.map((cat) => (

                            <option
                                key={cat}
                                value={cat}
                            >
                                {cat}
                            </option>

                        ))}

                    </select>

                </div>

            </div>


            {/* =================================================
                Products
            ================================================= */}

            <div className="products-container">

                <AnimatePresence mode="wait">

                    <motion.div
                        key={`${category}-${search}-${page}`}
                        className="products-grid"

                        variants={gridVariants}

                        initial="hidden"

                        animate="show"

                        exit="exit"
                    >

                        {currentProducts.length > 0 ? (

                            currentProducts.map((product) => (

                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    layout
                                >

                                    <ProductCard
                                        product={product}
                                    />

                                </motion.div>

                            ))

                        ) : (

                            <motion.div
                                className="no-products"

                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                            >

                                <h2>
                                    No Products Found
                                </h2>

                                <p>
                                    Try searching for another product.
                                </p>

                            </motion.div>

                        )}

                    </motion.div>

                </AnimatePresence>


                {/* =================================================
                    Pagination
                ================================================= */}

                {viewBtn > 1 && (

                    <motion.div
                        className="pagination-container"

                        variants={paginationVariants}

                        initial="hidden"

                        animate="show"
                    >

                        {Array.from(
                            { length: viewBtn },
                            (_, i) => i + 1
                        ).map((btnNum) => (

                            <motion.button
                                key={btnNum}

                                className={`pagination-btn ${page === btnNum
                                        ? "active"
                                        : ""
                                    }`}

                                onClick={() => {
                                    setPage(btnNum);

                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}

                                whileHover={{
                                    scale: 1.08,
                                }}

                                whileTap={{ scale: 0.92 }}
                            >

                                {btnNum}

                            </motion.button>

                        ))}

                    </motion.div>

                )}

            </div>

        </section>

    );
};