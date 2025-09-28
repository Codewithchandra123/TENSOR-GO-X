// // src/Pages/Contact/components/SuccessMessage.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaCheckCircle } from 'react-icons/fa';

// const SuccessMessage = ({ onReset }) => (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     className="flex flex-col items-center justify-center text-center h-full p-8"
//   >
//     <FaCheckCircle className="text-green-400 text-6xl mb-4" />
//     <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
//     <p className="text-slate-300 mb-6">Your message has been sent successfully. We'll be in touch soon.</p>
//     <button onClick={onReset} className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
//       Send another message
//     </button>
//   </motion.div>
// );

// export default SuccessMessage;


import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessMessage = ({ onReset }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center justify-center text-center h-full p-8"
  >
    <FaCheckCircle className="text-green-400 text-6xl mb-4" />
    <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
    <p className="text-white mb-6">Your message has been sent successfully. We'll be in touch soon.</p>
    <button
      onClick={onReset}
      className="font-bold text-cyan-400 hover:text-cyan-200 transition"
      aria-label="Send another message"
    >
      Send another message
    </button>
  </motion.div>
);

export default SuccessMessage;
