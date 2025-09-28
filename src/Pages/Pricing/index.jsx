// src/Pages/Pricing/index.jsx
import React, { useState, useEffect } from 'react';

// Child Components
import HeroSection from './components/HeroSection';
import PricingTiers from './components/PricingTiers';
import FaqSection from './components/FaqSection';

// Shared Component (relative path to AnimatedCounter)
import AnimatedCounter from '../InterviewDemo/components/AnimatedCounter';

// Styles
import './Pricing.css';

const Pricing = () => {
  // State to manage the billing cycle toggle ('monthly' or 'annually')
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleToggle = () => {
    setBillingCycle(prev => (prev === 'monthly' ? 'annually' : 'monthly'));
  };

  // Effect to add a class to the body for the gradient background
  useEffect(() => {
    document.body.classList.add('pricing-page-background');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('pricing-page-background');
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Example usage of AnimatedCounter */}
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold text-white">
          Trusted by <AnimatedCounter value={5000} />+ Users
        </h2>
      </div>

      <HeroSection billingCycle={billingCycle} onToggle={handleToggle} />
      <PricingTiers billingCycle={billingCycle} />
      <FaqSection />
    </div>
  );
};

export default Pricing;
