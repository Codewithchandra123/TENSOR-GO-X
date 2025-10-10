// src/Pages/InterviewDemo/components/LiveDemo/InterviewScreen.jsx

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    FaRegEye, FaHeartbeat, FaComments, FaLightbulb, FaRegSmile, FaUserCheck,
    FaArrowRight, FaPlusCircle, FaVideoSlash,
    FaVideo, FaRedo, FaDownload, FaCloudUploadAlt, FaExclamationTriangle
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const INACTIVITY_TIMEOUT = 15000;
const SPEECH_THRESHOLD = 20;
const UI_UPDATE_INTERVAL = 250;

// --- Helper Components (Unchanged) ---
const AnalysisBar = ({ icon, label, value }) => (
    <div className="flex items-center gap-3">
        <div className="text-xl text-slate-400">{icon}</div>
        <div className="w-full">
            <div className="flex justify-between items-end mb-1">
                <label className="text-sm font-medium text-slate-300">{label}</label>
                <span className="text-sm font-bold text-white">{Math.round(value)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
                <motion.div
                    className="h-2.5 rounded-full"
                    style={{ background: `hsl(${Math.min(value, 100) * 1.2}, 70%, 50%)` }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    </div>
);

const ProctoringWarning = ({ warning }) => (
    <AnimatePresence>
        {warning && (
            <motion.div
                initial={{ opacity: 0, y: -80 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -80 }}
                className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 bg-yellow-400 text-slate-900 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-2xl flex items-center gap-3 w-[90%] sm:w-auto text-center">
                <FaExclamationTriangle className="hidden sm:block" /> {warning}
            </motion.div>
        )}
    </AnimatePresence>
);

const GlassCard = ({ children, className }) => (
    <div
        className={`rounded-2xl shadow-lg transition-all duration-300 ${className}`}
        style={{ background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(30, 41, 59, 0.8)' }}>
        {children}
    </div>
);


// --- Main Interview Screen Component ---
const InterviewScreen = () => {
    // --- Refs, State, Logic (Unchanged) ---
    const videoRef = useRef(null);
    const inactivityTimerRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const streamRef = useRef(null);
    const animationFrameRef = useRef(null);
    const analysisValuesRef = useRef({ communication: 0, clarity: 0, attitude: 0, eagerness: 0, eyeContact: 0, heartRate: 0 });

    const [interviewPhase, setInterviewPhase] = useState('idle');
    const [isLiveAnalyzing, setIsLiveAnalyzing] = useState(false);
    const [cameraError, setCameraError] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [activeQuestion, setActiveQuestion] = useState("");
    const [proctoringWarning, setProctoringWarning] = useState(null);
    const [warningCount, setWarningCount] = useState(0);
    const [followUpQueue, setFollowUpQueue] = useState([]);
    const [liveAnalysisData, setLiveAnalysisData] = useState({ communication: 0, clarity: 0, attitude: 0, eagerness: 0, eyeContact: 0, heartRate: 0 });
    const [finalScores, setFinalScores] = useState(null);

    const performanceProfile = { name: "Frontend Developer" };
    const questions = [
        "Tell me about a challenging project you worked on using a modern JavaScript framework.",
        "How do you ensure your web applications are accessible to all users?",
        "Explain the concept of state management in React and describe a time you used it.",
        "How would you optimize a slow-loading web page?",
        "Where do you see yourself in five years in the field of web development?"
    ];

    const cleanupMedia = useCallback(() => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
        if (audioContextRef.current?.state !== 'closed') audioContextRef.current?.close();
        if (videoRef.current) videoRef.current.srcObject = null;
    }, []);

    const handleStartOver = () => {
        cleanupMedia();
        setInterviewPhase('idle');
        setFinalScores(null);
        setCameraError(null);
        setWarningCount(0);
        setCurrentQuestionIndex(0);
        setActiveQuestion("");
        const initialData = { communication: 0, clarity: 0, attitude: 0, eagerness: 0, eyeContact: 0, heartRate: 0 };
        analysisValuesRef.current = initialData;
        setLiveAnalysisData(initialData);
    };

    const startInterview = async () => {
        handleStartOver();
        setInterviewPhase('starting');
        setCameraError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            streamRef.current = stream;
            if (videoRef.current) videoRef.current.srcObject = stream;
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            const source = audioContextRef.current.createMediaStreamSource(stream);
            source.connect(analyserRef.current);
            setActiveQuestion(questions[0]);
            setInterviewPhase('running');
            monitorAudio();
        } catch (err) {
            setCameraError("Camera/Mic permission denied. Please allow access to start.");
            setInterviewPhase('idle');
        }
    };

    const monitorAudio = useCallback(() => {
        if (!analyserRef.current) return;
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((s, v) => s + v, 0) / dataArray.length;
        if (average > SPEECH_THRESHOLD) {
            analysisValuesRef.current.communication = Math.min(100, analysisValuesRef.current.communication + 0.15);
            analysisValuesRef.current.clarity = Math.min(100, analysisValuesRef.current.clarity + 0.10);
            analysisValuesRef.current.eagerness = Math.min(100, analysisValuesRef.current.eagerness + 0.12);
            analysisValuesRef.current.attitude = Math.min(100, analysisValuesRef.current.attitude + 0.05);
        }
        animationFrameRef.current = requestAnimationFrame(monitorAudio);
    }, []);

    const handleNextQuestion = useCallback(() => {
        setIsLiveAnalyzing(true);
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                const nextIndex = currentQuestionIndex + 1;
                setCurrentQuestionIndex(nextIndex);
                setActiveQuestion(questions[nextIndex]);
                if (Math.random() > 0.5) setFollowUpQueue(["Can you elaborate on that point?"]);
                setIsLiveAnalyzing(false);
            } else {
                setFinalScores(analysisValuesRef.current);
                setInterviewPhase('complete');
                cleanupMedia();
            }
        }, 2500);
    }, [currentQuestionIndex, questions, cleanupMedia]);

    const askFollowUp = () => {
        if (followUpQueue.length === 0) return;
        setActiveQuestion(followUpQueue[0]);
        setFollowUpQueue([]);
    };

    useEffect(() => {
        if (interviewPhase !== 'running') return;
        const intervalId = setInterval(() => {
            setLiveAnalysisData({ ...analysisValuesRef.current });
        }, UI_UPDATE_INTERVAL);
        return () => clearInterval(intervalId);
    }, [interviewPhase]);

    useEffect(() => {
        if (interviewPhase !== 'running') return;
        const showWarning = (message) => { setProctoringWarning(message); setWarningCount(c => c + 1); setTimeout(() => setProctoringWarning(null), 4000); };
        const handleVisibilityChange = () => { if (document.hidden) showWarning("Tab Switch Detected"); };
        const resetInactivity = () => { clearTimeout(inactivityTimerRef.current); inactivityTimerRef.current = setTimeout(() => showWarning("User Inactive"), INACTIVITY_TIMEOUT); };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("mousemove", resetInactivity);
        resetInactivity();
        return () => { document.removeEventListener("visibilitychange", handleVisibilityChange); window.removeEventListener("mousemove", resetInactivity); clearTimeout(inactivityTimerRef.current); };
    }, [interviewPhase]);

    useEffect(() => () => cleanupMedia(), [cleanupMedia]);

    // --- Report Generation Logic (Unchanged) ---
    const generateReport = (scores) => {
        if (!scores) return null;
        const scoreValues = Object.values(scores);
        const overallScore = scoreValues.length > 0 ? scoreValues.reduce((sum, score) => sum + score, 0) / scoreValues.length : 0;
        let rating, summary, suggestions = [];
        if (overallScore >= 80) { rating = "Excellent"; summary = "Candidate demonstrated strong communication skills and provided confident, well-structured answers."; }
        else if (overallScore >= 60) { rating = "Good"; summary = "Candidate performed well, showing good potential. Some answers could have been more detailed."; }
        else { rating = "Needs Improvement"; summary = "Candidate had difficulty articulating answers and seemed unsure. Showed signs of pressure and a lack of confidence."; }
        if (scores.clarity < 60) suggestions.push("Use the STAR (Situation, Task, Action, Result) method to structure your answers more clearly.");
        if (scores.communication < 60) suggestions.push("Practice articulating your thoughts concisely. Avoid rambling and stick to the key points.");
        if (scores.eagerness < 50) suggestions.push("Show more enthusiasm for the role. Research the company's mission and connect it to your goals.");
        return { overallScore: Math.round(overallScore), rating, summary, suggestions };
    };

    const downloadReport = (reportData) => {
        const { overallScore, rating, summary, suggestions } = reportData;
        const textContent = `Candidate Analysis Report\n=========================\n\nRole: ${performanceProfile.name}\nOverall Score: ${overallScore}% (${rating})\n\nSummary:\n${summary}\n\nProctoring: ${warningCount} Warnings\n\nSuggestions:\n${suggestions.length > 0 ? suggestions.map(s => `- ${s}`).join('\n') : "N/A"}`;
        const blob = new Blob([textContent.trim()], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Candidate_Analysis_Report.txt';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const report = generateReport(finalScores);

    // --- Render Logic ---
    return (
        // ROOT FIX: Use h-screen and overflow-hidden to prevent ALL scrolling issues.
        <div className="relative w-full h-screen bg-slate-900 text-white overflow-hidden">
            <ProctoringWarning warning={proctoringWarning} />

            <AnimatePresence>
                {/* --- REPORT SCREEN --- */}
                {interviewPhase === 'complete' && report && (
                    <motion.div
                        key="complete"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full flex items-start lg:items-center justify-center p-4 lg:p-6 overflow-y-auto bg-slate-900/90 z-50"
                    >
                        <GlassCard className="w-full max-w-3xl p-6 sm:p-8 my-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-2">Candidate Analysis Report</h2>
                            <p className="text-center text-base lg:text-lg text-slate-300 mb-6 sm:mb-8">Role: {performanceProfile.name}</p>

                            <div className="text-center mb-8">
                                <p className="text-7xl lg:text-8xl font-bold text-white leading-none">{report.overallScore}%</p>
                                <p className={`text-xl lg:text-2xl font-semibold mt-2 ${report.overallScore < 60 ? 'text-yellow-400' : 'text-green-400'}`}>{report.rating}</p>
                            </div>

                            <div className="space-y-5 sm:space-y-6 mb-8 lg:mb-10 text-base">
                                <div>
                                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Performance Summary</h3>
                                    <p className="text-slate-200 bg-slate-800/50 p-4 rounded-md">{report.summary}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Proctoring Summary</h3>
                                    <p className="text-slate-200 bg-slate-800/50 p-4 rounded-md">{warningCount} Warnings Triggered</p>
                                </div>
                                <div>
                                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Actionable Suggestions</h3>
                                    <ul className="list-disc list-inside text-slate-200 bg-slate-800/50 p-4 rounded-md space-y-2">
                                        {report.suggestions.length > 0 ? report.suggestions.map((s, i) => <li key={i}>{s}</li>) : <li>No specific weaknesses detected.</li>}
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                <motion.button onClick={() => downloadReport(report)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center px-4 py-3 font-bold text-white bg-sky-600 rounded-lg text-base">
                                    <FaDownload className="mr-2" /> Download
                                </motion.button>
                                <motion.a href="/upload" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center px-4 py-3 font-bold text-white bg-purple-600 rounded-lg text-base">
                                    <FaCloudUploadAlt className="mr-2" /> Upload
                                </motion.a>
                                <motion.button onClick={handleStartOver} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full flex items-center justify-center px-4 py-3 font-bold text-white bg-indigo-600 rounded-lg text-base">
                                    <FaRedo className="mr-2" /> New Interview
                                </motion.button>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}

                {/* --- INTERVIEW SCREEN --- */}
                {interviewPhase !== 'complete' && (
                    <motion.div
                        key="interview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // LAYOUT FIX: Removed h-screen from here. The parent now controls the height.
                        className="flex flex-col lg:flex-row w-full h-full max-w-screen-2xl mx-auto p-4 lg:p-6 lg:gap-6"
                    >
                        {/* --- VIDEO & ANALYSIS PANEL (Left side on Desktop) --- */}
                        {/* LAYOUT FIX: Use h-1/2 for mobile and h-full for desktop */}
                        <div className="flex flex-col w-full lg:w-2/3 h-1/2 lg:h-full">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-slate-700 flex items-center justify-center">
                                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                                {interviewPhase === 'idle' && !cameraError && <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60"><FaVideo className="text-5xl mb-4" /><h3 className="text-xl font-semibold">Ready for Interview</h3><p className="max-w-sm mt-2 text-slate-300">Camera and mic required to begin.</p></div>}
                                {cameraError && <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/70 text-orange-300"><FaVideoSlash className="text-5xl mb-4" /><h3 className="text-xl font-semibold">Media Error</h3><p>{cameraError}</p></div>}
                                {interviewPhase === 'running' && !cameraError && <div className="absolute top-4 left-4 bg-black/60 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 border border-slate-700"><div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>AI PROCTORING</div>}
                                {isLiveAnalyzing && <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><p className="text-xl font-semibold tracking-widest text-cyan-200">ANALYZING...</p></motion.div>}
                                
                                {interviewPhase === 'running' && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-2 grid grid-cols-3 gap-2 lg:hidden">
                                        <div className="text-center"><FaComments className="inline text-slate-400 text-xs mr-1"/><span className="text-xs font-bold">{Math.round(liveAnalysisData.communication)}%</span></div>
                                        <div className="text-center"><FaLightbulb className="inline text-slate-400 text-xs mr-1"/><span className="text-xs font-bold">{Math.round(liveAnalysisData.clarity)}%</span></div>
                                        <div className="text-center"><FaRegSmile className="inline text-slate-400 text-xs mr-1"/><span className="text-xs font-bold">{Math.round(liveAnalysisData.attitude)}%</span></div>
                                    </div>
                                )}
                            </div>
                            
                            <GlassCard className="hidden lg:grid p-4 grid-cols-3 gap-x-6 gap-y-4 mt-6">
                               {Object.entries(liveAnalysisData).map(([key, value]) => {
                                    const icons = {communication: <FaComments/>, clarity: <FaLightbulb/>, attitude: <FaRegSmile/>, eagerness: <FaUserCheck/>, eyeContact: <FaRegEye/>, heartRate: <FaHeartbeat/>};
                                    const formattedLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
                                    return <AnalysisBar key={key} label={formattedLabel} value={value} icon={icons[key]} />;
                               })}
                            </GlassCard>
                        </div>

                        {/* --- HR CONSOLE (Right side on Desktop) --- */}
                         {/* LAYOUT FIX: Use h-1/2 for mobile and h-full for desktop */}
                        <GlassCard className="w-full lg:w-1/3 flex flex-col p-4 sm:p-6 h-1/2 lg:h-full mt-4 lg:mt-0">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-2xl lg:text-3xl font-bold">HR Console</h2>
                                <div className="flex items-center gap-2 text-sm text-slate-400"><FaExclamationTriangle className={warningCount > 0 ? "text-yellow-400" : "text-slate-500"} /><span>{warningCount}</span></div>
                            </div>
                            <p className="text-sm text-slate-300 mb-4">Role: <span className="font-semibold text-white">{performanceProfile.name}</span></p>
                            <div className="w-full h-px bg-slate-700 mb-4"></div>
                            
                            <div className="flex flex-col flex-grow overflow-hidden">
                                {interviewPhase === 'running' ? (
                                    <div className="flex-grow flex flex-col overflow-y-auto pr-2">
                                        <p className="text-slate-400 text-sm font-medium mb-2">Question {currentQuestionIndex + 1} of {questions.length}</p>
                                        <p className="text-lg sm:text-xl lg:text-2xl text-cyan-300 font-semibold leading-tight">{activeQuestion}</p>
                                        <p className="text-sm text-slate-500 italic mt-auto pt-4">Speak your answer clearly.</p>
                                    </div>
                                ) : (
                                    <div className="flex-grow flex items-center justify-center">
                                        <p className="text-slate-400 text-base text-center px-4">Click "Start Interview" to begin audio/video analysis.</p>
                                    </div>
                                )}
                                
                                <div className="mt-4 pt-4 border-t border-slate-700/50 flex gap-4">
                                    {interviewPhase === 'idle' || interviewPhase === 'starting' ? (
                                        <motion.button 
                                            onClick={startInterview} 
                                            whileTap={{ scale: 0.95 }} 
                                            disabled={!!cameraError || interviewPhase === 'starting'} 
                                            className="w-full flex items-center justify-center px-4 py-3 font-bold bg-green-600 hover:bg-green-500 rounded-lg text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <FaArrowRight className="mr-2" />
                                            {interviewPhase === 'starting' ? 'Initializing...' : 'Start Interview'}
                                        </motion.button>
                                    ) : (
                                        <>
                                            <button 
                                                onClick={handleNextQuestion} 
                                                disabled={isLiveAnalyzing} 
                                                className="flex-grow flex items-center justify-center px-4 py-3 font-bold bg-cyan-600 hover:bg-cyan-500 rounded-lg disabled:opacity-50 disabled:hover:bg-cyan-600 text-base transition-colors"
                                            >
                                                {isLiveAnalyzing ? 'Analyzing...' : currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Interview'}
                                                {!isLiveAnalyzing && <FaArrowRight className="ml-2" />}
                                            </button>
                                            {followUpQueue.length > 0 && !isLiveAnalyzing && (
                                                <button onClick={askFollowUp} title="Ask Follow-up" className="flex-shrink-0 p-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors">
                                                    <FaPlusCircle className="text-xl" />
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InterviewScreen;