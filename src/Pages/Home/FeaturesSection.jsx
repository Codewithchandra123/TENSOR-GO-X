// src/Pages/Home/FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaTags,
  FaListCheck,
  FaUsersGear,
  FaFileWaveform,
  FaShieldHalved,
} from "react-icons/fa6";

const features = [
  {
    title: "AI-Powered Transcription",
    description:
      "Leverage cutting-edge Voice AI to transcribe conversations with over 95% accuracy, capturing every critical detail.",
    icon: <FaFileWaveform className="w-10 h-10 text-indigo-400" />,
  },
  {
    title: "Sentiment & Tone Analysis",
    description:
      "Go beyond words. Our AI analyzes emotional tone and sentiment to give you a deeper understanding of team morale and engagement.",
    icon: <FaBrain className="w-10 h-10 text-purple-400" />,
  },
  {
    title: "Automatic Topic Extraction",
    description:
      "Instantly identify and tag key topics, themes, and discussion points, making it easy to review and find what matters most.",
    icon: <FaTags className="w-10 h-10 text-teal-400" />,
  },
  {
    title: "Action Item Detection",
    description:
      "Never miss a task. Our platform automatically detects and compiles a list of action items and decisions from your meetings.",
    icon: <FaListCheck className="w-10 h-10 text-amber-400" />,
  },
  {
    title: "Advanced Speaker Analytics",
    description:
      "Gain insights into team dynamics with detailed metrics on speaker talk time, interruptions, and participation patterns.",
    icon: <FaUsersGear className="w-10 h-10 text-sky-400" />,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with end-to-end encryption and robust security protocols, ensuring complete privacy and compliance.",
    icon: <FaShieldHalved className="w-10 h-10 text-rose-400" />,
  },
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
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
    <section className="py-20 sm:py-28 bg-slate-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            A Smarter Way to Collaborate
          </h2>
          <p className="text-lg text-slate-200">
            Go-X is more than just a meeting tool. It's an intelligent platform
            designed to unlock actionable insights, boost productivity, and
            transform your team's performance.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card"
              onMouseMove={handleMouseMove}
            >
              <div className="feature-card-content">
                <div className="flex-shrink-0 mb-5 p-4 bg-slate-800 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-200 mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .feature-card {
          position: relative;
          background: #0f172a; /* slate-900 */
          border-radius: 1rem; /* rounded-2xl */
          border: 1px solid #334155; /* slate-700 */
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .feature-card:hover {
          transform: scale(1.05) translateY(-8px);
          border-color: #4f46e5; /* indigo-600 */
        }

        .feature-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(
            250px circle at var(--mouse-x) var(--mouse-y),
            rgba(168, 85, 247, 0.2), /* purple-500 with 20% opacity */
            transparent 80%
          );
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card-content {
          position: relative;
          z-index: 1; /* Keep content above the ::before pseudo-element */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem; /* p-8 */
          height: 100%;
        }
      `}</style>
    </section>
  );
}