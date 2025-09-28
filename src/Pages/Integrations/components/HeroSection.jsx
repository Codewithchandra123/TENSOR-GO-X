// src/Pages/Integrations/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiActivity, FiLayers } from 'react-icons/fi';

// Ensure you have installed the dependencies:
// npm install framer-motion react-icons

// Also ensure you are using a font like 'Inter' or 'Poppins' in your tailwind config or global CSS.
// e.g., in index.css: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

const HeroSection = () => {
  // Animation Variants for staggered effect
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white font-sans">
      {/* Rule 5: Subtle Background Animation (Floating Blobs) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Rule 3: Layout & Alignment */}
      <div className="container mx-auto max-w-6xl px-6 md:px-12 lg:px-24 py-20 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Rule 1: Typography - Main Heading (Corrected for proper flow) */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Integrate <br></br>Go-X
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Seamlessly
              </span>
            </motion.h1>
            
            {/* Rule 1: Typography - Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0"
            >
              Connect Go-X with the tools you use every day to automate workflows
              and unlock deeper insights.
            </motion.p>

            {/* Rule 4: Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl text-white font-semibold shadow-lg flex items-center justify-center gap-3 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Rule 7: Glow effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-blue-600 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                Get Started
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                className="px-8 py-4 border border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Integrations
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Rule 2: Glassmorphism Card (Refined alignment and corners) */}
          <motion.div
            className="hidden lg:flex flex-1 justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          >
            <motion.div
              className="relative w-full max-w-md p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl"
              whileHover={{ rotate: 1, scale: 1.02 }} // Rule 7: Hover tilt
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
               <div className="flex items-center justify-between mb-6">
                    <div className="font-semibold text-white">Active Integrations</div>
                    <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
               </div>
               <div className="space-y-4">
                    {/* Placeholder content rows with improved internal spacing */}
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                        <div className="p-2 rounded-full bg-blue-500/20 text-blue-300"><FiZap /></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/30 rounded w-3/4"></div>
                            <div className="h-2 bg-white/10 rounded w-1/2"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                        <div className="p-2 rounded-full bg-green-500/20 text-green-300"><FiActivity /></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/30 rounded w-2/3"></div>
                            <div className="h-2 bg-white/10 rounded w-1/3"></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                        <div className="p-2 rounded-full bg-orange-500/20 text-orange-300"><FiLayers /></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/30 rounded w-5/6"></div>
                            <div className="h-2 bg-white/10 rounded w-2/5"></div>
                        </div>
                    </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;