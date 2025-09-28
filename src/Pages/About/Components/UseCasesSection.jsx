// src/Pages/About/components/UseCasesSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower, FaUniversity, FaUserShield, FaArrowRight } from 'react-icons/fa'; // Example icons

// --- MOCK DATA (Replace with your actual data) ---
const useCasesData = [
  {
    icon: <FaBroadcastTower />,
    title: 'Telecommunications',
    description: 'Optimize network performance and predict maintenance needs with our AI-driven analytics, ensuring uptime and reliability for your customers.'
  },
  {
    icon: <FaUserShield />,
    title: 'Security & Surveillance',
    description: 'Enhance security protocols with real-time threat detection and behavioral analysis, transforming raw footage into actionable intelligence.'
  },
  {
    icon: <FaUniversity />,
    title: 'Education & Proctoring',
    description: 'Ensure academic integrity in remote exams with advanced proctoring solutions that monitor and flag suspicious activities seamlessly.'
  },
];


// --- ANIMATION VARIANTS ---
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};


const UseCasesSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 px-6 md:px-12 lg:px-24 animated-gradient-bg">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          className="mb-20 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2 
            className="font-bold text-white text-4xl sm:text-5xl md:text-7xl font-sans"
            variants={fadeIn}
          >
            Powering Every Industry
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto lg:mx-0"
            variants={fadeIn}
          >
            Our AI-powered analytics are versatile and powerful, delivering transformative insights and driving innovation across a multitude of sectors.
          </motion.p>
          <motion.div variants={fadeIn}>
            <a 
              href="/features" 
              className="group cta-primary inline-flex items-center gap-3 mt-8"
            >
              Explore All Features
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                <FaArrowRight />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* --- GLASSMORPHISM CARDS GRID --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {useCasesData.map((useCase) => (
            <motion.div 
              key={useCase.title} 
              // CORRECTED: Added responsive padding directly here
              className="card-glass p-6 md:p-8"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* CORRECTED: Responsive icon size */}
                <div className="text-3xl md:text-4xl text-cyan-400">{useCase.icon}</div>
                {/* CORRECTED: Responsive title size */}
                <h3 className="text-xl md:text-2xl font-bold text-white font-sans">{useCase.title}</h3>
              </div>
              {/* CORRECTED: Text color changed to white and added word break */}
              <p className="text-gray-200 break-words">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- CSS for Animations and Card Styles --- */}
      <style jsx global>{`
        /* Animated Gradient Background */
        .animated-gradient-bg {
          background: linear-gradient(135deg, #0f172a, #1e3a8a, #312e81);
          background-size: 200% 200%;
          animation: gradient-animation 15s ease infinite;
        }

        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Glassmorphism Card Style */
        .card-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          /* Padding moved to Tailwind classes for responsiveness */
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .card-glass:hover {
          transform: translateY(-10px) rotate(1deg) scale(1.03);
          box-shadow: 0 16px 40px 0 rgba(0, 0, 0, 0.5);
          border-color: rgba(34, 211, 238, 0.5);
        }
        
        /* Primary Button Style */
        .cta-primary {
          padding: 0.875rem 2rem;
          border-radius: 1rem;
          font-weight: 600;
          color: white;
          background-image: linear-gradient(to right, #4f46e5, #3b82f6);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.4);
        }

        .cta-primary:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </section>
  );
};

export default UseCasesSection;