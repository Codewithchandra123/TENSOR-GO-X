// src/Pages/Integrations/components/IntegrationCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSettings, FiAlertTriangle } from 'react-icons/fi';

const IntegrationCard = ({ integration, onOpenModal, index }) => {
  // Animation variants for a staggered entry effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom ease for a professional feel
      },
    },
  };

  // Dynamically determine the card's theme based on its status
  const statusTheme = {
    connected: {
      bg: 'bg-green-500/10',
      text: 'text-green-300',
      dot: 'bg-green-400',
      border: 'hover:border-green-500/50',
    },
    disconnected: {
      bg: 'bg-slate-400/10',
      text: 'text-slate-400',
      dot: 'bg-slate-400',
      border: 'hover:border-blue-500/50',
    },
    error: {
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      dot: 'bg-red-400',
      border: 'hover:border-red-500/50',
    },
  };

  const currentTheme = statusTheme[integration.status] || statusTheme.disconnected;

  const getButtonContent = () => {
    switch (integration.status) {
      case 'connected':
        return { text: 'Settings', icon: <FiSettings /> };
      case 'error':
        return { text: 'Retry', icon: <FiAlertTriangle /> };
      default:
        return { text: 'Connect', icon: <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" /> };
    }
  };

  const { text: buttonText, icon: buttonIcon } = getButtonContent();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // Softer spring animation for a smoother hover effect
      whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 250, damping: 20 } }}
      className="relative h-full"
    >
      <button
        onClick={() => onOpenModal(integration)}
        aria-label={`Configure ${integration.name} integration`}
        className={`group w-full h-full text-left p-px rounded-2xl bg-gradient-to-br from-white/10 to-white/0 transition-all duration-300 ${currentTheme.border}`}
      >
        <div className="relative w-full h-full p-6 bg-slate-900/60 backdrop-blur-xl rounded-xl shadow-lg flex flex-col justify-between border border-white/10 overflow-hidden">
          
          <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(400px at 50% 0%, ${integration.glowColor || 'rgba(29, 78, 216, 0.15)'}, transparent 80%)`
            }}
          />

          <div className={`${integration.isLoading ? 'filter blur-sm' : ''} transition-filter duration-300 flex-grow flex flex-col`}>
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-800 border border-slate-700 rounded-lg">{integration.logo}</div>
              <div className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${currentTheme.bg} ${currentTheme.text} border ${currentTheme.bg.replace('/10', '/20')}`}>
                <div className={`w-2 h-2 rounded-full ${currentTheme.dot}`}></div>
                <span className="capitalize">{integration.status}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-white mb-2 font-sans">{integration.name}</h2>
              <p className="text-gray-300 leading-relaxed font-sans min-h-[72px]">{integration.description}</p>
            </div>
            
            {/* Footer Button */}
            <motion.div
              whileTap={{ scale: 0.97 }}
              className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 mt-6 ${
                integration.status === 'connected'
                  ? 'bg-slate-700 text-white group-hover:bg-slate-600'
                  : `bg-gradient-to-r ${integration.buttonGradient} text-white group-hover:shadow-lg group-hover:shadow-indigo-500/30`
              }`}
            >
              <span>{buttonText}</span>
              {buttonIcon}
            </motion.div>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default IntegrationCard;