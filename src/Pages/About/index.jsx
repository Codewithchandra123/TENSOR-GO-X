// import React from 'react';
// import { Link } from 'react-router-dom';

// // --- ICONS ---
// import {
//   FaBullseye,
//   FaUsers,
//   FaLightbulb,
//   FaHeartbeat,
//   FaHandshake,
//   FaChartLine,
//   FaShieldAlt,
//   FaGraduationCap,
//   FaBriefcaseMedical,
//   FaCommentsDollar,
//   FaLinkedin
// } from 'react-icons/fa';

// // --- IMAGES ---
// import SriniImage from '../assets/srinisir.png';
// import LakshmiImage from '../assets/laxshmimam.png';
// import PallaviImage from '../assets/hrmam.png';

// // --- DATA ORGANIZATION (No Changes) ---
// const teamMembers = [
//   {
//     name: "Srini Chilukuri",
//     title: "Founder & CEO",
//     image: SriniImage,
//     linkedin: "https://www.linkedin.com/in/srinichilukuri/"
//   },
//   {
//     name: "Lakshmi Chilukuri",
//     title: "Co-Founder & MD",
//     image: LakshmiImage,
//     linkedin: "#"
//   },
//   {
//     name: "Pallavi Mishra",
//     title: "CHRO",
//     image: PallaviImage,
//     linkedin: "#"
//   },
// ];

// const metrics = [
//   { icon: <FaBullseye />, value: "98%", title: "Accuracy", description: "Precision in every analysis." },
//   { icon: <FaLightbulb />, value: "15+", title: "Features", description: "Comprehensive tool for every need." },
//   { icon: <FaHeartbeat />, value: "< 1s", title: "Real-Time Speed", description: "Instant insights when you need them." },
// ];

// const useCases = [
//   { icon: <FaUsers />, title: "Human Resources", description: "Transform hiring with biometric analysis and fraud prevention for informed, efficient evaluations." },
//   { icon: <FaGraduationCap />, title: "Education", description: "Gain insights into student engagement and comprehension for personalized feedback." },
//   { icon: <FaBriefcaseMedical />, title: "Healthcare", description: "Enhance telemedicine with physiological data monitoring and smart conversation insights." },
//   { icon: <FaShieldAlt />, title: "Insurance", description: "Authenticate claims with biometrics and detect fraudulent activities in conversations." },
//   { icon: <FaCommentsDollar />, title: "Sales", description: "Empower sales teams with performance metrics and lead quality analysis to drive revenue." },
//   { icon: <FaChartLine />, title: "Smart Meetings", description: "Optimize meetings by extracting key insights and improving collaboration with real-time analytics." },
// ];

// // --- MAIN COMPONENT ---
// const About = () => {
//   return (
//     <div className="bg-gray-100 text-gray-800 font-sans">
      
//       {/* 1. Hero Section - With Advanced Background & Text Effects */}
//       <section className="relative text-center py-28 md:py-36 px-6 overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-gray-50">
//         {/* Animated background blobs */}
//         <div className="absolute inset-0 z-0 opacity-20">
//           <div className="absolute w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
//           <div className="absolute w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
//           <div className="absolute w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-0 left-0"></div>
//         </div>
        
//         <div className="relative z-10 animate-fade-in-up">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 glitch-text-light" data-text="Succeeding with AI, Innovating for the Future.">
//             Succeeding with AI, Innovating for the Future.
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-16 text-indigo-700">
//             AI is the catalyst for a new era of innovation. We transform how businesses solve problems and create value.
//           </p>
          
