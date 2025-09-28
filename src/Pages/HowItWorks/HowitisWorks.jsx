// src/Pages/HowItWorks/index.jsx

import React from 'react';

// --- CHILD COMPONENTS ---
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import CallToActionSection from './components/CallToActionSection';

// --- DATA ---
import { steps } from './data.jsx';

// --- STYLES ---
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <HeroSection />
      <TimelineSection steps={steps} />
      <CallToActionSection />
    </div>
  );
};

export default HowItWorks;