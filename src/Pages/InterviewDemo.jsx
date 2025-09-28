// import React, { useState, useEffect, useRef } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
// import {
//   FaUserTie, FaBrain, FaRegEye, FaHeartbeat, FaComments, FaRegSmile, FaUserCheck,
//   FaLightbulb, FaFileDownload, FaRedo, FaProjectDiagram, FaUserShield, FaCloudUploadAlt,
//   FaArrowLeft, FaVideo, FaFileAudio, FaSun, FaMoon, FaPlusCircle
// } from 'react-icons/fa';

// // --- CONFIGURATION & DATA ---

// const PERFORMANCE_PROFILES = {
//   excellent: { name: "Excellent Candidate", summary: "Candidate was highly articulate, confident, and demonstrated deep subject matter expertise. Maintained excellent composure under pressure and showed strong leadership potential.", modifiers: { eyeContact: 1.15, heartRate: 0.8, clarity: 1.2, communication: 1.15, attitude: 1.2, eagerness: 1.25 } },
//   nervous_but_capable: { name: "Nervous but Capable", summary: "Initially showed signs of nervousness, but grew in confidence as the interview progressed. Possesses the required skills but could benefit from more practice in high-pressure communication.", modifiers: { eyeContact: 0.85, heartRate: 1.35, clarity: 0.9, communication: 0.95, attitude: 1.0, eagerness: 1.1 } },
//   struggling: { name: "Struggling Candidate", summary: "Candidate had difficulty articulating answers to technical questions and seemed unsure of their abilities. Showed significant pressure and a lack of confidence throughout the session.", modifiers: { eyeContact: 0.7, heartRate: 1.5, clarity: 0.65, communication: 0.7, attitude: 0.8, eagerness: 0.9 } }
// };

// const createRoleData = (name, questions, followUps) => ({
//   name,
//   questions,
//   followUps,
//   analysisBaselines: [
//     { eyeContact: 85, heartRate: 75, clarity: 80, communication: 88, attitude: 92, eagerness: 85 },
//     { eyeContact: 88, heartRate: 80, clarity: 90, communication: 85, attitude: 90, eagerness: 88 },
//     { eyeContact: 90, heartRate: 72, clarity: 85, communication: 92, attitude: 95, eagerness: 90 },
//     { eyeContact: 82, heartRate: 85, clarity: 88, communication: 85, attitude: 90, eagerness: 88 },
//     { eyeContact: 95, heartRate: 70, clarity: 95, communication: 98, attitude: 99, eagerness: 97 },
//   ]
// });

// const ROLES = {
//   java: createRoleData(
//     "Java Developer",
//     ["Explain the difference between JDK, JRE, and JVM.", "Describe a challenging Java project.", "How do you handle memory leaks?", "What are some key features of Java 8 and newer versions?", "Explain the concept of multithreading in Java."],
//     ["Can you elaborate on the garbage collection process?", "What design patterns are you most familiar with?"]
//   ),
//   python: createRoleData(
//     "Python Developer",
//     ["What are decorators in Python?", "Explain the Global Interpreter Lock (GIL).", "How would you optimize a slow script?", "What is a virtual environment and why is it important?", "How do you handle exceptions in Python?"],
//     ["Describe a situation where you used list comprehensions effectively.", "How do you manage package dependencies?"]
//   ),
//   frontend: createRoleData(
//     "Frontend Developer",
//     ["What is the virtual DOM?", "How do you ensure web accessibility?", "Explain state management in React.", "Describe the difference between server-side and client-side rendering.", "How would you optimize a large web application for performance?"],
//     ["What are the benefits of using a component library?", "How would you improve this page's performance?"]
//   ),
//   data_scientist: createRoleData(
//     "Data Scientist",
//     ["Explain p-values to a non-technical stakeholder.", "Describe the bias-variance trade-off.", "Walk me through a ML project you're proud of.", "How do you handle missing values in a dataset?", "What's the difference between classification and regression?"],
//     ["Can you give an example of a time you had to clean a messy dataset?", "How would you explain an A/B test to a CEO?"]
//   ),
//   ui_ux: createRoleData(
//     "UI/UX Designer",
//     ["How do you handle negative feedback on your designs?", "What is your user research process?", "Describe a project that didn't go as planned.", "What is the difference between UI and UX?", "How do you stay up-to-date with design trends?"],
//     ["Tell me about a time you used a user persona to guide a design decision.", "What is your favorite design tool?"]
//   ),
//   other: createRoleData(
//     "Other Role",
//     ["Describe a complex system you understand well.", "How would you design a product for a specific niche user?", "Tell me about a time you persuaded someone.", "What is a recent skill you have learned?", "How do you manage your time when working on multiple projects?"],
//     ["How would you approach a technical problem that has no clear solution?", "What is your process for giving and receiving feedback?"]
//   )
// };

