// src/Pages/Integrations/components/IntegrationModal.jsx
 
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle, FiAlertTriangle, FiLoader } from "react-icons/fi";


// --- Animation Variants ---
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    // Refined spring for a smoother, less jarring entry animation
    transition: { type: "spring", stiffness: 250, damping: 30, staggerChildren: 0.1, delayChildren: 0.1 } 
  },
  exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } },
};

const IntegrationModal = ({ integration, onClose, onConnect, onDisconnect }) => {
  const [apiKey, setApiKey] = React.useState('');

  React.useEffect(() => {
    if (integration) setApiKey('');
  }, [integration]);
  
  const handleConnect = () => onConnect(integration.id, apiKey);
  
  const colorClasses = {
    blue: { bg: "bg-gradient-to-r from-blue-500 to-blue-600", shadow: "shadow-blue-500/40" },
    default: { bg: "bg-gradient-to-r from-slate-600 to-slate-700", shadow: "shadow-slate-600/40" },
  };

  const buttonTheme = colorClasses[integration?.color] || colorClasses.default;

  const renderContent = () => {
    if (integration.status === 'connected') {
      return (
        <div className="text-center">
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
              <FiCheckCircle className="w-16 h-16 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Connection Successful</h3>
              <p className="text-white/80">You have successfully connected {integration.name}.</p>
          </motion.div>
          <motion.button
            variants={itemVariants}
            onClick={() => onDisconnect(integration.id)}
            className="mt-6 w-full text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            Disconnect
          </motion.button>
        </div>
      );
    }
    
    return (
      <>
        <motion.p variants={itemVariants} className="text-lg text-white/80 mb-6 leading-relaxed">
          To connect {integration.name}, please enter your API key below.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <input 
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="e.g. DUMMY-API-KEY-12345"
            // Text color inside the input box is explicitly white
            className="w-full bg-slate-900/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
          />
        </motion.div>

        {integration.status === 'error' && (
          <motion.div variants={itemVariants} className="mt-4 flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg">
            <FiAlertTriangle />
            <span>Connection failed. Please check your key and try again.</span>
          </motion.div>
        )}
        
        <motion.div variants={itemVariants} className="mt-8">
          <motion.button
            onClick={handleConnect}
            disabled={integration.isLoading || !apiKey}
            className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-white text-lg disabled:opacity-50 disabled:cursor-not-allowed ${buttonTheme.bg} shadow-lg ${buttonTheme.shadow}`}
            whileHover={{ scale: 1.05, y: -2, boxShadow: `0 10px 20px -5px ${buttonTheme.shadow}` }}
            whileTap={{ scale: 0.98 }}
          >
            {integration.isLoading ? (
              <>
                <FiLoader className="animate-spin h-6 w-6" />
                <span className="ml-2">Connecting...</span>
              </>
            ) : ( "Connect this app" )}
          </motion.button>
        </motion.div>
      </>
    );
  };

  return (
    <AnimatePresence>
      {integration && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-sans"
          variants={backdropVariants} initial="hidden" animate="visible" exit="hidden"
          onClick={onClose} role="dialog" aria-modal="true"
        >
          <motion.div
            className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-8 max-w-lg w-full"
            variants={modalVariants} onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              onClick={onClose} aria-label="Close modal"
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors rounded-full p-1"
              whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
            >
              <FiX size={24} />
            </motion.button>
            <motion.div variants={itemVariants} className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 flex items-center justify-center p-2 bg-slate-700/50 rounded-lg">
                {React.cloneElement(integration.logo, { size: 40 })}
              </div>
              <h2 className="text-3xl font-bold text-white">{integration.name}</h2>
            </motion.div>
            
            {renderContent()}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntegrationModal;