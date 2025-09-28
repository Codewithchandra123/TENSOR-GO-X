// src/Pages/About/data.jsx
import React from "react";

// --- ICONS ---
import {
  FaBullseye,
  FaUsers,
  FaLightbulb,
  FaHeartbeat,
  FaHandshake,
  FaChartLine,
  FaShieldAlt,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaCommentsDollar,
} from "react-icons/fa";

// --- IMAGES ---
import SriniImage from "../../assets/srinisir.png";
import LakshmiImage from "../../assets/laxshmimam.png";
import PallaviImage from "../../assets/hrmam.png";

// --- TEAM MEMBERS ---
export const teamMembers = [
  {
    name: "Srini Chilukuri",
    title: "Founder & CEO",
    image: SriniImage,
    linkedin: "https://www.linkedin.com/in/srinivaschilukuri/",
  },
  {
    name: "Lakshmi Chilukuri",
    title: "Co-Founder & MD",
    image: LakshmiImage,
    linkedin: "https://www.linkedin.com/in/lakshmi-chilukuri-8a1937156/",
  },
  {
    name: "Pallavi Mishra",
    title: "CHRO",
    image: PallaviImage,
    linkedin: "https://www.linkedin.com/in/pallavim770/",
  },
];

// --- METRICS ---
export const metrics = [
  {
    icon: <FaBullseye className="w-6 h-6 text-blue-600" />,
    value: "98%",
    title: "Accuracy",
    description: "Precision in every analysis.",
  },
  {
    icon: <FaLightbulb className="w-6 h-6 text-yellow-500" />,
    value: "15+",
    title: "Features",
    description: "Comprehensive tool for every need.",
  },
  {
    icon: <FaHeartbeat className="w-6 h-6 text-red-500" />,
    value: "< 1s",
    title: "Real-Time Speed",
    description: "Instant insights when you need them.",
  },
];

// --- USE CASES ---
export const useCases = [
  {
    icon: <FaUsers className="w-6 h-6 text-green-600" />,
    title: "Human Resources",
    description:
      "Transform hiring with biometric analysis and fraud prevention for informed, efficient evaluations.",
  },
  {
    icon: <FaGraduationCap className="w-6 h-6 text-indigo-600" />,
    title: "Education",
    description:
      "Gain insights into student engagement and comprehension for personalized feedback.",
  },
  {
    icon: <FaBriefcaseMedical className="w-6 h-6 text-red-600" />,
    title: "Healthcare",
    description:
      "Enhance telemedicine with physiological data monitoring and smart conversation insights.",
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-gray-600" />,
    title: "Insurance",
    description:
      "Authenticate claims with biometrics and detect fraudulent activities in conversations.",
  },
  {
    icon: <FaCommentsDollar className="w-6 h-6 text-yellow-600" />,
    title: "Sales",
    description:
      "Empower sales teams with performance metrics and lead quality analysis to drive revenue.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-blue-500" />,
    title: "Smart Meetings",
    description:
      "Optimize meetings by extracting key insights and improving collaboration with real-time analytics.",
  },
];
