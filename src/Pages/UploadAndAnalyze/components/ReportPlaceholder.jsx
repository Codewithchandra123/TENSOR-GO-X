// src/Pages/UploadAndAnalyze/components/ReportPlaceholder.jsx
import React, { useState } from 'react';
import { FaFileAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ReportPlaceholder = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white/5 rounded-2xl shadow-inner h-full flex flex-col items-center justify-center text-center">
      {/* Icon with a subtle pulse animation */}
      <FaFileAlt className="text-5xl text-slate-300 mb-4 animate-pulse" />

      <h3 className="text-xl font-bold text-white">Your report will appear here</h3>
      <p className="text-slate-200 mt-2">Upload a file to begin the analysis.</p>

      {/* Button with navigation */}
      <button
        onClick={() => navigate("/demo")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative mt-8 flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 ease-in-out overflow-hidden"
      >
        <span
          className={`absolute left-0 transform transition-transform duration-300 ease-in-out ${
            isHovered ? 'translate-x-4 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <FaArrowLeft />
        </span>
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isHovered ? 'translate-x-4' : 'translate-x-0'
          }`}
        >
          Go to Live Demo
        </span>
      </button>
    </div>
  );
};

export default ReportPlaceholder;
