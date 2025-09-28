import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

// --- Main Component ---

const CallToActionSection = () => (
  <section className="relative w-full font-inter overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-800 py-24 md:py-32">
    {/* Animated Background Shapes */}
    <div className="absolute inset-0 z-0 opacity-20">
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"
        animate={{ x: [-100, 100, -100], y: [-100, 100, -100], rotate: [0, 180, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"
        animate={{ x: [100, -100, 100], y: [100, -100, 100], rotate: [0, -180, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
      />
    </div>

    {/* Content Container */}
    <motion.div
      className="container relative z-10 mx-auto px-6 text-center max-w-6xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Heading with enhanced readability */}
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
        variants={itemVariants}
      >
        Transform Your Team's Collaboration Today.
      </motion.h2>
      
      {/* Subheading with enhanced readability */}
      <motion.p
        className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
        style={{ textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)' }}
        variants={itemVariants}
      >
        Ready to unlock the hidden potential in your conversations? Get in touch with our team.
      </motion.p>

      {/* Button Container */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        variants={itemVariants}
      >
        {/* Primary Button */}
        <motion.div
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0px 0px 30px rgba(99, 102, 241, 0.6)' 
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Link
            to="/demo"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg"
          >
            Request a Demo
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Secondary Button - FIXED VISIBILITY */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Link
            to="/contact"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-slate-900"
          >
            Contact Us
            <FiMail className="transition-transform duration-300 group-hover:rotate-12" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default CallToActionSection;