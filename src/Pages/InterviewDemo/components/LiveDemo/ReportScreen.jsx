// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBrain, FaFileDownload, FaRedo } from 'react-icons/fa';
// import { ROLES } from '../../constants';

// const ReportScreen = ({ fullReportData, performanceProfile, selectedRole, downloadReport, resetLiveDemo }) => {
//     // Calculation logic remains the same
//     const averages = fullReportData.reduce((acc, item) => {
//         Object.keys(item.analysis).forEach(key => {
//             if (typeof item.analysis[key] === 'number') {
//                 acc[key] = (acc[key] || 0) + item.analysis[key];
//             }
//         });
//         return acc;
//     }, {});

//     Object.keys(averages).forEach(key => {
//         averages[key] = Math.round(averages[key] / fullReportData.length);
//     });

//     const confidenceClarityRatio = averages.clarity > 0 ? (averages.attitude / averages.clarity).toFixed(2) : 'N/A';
//     const pressureResponse = 100 - Math.round(((averages.heartRate / 120) * 100) * 0.5);

//     return (
//         <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
//             <motion.div
//                 className="w-full max-w-4xl p-8 md:p-12 rounded-2xl shadow-2xl"
//                 style={{
//                     background: 'rgba(28, 38, 54, 0.6)', // Slightly more opaque for readability
//                     backdropFilter: 'blur(12px)',
//                     border: '1px solid rgba(255, 255, 255, 0.2)',
//                 }}
//                 initial={{ opacity: 0, scale: 0.95, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 0.5, ease: 'easeOut' }}
//             >
//                 <div className="text-center">
//                     <FaBrain className="mx-auto text-6xl text-cyan-300 mb-4" />
//                     <h1 className="text-4xl sm:text-5xl font-bold text-white">Final Candidate Report</h1>
//                     <p className="mt-2 text-lg text-gray-200">Role: {ROLES[selectedRole].name}</p>
//                     <p className="text-md text-gray-300">Analyzed Profile: <span className="font-semibold text-white">{performanceProfile?.name}</span></p>
//                 </div>

//                 {/* Performance Ratios */}
//                 <div className="my-10">
//                     <h3 className="font-semibold text-2xl text-cyan-300 mb-5 text-center">Performance Ratios</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
//                         <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }} className="p-6 rounded-xl bg-black/30">
//                             <span className="text-sm text-gray-300">Confidence / Clarity Ratio</span>
//                             <span className="block font-bold text-4xl text-white mt-2">{confidenceClarityRatio}</span>
//                         </motion.div>
//                         <motion.div whileHover={{ y: -5, transition: { duration: 0.2 } }} className="p-6 rounded-xl bg-black/30">
//                             <span className="text-sm text-gray-300">Pressure Response</span>
//                             <span className="block font-bold text-4xl text-white mt-2">{pressureResponse}%</span>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* Performance Summary */}
//                 <div className="space-y-6 text-gray-200 mb-12">
//                     <div>
//                         <h3 className="font-semibold text-2xl text-cyan-300 mb-3">Performance Summary</h3>
//                         <p className="leading-relaxed text-white">{performanceProfile?.summary}</p>
//                     </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
//                     <button
//                         onClick={downloadReport}
//                         className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30"
//                     >
//                         <FaFileDownload className="mr-3" /> Download Report
//                     </button>
//                     <button
//                         onClick={resetLiveDemo}
//                         className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white/50 rounded-2xl transition-all duration-300 ease-in-out hover:bg-white hover:text-slate-900 transform hover:scale-105"
//                     >
//                         <FaRedo className="inline mr-3 transition-transform duration-300 group-hover:rotate-180" /> Select Another Role
//                     </button>
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default ReportScreen;









// src/Pages/InterviewDemo/components/LiveDemo/ReportScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaFileDownload, FaRedo, FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';
// --- CORRECTED PATH ---
import AnimatedCounter from '../AnimatedCounter';

// A small helper to get a color based on a score
const getScoreColor = (score) => {
  if (score >= 85) return 'text-green-400';
  if (score >= 60) return 'text-yellow-400';
  return 'text-red-400';
};

