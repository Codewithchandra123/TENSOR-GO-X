import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { FaUpload, FaFileAlt, FaSpinner, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

// --- MOCK DATA ---
const emotionsData = [
  { name: 'Happy', value: 30 },
  { name: 'Sad', value: 10 },
  { name: 'Angry', value: 5 },
  { name: 'Surprise', value: 15 },
  { name: 'Disgust', value: 5 },
  { name: 'Neutral', value: 35 },
];

const engagementData = [
  { name: 'Eagerness', score: 85 },
  { name: 'Confidence', score: 90 },
  { name: 'Seriousness', score: 75 },
  { name: 'Interest', score: 95 },
  { name: 'Clarity', score: 88 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00c49f', '#ff5858'];

// --- HELPER COMPONENT FOR ANIMATED METRICS ---
const AnimatedMetric = ({ label, value, unit = '%' }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (value > 0) {
            let start = 0;
            const duration = 1000;
            const step = value / (duration / 16); // ~60fps animation

            const timer = setInterval(() => {
                start += step;
                if (start >= value) {
                    setDisplayValue(value);
                    clearInterval(timer);
                } else {
                    setDisplayValue(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [value]);

    return (
        <div className="bg-slate-100 p-4 rounded-xl text-center shadow-inner">
            <h3 className="text-md font-semibold text-slate-600 mb-1">{label}</h3>
            <p className="text-3xl font-bold text-indigo-600">
                {displayValue}{unit}
            </p>
        </div>
    );
};

// --- MAIN COMPONENT ---
const UploadAndAnalyze = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleAnalyze = useCallback(() => {
    setIsAnalyzing(true);
    setProgress(0);
    setAnalysisResult(null);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 2;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisResult({
            meetingSummary: "The candidate demonstrated strong enthusiasm and a clear understanding of the role. Their emotional state was predominantly neutral with spikes of happiness, indicating genuine interest. The analysis shows high engagement and a positive attitude towards the company's culture.",
            eagernessScore: 85,
            confidenceScore: 90,
            finalConclusion: "The candidate is a strong fit. Their positive attitude and clear communication skills, combined with high engagement, suggest they would integrate well with the team and contribute effectively."
          });
          return 100;
        }
        return nextProgress;
      });
    }, 100);
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setIsProcessing(true);
      setFile(acceptedFiles[0]);
      setAnalysisResult(null);
      setTimeout(() => {
        setIsProcessing(false);
        handleAnalyze();
      }, 1000);
    }
  }, [handleAnalyze]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    disabled: isAnalyzing || isProcessing
  });

  const handleRemoveFile = () => {
    setFile(null);
    setAnalysisResult(null);
    setIsAnalyzing(false);
    setProgress(0);
  };

  const getDropzoneContent = () => {
    if (isProcessing) return <><FaSpinner className="text-5xl text-slate-500 animate-spin" /><p className="mt-4 font-semibold text-slate-600">Processing file...</p></>;
    if (isAnalyzing) return <><FaSpinner className="text-5xl text-indigo-500 animate-spin" /><p className="mt-4 font-semibold text-indigo-600">Analyzing... {progress}%</p></>;
    if (analysisResult) return <><FaCheckCircle className="text-5xl text-green-500" /><p className="mt-4 font-semibold text-green-600">Analysis Complete</p></>;
    return (
      <>
        <FaUpload className={`text-5xl transition-colors ${isDragActive ? 'text-indigo-600' : 'text-slate-400'}`} />
        <p className={`mt-4 font-semibold transition-colors ${isDragActive ? 'text-indigo-600' : 'text-slate-500'}`}>
          {isDragActive ? "Drop the file here..." : "Drag 'n' drop any file"}
        </p>
        <p className="mt-2 text-sm text-slate-400">or click to select</p>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-800">Effortlessly Transform Recordings</h1>
        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          Convert any file into a detailed summary and behavioral analysis with a single upload.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col">
            <div
              {...getRootProps()}
              className={`p-10 border-4 border-dashed rounded-2xl cursor-pointer text-center transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[16rem]
                ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300'}
                ${(isAnalyzing || isProcessing || analysisResult) ? 'bg-slate-50 border-slate-300 cursor-default' : 'hover:bg-slate-50'}`}
            >
              <input {...getInputProps()} />
              {getDropzoneContent()}
            </div>

            {file && (
              <div className="mt-4 p-3 bg-slate-100 rounded-xl text-sm flex items-center justify-between shadow-inner">
                <FaFileAlt className="text-slate-500 mr-3 flex-shrink-0" />
                <span className="truncate text-slate-700 font-medium">{file.name}</span>
                <button
                  onClick={handleRemoveFile}
                  className="ml-4 text-red-500 hover:text-red-700 font-semibold transition-colors duration-200"
                  disabled={isAnalyzing || isProcessing}
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="flex-1">
            {analysisResult ? (
              <div className="p-6 bg-slate-50 rounded-2xl shadow-inner animate-fade-in h-full">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Analysis Report</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Meeting Summary</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{analysisResult.meetingSummary}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <AnimatedMetric label="Eagerness Score" value={analysisResult.eagernessScore} />
                    <AnimatedMetric label="Confidence Score" value={analysisResult.confidenceScore} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-500" /> Final Conclusion
                    </h3>
                    <p className="text-slate-600 text-sm font-medium bg-slate-200/50 p-3 rounded-lg">
                      {analysisResult.finalConclusion}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
                <div className="p-6 bg-slate-50 rounded-2xl shadow-inner h-full flex flex-col items-center justify-center text-center">
                    <FaFileAlt className="text-5xl text-slate-400 mb-4"/>
                    <h3 className="text-xl font-bold text-slate-600">Your report will appear here</h3>
                    <p className="text-slate-500 mt-2">Upload a file to begin the analysis.</p>
                </div>
            )}
          </div>
        </div>

        {analysisResult && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fade-in">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-center mb-4 text-slate-800">Emotional Analytics</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={emotionsData} cx="50%" cy="50%" innerRadius={60} outerRadius={90}
                    fill="#8884d8" paddingAngle={5} dataKey="value" labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {emotionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-center mb-4 text-slate-800">Engagement & Attitude</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="score" fill="#4f46e5" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default UploadAndAnalyze;