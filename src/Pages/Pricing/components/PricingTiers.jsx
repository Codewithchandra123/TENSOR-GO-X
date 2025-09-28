// src/Pages/Pricing/components/PricingTiers.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../data';
import PricingCard from './PricingCard';

const PricingTiers = ({ billingCycle }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="py-16 sm:py-20"
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            billingCycle={billingCycle}
            index={index}
          />
        ))}
      </div>
    </div>
  </motion.section>
);

export default PricingTiers;