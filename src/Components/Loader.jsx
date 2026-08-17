import { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [time, setTime] = useState(3);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Countdown and progress
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });

      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }

        return Math.min(prev + 33.33, 100);
      });
    }, 1000);

    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="website-loader">

      <div className="loader-content">

        {/* Logo */}
        <div className="loader-logo-wrapper">

          <div className="loader-ring"></div>

          <img
            src="/ShopStack-Shopping-Logo.png"
            alt="ShopStack"
            className="loader-logo"
          />

        </div>


        {/* Brand Name */}
        <h1 className="loader-brand">
          ShopStack
        </h1>


        {/* Progress Bar */}
        <div className="loader-progress">

          <div
            className="loader-progress-bar"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>


        {/* Countdown */}
        <div className="loader-time">
          {time}
        </div>


        {/* Loading Text */}
        <p className="loader-text">
          Preparing your store...
        </p>

      </div>

    </div>
  );
};

export default Loader;