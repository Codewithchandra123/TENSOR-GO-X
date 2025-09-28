import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // ✅ 1. Import useNavigate
import { pricingPlans } from '../data';
import PricingCard from './PricingCard'; // We will create this component next

const PricingTiers = ({ billingCycle }) => {
  const navigate = useNavigate(); // ✅ 2. Initialize the navigate function

  // ✅ 3. Create a handler function to be passed down to each card
  const handleCtaClick = (action) => {
    // Check if the action exists and is a navigation type
    if (action && action.type === 'navigate') {
      navigate(action.to); // Use navigate to go to the specified route
    }
    // You can handle other actions here if needed
    else if (action && action.type === 'function') {
      alert('Opening the Pro Trial Modal!'); // Placeholder for the middle button
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 sm:py-20"
      id="pricing-tiers" // Added an ID for potential smooth scrolling
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billingCycle={billingCycle}
              index={index}
              onCtaClick={handleCtaClick} // ✅ 4. Pass the handler function as a prop
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PricingTiers;