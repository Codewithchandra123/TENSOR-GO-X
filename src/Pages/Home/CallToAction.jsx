// src/Pages/Home/CallToAction.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 sm:py-28 bg-slate-900 text-center text-white overflow-hidden">
      {/* Background Aurora Effect */}
      <div className="absolute inset-0 z-0 mix-blend-soft-light">
        <div className="aurora-cta-1"></div>
        <div className="aurora-cta-2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-4"
            variants={itemVariants}
          >
            Ready to Transform Your Meetings?
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto mb-10"
            variants={itemVariants}
          >
            Start your journey with Go-X and unlock the hidden potential within
            every conversation.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/contact" className="cta-button group">
              <span>Request a Demo</span>
              <span className="arrow-icon">
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes aurora-animation-cta {
          0% {
            transform: scale(1) translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.4) translate(20px, -20px);
            opacity: 0.15;
          }
          100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.3;
          }
        }

        .aurora-cta-1,
        .aurora-cta-2 {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          animation: aurora-animation-cta 20s infinite ease-in-out;
        }

        .aurora-cta-1 {
          top: 10%;
          left: 15%;
          width: 400px;
          height: 400px;
          background-color: rgba(79, 70, 229, 0.6); /* Indigo */
        }

        .aurora-cta-2 {
          bottom: 10%;
          right: 15%;
          width: 400px;
          height: 400px;
          background-color: rgba(124, 58, 237, 0.6); /* Purple */
          animation-delay: 7s;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2.5rem;
          font-weight: bold;
          font-size: 1.125rem;
          border-radius: 9999px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.4s ease;
          background-image: linear-gradient(to right, #4f46e5, #7c3aed, #4f46e5);
          background-size: 200% auto;
          color: white;
          box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);
        }

        .cta-button:hover {
          background-position: right center;
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(124, 58, 237, 0.4);
        }

        .cta-button .arrow-icon {
          display: inline-block;
          margin-left: 0.5rem;
          opacity: 0;
          transform: translateX(-15px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .cta-button:hover .arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
};

export default CallToAction;