// const INITIAL_ANALYSIS = { eyeContact: 0, heartRate: 0, clarity: 0, communication: 0, attitude: 0, eagerness: 0 };
// const UPLOAD_COLORS = ['#22d3ee', '#4ade80', '#facc15', '#f87171', '#c084fc', '#a78bfa'];

// // --- HELPER COMPONENTS ---
// const AnimatedCounter = ({ value }) => {
//   const [displayValue, setDisplayValue] = useState(0);
//   const valueRef = useRef(0);
//   useEffect(() => {
//     const update = () => {
//       const diff = value - valueRef.current;
//       if (Math.abs(diff) < 0.5) {
//         valueRef.current = value;
//         setDisplayValue(value);
//         return;
//       }
//       valueRef.current += diff / 10;
//       setDisplayValue(Math.round(valueRef.current));
//       requestAnimationFrame(update);
//     };
//     requestAnimationFrame(update);
//   }, [value]);
//   return <span>{displayValue}%</span>;
// };

// const AnalysisBar = ({ icon, label, value, gradient }) => (
//   <div className="flex flex-col gap-1">
//     <div className="flex justify-between items-center text-sm font-medium text-sub">
//       <div className="flex items-center gap-2">
//         {icon}
//         <span>{label}</span>
//       </div>
//       <span className="font-mono text-main"><AnimatedCounter value={value} /></span>
//     </div>
//     <div className="w-full bg-border-primary rounded-full h-2">
//       <div className="h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${value}%`, background: gradient }}></div>
//     </div>
//   </div>
// );

// // --- UPLOAD & ANALYZE COMPONENT (INLINE) ---
// const UploadAndAnalyzeComponent = () => {
//   const [file, setFile] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);
//   const [analysisResult, setAnalysisResult] = useState(null);
//   const [progress, setProgress] = useState(0);

//   const emotionsData = [
//     { name: 'Happy', value: 30 },
//     { name: 'Sad', value: 10 },
//     { name: 'Angry', value: 5 },
//     { name: 'Surprise', value: 15 },
//     { name: 'Disgust', value: 5 },
//     { name: 'Neutral', value: 35 },
//   ];

//   const engagementData = [
//     { name: 'Eagerness', score: 85 },
//     { name: 'Confidence', score: 90 },
//     { name: 'Seriousness', score: 75 },
//     { name: 'Interest', score: 95 },
//     { name: 'Clarity', score: 88 },
//   ];

//   const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00c49f', '#ff5858'];

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//     setAnalysisResult(null);
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'video/*': ['.mp4', '.mov'], 'audio/*': ['.mp3', '.wav'] } });

//   const handleAnalyze = () => {
//     if (!file) return;
//     setIsAnalyzing(true);
//     setProgress(0);
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setIsAnalyzing(false);
//           setAnalysisResult({
//             meetingSummary: "The candidate demonstrated strong enthusiasm and a clear understanding of the role. Their emotional state was predominantly neutral with spikes of happiness, indicating genuine interest. The analysis shows high engagement and a positive attitude towards the company's culture.",
//             eagernessScore: 85,
//             seriousnessScore: 70,
//             emotionalRating: "Positive",
//             personalAttitude: "Very Eager",
//             bodyLanguage: "Open and engaged",
//           });
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 50);
//   };

