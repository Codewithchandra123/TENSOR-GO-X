// import React from 'react';
// import { motion } from 'framer-motion';
// import AnimatedCounter from './AnimatedCounter';

// const AnalysisBar = ({ icon, label, value }) => (
//   <div className="flex flex-col gap-2 text-white">
//     <div className="flex justify-between items-center text-sm font-medium">
//       <div className="flex items-center gap-2 text-gray-200">
//         {icon}
//         <span>{label}</span>
//       </div>
//       <span className="font-mono text-white"><AnimatedCounter value={value} />%</span>
//     </div>
//     <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
//       <motion.div
//         className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
//         initial={{ width: 0 }}
//         animate={{ width: `${value}%` }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       />
//     </div>
//   </div>
// );

// export default AnalysisBar;


// src/Pages/InterviewDemo/components/AnalysisBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const AnalysisBar = ({ icon, label, value }) => (
  <div className="flex flex-col gap-2 text-white">
    <div className="flex justify-between items-center text-sm font-medium">
      <div className="flex items-center gap-2.5 text-slate-200">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-mono text-white"><AnimatedCounter value={value} />%</span>
    </div>
    <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300"
        initial={{ width: '0%' }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default AnalysisBar;