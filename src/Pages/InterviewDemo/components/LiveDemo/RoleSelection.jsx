// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaUserTie, FaArrowRight } from 'react-icons/fa';
// import { ROLES } from '../../constants';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
// };

// const RoleSelection = ({ onRoleSelect }) => {
//   const [isAddingCustom, setIsAddingCustom] = useState(false);
//   const [customRole, setCustomRole] = useState('');

//   const handleCustomRoleSubmit = (e) => {
//     e.preventDefault();
//     if (customRole.trim()) {
//       onRoleSelect({
//         key: 'custom',
//         name: customRole.trim(),
//         isCustom: true,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-start p-6 pt-24">
//       <motion.div
//         className="w-full max-w-4xl text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div variants={itemVariants} className="flex justify-center">
//           <FaUserTie className="text-6xl text-cyan-300" />
//         </motion.div>
//         <motion.h1
//           className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight"
//           variants={itemVariants}
//         >
//           {isAddingCustom ? 'Enter Your Role' : 'Select Candidate Role'}
//         </motion.h1>
//         <motion.p
//           className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
//           variants={itemVariants}
//         >
//           {isAddingCustom
//             ? 'Please specify the role for a tailored analysis.'
//             : 'Choose a role to tailor the interview questions and AI analysis.'}
//         </motion.p>

//         {isAddingCustom ? (
//           <motion.form
//             onSubmit={handleCustomRoleSubmit}
//             className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.input
//               type="text"
//               value={customRole}
//               onChange={(e) => setCustomRole(e.target.value)}
//               placeholder="e.g., Product Manager"
//               className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl font-semibold text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               variants={itemVariants}
//               autoFocus
//             />
//             <motion.button
//               type="submit"
//               disabled={!customRole.trim()}
//               className="group w-full sm:w-auto flex-shrink-0 flex items-center justify-center px-6 py-4 bg-cyan-500 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//               variants={itemVariants}
//             >
//               Submit <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
//             </motion.button>
//           </motion.form>
//         ) : (
//           <motion.div
//             className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6"
//             variants={containerVariants}
//           >
//             {Object.keys(ROLES)
//               .filter(key => key !== 'other') // ✅ filter out any "other" in ROLES
//               .map(key => (
//                 <motion.button
//                   key={key}
//                   onClick={() => onRoleSelect(key)}
//                   className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-semibold text-white transition-all duration-300 transform hover:bg-cyan-500 hover:border-cyan-500 hover:scale-105 shadow-lg"
//                   variants={itemVariants}
//                 >
//                   {ROLES[key].name}
//                 </motion.button>
//               ))}
//             {/* Single "Other..." button for custom role */}
//             <motion.button
//               onClick={() => setIsAddingCustom(true)}
//               className="px-6 py-3 bg-transparent border-2 border-dashed border-white/40 rounded-xl font-semibold text-white/80 transition-all duration-300 transform hover:bg-white/10 hover:text-white hover:border-solid hover:scale-105"
//               variants={itemVariants}
//             >
//               Other...
//             </motion.button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default RoleSelection;


// src/Pages/InterviewDemo/components/LiveDemo/RoleSelection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaArrowRight } from 'react-icons/fa';
import { ROLES } from '../../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const RoleSelection = ({ onRoleSelect }) => {
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [customRole, setCustomRole] = useState('');

  const handleCustomRoleSubmit = (e) => {
    e.preventDefault();
    if (customRole.trim()) {
      onRoleSelect({
        name: customRole.trim(),
        isCustom: true,
      });
    }
  };

  return (
    <motion.div
      className="w-full max-w-4xl text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <FaUserTie className="text-6xl text-cyan-400 mx-auto" />
      </motion.div>
      <motion.h1
        className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
        variants={itemVariants}
      >
        {isAddingCustom ? 'Specify Custom Role' : 'Select Candidate Role'}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        {isAddingCustom
          ? 'Enter the job title for which you want to generate questions.'
          : 'Choose a role to tailor the interview questions and AI analysis.'}
      </motion.p>

      {isAddingCustom ? (
        <motion.form
          onSubmit={handleCustomRoleSubmit}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-lg mx-auto"
          variants={itemVariants}
        >
          <input
            type="text"
            value={customRole}
            onChange={(e) => setCustomRole(e.target.value)}
            placeholder="e.g., Senior Product Manager"
            className="w-full px-5 py-4 bg-slate-800 border-2 border-slate-700 rounded-xl font-semibold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
            autoFocus
          />
          <button
            type="submit"
            disabled={!customRole.trim()}
            className="group w-full sm:w-auto flex-shrink-0 flex items-center justify-center px-6 py-4 bg-cyan-500 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          {Object.keys(ROLES).map(key => (
              <motion.button
                key={key}
                onClick={() => onRoleSelect(key)}
                className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:bg-cyan-500 hover:border-cyan-500 hover:scale-105 shadow-lg"
                variants={itemVariants}
              >
                {ROLES[key].name}
              </motion.button>
            ))}
          <motion.button
            onClick={() => setIsAddingCustom(true)}
            className="px-6 py-3 bg-transparent border-2 border-dashed border-slate-600 rounded-xl font-semibold text-slate-300 transition-all duration-300 transform hover:bg-slate-700/50 hover:text-white hover:border-solid hover:scale-105"
            variants={itemVariants}
          >
            Other...
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default RoleSelection; 