//   return (
//     <div className="card-bg p-8 rounded-2xl shadow-lg w-full max-w-5xl">
//       <h1 className="text-4xl font-bold text-center mb-6 text-main">Effortlessly Transform Recordings</h1>
//       <p className="text-center text-sub mb-8 max-w-2xl mx-auto">
//         Convert your video and audio files into detailed meeting summaries, providing a clear and comprehensive overview of every discussion.
//       </p>

//       <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
//         <div className="flex-1">
//           <div {...getRootProps()} className="p-12 border-4 border-dashed border-border-primary rounded-2xl cursor-pointer text-center hover:bg-bg-tertiary transition-colors duration-200">
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p className="text-sub">Drop the files here ...</p>
//             ) : (
//               <p className="text-sub">Drag 'n' drop a meeting file here, or click to select one</p>
//             )}
//             <p className="text-sm mt-2 text-sub">Supported formats: .mp4, .mov, .mp3, .wav</p>
//           </div>
//           {file && (
//             <div className="mt-4 p-4 bg-bg-tertiary rounded-xl text-sm flex items-center justify-between">
//               <span className="truncate text-main">{file.name}</span>
//               <button onClick={() => setFile(null)} className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200">
//                 Remove
//               </button>
//             </div>
//           )}
//           <button
//             onClick={handleAnalyze}
//             className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${file ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-400 cursor-not-allowed'}`}
//             disabled={!file || isAnalyzing}
//           >
//             {isAnalyzing ? `Analyzing... ${progress}%` : 'Analyze Meeting'}
//           </button>
//         </div>

//         <div className="flex-1">
//           {analysisResult && (
//             <div className="p-6 bg-bg-tertiary rounded-2xl shadow-inner">
//               <h2 className="text-2xl font-bold mb-4 text-main">Analysis Report</h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-lg font-semibold text-sub mb-1">Meeting Summary</h3>
//                   <p className="text-sub">{analysisResult.meetingSummary}</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Eagerness Score</h3> <p className="text-2xl font-bold text-acc">{analysisResult.eagernessScore}%</p></div>
//                   <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Emotional Rating</h3> <p className="text-lg font-bold text-acc">{analysisResult.emotionalRating}</p></div>
//                   <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Personal Attitude</h3> <p className="text-lg font-bold text-acc">{analysisResult.personalAttitude}</p></div>
//                   <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Body Language</h3> <p className="text-lg font-bold text-acc">{analysisResult.bodyLanguage}</p></div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {analysisResult && (
//         <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//           <div className="card-bg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-center mb-4 text-main">Emotional Analytics</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={emotionsData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={60}
//                   outerRadius={90}
//                   fill="#8884d8"
//                   paddingAngle={5}
//                   dataKey="value"
//                   labelLine={false}
//                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {emotionsData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//             <div className="flex justify-center flex-wrap gap-4 mt-4 text-sub">
//               {emotionsData.map((entry, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
//                   <span className="text-sm">{entry.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="card-bg p-6 rounded-2xl shadow-lg">
//             <h3 className="text-xl font-bold text-center mb-4 text-main">Engagement & Attitude</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={engagementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
//                 <XAxis dataKey="name" stroke="var(--text-secondary)" />
//                 <YAxis stroke="var(--text-secondary)" />
//                 <Tooltip />
//                 <Bar dataKey="score" fill="#4f46e5" radius={[10, 10, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // --- MAIN COMPONENT: INTERVIEW DEMO ---
// const InterviewDemo = () => {
//   // --- STATE MANAGEMENT ---
//   const [theme, setTheme] = useState('light');
//   const [mode, setMode] = useState('selection');

