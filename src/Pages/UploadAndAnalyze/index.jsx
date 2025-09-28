import React from 'react'; // Removed useEffect as it's no longer needed
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaArrowRight } from 'react-icons/fa';

import { useFileAnalysis } from './hooks/useFileAnalysis';
import DropzoneContent from './components/DropzoneContent';
import AnalysisReport from './components/AnalysisReport';
import ReportPlaceholder from './components/ReportPlaceholder';
import Charts from './components/Charts';
// ✅ REMOVED: ScrollProgressBar import is no longer needed
import { emotionsDataTemplate, engagementDataTemplate } from './data';

import './UploadAndAnalyze.css';

const UploadAndAnalyze = () => {
  const {
    file,
    status,
    progress,
    analysisResult,
    isDragActive,
    getRootProps,
    getInputProps,
    handleRemoveFile,
  } = useFileAnalysis();

  // Use fallback templates if analysisResult is not ready
  const emotionsData = analysisResult?.emotionsData || emotionsDataTemplate;
  const engagementData = analysisResult?.engagementData || engagementDataTemplate;

  // ✅ REMOVED: The useEffect hook that modified the body className has been removed.
  // This component will now inherit the background from your global styles.

  return (
    // This container correctly centers the content block on the page without creating a full layout
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-16">
      {/* ✅ REMOVED: The <ScrollProgressBar /> component is gone. */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-pane p-6 sm:p-10 shadow-xl"
      >
        {/* Header Section (Content Title) */}
        <motion.h1
          className="font-bold text-4xl sm:text-5xl md:text-7xl text-white mb-2 text-center md:text-left leading-tight tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Effortlessly Transform Recordings
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 font-medium mb-7 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Convert any file into a detailed summary and behavioral analysis with a single upload.
        </motion.p>

        <motion.button
          tabIndex={0}
          aria-label="Scroll to upload"
          className="btn-gradient my-4 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          whileHover={{ scale: 1.06, rotate: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            // This smooth scroll is fine as it targets a location within the component's context
            document.documentElement.scrollTo({ top: 360, behavior: 'smooth' });
          }}
        >
          Upload Now
          <span className="cta-arrow">
            <FaArrowRight size={18} />
          </span>
        </motion.button>

        {/* Main Content (Dropzone and Report) */}
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          {/* Dropzone Section */}
          <div className="flex-1 flex flex-col">
            <div
              {...getRootProps()}
              className={`p-10 border-2 border-dashed rounded-2xl cursor-pointer text-center
                transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[16rem]
                ${isDragActive ? 'border-cyan-400 bg-white/10' : 'border-white/20'}
                ${status !== 'idle' ? 'bg-white/5 border-white/20 cursor-default' : 'hover:bg-white/5'}
                focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              aria-label="File upload zone"
              tabIndex={0}
            >
              <input {...getInputProps()} />
              <DropzoneContent
                status={status}
                progress={progress}
                isDragActive={isDragActive}
                acceptedFile={file}
                errorMessage={null}
              />
            </div>

            <AnimatePresence>
              {file && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="p-3 bg-black/20 rounded-xl text-sm flex items-center justify-between shadow-inner">
                    <FaFileAlt className="text-slate-400 mr-3 flex-shrink-0" />
                    <span className="truncate text-slate-200 font-medium">{file.name}</span>
                    <button
                      onClick={handleRemoveFile}
                      className="ml-4 text-red-400 hover:text-red-500 font-semibold transition-colors duration-200 disabled:opacity-50"
                      disabled={status === 'analyzing' || status === 'processing'}
                      aria-label="Remove uploaded file"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Analysis Report Section */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={status === 'complete' ? 'report' : 'placeholder'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                {analysisResult ? (
                  <AnalysisReport result={analysisResult} />
                ) : (
                  <ReportPlaceholder />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Charts Section */}
        <AnimatePresence>
          {analysisResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Charts
                emotionsData={emotionsData}
                engagementData={engagementData}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UploadAndAnalyze;