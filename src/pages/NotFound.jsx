import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css"; // 👈 custom CSS + animations

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="notfound-container">
      {/* Doctor Illustration */}
      <motion.img
        src="/doctor-404.svg"
        alt="Doctor confused illustration"
        className="doctor-image"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, duration: 0.8 }}
      />

      {/* Main 404 Title */}
      <motion.h1
        className="notfound-title"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="notfound-subtitle"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        className="notfound-desc"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        The page you’re looking for doesn’t exist or has been moved.  
        Even the best doctors get lost sometimes.
      </motion.p>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="notfound-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>

      {/* Heartbeat Animation */}
      <div className="heartbeat-wrapper">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 100"
          className="heartbeat-svg"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d="M0,50 L100,50 L150,20 L170,80 L190,40 L210,60 L230,30 L250,70 L270,50 L500,50"
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default NotFound;
