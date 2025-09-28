// import React from 'react';
// import { Link } from 'react-router-dom';

// // --- ICONS (for better visual representation) ---
// import {
//   FaRegSmile,         // Non-Verbal Cues
//   FaFileAlt,          // Meeting Summaries
//   FaHeartbeat,        // Physiological Data
//   FaBullhorn,         // Live Cues
//   FaChartLine,        // Predictive Analytics
//   FaShieldAlt         // Security & Compliance
// } from 'react-icons/fa';

// // --- DATA ORGANIZATION with REAL IMAGES (and the corrected image link) ---
// const featureData = [
//   {
//     icon: <FaRegSmile />,
//     title: "Read the Room, Virtually.",
//     description: "Go-X analyzes facial expressions, gaze detection, and voice intonation in real-time. Understand participant engagement, identify confusion, and gauge sentiment without subjective interpretation.",
//     // Image representing facial analysis & emotion AI
//     imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     icon: <FaFileAlt />,
//     title: "Never Miss a Key Takeaway.",
//     description: "Our AI automatically transcribes meetings, identifies key discussion points, extracts action items, and pinpoints decisions made. Share concise summaries with just one click.",
//     // Image of a professional, clean dashboard with text/notes
//     imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     icon: <FaHeartbeat />,
//     title: "Monitor Well-being and Focus.",
//     description: "Using advanced computer vision, Go-X tracks heart rate and stress levels to provide insights into participant well-being, ensuring healthier and more productive meetings.",
//     note: "Privacy and user consent are paramount for this feature.",
//     // --- THIS IMAGE URL HAS BEEN UPDATED AND FIXED ---
//     // Image representing health data & biometrics on a screen
//     imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     icon: <FaBullhorn />,
//     title: "Real-time Feedback, Real-time Impact.",
//     description: "Unlike any other product, Go-X provides live, on-screen visual and audio cues, empowering facilitators to adjust their presentation style or address disengagement immediately.",
//     // Image of a live presentation or video call with an engaging interface
//     imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Predictive Conversation Analytics.",
//     description: "Leverage AI to predict meeting outcomes and identify potential roadblocks before they happen. Our analytics help steer conversations toward successful conclusions.",
//     // Image of a complex data visualization or predictive analytics chart
//     imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Enterprise-Grade Security & Compliance.",
//     description: "Built with security at its core, Go-X ensures all your data is encrypted and handled with the strictest compliance standards (GDPR, SOC 2).",
//     // Image representing cybersecurity, data protection, and compliance
//     imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   }
// ];


// // --- MAIN COMPONENT ---
// const Features = () => {
//   return (
//     <div className="bg-white font-sans">
      
//       {/* 1. Hero Section */}
//       <section className="relative text-slate-900 text-center py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-white via-sky-100 to-slate-100">
//         {/* Animated background blobs */}
//         <div className="absolute inset-0 z-0 opacity-50">
//             <div className="absolute w-96 h-96 bg-violet-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
//             <div className="absolute w-96 h-96 bg-sky-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
//             <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-0 left-0"></div>
//         </div>
        
//         <div className="relative z-10 animate-fade-in-up">
//           <h1 
//             className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 glitch-container"
//             data-text="Go-X Features: Deeper Insights, Better Decisions."
//           >
//             <span className="glitch-text">Go-X Features: Deeper Insights, Better Decisions.</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//             Explore how Go-X leverages cutting-edge AI to provide unparalleled meeting intelligence.
//           </p>
//         </div>
//       </section>

//       {/* 2. Detailed Feature Sections */}
//       <section className="py-20 bg-slate-50">
//         <div className="container mx-auto px-6 space-y-24">
//           {featureData.map((feature, index) => (
//             <div 
//               key={feature.title} 
//               className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 animate-fade-in-up`}
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               {/* Text Content */}
//               <div className="md:w-1/2">
//                 <div className="flex items-center gap-4 mb-4 text-sky-500">
//                    <div className="text-3xl">{feature.icon}</div>
//                    <h2 className="text-3xl font-bold text-slate-900">{feature.title}</h2>
//                 </div>
//                 <p className="text-lg text-slate-600">
//                   {feature.description}
//                 </p>
//                 {feature.note && (
//                   <p className="mt-4 text-sm text-slate-500 italic">
//                     Note: {feature.note}
//                   </p>
//                 )}
//               </div>
              
