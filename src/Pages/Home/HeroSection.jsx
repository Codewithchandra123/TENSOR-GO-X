// src/Pages/Home/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// --- SVG Icons for the "Trusted By" Scroller ---
const SiGoogle = (props) => (
    <svg viewBox="0 0 24 24" {...props}><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>
);
const SiMicrosoft = (props) => (
    <svg viewBox="0 0 24 24" {...props}><path d="M11.4 21.9H2.1V12.6h9.3v9.3zm0-11.4H2.1V2.1h9.3v9.4zm10.5 11.4H12.6V12.6h9.3v9.3zm0-11.4H12.6V2.1h9.3v9.4z" fill="#F25022" /></svg>
);
const SiOracle = (props) => (
    <svg role="img" viewBox="0 0 24 24" {...props}><path d="M12.339 1.634c-5.526 0-10.005 4.479-10.005 10.005s4.479 10.005 10.005 10.005 10.005-4.479 10.005-10.005S17.865 1.634 12.339 1.634zm-.124 2.052c4.403 0 7.973 3.568 7.973 7.973s-3.57 7.973-7.973 7.973S4.24 16.062 4.24 11.659s3.57-7.973 7.975-7.973zm-.05 2.052c-3.27 0-5.922 2.653-5.922 5.922s2.652 5.922 5.922 5.922 5.922-2.653 5.922-5.922-2.653-5.922-5.922-5.922z" fill="#F80000"/></svg>
);
const SiNvidia = (props) => (
    <svg role="img" viewBox="0 0 24 24" {...props}><path d="M15.42 20.379v-6.093l-3.41-1.968v3.938l3.41 1.968zm-6.84 0l3.42-1.968V8.38l-3.42 1.968v10.031zm.255-11.164l3.165-1.827-3.165-1.827-3.165 1.827 3.165 1.827zm9.99-5.766L12 0 5.175 3.449v17.102L12 24l6.825-3.449V3.449z" fill="#76B900"/></svg>
);
const SiIntel = (props) => (
    <svg role="img" viewBox="0 0 24 24" {...props}><path d="M13.23.002H.002v24h24V.002h-5.419V5.42h-3.35V.002h-1.997zm-1.678 1.678h1.678V3.7h-1.678V1.68zm-3.35 0h1.672v2.02h-1.672V1.68zM3.353 1.68H5.03v2.02H3.353V1.68zm-1.672 0H3.35v2.02H1.68V1.68zm17.318 0h1.678v3.748h-1.678V1.68zm-3.35 0h1.672v3.748h-1.672V1.68zM1.68 5.398h1.67v1.672H1.68V5.398zm3.35 0h1.678v1.672H5.03V5.398zm3.35 0h1.678v1.672H8.38V5.398zm3.35 0h3.35v3.35h-3.35V5.398zM1.68 8.748h1.67v1.678H1.68V8.748zm3.35 0h1.678v1.678H5.03V8.748zm3.35 0h1.678v1.678H8.38V8.748zm6.7 0h1.678v1.678h-1.678V8.748zm3.35 0h1.678v1.678h-1.678V8.748zM1.68 12.1h1.67v1.678H1.68V12.1zm3.35 0h1.678v1.678H5.03V12.1zm3.35 0h1.678v1.678H8.38V12.1zm3.35 0h3.35v3.35h-3.35V12.1zM1.68 15.45h1.67v1.678H1.68v-1.678zm3.35 0h1.678v1.678H5.03v-1.678zm3.35 0h1.678v1.678H8.38v-1.678zm6.7 0h1.678v1.678h-1.678v-1.678zm3.35 0h1.678v1.678h-1.678v-1.678zM1.68 18.8h1.67v1.678H1.68V18.8zm3.35 0h1.678v1.678H5.03V18.8zm3.35 0h1.678v1.678H8.38V18.8zm3.35 0h3.35v3.35h-3.35V18.8z" fill="#0071C5"/></svg>
);
const SiKpmg = (props) => (
  <svg role="img" viewBox="0 0 24 24" fill="#0033A0" {...props}><path d="M1.67.002H0V24h5.61v-8.878h4.038l4.493 8.878H20.2L12.1 12.02 17.55 0H11.5L8.18 7.364H5.61V.002z"/></svg>
);