//           <h2 className="text-3xl font-bold mb-10 text-teal-600 animate-slide-in-left">Our Leadership</h2>
//           <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12">
//             {teamMembers.map((member, index) => (
//               <div 
//                 key={member.name} 
//                 className="group perspective-1000 w-full md:w-64"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="relative w-full h-full p-4 bg-white/60 rounded-2xl shadow-lg transition-transform duration-500 transform-style-3d group-hover:rotate-y-3 group-hover:rotate-x-1 animate-fade-in-up">
//                   <div className="absolute -inset-px bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 blur-md"></div>
//                   <div className="relative h-full bg-white rounded-xl p-4">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="rounded-full mx-auto shadow-lg w-40 h-40 object-cover border-4 border-indigo-500 group-hover:border-teal-400 transition-all duration-300"
//                     />
//                     <div className="mt-4 text-center">
//                       <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
//                       <p className="text-indigo-600 font-medium">{member.title}</p>
//                     </div>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <a
//                         href={member.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-700"
//                       >
//                         <FaLinkedin />
//                         View Profile
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 2. Metrics Section - with glowing borders and animated icons */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-12 text-teal-600 animate-slide-in-right">Metrics That Define Our Impact</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {metrics.map((metric, index) => (
//               <div 
//                 key={metric.title} 
//                 className="relative bg-gray-200 p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group animate-fade-in"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="absolute -inset-px bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-lg"></div>
//                 <div className="relative">
//                   <div className="flex justify-center mb-4 text-5xl text-indigo-600 group-hover:text-teal-400 transition-colors duration-300 animate-pulse-slow">{metric.icon}</div>
//                   <p className="text-5xl font-extrabold my-2 text-gray-900">{metric.value}</p>
//                   <p className="text-xl font-semibold text-gray-800">{metric.title}</p>
//                   <p className="text-gray-600 mt-1">{metric.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Use Cases Section - with interactive glow effect */}
//       <section className="bg-gray-50 py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-slide-in-up">Powering Every Industry</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 interactive-glow-cards">
//             {useCases.map((useCase, index) => (
//               <div 
//                 key={useCase.title} 
//                 className="card bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="text-4xl text-teal-600">{useCase.icon}</div>
//                   <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
//                 </div>
//                 <p className="text-gray-600">{useCase.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* 4. Call to Action - with enhanced styling */}
//       <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20 text-center text-white">
//         <div className="container mx-auto px-6 animate-scale-in">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">You have the conversations. We unlock their potential.</h2>
//           <p className="text-lg text-indigo-200 max-w-3xl mx-auto mb-8">
//             Dive into the intricacies of dialogue, where every word harbors a hidden narrative waiting to be unearthed.
//           </p>
//           <Link to="/contact" className="inline-block py-4 px-10 bg-white text-indigo-700 font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-200 duration-300">
//             Request a Demo
//           </Link>
//         </div>
//       </section>
      
//       {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
//       <style jsx>{`
//         /* Import Inter font (optional, but recommended) */
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        
//         body {
//           font-family: 'Inter', sans-serif;
//         }

//         /* --- Glitch Effect for light background --- */
//         .glitch-text-light {
//           position: relative;
//           color: #1f2937; /* Dark text on light background */
//           transition: text-shadow 0.3s ease;
//         }
//         .glitch-text-light:hover {
//           text-shadow: 0.05em 0 0 rgba(0, 255, 255, 0.75),
//                        -0.05em 0 0 rgba(255, 0, 0, 0.75),
//                        0 0.025em 0 rgba(0, 255, 0, 0.75);
//         }
//         .glitch-text-light::before,
//         .glitch-text-light::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: #f3f4f6; /* Match the new light background */
//           overflow: hidden;
//           color: #1f2937;
//         }
//         .glitch-text-light:hover::before {
//           left: 2px;
//           text-shadow: -1px 0 red;
//           animation: glitch-anim-1 2s infinite linear alternate-reverse;
//         }
//         .glitch-text-light:hover::after {
//           left: -2px;
//           text-shadow: -1px 0 cyan;
//           animation: glitch-anim-2 2s infinite linear alternate-reverse;
//         }

//         @keyframes glitch-anim-1 {
//           0% { clip-path: inset(5% 0 90% 0); }
//           20% { clip-path: inset(80% 0 5% 0); }
//           40% { clip-path: inset(30% 0 40% 0); }
//           60% { clip-path: inset(55% 0 10% 0); }
//           80% { clip-path: inset(15% 0 70% 0); }
//           100% { clip-path: inset(90% 0 2% 0); }
//         }

//         @keyframes glitch-anim-2 {
//           0% { clip-path: inset(70% 0 25% 0); }
//           20% { clip-path: inset(10% 0 85% 0); }
//           40% { clip-path: inset(60% 0 20% 0); }
//           60% { clip-path: inset(35% 0 30% 0); }
//           80% { clip-path: inset(90% 0 5% 0); }
//           100% { clip-path: inset(45% 0 50% 0); }
//         }

