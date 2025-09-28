// src/Pages/UploadAndAnalyze/data.js

// Template arrays for emotions — these will be replaced dynamically after file analysis
export const emotionsDataTemplate = [
  { name: 'Happy', value: 0 },
  { name: 'Sad', value: 0 },
  { name: 'Angry', value: 0 },
  { name: 'Surprise', value: 0 },
  { name: 'Disgust', value: 0 },
  { name: 'Neutral', value: 0 },
];

// Template arrays for engagement metrics — dynamic after analysis
export const engagementDataTemplate = [
  { name: 'Eagerness', score: 0 },
  { name: 'Confidence', score: 0 },
  { name: 'Seriousness', score: 0 },
  { name: 'Interest', score: 0 },
  { name: 'Clarity', score: 0 },
];

// Chart colors (can remain static)
export const CHART_COLORS = [
  '#38dff8ff', // cyan
  '#4ade80',   // green
  '#d95df5ff', // purple
  '#f87171',   // red
  '#c084fc',   // violet
  '#e6d00bff'  // yellow
];