const HeroSection = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headlineRef.current) {
        const { clientX, clientY } = e;
        const { left, top } = headlineRef.current.getBoundingClientRect();
        headlineRef.current.style.setProperty("--mouse-x", `${clientX - left}px`);
        headlineRef.current.style.setProperty("--mouse-y", `${clientY - top}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const headlineText = "Unlock Deeper Insights from Every Meeting.";
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  const logos = [
    <SiGoogle key="google" className="logo-item" />, <SiMicrosoft key="microsoft" className="logo-item" />, <SiOracle key="oracle" className="logo-item" />, 
    <SiNvidia key="nvidia" className="logo-item" />, <SiIntel key="intel" className="logo-item" />, <SiKpmg key="kpmg" className="logo-item" />
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center text-center px-6 overflow-hidden bg-slate-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 z-0 mix-blend-screen">
        <div className="aurora-1"></div>
        <div className="aurora-2"></div>
        <div className="aurora-3"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse-zoom">
            Go-X
          </h1>
          <p className="text-lg md:text-2xl font-bold tracking-wide text-white">
            by TensorGo
          </p>
        </motion.div>

        <motion.h2
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-headings leading-tight mt-10 max-w-4xl interactive-headline"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineText.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={charVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              {/* Add a non-breaking space after each word */}
              {wordIndex < headlineText.split(" ").length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </motion.h2>

        <motion.p
          className="text-xl text-white mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          AI-powered analytics to transform virtual collaboration and revolutionize team dynamics.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <Link to="/demo" className="cta-primary">
            <span>Start Your Free Trial</span>
            <span className="arrow-icon"><FaArrowRight /></span>
          </Link>
          <Link to="/about" className="cta-secondary">
            <span>Learn More</span>
            <span className="arrow-icon"><FaArrowRight /></span>
          </Link>
        </motion.div>
      </div>

      {/* "Trusted By" Scroller Container */}
      <div className="relative z-10 w-full pt-12 pb-12">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted By Teams At</p>
        <div className="logo-scroller">
          <div className="logo-scroller-inner">
            {[...logos, ...logos]}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px);
          background-size: 3rem 3rem;
        }
        
        @keyframes aurora-animation {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.2; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
        }

        .aurora-1, .aurora-2, .aurora-3 {
          position: absolute; border-radius: 50%; filter: blur(100px); animation: aurora-animation 15s infinite ease-in-out;
        }
        .aurora-1 { top: 20%; left: 20%; width: 500px; height: 500px; background-color: rgba(79, 70, 229, 0.5); }
        .aurora-2 { top: 50%; left: 80%; width: 400px; height: 400px; background-color: rgba(124, 58, 237, 0.5); animation-delay: 5s; }
        .aurora-3 { top: 80%; left: 30%; width: 300px; height: 300px; background-color: rgba(20, 184, 166, 0.5); animation-delay: 10s; }

        @keyframes pulse-zoom {
            0%, 100% { transform: scale(1); text-shadow: 0 0 10px rgba(199, 210, 254, 0.3); }
            50% { transform: scale(1.05); text-shadow: 0 0 20px rgba(167, 139, 250, 0.5); }
        }
        
        .animate-pulse-zoom {
            animation: pulse-zoom 5s infinite ease-in-out;
        }
        
        .interactive-headline {
          position: relative;
          color: rgba(255, 255, 255, 0.85); /* Base color is now a bright white */
        }
        .interactive-headline::before {
          content: ''; position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), white 0%, transparent 100%);
          -webkit-mask-image: linear-gradient(black, black); mask-image: linear-gradient(black, black);
          -webkit-mask-clip: text; mask-clip: text;
        }

        .cta-primary, .cta-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 1rem 2.5rem; font-weight: bold; font-size: 1.125rem;
          border-radius: 9999px; position: relative; overflow: hidden;
          cursor: pointer; text-decoration: none;
          transition: all 0.4s ease;
        }

        .cta-primary {
          background-image: linear-gradient(to right, #4f46e5, #7c3aed, #4f46e5);
          background-size: 200% auto;
          color: white;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
        }

        .cta-primary:hover {
          background-position: right center;
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 15px 30px rgba(124, 58, 237, 0.4);
        }

        .cta-secondary {
          background-color: rgba(71, 85, 105, 0.3); /* Muted slate background */
          border: 2px solid rgba(100, 116, 139, 0.5);
          color: #E5E7EB; /* White text */
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background-color: rgba(245, 158, 11, 0.1); /* Amber transparent background */
          border-color: #f59e0b; /* Amber-500 */
          color: #f59e0b; /* Amber-500 */
        }

        .arrow-icon {
          margin-left: 0.75rem; display: inline-block;
          opacity: 0; transform: translateX(-15px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .cta-primary:hover .arrow-icon,
        .cta-secondary:hover .arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }

        .logo-scroller {
          max-width: 90%; margin: auto; overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
        
        .logo-scroller:hover .logo-scroller-inner {
          animation-play-state: paused;
        }

        .logo-scroller-inner {
          display: flex; align-items: center; gap: 4.5rem; width: fit-content;
          animation: scroll 20s linear infinite;
        }

        .logo-item {
          height: 3rem; width: auto;
          color: #cbd5e1; /* slate-300, brightened for visibility */
          flex-shrink: 0;
        }

        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 2.25rem));
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;