//               {/* Image Content */}
//               <div className="md:w-1/2 w-full rounded-xl group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//                 <img 
//                   src={feature.imageUrl} 
//                   alt={feature.title} 
//                   className="rounded-xl object-cover w-full h-80 border border-slate-200 shadow-lg group-hover:border-sky-500"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. Call to Action Section */}
//       <section className="bg-gradient-to-r from-sky-500 to-violet-600">
//         <div className="container mx-auto px-6 py-20 text-center animate-scale-in">
//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//                 Ready to Experience Smarter Meetings?
//             </h2>
//             <p className="mt-4 text-lg text-sky-100 max-w-2xl mx-auto">
//               Transform your conversations into actionable intelligence and drive better outcomes.
//             </p>
//             <Link to="/pricing" className="mt-8 inline-block bg-white text-sky-600 font-bold text-lg py-3 px-8 rounded-full hover:bg-slate-100 transition-all shadow-lg transform hover:scale-105 animate-pulse-slow">
//                 Explore Pricing
//             </Link>
//         </div>
//       </section>
      
//       {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
//       <style jsx>{`
//         /* --- Professional Glitch Effect --- */
//         .glitch-container {
//           position: relative;
//           cursor: pointer;
//         }
//         .glitch-text {
//           display: inline-block;
//           position: relative;
//         }
//         .glitch-container .glitch-text::before,
//         .glitch-container .glitch-text::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: transparent;
//           clip-path: inset(0 0 0 0);
//           opacity: 0;
//           transition: opacity 0.3s;
//         }
//         .glitch-container:hover .glitch-text::before,
//         .glitch-container:hover .glitch-text::after {
//             opacity: 1;
//         }
//         .glitch-container .glitch-text::before {
//           left: -2px;
//           text-shadow: 2px 0 #8b5cf6; /* violet */
//           animation: glitch-anim-1 1.5s infinite linear alternate-reverse;
//         }
//         .glitch-container .glitch-text::after {
//           left: 2px;
//           text-shadow: -2px 0 #0ea5e9; /* sky */
//           animation: glitch-anim-2 2s infinite linear alternate-reverse;
//         }

//         @keyframes glitch-anim-1 {
//           0%, 100% { clip-path: inset(45% 0 50% 0); }
//           25% { clip-path: inset(10% 0 85% 0); }
//           50% { clip-path: inset(60% 0 30% 0); }
//           75% { clip-path: inset(20% 0 70% 0); }
//         }
//         @keyframes glitch-anim-2 {
//           0%, 100% { clip-path: inset(80% 0 10% 0); }
//           25% { clip-path: inset(30% 0 65% 0); }
//           50% { clip-path: inset(5% 0 90% 0); }
//           75% { clip-path: inset(70% 0 20% 0); }
//         }

//         /* --- Blob Animation --- */
//         @keyframes blob {
//           0% { transform: scale(1) translate(0, 0); }
//           33% { transform: scale(1.1) translate(30px, -50px); }
//           66% { transform: scale(0.9) translate(-20px, 20px); }
//           100% { transform: scale(1) translate(0, 0); }
//         }
//         .animate-blob { animation: blob 8s infinite ease-in-out; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }

//         /* --- General Animations --- */
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//           opacity: 0; /* Start hidden */
//         }
        
//         @keyframes scaleIn {
//           from { opacity: 0; transform: scale(0.95); }
//           to { opacity: 1; transform: scale(1); }
//         }
//         .animate-scale-in { animation: scaleIn 0.8s ease-out forwards; }
        
//         @keyframes pulseSlow {
//           0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
//           50% { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(255, 255, 255, 0); }
//         }
//         .animate-pulse-slow {
//           animation: pulseSlow 3s infinite ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Features;