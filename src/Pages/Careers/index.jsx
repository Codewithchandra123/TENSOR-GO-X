// src/Pages/Careers/index.jsx

import React from 'react';

// --- CHILD COMPONENTS ---
import HeroSection from './components/HeroSection';
import CoreValuesSection from './components/CoreValuesSection';
import JobOpeningsSection from './components/JobOpeningsSection';

// --- DATA ---
import { coreValues, jobOpenings } from './data.jsx';

// --- STYLES ---
import './Careers.css';

const Careers = () => (
  <div className="bg-slate-50 text-slate-800 font-sans">
    <HeroSection />
    <CoreValuesSection coreValues={coreValues} />
    <JobOpeningsSection jobOpenings={jobOpenings} />
  </div>
);

export default Careers;