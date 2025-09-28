// src/Pages/Features/index.jsx

import React from 'react';

// Child Components
import HeroSection from './components/HeroSection';
import FeatureDetail from './components/FeatureDetail';
import CallToActionSection from './components/CallToActionSection';

// Data and Styles
import { featureData } from './data';
import './Features.css';

const Features = () => {
  return (
    <div className="bg-white font-sans">
      <HeroSection />

      {/* Detailed Feature Sections */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 space-y-24">
          {featureData.map((feature, index) => (
            <FeatureDetail 
              key={feature.title} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
};

export default Features;