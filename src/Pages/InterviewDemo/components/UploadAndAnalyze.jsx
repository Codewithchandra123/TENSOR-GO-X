// // src/Pages/InterviewDemo/components/UploadAndAnalyze.jsx
// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// const UploadAndAnalyze = () => {
//     // ... (All logic and JSX from the original UploadAndAnalyzeComponent)
//     // This is a large, self-contained component.
//     const [file, setFile] = useState(null);
//     const [isAnalyzing, setIsAnalyzing] = useState(false);
//     const [analysisResult, setAnalysisResult] = useState(null);
//     const [progress, setProgress] = useState(0);
  
//     const emotionsData = [
//       { name: 'Happy', value: 30 },
//       { name: 'Sad', value: 10 },
//       { name: 'Angry', value: 5 },
//       { name: 'Surprise', value: 15 },
//       { name: 'Disgust', value: 5 },
//       { name: 'Neutral', value: 35 },
//     ];
  
//     const engagementData = [
//       { name: 'Eagerness', score: 85 },
//       { name: 'Confidence', score: 90 },
//       { name: 'Seriousness', score: 75 },
//       { name: 'Interest', score: 95 },
//       { name: 'Clarity', score: 88 },
//     ];
  
//     const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00c49f', '#ff5858'];
  
//     const onDrop = (acceptedFiles) => {
//       setFile(acceptedFiles[0]);
//       setAnalysisResult(null);
//     };
  
//     const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'video/*': ['.mp4', '.mov'], 'audio/*': ['.mp3', '.wav'] } });
  
//     const handleAnalyze = () => {
//       if (!file) return;
//       setIsAnalyzing(true);
//       setProgress(0);
//       const interval = setInterval(() => {
//         setProgress((prev) => {
//           if (prev >= 100) {
//             clearInterval(interval);
//             setIsAnalyzing(false);
//             setAnalysisResult({
//               meetingSummary: "The candidate demonstrated strong enthusiasm and a clear understanding of the role. Their emotional state was predominantly neutral with spikes of happiness, indicating genuine interest. The analysis shows high engagement and a positive attitude towards the company's culture.",
//               eagernessScore: 85,
//               seriousnessScore: 70,
//               emotionalRating: "Positive",
//               personalAttitude: "Very Eager",
//               bodyLanguage: "Open and engaged",
//             });
//             return 100;
//           }
//           return prev + 1;
//         });
//       }, 50);
//     };
  
//     return (
//       <div className="card-bg p-8 rounded-2xl shadow-lg w-full max-w-5xl">
//         <h1 className="text-4xl font-bold text-center mb-6 text-main">Effortlessly Transform Recordings</h1>
//         <p className="text-center text-sub mb-8 max-w-2xl mx-auto">
//           Convert your video and audio files into detailed meeting summaries, providing a clear and comprehensive overview of every discussion.
//         </p>
  
//         <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
//           <div className="flex-1">
//             <div {...getRootProps()} className="p-12 border-4 border-dashed border-border-primary rounded-2xl cursor-pointer text-center hover:bg-bg-tertiary transition-colors duration-200">
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p className="text-sub">Drop the files here ...</p>
//               ) : (
//                 <p className="text-sub">Drag 'n' drop a meeting file here, or click to select one</p>
//               )}
//               <p className="text-sm mt-2 text-sub">Supported formats: .mp4, .mov, .mp3, .wav</p>
//             </div>
//             {file && (
//               <div className="mt-4 p-4 bg-bg-tertiary rounded-xl text-sm flex items-center justify-between">
//                 <span className="truncate text-main">{file.name}</span>
//                 <button onClick={() => setFile(null)} className="ml-4 text-red-500 hover:text-red-700 transition-colors duration-200">
//                   Remove
//                 </button>
//               </div>
//             )}
//             <button
//               onClick={handleAnalyze}
//               className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${file ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-slate-400 cursor-not-allowed'}`}
//               disabled={!file || isAnalyzing}
//             >
//               {isAnalyzing ? `Analyzing... ${progress}%` : 'Analyze Meeting'}
//             </button>
//           </div>
  
//           <div className="flex-1">
//             {analysisResult && (
//               <div className="p-6 bg-bg-tertiary rounded-2xl shadow-inner">
//                 <h2 className="text-2xl font-bold mb-4 text-main">Analysis Report</h2>
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-lg font-semibold text-sub mb-1">Meeting Summary</h3>
//                     <p className="text-sub">{analysisResult.meetingSummary}</p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Eagerness Score</h3> <p className="text-2xl font-bold text-acc">{analysisResult.eagernessScore}%</p></div>
//                     <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Emotional Rating</h3> <p className="text-lg font-bold text-acc">{analysisResult.emotionalRating}</p></div>
//                     <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Personal Attitude</h3> <p className="text-lg font-bold text-acc">{analysisResult.personalAttitude}</p></div>
//                     <div className="metric-box card-bg"><h3 className="text-sm font-semibold text-sub mb-1">Body Language</h3> <p className="text-lg font-bold text-acc">{analysisResult.bodyLanguage}</p></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
  
//         {analysisResult && (
//           <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <div className="card-bg p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-bold text-center mb-4 text-main">Emotional Analytics</h3>
//               <ResponsiveContainer width="100%" height={300}>
//                 <PieChart>
//                   <Pie
//                     data={emotionsData}
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={60}
//                     outerRadius={90}
//                     fill="#8884d8"
//                     paddingAngle={5}
//                     dataKey="value"
//                     labelLine={false}
//                     label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                   >
//                     {emotionsData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                 </PieChart>
//               </ResponsiveContainer>
//               <div className="flex justify-center flex-wrap gap-4 mt-4 text-sub">
//                 {emotionsData.map((entry, index) => (
//                   <div key={index} className="flex items-center space-x-2">
//                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
//                     <span className="text-sm">{entry.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
  
//             <div className="card-bg p-6 rounded-2xl shadow-lg">
//               <h3 className="text-xl font-bold text-center mb-4 text-main">Engagement & Attitude</h3>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={engagementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="var(--border-primary)" />
//                   <XAxis dataKey="name" stroke="var(--text-secondary)" />
//                   <YAxis stroke="var(--text-secondary)" />
//                   <Tooltip />
//                   <Bar dataKey="score" fill="#4f46e5" radius={[10, 10, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         )}
//       </div>
//     );
// };

// export default UploadAndAnalyze;