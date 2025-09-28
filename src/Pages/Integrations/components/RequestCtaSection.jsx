// src/Pages/Integrations/components/RequestCtaSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlusCircle } from 'react-icons/fi';

// Ensure you have installed the dependencies:
// npm install framer-motion react-icons react-router-dom

// Ensure a font like 'Inter' or 'Poppins' is set up in your project.
// e.g., in index.css: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

const RequestCtaSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    // Rule 2: Modern Gradient Background
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 font-sans">
      {/* Rule 5: Subtle Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-1">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Rule 3: Layout, Alignment & Spacing */}
      <div className="container mx-auto max-w-6xl px-6 md:px-12 lg:px-24 py-20 lg:py-32 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Rule 1: Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Don't See Your Tool?
            </motion.h2>
            {/* Rule 1: Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto lg:mx-0"
            >
              We're always adding new integrations based on customer feedback. Let
              us know what you'd like to see next, and we'll prioritize it.
            </motion.p>
            {/* Rule 4: Primary Button */}
            <motion.div variants={itemVariants} className="mt-10">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl transition-transform duration-300 ease-out transform hover:scale-105"
              >
                {/* Rule 7: Subtle Glow Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></span>
                <span className="relative">Request an Integration</span>
                {/* Arrow with hover effect */}
                <FiArrowRight className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          >
            {/* Rule 2 & 7: Glassmorphism Card with Hover Tilt */}
            <motion.div
              className="relative p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col items-center text-center"
              whileHover={{ rotate: -2, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-4 bg-indigo-500/50 rounded-full border-2 border-indigo-400 mb-4">
                <FiPlusCircle size={48} className="text-white" />
              </div>
              <p className="text-xl font-bold text-white">Your Next Favorite Tool</p>
              <p className="text-indigo-200">Tell us what to build next.</p>
              <div className="mt-4 h-2 w-24 bg-blue-400/50 rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RequestCtaSection;