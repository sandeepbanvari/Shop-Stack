import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <section className="newsletter">

      <motion.div
        className="newsletter-card"

        initial={{
          opacity: 0,
          y: 35,
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
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        <span className="newsletter-badge">
          🔥 LIMITED TIME OFFER
        </span>


        <h2>
          Get <span>Exclusive Deals</span> Before Anyone Else
        </h2>


        <p>
          Join thousands of happy customers and receive
          exclusive discounts, early access to new arrivals,
          and members-only offers.
        </p>


        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>

          <div className="newsletter-input-wrapper">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              aria-label="Enter your email address"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <FaPaperPlane />
            <span>
              Subscribe
            </span>
          </motion.button>

        </form>

      </motion.div>

    </section>
  );
};