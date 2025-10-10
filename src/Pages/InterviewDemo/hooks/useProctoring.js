import { useState, useEffect, useRef, useCallback } from 'react';

const CURSOR_INACTIVITY_LIMIT = 120000; // 120,000 ms = 2 minutes
const HEAD_TURN_SIMULATION_INTERVAL = 45000; // Check every 45 seconds

export const useProctoring = (isInterviewActive) => {
  const [warning, setWarning] = useState(null);
  const [warningCount, setWarningCount] = useState(0);

  // Use refs for timers to avoid re-renders and easily manage them
  const inactivityTimer = useRef(null);
  const headTurnSimulator = useRef(null);
  const warningClearer = useRef(null);

  // Memoize the warning function to ensure it has a stable identity
  const issueWarning = useCallback((type, message) => {
    // Clear any pending warning-clearing timer to avoid race conditions
    clearTimeout(warningClearer.current);

    setWarning({ type, message });
    setWarningCount(prev => prev + 1);

    // Automatically clear the warning after 5 seconds
    warningClearer.current = setTimeout(() => {
      setWarning(null);
    }, 5000);
  }, []); // No dependencies needed as it only uses setState and refs

  // This function is now only responsible for restarting the timer logic
  const resetInactivityTimer = useCallback(() => {
    clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      issueWarning('Cursor Inactivity', 'Please keep your cursor active within the window.');
    }, CURSOR_INACTIVITY_LIMIT);
  }, [issueWarning]);

  useEffect(() => {
    // Define cleanup logic in one place
    const cleanup = () => {
      clearTimeout(inactivityTimer.current);
      clearInterval(headTurnSimulator.current);
      clearTimeout(warningClearer.current);
      document.removeEventListener('mousemove', resetInactivityTimer);
    };

    if (isInterviewActive) {
      // --- Start Monitoring ---
      document.addEventListener('mousemove', resetInactivityTimer);
      resetInactivityTimer(); // Initial start

      headTurnSimulator.current = setInterval(() => {
        if (Math.random() < 0.15) { // 15% chance
          issueWarning('Head Position', 'Please maintain eye contact with the camera.');
        }
      }, HEAD_TURN_SIMULATION_INTERVAL);

      // Return the cleanup function to be called when isInterviewActive becomes false or the component unmounts
      return cleanup;
    }
    // If isInterviewActive is false, the cleanup from the previous render will have already run.
    // No 'else' block is needed.

  }, [isInterviewActive, resetInactivityTimer, issueWarning]);

  const resetProctoring = () => {
    setWarning(null);
    setWarningCount(0);
  };

  return { warning, warningCount, resetProctoring };
};