//   // Live Demo State
//   const [liveStep, setLiveStep] = useState('roleSelection');
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [performanceProfile, setPerformanceProfile] = useState(null);
//   const [questions, setQuestions] = useState([]);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [analysisBaselines, setAnalysisBaselines] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [isInterviewRunning, setIsInterviewRunning] = useState(false);
//   const [videoStream, setVideoStream] = useState(null);
//   const [isLiveAnalyzing, setIsLiveAnalyzing] = useState(false);
//   const [realTimeAnalysis, setRealTimeAnalysis] = useState(INITIAL_ANALYSIS);
//   const [fullReportData, setFullReportData] = useState([]);
//   const videoRef = useRef(null);
//   const analysisIntervalRef = useRef(null);

//   // --- THEME LOGIC ---
//   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
//   useEffect(() => {
//     document.documentElement.className = theme;
//   }, [theme]);

//   // --- LIVE DEMO LOGIC ---
//   const handleRoleSelect = (roleKey) => {
//     const roleData = ROLES[roleKey];
//     setSelectedRole(roleKey);
//     setQuestions([...roleData.questions]);
//     setFollowUpQuestions([...roleData.followUps]);
//     setAnalysisBaselines(roleData.analysisBaselines);
//     setLiveStep('interview');
//   };

//   const startInterview = async () => {
//     const profileKeys = Object.keys(PERFORMANCE_PROFILES);
//     const randomProfile = PERFORMANCE_PROFILES[profileKeys[Math.floor(Math.random() * profileKeys.length)]];
//     setPerformanceProfile(randomProfile);
//     setIsInterviewRunning(true);
//     setFullReportData([]);
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       setVideoStream(stream);
//     } catch (err) { console.error("Camera error:", err); }
//     runLiveAnalysis(0, randomProfile);
//   };

//   const runLiveAnalysis = (questionIndex, currentProfile) => {
//     setIsLiveAnalyzing(true);
//     clearInterval(analysisIntervalRef.current);
//     const baseline = analysisBaselines[questionIndex % analysisBaselines.length];
//     const { modifiers } = currentProfile;

//     analysisIntervalRef.current = setInterval(() => {
//       setRealTimeAnalysis(prevAnalysis => {
//         const fluctuatingAnalysis = { ...prevAnalysis };
//         for (const key in baseline) {
//           const target = Math.min(100, baseline[key] * modifiers[key]);
//           const fluctuation = (Math.random() - 0.5) * 10;
//           fluctuatingAnalysis[key] = Math.max(0, Math.min(100, Math.round(target + fluctuation)));
//         }
//         return fluctuatingAnalysis;
//       });
//     }, 400);

//     setTimeout(() => {
//       clearInterval(analysisIntervalRef.current);
//       const finalAnalysis = Object.keys(baseline).reduce((acc, key) => {
//         acc[key] = Math.max(0, Math.min(100, Math.round(baseline[key] * modifiers[key])));
//         return acc;
//       }, {});
//       setRealTimeAnalysis(finalAnalysis);
//       setFullReportData(prev => [...prev, { question: questions[questionIndex], analysis: finalAnalysis }]);
//       setIsLiveAnalyzing(false);
//     }, 4000);
//   };

//   const askNextQuestion = () => {
//     const nextIndex = currentQuestionIndex + 1;
//     if (nextIndex < questions.length) {
//       setCurrentQuestionIndex(nextIndex);
//       runLiveAnalysis(nextIndex, performanceProfile);
//     } else {
//       endInterview();
//     }
//   };

//   const askFollowUp = () => {
//     if (followUpQuestions.length > 0) {
//       const followUp = followUpQuestions.shift();
//       setQuestions([...questions, followUp]);
//       setFollowUpQuestions([...followUpQuestions]);
//     }
//   };

//   const endInterview = () => {
//     setIsInterviewRunning(false);
//     clearInterval(analysisIntervalRef.current);
//     if (videoStream) videoStream.getTracks().forEach(track => track.stop());
//     setVideoStream(null);
//     setLiveStep('report');
//   };

