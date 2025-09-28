// src/Pages/Features/data.js

import React from 'react';
import {
  FaRegSmile,
  FaFileAlt,
  FaHeartbeat,
  FaBullhorn,
  FaChartLine,
  FaShieldAlt
} from 'react-icons/fa';

export const featureData = [
  {
    icon: <FaRegSmile />,
    title: "Read the Room, Virtually.",
    description: "Go-X analyzes facial expressions, gaze detection, and voice intonation in real-time. Understand participant engagement, identify confusion, and gauge sentiment without subjective interpretation.",
    imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <FaFileAlt />,
    title: "Never Miss a Key Takeaway.",
    description: "Our AI automatically transcribes meetings, identifies key discussion points, extracts action items, and pinpoints decisions made. Share concise summaries with just one click.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <FaHeartbeat />,
    title: "Monitor Well-being and Focus.",
    description: "Using advanced computer vision, Go-X tracks heart rate and stress levels to provide insights into participant well-being, ensuring healthier and more productive meetings.",
    note: "Privacy and user consent are paramount for this feature.",
    imageUrl: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <FaBullhorn />,
    title: "Real-time Feedback, Real-time Impact.",
    description: "Unlike any other product, Go-X provides live, on-screen visual and audio cues, empowering facilitators to adjust their presentation style or address disengagement immediately.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <FaChartLine />,
    title: "Predictive Conversation Analytics.",
    description: "Leverage AI to predict meeting outcomes and identify potential roadblocks before they happen. Our analytics help steer conversations toward successful conclusions.",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise-Grade Security & Compliance.",
    description: "Built with security at its core, Go-X ensures all your data is encrypted and handled with the strictest compliance standards (GDPR, SOC 2).",
    imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];