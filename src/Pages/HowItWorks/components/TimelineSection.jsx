import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCpu, FiMic, FiBarChart2, FiShare2, FiCheckCircle } from 'react-icons/fi';

import integrationImage from "../../../assets/images/h1.jpeg";
import transcriptionImage from "../../../assets/images/h2.jpeg";
import analysisImage from "../../../assets/images/h3.jpeg";
import collaborationImage from "../../../assets/images/h4.jpeg";


const aiImages = [
  integrationImage,
  transcriptionImage,
  analysisImage,
  collaborationImage,
];

// Themed Content
const processSteps = [
    { icon: <FiCpu />, title: 'Seamless Integration', description: 'Connect Go-X effortlessly with your favorite virtual meeting platforms like Zoom, Google Meet, and Microsoft Teams.', details: ['One-Click Authentication', 'No Software Installation', 'Secure API Connection'] },
    { icon: <FiMic />, title: 'Live Transcription', description: 'Our AI companion captures every word, identifying speakers and transcribing conversations in real-time with over 95% accuracy.', details: ['Real-Time Transcription', 'Speaker Diarization', 'Multi-Language Support'] },
    { icon: <FiBarChart2 />, title: 'Insightful AI Analysis', description: "After the meeting, Go-X generates concise summaries, identifies key topics, extracts action items, and measures sentiment.", details: ['Automated Summaries', 'Action Item Detection', 'Sentiment Analysis'] },
    { icon: <FiShare2 />, title: 'Actionable Intelligence', description: 'Access your insights on a clean dashboard. Share summaries, assign action items, and export data to streamline your workflow.', details: ['Interactive Dashboards', 'Shareable Reports', 'CRM & PM Tool Integration'] },
];

// Animation Variants
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
const headingVariants = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } } };
const cardVariants = (isLeft) => ({ offscreen: { opacity: 0, x: isLeft ? -80 : 80 }, onscreen: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 0.3, duration: 1 } } });

// --- Main Timeline Component ---
const TimelineSection = () => {
  const timelineRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start center', 'end center'] });
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="relative font-inter w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl" animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500 rounded-full filter blur-3xl" animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} />
      </div>

      <motion.div className="relative z-10 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
        <motion.div className="text-center mb-24" variants={headingVariants}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
            How It Works: A Step-by-Step Journey
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto" style={{ textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)' }}>
            From initial setup to actionable insights, follow our seamless and powerful process.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Animated Serpentine Line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-1 -translate-x-1/2 hidden md:block">
              <svg width="2" height="100%" viewBox="0 0 2 1100" preserveAspectRatio="none">
                  <path d="M 1 0 V 1100" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
                  <motion.path d="M 1 0 V 1100" stroke="url(#gradient)" strokeWidth="2" style={{ pathLength }} />
                  <defs><linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1100"><stop stopColor="#38bdf8" /><stop offset="1" stopColor="#818cf8" /></linearGradient></defs>
              </svg>
          </div>

          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="mb-12 md:mb-0">
                <motion.div className={`relative flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}><Card content={step} image={aiImages[index]} isLeft={isLeft} /></div>
                  <NumberBubble index={index + 1} />
                </motion.div>
                {index < processSteps.length - 1 && <div className="h-16 md:hidden"></div>}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

// --- Reusable Sub-components ---
const Card = ({ content, image, isLeft }) => (
  <motion.div variants={cardVariants(isLeft)} className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
    <div className="relative p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl ring-1 ring-inset ring-white/20 transform transition-transform duration-300 group-hover:scale-105">
      <img src={image} alt={content.title} className="w-full h-40 object-cover rounded-lg mb-4 border border-white/10" />
      <div className="flex items-center gap-4 mb-3">
        <div className="text-3xl text-sky-300">{content.icon}</div>
        <h3 className="font-bold text-white text-2xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{content.title}</h3>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-white/90 mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{content.description}</p>
      <ul className="space-y-2">
        {content.details.map((detail, i) => (
          <li key={i} className="flex items-center text-base text-white/80" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
            <FiCheckCircle className="w-4 h-4 mr-3 text-sky-400 flex-shrink-0" />{detail}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const NumberBubble = ({ index }) => (
    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:relative md:top-auto md:left-auto md:translate-x-0 md:translate-y-0 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 shadow-lg ring-4 ring-slate-900">
      <span className="text-3xl font-semibold">{index}</span>
    </div>
);

export default TimelineSection;