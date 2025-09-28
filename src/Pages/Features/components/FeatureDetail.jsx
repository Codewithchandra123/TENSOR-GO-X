// src/Pages/Features/components/FeatureDetail.jsx

import React from 'react';
import { motion } from 'framer-motion';

/**
 * A modern, animated component to display a single feature detail.
 * It uses Framer Motion to animate into view as the user scrolls.
 *
 * This component requires:
 * - framer-motion
 */
const FeatureDetail = ({ feature, index }) => {
  // Determine animation direction based on the index (for alternating layout)
  const isReversed = index % 2 !== 0;

  // Animation variants for the content blocks (text and image)
  const contentVariants = {
    hidden: (isLeft) => ({
      opacity: 0,
      x: isLeft ? -50 : 50, // Slide from left or right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
      transition={{ staggerChildren: 0.2 }}
    >
      {/* === Text Content === */}
      <motion.div
        className="md:w-1/2"
        custom={!isReversed} // Pass direction to variants
        variants={contentVariants}
      >
        <div className="flex items-center gap-4 mb-4 text-sky-500">
          <div className="text-3xl">{feature.icon}</div>
          <h2 className="text-3xl font-bold text-slate-900">{feature.title}</h2>
        </div>
        <p className="text-lg text-slate-600">{feature.description}</p>
        {feature.note && (
          <p className="mt-4 text-sm text-slate-500 italic">
            Note: {feature.note}
          </p>
        )}
      </motion.div>

      {/* === Image Content === */}
      <motion.div
        className="md:w-1/2 w-full"
        custom={isReversed} // Pass direction to variants
        variants={contentVariants}
      >
        <div className="group rounded-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 transform hover:rotate-1 hover:scale-105">
          <img
            src={feature.imageUrl}
            alt={feature.title}
            className="rounded-xl object-cover w-full h-80 border border-slate-200 shadow-lg group-hover:border-sky-500"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureDetail;