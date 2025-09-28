// src/Pages/HowItWorks/data.js

import React from 'react';
import {
  FaPlug,
  FaBrain,
  FaChartBar,
  FaClipboardList
} from 'react-icons/fa';

export const steps = [
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