// src/Pages/About/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = ({ teamMembers = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="relative text-center py-20 md:py-28 px-6 lg:px-24 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      {/* Animated background aurora */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light">
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-1/4"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-0 left-1/4"></div>
      </div>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          variants={itemVariants}
        >
          Succeeding with AI, Innovating for the Future.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-4xl mx-auto mb-16 text-slate-200"
          variants={itemVariants}
        >
          AI is the catalyst for a new era of innovation. We transform how
          businesses solve problems and create value.
        </motion.p>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-teal-400"
          variants={itemVariants}
        >
          Our Leadership
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-8 md:gap-12"
          variants={containerVariants}
        >
          {teamMembers.length > 0 ? (
            teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="team-card group w-full md:w-80"
                onMouseMove={handleMouseMove}
              >
                <div className="team-card-content">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full mx-auto shadow-lg w-32 h-32 object-cover border-4 border-slate-700 group-hover:border-teal-400 transition-all duration-300"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="font-medium text-slate-300">{member.title}</p>
                  </div>
                  <p className="text-sm text-slate-200 my-4 text-center italic">
                    "{member.bio}"
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4 border-t border-slate-700">
                    {member.expertise?.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                    >
                      <FaLinkedin />
                      View Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-slate-400 italic">
              Leadership team details will be updated soon.
            </p>
          )}
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .team-card {
          position: relative;
          border-radius: 1rem;
          border: 1px solid #334155; /* slate-700 */
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: #2dd4bf; /* teal-400 */
        }

        .team-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(
            400px circle at var(--mouse-x) var(--mouse-y),
            rgba(45, 212, 191, 0.2),
            transparent 80%
          );
        }

        .team-card:hover::before {
          opacity: 1;
        }

        .team-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          height: 100%;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(12px);
          border-radius: inherit;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
