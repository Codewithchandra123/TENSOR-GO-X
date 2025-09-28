// src/hooks/useGlowEffect.js

import { useEffect } from 'react';

const useGlowEffect = (containerRef) => {
  useEffect(() => {
    const handleMouseMove = e => {
      if (!containerRef.current) return;
      
      for(const card of containerRef.current.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [containerRef]); // Rerun effect if the ref changes
};

export default useGlowEffect;