//   const resetLiveDemo = () => {
//     setLiveStep('roleSelection');
//     setSelectedRole(null);
//     setCurrentQuestionIndex(0);
//     setPerformanceProfile(null);
//     setRealTimeAnalysis(INITIAL_ANALYSIS);
//   };

//   const downloadReport = () => {
//     const calculateAverages = (data) => {
//       const totals = data.reduce((acc, item) => {
//         Object.keys(item.analysis).forEach(key => { if (typeof item.analysis[key] === 'number') acc[key] = (acc[key] || 0) + item.analysis[key]; });
//         return acc;
//       }, {});
//       const averages = {};
//       Object.keys(totals).forEach(key => averages[key] = Math.round(totals[key] / data.length));
//       return averages;
//     };
//     const averages = calculateAverages(fullReportData);
//     const reportContent = `GO-X AI INTERVIEW ANALYSIS REPORT\n======================================\n\nCandidate Role: ${ROLES[selectedRole].name}\nAnalyzed Profile: ${performanceProfile?.name}\nOverall Summary: ${performanceProfile?.summary}\nDate: ${new Date().toLocaleDateString()}\n\n--- OVERALL PERFORMANCE ---\nAverage Eye Contact: ${averages.eyeContact}%\nAverage Communication: ${averages.communication}%\nOverall Attitude Score: ${averages.attitude}%\nOverall Eagerness Score: ${averages.eagerness}%\n\n--- QUESTION-BY-QUESTION BREAKDOWN ---\n${fullReportData.map((item, index) => `\nQ${index + 1}: ${item.question}\n${Object.keys(item.analysis).map(key => `  - ${key.charAt(0).toUpperCase() + key.slice(1)}: ${item.analysis[key]}${key === 'heartRate' ? 'bpm' : '%'}`).join('\n')}`).join('\n')}`;
//     const blob = new Blob([reportContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `Interview_Report_${ROLES[selectedRole].name.replace(' ', '_')}.txt`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   useEffect(() => {
//     if (videoStream && videoRef.current) {
//       videoRef.current.srcObject = videoStream;
//     }
//   }, [videoStream]);

//   // --- RENDER FUNCTIONS ---
//   const renderModeSelection = () => (
//     <div className="text-center animate-fade-in-up w-full max-w-4xl">
//       <FaBrain className="mx-auto text-6xl text-acc mb-4 icon-pulse" />
//       <h1 className="text-4xl md:text-5xl font-bold mb-3 text-main">AI Analysis Hub</h1>
//       <p className="text-sub mb-10 text-lg">Choose your method to unlock deep insights from conversations.</p>
//       <div className="flex flex-col md:flex-row justify-center gap-6">
//         <button onClick={() => setMode('liveDemo')} className="mode-card group">
//           <FaVideo className="text-5xl text-acc group-hover:text-white transition-colors duration-300" />
//           <span className="text-xl text-main">Live Interview Demo</span>
//           <span className="text-sm text-sub group-hover:text-gray-200">Run a real-time AI analysis of a simulated interview.</span>
//         </button>
//         <button onClick={() => setMode('uploadAnalyze')} className="mode-card group">
//           <FaCloudUploadAlt className="text-5xl text-purple-500 group-hover:text-white transition-colors duration-300" />
//           <span className="text-xl text-main">Upload & Analyze</span>
//           <span className="text-sm text-sub group-hover:text-gray-200">Analyze a pre-recorded video or audio file for insights.</span>
//         </button>
//       </div>
//     </div>
//   );

