// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBrain, FaVideo, FaCloudUploadAlt } from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";

// // Animation variants for Framer Motion
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
// };

// const cardHoverEffect = {
//   scale: 1.05,
//   rotate: 1,
//   boxShadow: '0px 20px 30px rgba(0, 200, 255, 0.2)',
// };

// const ModeCard = ({ icon, title, subtitle, onClick }) => (
//   <motion.button
//     onClick={onClick}
//     aria-label={title}
//     className="group relative w-full sm:w-80 md:w-96 p-8 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-300"
//     style={{
//       background: 'rgba(255, 255, 255, 0.1)',
//       backdropFilter: 'blur(10px)',
//       border: '1px solid rgba(255, 255, 255, 0.2)',
//     }}
//     variants={itemVariants}
//     whileHover={cardHoverEffect}
//     transition={{ type: 'spring', stiffness: 300 }}
//   >
//     <div className="flex flex-col items-center text-center">
//       <div className="text-5xl text-cyan-300 transition-colors duration-300 group-hover:text-white">
//         {icon}
//       </div>
//       <span className="mt-6 text-2xl font-bold text-white">{title}</span>
//       <span className="mt-2 text-base text-gray-200">{subtitle}</span>
//     </div>
//   </motion.button>
// );

// const ModeSelection = ({ onSelectMode }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen w-full flex flex-col justify-start items-center px-6 pt-24 pb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 font-sans overflow-hidden">
//       {/* Subtle background shapes */}
//       <div className="absolute top-10 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-10 -right-20 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>

//       <motion.div
//         className="w-full max-w-4xl z-10 text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div variants={itemVariants} className="flex justify-center">
//           <FaBrain className="text-6xl text-cyan-300" />
//         </motion.div>
//         <motion.h1
//           className="mt-4 text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight"
//           variants={itemVariants}
//         >
//           AI Analysis Hub
//         </motion.h1>
//         <motion.p
//           className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
//           variants={itemVariants}
//         >
//           Choose your method to unlock deep insights from conversations.
//         </motion.p>

//         <motion.div
//           className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8"
//           variants={containerVariants}
//         >
//           {/* Still using setMode for live demo */}
//           <ModeCard
//             onClick={() => onSelectMode('liveDemo')}
//             icon={<FaVideo />}
//             title="Live Interview Demo"
//             subtitle="Run a real-time AI analysis of a simulated interview."
//           />

//           {/* 🚀 Now using navigate for routing */}
//           <ModeCard
//             onClick={() => navigate("/upload")}
//             icon={<FaCloudUploadAlt />}
//             title="Upload & Analyze"
//             subtitle="Analyze a pre-recorded video or audio file for insights."
//           />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ModeSelection;

// src/Pages/InterviewDemo/components/ModeSelection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaVideo, FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const cardHoverEffect = {
  scale: 1.05,
  boxShadow: '0px 20px 30px rgba(6, 182, 212, 0.2)',
};

// Individual Mode Card
const ModeCard = ({ icon, title, subtitle, onClick }) => (
  <motion.button
    onClick={onClick}
    aria-label={title}
    className="group relative w-full sm:w-96 p-8 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-400"
    style={{
      background: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(30, 41, 59, 0.8)',
    }}
    variants={itemVariants}
    whileHover={cardHoverEffect}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="flex flex-col items-center text-center">
      <div className="text-5xl text-cyan-400 transition-colors duration-300 group-hover:text-white">
        {icon}
      </div>
      <span className="mt-6 text-2xl font-bold text-white">{title}</span>
      <span className="mt-2 text-base text-slate-300">{subtitle}</span>
    </div>
  </motion.button>
);

// Main Mode Selection Component
const ModeSelection = ({ onSelectMode }) => {
  const navigate = useNavigate(); // ✅ Must be inside the component

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-6">
      <motion.div
        className="w-full max-w-4xl z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <FaBrain className="text-6xl text-cyan-400 mx-auto" />
        </motion.div>
        <motion.h1
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
          variants={itemVariants}
        >
          AI Analysis Hub
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Unlock deep insights from conversations. Choose your method to begin.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8"
          variants={containerVariants}
        >
          {/* Live Demo uses the setMode callback */}
          <ModeCard
            onClick={() => onSelectMode('liveDemo')}
            icon={<FaVideo />}
            title="Live Interview Demo"
            subtitle="Run a real-time AI analysis of a simulated interview."
          />

          {/* Upload & Analyze uses navigate for routing */}
          <ModeCard
            onClick={() => navigate("/upload")}
            icon={<FaCloudUploadAlt />}
            title="Upload & Analyze"
            subtitle="Analyze a pre-recorded video file for insights."
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModeSelection;
