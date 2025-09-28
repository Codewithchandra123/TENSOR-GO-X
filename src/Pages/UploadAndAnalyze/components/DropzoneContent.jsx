// src/Pages/UploadAndAnalyze/components/DropzoneContent.jsx
import React, { useState } from 'react';
import { FaSpinner, FaCheckCircle, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DropzoneContent = ({ status, progress, isDragActive, acceptedFile, errorMessage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const contentMap = {
    processing: { icon: FaSpinner, text: 'Processing file...', color: 'text-white', spin: true },
    analyzing: { icon: FaSpinner, text: 'Analyzing...', color: 'text-white', spin: true },
    complete: { icon: FaCheckCircle, text: 'Analysis Complete', color: 'text-green-300', spin: false },
    error: { icon: FaExclamationTriangle, text: 'Error', color: 'text-red-400', spin: false },
    idle: { icon: FaSpinner, text: "Drag 'n' drop any file", color: isDragActive ? 'text-cyan-300' : 'text-white', spin: false },
  };

  const { icon: Icon, text, color, spin } = contentMap[status];

  const getSubtext = () => {
    if (isDragActive && status === 'idle') return 'Drop the file here...';
    if (status === 'idle') return 'or click to select';
    if (status === 'error' && errorMessage) return errorMessage;
    return null;
  };

  return (
    <>
      {/* Main Icon */}
      <Icon className={`text-5xl ${color} ${spin ? 'animate-spin' : ''}`} />

      <p className="mt-4 font-semibold text-white">{text}</p>
      {getSubtext() && <p className="mt-2 text-sm text-white">{getSubtext()}</p>}

      {status === 'analyzing' && (
        <div className="w-full bg-gray-600 rounded-full h-2.5 mt-4">
          <div className="bg-cyan-300 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {status === 'complete' && (
        <div
          onClick={(e) => e.stopPropagation()} // Prevent Dropzone from triggering
          className="mt-6 flex justify-center"
        >
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate('/demo')}
            className="flex items-center px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition-all duration-300 ease-in-out overflow-hidden"
          >
            {/* Reverse arrow */}
            <span
              className={`transform transition-transform duration-300 ease-in-out ${
                isHovered ? 'translate-x-0 opacity-100 mr-2' : '-translate-x-full opacity-0'
              }`}
            >
              <FaArrowLeft />
            </span>
            Go to Live Demo
          </button>
        </div>
      )}
    </>
  );
};

export default DropzoneContent;