//   const renderLiveDemo = () => {
//     if (liveStep === 'roleSelection') {
//       return (
//         <div className="w-full max-w-7xl animate-fade-in-up relative">
//           <button onClick={() => setMode('selection')} className="back-button text-acc">
//             <FaArrowLeft /> Back to Mode Selection
//           </button>
//           <div className="text-center w-full max-w-3xl mx-auto">
//             <FaUserTie className="mx-auto text-6xl text-acc mb-4 icon-pulse" />
//             <h1 className="text-4xl md:text-5xl font-bold mb-3 text-main">Select Candidate Role</h1>
//             <p className="text-sub mb-10 text-lg">Choose a role to tailor the interview questions and AI analysis.</p>
//             <div className="flex flex-wrap justify-center gap-4">
//               {Object.keys(ROLES).map(key => (
//                 <button key={key} onClick={() => handleRoleSelect(key)} className="px-6 py-3 card-bg rounded-lg font-semibold text-main hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md">
//                   {ROLES[key].name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (liveStep === 'interview') {
//       return (
//         <div className="w-full max-w-7xl animate-fade-in-up relative">
//           <button onClick={resetLiveDemo} className="back-button top-0 left-0 text-acc">
//             <FaArrowLeft /> Back to Role Selection
//           </button>
//           <div className="flex flex-col lg:flex-row gap-8 w-full">
//             <div className="w-full lg:w-2/3 flex flex-col">
//               <div className="relative w-full rounded-2xl overflow-hidden shadow-lg aspect-video bg-black hud-grid">
//                 <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover"></video>
//                 {!videoStream && <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-sub">Camera not active. Demo is running simulated data.</div>}
//                 <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>AI ACTIVE</div>
//                 <div className="scanline"></div>
//                 {isLiveAnalyzing && <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm"><div className="loader"></div></div>}
//               </div>
//               <div className="w-full mt-6 p-6 card-bg rounded-2xl shadow-inner grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
//                 <AnalysisBar icon={<FaRegEye className="text-cyan-500" />} label="Eye Contact" value={realTimeAnalysis.eyeContact} gradient="linear-gradient(to right, #67e8f9, #06b6d4)" />
//                 <AnalysisBar icon={<FaHeartbeat className="text-orange-500" />} label="Pressure (HR)" value={Math.min(100, Math.round((realTimeAnalysis.heartRate / 120) * 100))} gradient="linear-gradient(to right, #fb923c, #f97316)" />
//                 <AnalysisBar icon={<FaComments className="text-green-500" />} label="Communication" value={realTimeAnalysis.communication} gradient="linear-gradient(to right, #4ade80, #22c55e)" />
//                 <AnalysisBar icon={<FaLightbulb className="text-yellow-500" />} label="Answer Clarity" value={realTimeAnalysis.clarity} gradient="linear-gradient(to right, #facc15, #eab308)" />
//                 <AnalysisBar icon={<FaRegSmile className="text-purple-500" />} label="Attitude" value={realTimeAnalysis.attitude} gradient="linear-gradient(to right, #c084fc, #a855f7)" />
//                 <AnalysisBar icon={<FaUserCheck className="text-pink-500" />} label="Eagerness" value={realTimeAnalysis.eagerness} gradient="linear-gradient(to right, #f472b6, #ec4899)" />
//               </div>
//             </div>
//             <div className="w-full lg:w-1/3 flex flex-col card-bg p-6 rounded-2xl shadow-inner">
//               <h2 className="text-3xl font-bold mb-2 text-center lg:text-left text-main">HR Console</h2>
//               <p className="text-sm text-sub mb-4 text-center lg:text-left">Simulating: <span className="font-semibold text-main">{performanceProfile?.name}</span></p>
//               <div className="flex flex-col flex-grow">
//                 <div className="mb-6 flex-grow">
//                   <p className="text-sub font-medium mb-2">Question {currentQuestionIndex + 1}/{questions.length}:</p>
//                   <p className="text-xl text-acc font-semibold leading-relaxed">{questions[currentQuestionIndex]}</p>
//                 </div>
//                 {!isInterviewRunning && (
//                     <button onClick={startInterview} className="general-button w-full bg-green-600 text-white py-3 px-8 rounded-lg shadow-lg">Start Interview</button>
//                 )}
//                 {isInterviewRunning && (
//                   <div className="flex justify-center mt-auto gap-4">
//                     <button onClick={askNextQuestion} disabled={isLiveAnalyzing} className="general-button w-full bg-cyan-600 text-white py-3 px-8 rounded-lg shadow-lg">
//                       {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'End Interview'}
//                     </button>
//                     {followUpQuestions.length > 0 && !isLiveAnalyzing && (
//                       <button onClick={askFollowUp} title="Ask a Follow-up Question" className="general-button flex-shrink-0 bg-slate-500 dark:bg-slate-600 text-white p-3 rounded-lg shadow-lg">
//                         <FaPlusCircle />
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (liveStep === 'report') {
//       const averages = fullReportData.reduce((acc, item) => {
//         Object.keys(item.analysis).forEach(key => { if (typeof item.analysis[key] === 'number') acc[key] = (acc[key] || 0) + item.analysis[key]; });
//         return acc;
//       }, {});
//       Object.keys(averages).forEach(key => averages[key] = Math.round(averages[key] / fullReportData.length));
//       const confidenceClarityRatio = averages.clarity > 0 ? (averages.attitude / averages.clarity).toFixed(2) : 'N/A';
//       const pressureResponse = 100 - Math.round(((averages.heartRate / 120) * 100) * 0.5);
//       return (
//         <div className="card-bg p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto animate-fade-in-up">
//           <FaBrain className="mx-auto text-5xl text-acc mb-4 icon-pulse" />
//           <h1 className="text-4xl font-bold text-center mb-2 text-main">Final Candidate Report</h1>
//           <p className="text-center text-sub mb-2">Role: {ROLES[selectedRole].name}</p>
//           <p className="text-center text-sub mb-8">Analyzed Profile: <span className="font-semibold text-main">{performanceProfile?.name}</span></p>
//           <div className="mb-8">
//             <h3 className="font-semibold text-2xl text-acc mb-4 text-center">Performance Ratios</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
//               <div className="metric-box card-bg"><span className="text-sm text-sub">Confidence/Clarity Ratio</span> <span className="block font-bold text-2xl text-main">{confidenceClarityRatio}</span></div>
//               <div className="metric-box card-bg"><span className="text-sm text-sub">Pressure Response</span> <span className="block font-bold text-2xl text-main">{pressureResponse}%</span></div>
//             </div>
//           </div>
//           <div className="space-y-6 text-sub">
//             <div>
//               <h3 className="font-semibold text-xl text-acc mb-2">Performance Summary</h3>
//               <p className="leading-relaxed">{performanceProfile?.summary}</p>
//             </div>
//           </div>
//           <div className="mt-10 flex flex-wrap justify-center gap-4">
//             <button onClick={downloadReport} className="general-button flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
//               <FaFileDownload /> Download Report
//             </button>
//             <button onClick={resetLiveDemo} className="general-button flex items-center gap-2 bg-slate-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
//               <FaRedo /> Select Another Role
//             </button>
//           </div>
//         </div>
//       );
//     }
//   };

//   const renderUploadAnalyze = () => (
//     <div className="w-full max-w-6xl animate-fade-in-up relative">
//       <button onClick={() => setMode('selection')} className="back-button text-purple-600">
//         <FaArrowLeft /> Back to Mode Selection
//       </button>
//       <UploadAndAnalyzeComponent />
//     </div>
//   );

//   return (
//     <div className={`theme-wrapper ${theme}`}>
//       <div className="min-h-screen bg-bg-primary text-text-primary font-sans p-6 md:p-12 flex items-center justify-center transition-colors duration-500 relative">
//         <button onClick={toggleTheme} className="absolute top-4 right-4 p-3 rounded-full bg-bg-tertiary text-text-secondary hover:bg-slate-300 dark:hover:bg-slate-600 transition-all z-20">
//           {theme === 'light' ? <FaMoon /> : <FaSun />}
//         </button>
//         {mode === 'selection' && renderModeSelection()}
//         {mode === 'liveDemo' && renderLiveDemo()}
//         {mode === 'uploadAnalyze' && renderUploadAnalyze()}
//       </div>
//       <style>{`
//         /* --- THEME SYSTEM --- */
//         :root {
//           --bg-primary: #f1f5f9;
//           --bg-secondary: #ffffff;
//           --bg-tertiary: #e2e8f0;
//           --text-primary: #1e293b;
//           --text-secondary: #475569;
//           --text-accent: #0891b2;
//           --border-primary: #cbd5e1;
//           --shadow-color: rgba(0,0,0,0.1);
//         }
//         .dark {
//           --bg-primary: #0f172a;
//           --bg-secondary: #1e293b;
//           --bg-tertiary: #334155;
//           --text-primary: #f8fafc;
//           --text-secondary: #94a3b8;
//           --text-accent: #22d3ee;
//           --border-primary: #334155;
//           --shadow-color: rgba(0,0,0,0.3);
//         }
//         .theme-wrapper {
//           background-color: var(--bg-primary);
//           color: var(--text-primary);
//         }
//         .card-bg {
//           background-color: var(--bg-secondary);
//         }
//         .text-main {
//           color: var(--text-primary);
//         }
//         .text-sub {
//           color: var(--text-secondary);
//         }
//         .text-acc {
//           color: var(--text-accent);
//         }
//         .shadow-md {
//           box-shadow: 0 4px 6px -1px var(--shadow-color), 0 2px 4px -2px var(--shadow-color);
//         }
//         .shadow-lg {
//           box-shadow: 0 10px 15px -3px var(--shadow-color), 0 4px 6px -4px var(--shadow-color);
//         }
//         .shadow-inner {
//           box-shadow: inset 0 2px 4px 0 var(--shadow-color);
//         }
//         .general-button {
//           transition: background-color 0.3s ease, transform 0.2s ease, filter 0.2s ease;
//         }
//         .general-button:hover:not(:disabled) {
//           transform: translateY(-2px);
//           filter: brightness(1.1);
//         }
//         .mode-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem;
//           background-color: var(--bg-secondary);
//           border-radius: 0.75rem;
//           font-weight: 600;
//           transition: all 0.3s ease-out;
//           box-shadow: 0 4px 6px var(--shadow-color);
//           width: 100%;
//           position: relative;
//           overflow: hidden;
//           border: 1px solid var(--border-primary);
//         }
//         .mode-card:hover {
//           transform: translateY(-5px) scale(1.03);
//           background-color: var(--bg-tertiary);
//           box-shadow: 0 10px 15px var(--shadow-color);
//         }
//         .mode-card::before {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 0;
//           height: 0;
//           background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
//           border-radius: 50%;
//           transform: translate(-50%, -50%);
//           transition: width 0.4s ease, height 0.4s ease;
//         }
//         .mode-card:hover::before {
//           width: 300px;
//           height: 300px;
//         }
//         .back-button {
//           position: absolute;
//           top: -2.5rem;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.5rem;
//           z-index: 10;
//           font-weight: 600;
//           transition: filter 0.3s;
//         }
//         .back-button:hover {
//           filter: brightness(1.2);
//         }
//         .metric-box {
//           background-color: var(--bg-tertiary);
//           padding: 1rem;
//           border-radius: 0.75rem;
//         }
//         .loader {
//           border: 4px solid rgba(125, 211, 252, 0.3);
//           border-left-color: #06b6d4;
//           border-radius: 50%;
//           width: 50px;
//           height: 50px;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .scanline {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 2px;
//           background: linear-gradient(to bottom, transparent, rgba(34, 211, 238, 0.5), transparent);
//           animation: scan 4s linear infinite;
//           opacity: 0.7;
//         }
//         @keyframes scan {
//           0% {
//             top: -5%;
//           }
//           100% {
//             top: 105%;
//           }
//         }
//         .hud-grid {
//           background-image: linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px);
//           background-size: 2rem 2rem;
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }
//         .icon-pulse {
//           animation: pulse 3s infinite ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default InterviewDemo;