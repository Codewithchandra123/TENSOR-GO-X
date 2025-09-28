// src/components/CallToActionSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Make sure to install react-icons: npm install react-icons
import { FaArrowRight } from 'react-icons/fa';
import './CallToActionSection.css'; // We will create this for advanced animations

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
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
              Unlock the Potential of Your Conversations.
            </motion.h2>
            <motion.p
              // CHANGED HERE: Updated text-white/80 to text-white for a pure white color
              className="text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Dive into the intricacies of dialogue, where every word harbors a hidden narrative waiting to be unearthed. Let us show you how.
            </motion.p>
          </div>

          {/* --- 2. Buttons & Interactivity --- */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6"
            variants={itemVariants}
          >
            <Link
              to="/contact" // Update with your actual contact route
              className="primary-cta-button group"
            >
              Request a Demo
              {/* Arrow icon that slides on hover */}
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