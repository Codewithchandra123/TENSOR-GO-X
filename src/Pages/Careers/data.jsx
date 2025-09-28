// src/Pages/Careers/data.jsx
import React from "react";
import {
  FaLaptopCode,
  FaUserTie,
  FaRocket,
  FaHandshake,
  FaLightbulb,
  FaRegLifeRing,
  FaComments,
  FaBrain,
} from "react-icons/fa";

// --- CORE VALUES ---
export const coreValues = [
  {
    icon: <FaBrain className="w-6 h-6 text-sky-500" />,
    title: "Think",
    description: "Thinking deeply and intelligently with attention to detail.",
    color: "sky",
  },
  {
    icon: <FaComments className="w-6 h-6 text-indigo-500" />,
    title: "Communicate",
    description: "Communicate effectively and precisely while staying on point.",
    color: "indigo",
  },
  {
    icon: <FaRocket className="w-6 h-6 text-violet-500" />,
    title: "Action",
    description:
      "Implement massive action and take ownership of things while getting them done.",
    color: "violet",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-pink-500" />,
    title: "Relation",
    description:
      "Build, engage and nurture relationships with colleagues, clients and stakeholders.",
    color: "pink",
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-amber-500" />,
    title: "Potential",
    description:
      "Harness and enhance the potential of the individual and organization.",
    color: "amber",
  },
  {
    icon: <FaRegLifeRing className="w-6 h-6 text-rose-500" />,
    title: "Battle Ready",
    description:
      "Always remain battle ready for challenging situations or complex problems.",
    color: "rose",
  },
];

// --- JOB OPENINGS ---
export const jobOpenings = [
  {
    icon: <FaLaptopCode className="w-6 h-6 text-sky-500" />,
    title: "Senior AI Engineer",
    location: "Remote",
    description:
      "Develop and refine our core machine learning models. Experience with computer vision and NLP is a must.",
    color: "sky",
    // NEW: gradient for hover/background effect
    gradient: { from: "#38bdf8", to: "#0284c7" },
  },
  {
    icon: <FaUserTie className="w-6 h-6 text-indigo-500" />,
    title: "Lead Frontend Developer (React)",
    location: "Remote",
    description:
      "Lead our frontend team in building a high-performance UI. Expertise in React, Tailwind CSS, and state management is required.",
    color: "indigo",
    gradient: { from: "#818cf8", to: "#4f46e5" },
  },
];
