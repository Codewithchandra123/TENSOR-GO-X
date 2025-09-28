// src/Components/ScrollToTop.jsx

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // This effect handles scrolling to the top when the route changes. It's a key UX feature.
  useEffect(() => {
    // A slight delay can sometimes help with transitions on complex pages.
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, [pathname]);

  // This effect tracks the user's scroll position to show/hide the button and calculate progress.
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate scroll progress (0 to 100)
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Show the button only after the user has scrolled down a bit (e.g., 400px)
      setShowButton(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- SVG Circular Progress Calculation ---
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-16 h-16 bg-slate-800/50 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer z-50 group transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/20"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* SVG Container for the circular progress */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="absolute top-0 left-0 -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              strokeWidth="4"
              className="stroke-white/10"
              fill="transparent"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="32"
              cy="32"
              r={radius}
              strokeWidth="4"
              className="stroke-cyan-400"
              fill="transparent"
              strokeDasharray={circumference}
              // The magic property to animate the progress
              style={{ strokeDashoffset }}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Arrow Icon */}
          <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
            <FaArrowUp size={20} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;