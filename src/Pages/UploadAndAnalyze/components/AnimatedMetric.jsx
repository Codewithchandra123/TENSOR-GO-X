import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedMetric = ({ label, value, unit = '%' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return (
    <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner hover:scale-105 transform transition duration-200 hover:rotate-1">
      <h3 className="text-sm font-semibold text-slate-300 mb-1">{label}</h3>
      <p className="text-3xl font-bold animated-metric flex items-center justify-center select-none tabular-nums">
        <motion.span aria-live="polite">{rounded}</motion.span>
        <span className="text-white text-2xl ml-1 font-medium">{unit}</span>
      </p>
    </div>
  );
};
export default AnimatedMetric;