const ReportScreen = ({ fullReportData, performanceProfile, selectedRole, downloadReport, resetLiveDemo, proctoring }) => {
    
    const averages = fullReportData.reduce((acc, item) => {
        Object.keys(item.analysis).forEach(key => {
            if (typeof item.analysis[key] === 'number') {
                acc[key] = (acc[key] || 0) + item.analysis[key];
            }
        });
        return acc;
    }, {});

    const numItems = fullReportData.length || 1;
    Object.keys(averages).forEach(key => {
        averages[key] = Math.round(averages[key] / numItems);
    });

    const overallScore = Math.round(
      (averages.eyeContact * 0.15) +
      (averages.communication * 0.30) +
      (averages.clarity * 0.25) +
      (averages.attitude * 0.15) +
      (averages.eagerness * 0.15)
    );

    const getVerdict = (score) => {
        if (score >= 85) return { text: "Excellent Fit", color: "text-green-400" };
        if (score >= 65) return { text: "Potential Fit", color: "text-yellow-400" };
        return { text: "Needs Improvement", color: "text-orange-400" };
    };

    const verdict = getVerdict(overallScore);

    return (
        <motion.div
            className="w-full max-w-4xl p-8 rounded-2xl shadow-2xl"
            style={{
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(30, 41, 59, 0.8)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="text-center mb-10">
                <FaBrain className="mx-auto text-6xl text-cyan-400 mb-4" />
                <h1 className="text-4xl sm:text-5xl font-bold text-white">Candidate Analysis Report</h1>
                <p className="mt-2 text-lg text-slate-300">Role: <span className="font-semibold text-white">{selectedRole.name}</span></p>
            </div>

            {/* --- Overall Score & Verdict --- */}
            <div className="text-center mb-10 bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                <p className="text-slate-300 text-lg">Overall Performance Score</p>
                <div className={`font-bold text-7xl my-2 ${getScoreColor(overallScore)}`}>
                    <AnimatedCounter value={overallScore} />%
                </div>
                <p className={`text-2xl font-semibold ${verdict.color}`}>{verdict.text}</p>
            </div>

            {/* --- Detailed Breakdown --- */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Performance Summary */}
                <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700">
                    <h3 className="font-semibold text-xl text-cyan-400 mb-3">Performance Summary</h3>
                    <p className="text-slate-200 leading-relaxed">{performanceProfile?.summary}</p>
                </div>

                {/* Proctoring Summary */}
                <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700">
                     <h3 className="font-semibold text-xl text-cyan-400 mb-3">Proctoring Summary</h3>
                     <div className="flex items-center gap-4">
                        <FaExclamationTriangle className={`text-4xl ${proctoring.warningCount > 0 ? 'text-yellow-400' : 'text-green-400'}`} />
                        <div>
                            <p className="text-3xl font-bold text-white">{proctoring.warningCount}</p>
                            <p className="text-slate-300">Warnings Triggered</p>
                        </div>
                     </div>
                </div>
            </div>
            
            {/* --- Suggestions for Improvement --- */}
            <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 mb-12">
                <h3 className="flex items-center gap-3 font-semibold text-xl text-cyan-400 mb-4">
                    <FaLightbulb />
                    Actionable Suggestions
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-200">
                    {performanceProfile?.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </div>


            {/* --- Action Buttons --- */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <button
                    onClick={downloadReport}
                    className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/30"
                >
                    <FaFileDownload className="mr-3" /> Download Report
                </button>
                <button
                    onClick={resetLiveDemo}
                    className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 font-semibold text-white bg-slate-700/50 border border-slate-600 rounded-xl transition-all duration-300 ease-in-out hover:bg-slate-600 hover:border-slate-500 transform hover:scale-105"
                >
                    <FaRedo className="inline mr-3 transition-transform duration-300 group-hover:rotate-180" /> Interview Another Candidate
                </button>
            </div>
        </motion.div>
    );
};

export default ReportScreen;