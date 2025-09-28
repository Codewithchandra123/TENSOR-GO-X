import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom"; 

// Animation variants for the main container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for individual text and button elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Variants for the button's hover glow effect
const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.3)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// Variants for the arrow icon to ensure smooth appearance
const arrowVariants = {
  rest: {
    opacity: 0,
    x: -10,
    width: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    opacity: 1,
    x: 0,
    width: 'auto',
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const HeroSection = () => {
  return (
    // Section container: full-screen, flex-centered layout
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 font-inter text-white">
      
      {/* Animated background gradient shapes for depth */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute w-72 h-72 md:w-96 md:h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [-100, 100, -100],
            y: [-100, 100, -100],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-400 rounded-full filter blur-3xl opacity-50"
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
            rotate: [0, -180, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Content container: centered, max-width, and animated */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading: Adjusted font size */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white"
          variants={itemVariants}
        >
          Go-X in Action<br /> Simple Setup, Powerful Insights
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl"
          variants={itemVariants}
        >
          From seamless integration to actionable intelligence, discover how Go-X transforms every phase of your virtual meetings.
        </motion.p>

        {/* Call-to-Action Button: Improved hover animation */}
        <motion.div variants={itemVariants} className="mt-10">
          <Link to="/pricing"> {/* ✅ Routing assigned here */}
            <motion.button
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial="rest"
              animate="rest"
            >
              <span>Get Started Now</span>
              <motion.div
                className="overflow-hidden flex items-center justify-center"
                variants={arrowVariants}
              >
                <FiArrowRight className="ml-1" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div> {/* ✅ closed motion.div properly */}
    </section>
  );
};

export default HeroSection;
