import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";
import "./ScrollToTop.css";

export const ScrollToTop = () => {

    const { pathname } = useLocation();

    const [showButton, setShowButton] = useState(false);


    /* =========================================
       Go to top when changing page
    ========================================= */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [pathname]);


    /* =========================================
       Show button after scrolling
    ========================================= */

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    /* =========================================
       Button click
    ========================================= */

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

    };


    return (

        <button
            className={`scroll-top-btn ${
                showButton ? "show" : ""
            }`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >

            <FaArrowUp />

        </button>

    );
};