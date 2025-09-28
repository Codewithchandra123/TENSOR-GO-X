// src/Pages/InterviewDemo/components/ProctoringWarning.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const ProctoringWarning = ({ warning }) => {
  return (
    <AnimatePresence>
      {warning && (
        <motion.div
          className="proctoring-warning" // This class is styled in our updated CSS
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          role="alert"
        >
          <FaExclamationTriangle className="text-yellow-400 text-xl" />
          <div>
            <span className="font-bold text-white">{warning.type} Warning</span>
            <p className="text-sm text-gray-200">{warning.message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProctoringWarning;