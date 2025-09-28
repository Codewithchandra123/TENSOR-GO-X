import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  // Add image URLs or SVGs here locally/imported (e.g., 'src/assets/logo1.svg')
  '/logos/logo1.svg',
  '/logos/logo2.svg',
  '/logos/logo3.svg',
  '/logos/logo4.svg',
  '/logos/logo5.svg',
];

const LogoCarousel = () => (
  <div className="overflow-hidden py-6">
    <motion.div
      className="flex gap-10 items-center"
      initial={{ x: 0 }}
      animate={{ x: ['0%', '-50%'] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      style={{ width: 'max-content' }}
    >
      {logos.concat(logos).map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt="Logo"
          className="h-12 w-auto opacity-80 hover:scale-110 transition-transform"
          aria-label={`Logo ${i + 1}`}
        />
      ))}
    </motion.div>
  </div>
);

export default LogoCarousel;
