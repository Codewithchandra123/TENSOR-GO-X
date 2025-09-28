// src/Pages/Pricing/components/BillingToggle.jsx
import React from 'react';

const BillingToggle = ({ billingCycle, onToggle }) => (
  <div className="mt-10 flex justify-center items-center space-x-4">
    <span
      className={`font-semibold transition-colors text-lg ${
        billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'
      }`}
    >
      Monthly
    </span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={billingCycle === 'annually'}
        onChange={onToggle}
      />
      {/* 
        Correction: Replaced 'peer-checked:after:translate-x-full' with 'peer-checked:after:translate-x-7'.
        'translate-x-full' moves the element by 100% of its own width (20px).
        The required travel distance is 28px (Container width 56px - Circle width 20px - 2*Padding 4px).
        In Tailwind, 'translate-x-7' corresponds to 1.75rem (28px), which is the correct distance.
      */}
      <div className="w-14 h-7 bg-slate-700 rounded-full peer peer-checked:after:translate-x-7 after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
    </label>
    <div className="flex items-center">
      <span
        className={`font-semibold transition-colors text-lg ${
          billingCycle === 'annually' ? 'text-white' : 'text-slate-400'
        }`}
      >
        Annually
      </span>
      <span className="ml-3 text-xs font-bold text-cyan-300 bg-cyan-900/50 px-2 py-1 rounded-full">
        Save 20%
      </span>
    </div>
  </div>
);

export default BillingToggle;