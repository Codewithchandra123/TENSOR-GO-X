// src/Pages/Pricing/components/HeroSection.jsx
import React from 'react';
import BillingToggle from './BillingToggle';

const HeroSection = ({ billingCycle, onToggle }) => (
  <section className="text-center">
    <div className="container mx-auto px-6 py-16 sm:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
        Flexible Plans for Every Team
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
        Choose the Go-X plan that best fits your collaboration needs and budget.
      </p>
      <BillingToggle billingCycle={billingCycle} onToggle={onToggle} />
    </div>
  </section>
);

export default HeroSection;