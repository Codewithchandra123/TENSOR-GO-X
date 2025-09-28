// src/Pages/Features/components/HeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  // Variants for the main container to orchestrate staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Variants for individual child elements to animate in
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Create a motion-aware Link component
  const MotionLink = motion(Link);

  return (
    // --- UPDATED HERE ---
    // 1. Added `min-h-screen` to make the section cover the full screen height.
    // 2. Added `flex items-center justify-center` to perfectly center the content.
    // 3. Removed `py-20` as vertical padding is now handled by flexbox centering.
    <section className="relative w-full min-h-screen flex items-center justify-center text-center md:text-left px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 font-sans">
      {/* Animated background blobs, adjusted for dark theme */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute w-96 h-96 bg-violet-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-sky-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-0"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
            variants={itemVariants}
          >
            Go-X Features: Deeper Insights, Better Decisions.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            Explore how Go-X leverages cutting-edge AI to provide unparalleled meeting intelligence.
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={containerVariants}
          >
            {/* Primary Button linked to /pricing */}
            <MotionLink
              to="/pricing"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              variants={itemVariants}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></span>
              <span className="relative flex items-center gap-3">
                Get Started
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </MotionLink>

            {/* Secondary Button linked to #features section on the same page */}
            <motion.a
              href="/demo"
              className="px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-2xl transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              variants={itemVariants}
            >
              View Features
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;