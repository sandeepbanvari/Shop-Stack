import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
// import "./Newsletter.css";

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
          Get <span>Exclusive Deals</span>
          <br />
          Before Anyone Else
        </h2>


        <p>
          Join thousands of happy customers and receive
          exclusive discounts, early access to new arrivals,
          and members-only offers.
        </p>


        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <motion.button
            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.97,
            }}
          >
            <FaPaperPlane />

            <span>
              Subscribe
            </span>
          </motion.button>

        </div>

      </motion.div>

    </section>
  );
};