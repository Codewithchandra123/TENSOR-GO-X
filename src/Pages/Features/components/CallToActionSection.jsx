// src/Pages/Features/components/CallToActionSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CallToActionSection.css'; // We will create a new, dedicated CSS file

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const CallToActionSection = () => {
  return (
    // Section with animated gradient background and floating shapes
    <section className="cta-section relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* --- 1. Typography & Content --- */}
          <div className="text-center lg:text-left">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Ready to Experience Smarter Meetings?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Transform your conversations into actionable intelligence and drive better outcomes.
            </motion.p>
          </div>

          {/* --- 2. Buttons & Interactivity --- */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            variants={itemVariants}
          >
            <Link
              to="/demo" // Links to your pricing page
              className="primary-cta-button group"
            >
              Explore live demo

              {/* This arrow appears and slides in on hover */}
              <span className="button-arrow">
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;