// src/Pages/Careers/components/CoreValuesSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { coreValues } from '../data'; // Import the data
import './CoreValuesSection.css'; // We'll create a dedicated CSS file

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', damping: 15, stiffness: 100 }
  }
};

// --- Helper to map color names from data to Tailwind CSS gradient classes ---
const colorMap = {
  sky: 'from-sky-400 to-sky-600',
  indigo: 'from-indigo-400 to-indigo-600',
  violet: 'from-violet-400 to-violet-600',
  pink: 'from-pink-400 to-pink-600',
  amber: 'from-amber-400 to-amber-600',
  rose: 'from-rose-400 to-rose-600',
};

const CoreValuesSection = () => {
  // --- Handlers for the 3D Tilt Effect ---
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20; // Divide to reduce sensitivity
    const y = (e.clientY - top - height / 2) / 20;
    card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section className="core-values-section">
      <div className="container mx-auto py-20 md:py-24 px-6">
        {/* --- Typography & Heading --- */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Values Unite, Differences Ignite
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            These are the principles that guide our work, our culture, and our commitment to making a difference.
          </p>
        </motion.div>

        {/* --- Layout & Values Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {coreValues.map((value) => (
            <motion.div
              key={value.title}
              className="value-card-wrapper" // Wrapper needed for 3D perspective
              variants={itemVariants}
            >
              <div
                className="value-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`icon-wrapper bg-gradient-to-br ${colorMap[value.color]}`}>
                  {React.cloneElement(value.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 mt-6">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesSection;