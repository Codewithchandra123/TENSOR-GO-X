// src/Pages/Pricing/components/PricingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '../data';

const PricingCard = ({ plan, billingCycle, index }) => {
  const price = plan.price[billingCycle];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: 'easeOut'
      },
    },
  };

  const ctaClassMap = {
    primary: 'cta-primary',
    secondary: 'cta-secondary',
    outline: 'cta-outline'
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`glass-card p-8 h-full flex flex-col relative transition-transform duration-300 hover:-translate-y-2 ${plan.isPopular ? 'border-2 border-cyan-400' : ''}`}
    >
      {plan.isPopular && (
        <span className="bg-cyan-500 text-white text-xs font-bold uppercase px-4 py-1 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      <p className="mt-4 text-5xl font-bold text-white">
        {typeof price === 'number' ? `$${price}` : price}
        {plan.description && (
          <span className="text-lg font-normal text-slate-400 ml-2">
            {plan.description}
          </span>
        )}
      </p>
      <ul className="mt-8 space-y-4 flex-grow text-slate-300">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckIcon />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 ${ctaClassMap[plan.ctaVariant]}`}>
        {plan.cta}
      </button>
    </motion.div>
  );
};

export default PricingCard;