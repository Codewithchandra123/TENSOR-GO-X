// src/Pages/UploadAndAnalyze/components/ScrollProgressBar.jsx

import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScroll((scrolled / total) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scroll}%` }}
      aria-label="Scroll Progress"
    />
  );
};
export default ScrollProgressBar;
