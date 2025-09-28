// src/Pages/About/components/MissionSection.jsx

import React, { useEffect } from 'react';
import { FaLightbulb, FaHandshake, FaBalanceScale } from 'react-icons/fa';

const values = [
    {
        icon: <FaLightbulb className="w-12 h-12 text-teal-300 mx-auto mb-4" />,
        title: "Innovation",
        description: "We are driven by a relentless pursuit of innovation, pushing the boundaries of what's possible with AI."
    },
    {
        icon: <FaHandshake className="w-12 h-12 text-indigo-300 mx-auto mb-4" />,
        title: "Collaboration",
        description: "We believe the best solutions are born from partnership—with our clients and within our team."
    },
    {
        icon: <FaBalanceScale className="w-12 h-12 text-purple-300 mx-auto mb-4" />,
        title: "Integrity",
        description: "We build trust through transparency and ethical practices in every aspect of our work."
    }
];

const MissionSection = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Efficiently target only the cards within this component's scope
      const container = e.currentTarget;
      const cards = container.querySelectorAll('.card');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    // More robustly select the container
    const container = document.querySelector('.interactive-glow-cards');
    if (container) {
        container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
        if (container) {
            container.removeEventListener('mousemove', handleMouseMove);
        }
    };
  }, []);

  return (
    <section className="bg-slate-900 py-20 md:py-28 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white animate-fade-in-up">Our Core Values</h2>
        
        {/* Interactive glow cards container from your About.css */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 interactive-glow-cards">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="card p-8 bg-slate-800 rounded-2xl border border-slate-700 animate-fade-in-up" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10">
                {value.icon}
                <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
                {/* --- IMPORTANT: Updated text color to white --- */}
                <p className="text-slate-200">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;