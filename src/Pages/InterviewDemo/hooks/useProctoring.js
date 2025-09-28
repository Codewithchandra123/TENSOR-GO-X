// src/Pages/InterviewDemo/hooks/useProctoring.js
import { useState, useEffect, useRef, useCallback } from 'react';

const CURSOR_INACTIVITY_LIMIT = 120000; // 120,000 ms = 2 minutes
const HEAD_TURN_SIMULATION_INTERVAL = 45000; // Check every 45 seconds

export const useProctoring = (isInterviewActive) => {
  const [warning, setWarning] = useState(null); // e.g., { type: 'Cursor', message: '...' }
  const [warningCount, setWarningCount] = useState(0);

  const inactivityTimer = useRef(null);
  const headTurnSimulator = useRef(null);
  const warningClearer = useRef(null);

  const issueWarning = useCallback((type, message) => {
    // Prevent multiple warnings from showing at once
    clearTimeout(warningClearer.current);

    setWarning({ type, message });
    setWarningCount(prev => prev + 1);

    // Automatically clear the warning after 5 seconds
    warningClearer.current = setTimeout(() => {
      setWarning(null);
    }, 5000);
  }, []);

  const resetInactivityTimer = useCallback(() => {
    clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      issueWarning('Cursor Inactivity', 'Please keep your cursor active within the window.');
    }, CURSOR_INACTIVITY_LIMIT);
  }, [issueWarning]);

  // Effect to manage all proctoring listeners and timers
  useEffect(() => {
    if (isInterviewActive) {
      // --- Start Monitoring ---
      
      // 1. Cursor Inactivity
      document.addEventListener('mousemove', resetInactivityTimer);
      resetInactivityTimer(); // Start the timer initially

      // 2. Head Movement Simulation
      headTurnSimulator.current = setInterval(() => {
        // Simulate a random chance of the user "looking away"
        if (Math.random() < 0.15) { // 15% chance every interval
          issueWarning('Head Position', 'Please maintain eye contact with the camera.');
        }
      }, HEAD_TURN_SIMULATION_INTERVAL);

    } else {
      // --- Stop Monitoring ---
      clearTimeout(inactivityTimer.current);
      clearInterval(headTurnSimulator.current);
      clearTimeout(warningClearer.current);
      document.removeEventListener('mousemove', resetInactivityTimer);
    }

    // Cleanup function for when the component unmounts or isInterviewActive changes
    return () => {
      clearTimeout(inactivityTimer.current);
      clearInterval(headTurnSimulator.current);
      clearTimeout(warningClearer.current);
      document.removeEventListener('mousemove', resetInactivityTimer);
    };
  }, [isInterviewActive, resetInactivityTimer, issueWarning]);

  const resetProctoring = () => {
    setWarning(null);
    setWarningCount(0);
  };

  return { warning, warningCount, resetProctoring };
};