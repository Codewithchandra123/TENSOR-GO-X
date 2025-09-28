// src/Pages/Integrations/data.js
import React from 'react';
import { SiZoom, SiGooglemeet, SiSlack, SiJira } from 'react-icons/si';

// Inline SVG for Microsoft Teams - No changes needed, it's well-defined.
export const MicrosoftTeamsSVG = ({ size = 32, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width={size} height={size} className={className}>
    <path d="M104 80a40 40 0 1 0-40-40 40 40 0 0 0 40 40ZM64 96a32 32 0 0 0-32 32v40a32 32 0 0 0 32 32h40a32 32 0 0 0 32-32v-40a32 32 0 0 0-32-32Zm104-32a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm24 24a28 28 0 0 0-28 28v36a28 28 0 0 0 28 28h28a28 28 0 0 0 28-28v-36a28 28 0 0 0-28-28Z" />
  </svg>
);

// Main Data for Integrations - Enhanced with gradient styles
export const integrationsList = [
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'Video Conferencing',
    logo: <SiZoom size={32} className="text-blue-400" />,
    description: 'Automatically analyze participant engagement and generate summaries for all your Zoom calls.',
    buttonGradient: 'from-blue-500 to-sky-500',
  },
  {
    id: 'meet',
    name: 'Google Meet',
    category: 'Video Conferencing',
    logo: <SiGooglemeet size={32} className="text-green-400" />,
    description: "Transform your Google Meet sessions with Go-X's AI. Get live cues and post-meeting analytics.",
    buttonGradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    category: 'Video Conferencing',
    logo: <MicrosoftTeamsSVG size={32} className="text-indigo-400" />,
    description: 'Bring AI-powered insights to your Teams meetings to improve focus and capture key decisions.',
    buttonGradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'Productivity',
    logo: <SiSlack size={32} className="text-purple-400" />,
    description: 'Send automated meeting summaries and action items directly to your designated Slack channels.',
    buttonGradient: 'from-purple-500 to-violet-500',
  },
  {
    id: 'jira',
    name: 'Jira',
    category: 'Productivity',
    logo: <SiJira size={32} className="text-sky-400" />,
    description: 'Create Jira tickets for action items directly from your Go-X meeting summaries.',
    buttonGradient: 'from-sky-500 to-cyan-500',
  },
];