import React from 'react';
import { Link } from 'react-router-dom';

// --- ICONS for each step ---
import {
  FaPlug,              // Step 1: Connect
  FaBrain,             // Step 2: Live Analysis
  FaChartBar,          // Step 3: Actionable Insights
  FaClipboardList      // Step 4: Post-Meeting Intelligence
} from 'react-icons/fa';

// --- DATA ORGANIZATION (for easier management of the steps) ---
const steps = [
  {
    icon: <FaPlug />,
    title: "Step 1: Securely Connect & Authenticate",
    description: "Instantly link Go-X with your video conferencing tools (Zoom, Teams, Meet). Our system initiates with advanced biometric verification, using lip sync, voice, and facial recognition to ensure every participant is authenticated and interactions are secure from the start.",
    details: ["Easy Integration", "Biometric Security", "Truthfulness Detection"],
  },
  {
    icon: <FaBrain />,
    title: "Step 2: Analyze the Conversation in Real-Time",
    description: "As your meeting begins, Go-X works seamlessly in the background. Our AI decodes every interaction by analyzing a rich spectrum of data points simultaneously, providing a deep understanding of the meeting dynamics as they happen.",
    details: [
      "Physiological Analytics (SPO2, Heart Rate, Stress)",
      "Emotion & Head Pose Tracking",
      "Focus Analytics with Eye Gaze Tracking"
    ],
  },
  {
    icon: <FaChartBar />,
    title: "Step 3: Receive Live, Actionable Insights",
    description: "Transform your strategy mid-conversation with live cues and analytics. For sales teams, this means real-time feedback on charisma, sentiment, and engagement, allowing for immediate adjustments to elevate performance and drive success.",
    details: ["Sales Performance Analytics", "Live Engagement Cues", "Bias & Sentiment Analysis"],
  },
  {
    icon: <FaClipboardList />,
    title: "Step 4: Review Post-Meeting Intelligence",
    description: "The moment your meeting ends, a comprehensive dashboard is ready. Access AI-generated notes, summaries, and action items with over 90% transcription accuracy in 10+ languages. Optimize your strategy for future interactions with data-driven insights.",
    details: ["AI-Generated Summaries & Notes", "Actionable Item Extraction", "Multi-Language Transcription"],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative text-center py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-br from-white via-sky-100 to-slate-100">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute w-96 h-96 bg-violet-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute w-96 h-96 bg-sky-300 rounded-full mix-blend-normal filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 text-reveal">
            <span>Go-X in Action: Simple Setup, Powerful Insights.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            From seamless integration to actionable intelligence, discover how Go-X transforms every phase of your virtual meetings.
          </p>
        </div>
      </section>

      {/* 2. Step-by-Step Timeline Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="relative wrap overflow-hidden p-10 h-full">
            {/* The vertical line */}
            <div className="absolute h-full border-2 border-sky-500/30" style={{ left: '50%' }}></div>

            {steps.map((step, index) => (
              <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                <div className="order-1 w-5/12"></div>
                
                {/* The circle on the timeline */}
                <div className="z-20 flex items-center order-1 bg-sky-500 shadow-xl w-16 h-16 rounded-full">
                  <h1 className="mx-auto text-white text-3xl font-semibold">{index + 1}</h1>
                </div>

                {/* The content card */}
                <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-8 timeline-card">
                  <div className="flex items-center gap-4 mb-4 text-sky-500">
                    <div className="text-3xl">{step.icon}</div>
                    <h3 className="font-bold text-slate-900 text-2xl">{step.title}</h3>
                  </div>
                  <p className="text-lg leading-snug tracking-wide text-slate-600">
                    {step.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {step.details.map(detail => (
                      <li key={detail} className="flex items-center text-slate-700">
                        <svg className="w-4 h-4 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call to Action Section */}
      <section className="bg-gradient-to-r from-sky-500 to-violet-600 py-20">
        <div className="container mx-auto px-6 text-center animate-scale-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                Transform Your Team's Collaboration Today.
            </h2>
            <p className="mt-4 text-lg text-sky-100 max-w-2xl mx-auto">
              Ready to unlock the hidden potential in your conversations? Get in touch with our team.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link to="/demo" className="inline-block bg-white text-sky-600 font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl">
                  Request a Demo
              </Link>
              <Link to="/contact" className="inline-block bg-transparent border-2 border-white text-white font-bold text-lg py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 hover:bg-white hover:text-violet-600">
                  Contact Us
              </Link>
            </div>
        </div>
      </section>
      
      {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
      <style jsx>{`
        /* --- Text Reveal Animation --- */
        .text-reveal > span {
          display: inline-block;
          overflow: hidden;
          animation: reveal 0.75s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        @keyframes reveal {
          0% { transform: translate(0, 100%); }
          100% { transform: translate(0, 0); }
        }

        /* --- Blob Animation --- */
        @keyframes blob {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-blob { animation: blob 6s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        /* --- General Animations --- */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
        
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-in { animation: scaleIn 0.4s ease-out forwards; }
        
        /* --- Timeline Card Animation --- */
        .timeline-card {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.4s ease-in-out;
          visibility: hidden;
        }
        .left-timeline .timeline-card { transform: translateX(-50px); }
        .right-timeline .timeline-card { transform: translateX(50px); }
        
        /* This is a simple way to trigger animation on scroll. 
           For a real app, you'd use an Intersection Observer. */
        .timeline-card {
           visibility: visible;
           opacity: 1;
           transform: translateY(0) translateX(0);
        }

        .timeline-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;


// import React from 'react';
// import { Link } from 'react-router-dom';

// const HowItWorks = () => {
//   return (
//     <div className="min-h-screen bg-neutral-light-gray">
//       {/* 1. Hero Section */}
//       <section className="bg-white">
//         <div className="container mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold font-headings text-primary-deep-blue">
//             Go-X in Action: Simple Setup, Powerful Insights.
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-text-dark-gray max-w-3xl mx-auto">
//             Integrating Go-X into your virtual meetings is quick and effortless.
//           </p>
//         </div>
//       </section>

//       {/* 2. Step-by-Step Guide Section */}
//       <section className="bg-neutral-light-gray py-20">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto">
//             {/* Step 1 */}
//             <div className="flex items-start mb-12">
//               <div className="flex items-center justify-center bg-primary-teal text-white font-bold text-2xl rounded-full h-12 w-12 flex-shrink-0">
//                 1
//               </div>
//               <div className="ml-6">
//                 <h3 className="text-2xl font-bold font-headings text-text-dark-gray">Connect Go-X</h3>
//                 <p className="mt-2 text-lg text-text-dark-gray">
//                   Securely link your Go-X account with your preferred video conferencing platform (Zoom, Google Meet, Microsoft Teams) in just a few clicks.
//                 </p>
//                 <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//                   <p className="text-center text-gray-500">
//                     <Link to="/integrations" className="text-blue-500 hover:underline">
//                       View our Integrations page for details.
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex items-start mb-12">
//               <div className="flex items-center justify-center bg-primary-teal text-white font-bold text-2xl rounded-full h-12 w-12 flex-shrink-0">
//                 2
//               </div>
//               <div className="ml-6">
//                 <h3 className="text-2xl font-bold font-headings text-text-dark-gray">Start Your Meeting</h3>
//                 <p className="mt-2 text-lg text-text-dark-gray">
//                   Initiate your virtual meeting as usual. Go-X runs seamlessly in the background, analyzing interactions without disruption.
//                 </p>
//                 <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//                   <p className="text-center text-gray-500">
//                     <Link to="/live-demo" className="text-blue-500 hover:underline">
//                       Start a Live Demo to see it in action.
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="flex items-start mb-12">
//               <div className="flex items-center justify-center bg-primary-teal text-white font-bold text-2xl rounded-full h-12 w-12 flex-shrink-0">
//                 3
//               </div>
//               <div className="ml-6">
//                 <h3 className="text-2xl font-bold font-headings text-text-dark-gray">Receive Live Cues & Insights</h3>
//                 <p className="mt-2 text-lg text-text-dark-gray">
//                   Access real-time visual and audio cues during your meeting, enabling immediate adjustments for better engagement and understanding.
//                 </p>
//                 <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//                   <p className="text-center text-gray-500">
//                     <Link to="/features" className="text-blue-500 hover:underline">
//                       See our Features page for more details.
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 4 */}
//             <div className="flex items-start">
//               <div className="flex items-center justify-center bg-primary-teal text-white font-bold text-2xl rounded-full h-12 w-12 flex-shrink-0">
//                 4
//               </div>
//               <div className="ml-6">
//                 <h3 className="text-2xl font-bold font-headings text-text-dark-gray">Review Post-Meeting Analytics</h3>
//                 <p className="mt-2 text-lg text-text-dark-gray">
//                   After your call, access a comprehensive dashboard with AI-generated summaries, non-verbal analysis, and physiological data insights to optimize future interactions.
//                 </p>
//                 <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
//                   <p className="text-center text-gray-500">
//                     <Link to="/analyze-recording" className="text-blue-500 hover:underline">
//                       Try uploading a file to get a report.
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* 3. Call to Action Section */}
//       <section className="bg-white">
//         <div className="container mx-auto px-6 py-20 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold font-headings text-text-dark-gray">
//             Transform Your Team's Collaboration Today.
//           </h2>
//           <button className="mt-8 bg-accent-aqua text-white font-bold text-lg py-3 px-8 rounded-md hover:opacity-90 transition-all shadow-lg">
//             Sign Up for Free
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HowItWorks;