//         /* --- Blob Animation --- */
//         @keyframes blob {
//           0% { transform: scale(1) translate(0px, 0px); }
//           33% { transform: scale(1.1) translate(30px, -50px); }
//           66% { transform: scale(0.9) translate(-20px, 20px); }
//           100% { transform: scale(1) translate(0px, 0px); }
//         }
//         .animate-blob {
//           animation: blob 8s infinite ease-in-out;
//         }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }

//         /* --- Card Glow Effect --- */
//         .interactive-glow-cards > .card {
//           position: relative;
//         }
//         .interactive-glow-cards:hover > .card::after {
//           opacity: 1;
//         }
//         .card::before, .card::after {
//           border-radius: inherit;
//           content: "";
//           height: 100%;
//           left: 0px;
//           opacity: 0;
//           position: absolute;
//           top: 0px;
//           transition: opacity 500ms;
//           width: 100%;
//         }
//         .card::before {
//           background: radial-gradient(
//             600px circle at var(--mouse-x) var(--mouse-y),
//             rgba(0, 255, 255, 0.15),
//             transparent 40%
//           );
//           z-index: 3;
//         }
//         .card::after { 
//           background: radial-gradient(
//             400px circle at var(--mouse-x) var(--mouse-y),
//             rgba(0, 255, 255, 0.3),
//             transparent 40%
//           );
//           z-index: 1;
//         }
//         .card:hover::before {
//           opacity: 1;
//         }
        
//         /* --- General Animations --- */
//         @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
//         .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }

//         @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
//         .animate-fade-in-up { animation: fadeInUp 1s ease-out both; }
        
//         @keyframes slideInLeft { 0% { opacity: 0; transform: translateX(-50px); } 100% { opacity: 1; transform: translateX(0); } }
//         .animate-slide-in-left { animation: slideInLeft 0.8s ease-out both; }

//         @keyframes slideInRight { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
//         .animate-slide-in-right { animation: slideInRight 0.8s ease-out both; }
        
//         @keyframes slideInUp { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
//         .animate-slide-in-up { animation: slideInUp 0.8s ease-out both; }
        
//         @keyframes scaleIn { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
//         .animate-scale-in { animation: scaleIn 0.8s ease-out both; }

//         @keyframes pulseSlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
//         .animate-pulse-slow { animation: pulseSlow 4s infinite ease-in-out; }
        
//         /* --- 3D transform utilities --- */
//         .perspective-1000 { perspective: 1000px; }
//         .transform-style-3d { transform-style: preserve-3d; }
//       `}</style>
      
//       {/* Script for interactive glow effect */}
//       <script dangerouslySetInnerHTML={{ __html: `
//         document.addEventListener('DOMContentLoaded', () => {
//           const cardsContainer = document.querySelector('.interactive-glow-cards');
//           if (cardsContainer) {
//             cardsContainer.onmousemove = e => {
//               for(const card of document.getElementsByClassName("card")) {
//                 const rect = card.getBoundingClientRect(),
//                       x = e.clientX - rect.left,
//                       y = e.clientY - rect.top;

//                 card.style.setProperty("--mouse-x", \`\${x}px\`);
//                 card.style.setProperty("--mouse-y", \`\${y}px\`);
//               }
//             }
//           }
//         });
//       `}} />
//     </div>
//   );
// };

// export default About;



// src/Pages/About/index.jsx

import React, { useRef } from 'react';

// --- CHILD COMPONENTS ---
import HeroSection from './Components/HeroSection';
import MetricsSection from './Components/MetricsSection';
import UseCasesSection from './Components/UseCasesSection';
import CallToActionSection from './Components/CallToActionSection';

// --- DATA ---
import { teamMembers, metrics, useCases } from './data.jsx';

// --- STYLES ---
import './About.css';

// --- HOOKS ---
import useGlowEffect from '../../hooks/useGlowEffect';

const About = () => {
  const glowCardsContainerRef = useRef(null);
  useGlowEffect(glowCardsContainerRef);

  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      <HeroSection teamMembers={teamMembers} />
      <MetricsSection metrics={metrics} />
      <UseCasesSection useCases={useCases} ref={glowCardsContainerRef} />
      <CallToActionSection />
    </div>
  );
};

export default About;