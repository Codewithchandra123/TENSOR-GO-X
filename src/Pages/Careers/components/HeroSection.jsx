// src/Pages/Careers/components/HeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// --- ANIMATION VARIANTS ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};


const HeroSection = () => (
  <section className="relative overflow-hidden py-24 md:py-32 px-6 bg-gradient-to-br from-white via-sky-100 to-slate-100">
    {/* Animated Blobs Background */}
    <div className="absolute inset-0 z-0 opacity-50">
      <div className="absolute w-96 h-96 bg-violet-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute w-96 h-96 bg-sky-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
    </div>
    
    <div className="relative z-10 container mx-auto max-w-6xl">
      <motion.div 
        className="text-center lg:text-left"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
          variants={fadeInUp}
        >
          Architect Intelligence, Engineer Tomorrow.
        </motion.h1>
        
        {/* CORRECTED: Text color changed to a darker gray for high contrast and readability */}
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto lg:mx-0 mb-10 text-slate-800"
          variants={fadeInUp}
        >
          Dive into AI's cutting edge, transforming industries and tackling global challenges. 
          Your brilliance, our innovative platform. Ready to redefine possibilities?
        </motion.p>
        
        <motion.div variants={fadeInUp}>
          <a 
            href="#openings" 
            className="group cta-button-white"
          >
            <span>Explore Open Positions</span>
            <span className="arrow-icon">
              <FaArrowRight />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>

    {/* CSS for the button styles */}
    <style jsx global>{`
      .cta-button-white {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.875rem 2rem;
        background-color: white;
        color: #0284c7; /* sky-600 */
        font-weight: 700;
        font-size: 1.125rem;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        transition: all 0.3s ease;
      }

      .cta-button-white:hover {
        transform: scale(1.05);
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      }

      .arrow-icon {
        transition: transform 0.3s ease;
      }

      .cta-button-white:hover .arrow-icon {
        transform: translateX(6px);
      }

      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
    `}</style>
  </section>
);

export default HeroSection;