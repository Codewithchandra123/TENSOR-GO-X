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
const UI_UPDATE_INTERVAL = 250; // Update UI 4 times per second for smoothness

// --- Helper Components ---
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
                className="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3">
                <FaExclamationTriangle /> {warning}
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
    // --- Refs ---
    const videoRef = useRef(null);
    const inactivityTimerRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const streamRef = useRef(null);
    const animationFrameRef = useRef(null);
    // *** PERFORMANCE OPTIMIZATION: Ref to hold latest values without causing re-renders ***
    const analysisValuesRef = useRef({ communication: 0, clarity: 0, attitude: 0, eagerness: 0, eyeContact: 0, heartRate: 0 });

    // --- State ---
    const [interviewPhase, setInterviewPhase] = useState('idle');
    const [isLiveAnalyzing, setIsLiveAnalyzing] = useState(false);
    const [cameraError, setCameraError] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [activeQuestion, setActiveQuestion] = useState("");
    const [proctoringWarning, setProctoringWarning] = useState(null);
    const [warningCount, setWarningCount] = useState(0);
    const [followUpQueue, setFollowUpQueue] = useState([]);
    
    // This state now updates less frequently for smooth UI
    const [liveAnalysisData, setLiveAnalysisData] = useState({ communication: 0, clarity: 0, attitude: 0, eagerness: 0, eyeContact: 0, heartRate: 0 });
    const [finalScores, setFinalScores] = useState(null);

    // --- Static Data ---
    const performanceProfile = { name: "Frontend Developer" };
    const questions = ["Tell me about a challenging project you worked on.", "Where do you see yourself in five years?", "Why do you want to work for our company?"];

    // --- Voice Analysis Logic (Optimized) ---
    const monitorAudio = useCallback(() => {
        if (!analyserRef.current) return;
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((s, v) => s + v, 0) / dataArray.length;

        // Update the ref values on every frame (this is cheap)
        if (average > SPEECH_THRESHOLD) {
            analysisValuesRef.current.communication = Math.min(100, analysisValuesRef.current.communication + 0.15);
            analysisValuesRef.current.clarity = Math.min(100, analysisValuesRef.current.clarity + 0.10);
            analysisValuesRef.current.eagerness = Math.min(100, analysisValuesRef.current.eagerness + 0.12);
            analysisValuesRef.current.attitude = Math.min(100, analysisValuesRef.current.attitude + 0.05);
        }
        animationFrameRef.current = requestAnimationFrame(monitorAudio);
    }, []);
    
    // --- Interview Flow & Media Management ---
    const startInterview = async () => {
        setCameraError(null);
        setIsLiveAnalyzing(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            streamRef.current = stream;
            if (videoRef.current) videoRef.current.srcObject = stream;

            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            const source = audioContextRef.current.createMediaStreamSource(stream);
            source.connect(analyserRef.current);
            
            setCurrentQuestionIndex(0);
            setActiveQuestion(questions[0]);
            setWarningCount(0);
            const initialData = { communication: 0, clarity: 0, attitude: 0, eagerness: 0, eyeContact: 0, heartRate: 0 };
            analysisValuesRef.current = initialData;
            setLiveAnalysisData(initialData);
            
            setIsLiveAnalyzing(false);
            setInterviewPhase('running');
            monitorAudio();
        } catch (err) {
            setCameraError("Camera/Mic permission denied. Please allow access to start.");
            setIsLiveAnalyzing(false);
        }
    };

    const cleanupMedia = useCallback(() => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
        if (audioContextRef.current?.state !== 'closed') audioContextRef.current?.close();
        if (videoRef.current) videoRef.current.srcObject = null;
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
                setFinalScores(analysisValuesRef.current); // Use the final ref value
                setInterviewPhase('complete');
                cleanupMedia();
            }
        }, 2500);
    }, [currentQuestionIndex, questions.length, cleanupMedia]);

    const askFollowUp = () => {
        if (followUpQueue.length === 0) return;
        setActiveQuestion(followUpQueue[0]);
        setFollowUpQueue([]);
    };

    // --- Effects ---
    // *** PERFORMANCE OPTIMIZATION: Effect to update UI from ref at a controlled interval ***
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

    // --- Report Generation ---
    const generateReport = (scores) => {
        // ... (Report generation logic remains the same)
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
        // ... (Download logic remains the same)
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
        <div className="relative w-full h-screen bg-slate-900 text-white overflow-hidden p-6 flex items-center justify-center">
            <ProctoringWarning warning={proctoringWarning} />

            <AnimatePresence>
                {/* --- UPDATED REPORT SCREEN with FONT and COLOR changes --- */}
                {interviewPhase === 'complete' && report && (
                    <motion.div key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center p-6">
                        <GlassCard className="p-8 w-full max-w-3xl">
                            <h2 className="text-4xl font-bold text-center text-white mb-2">Candidate Analysis Report</h2>
                            <p className="text-center text-lg text-white mb-6">Role: {performanceProfile.name}</p>
                            <div className="text-center mb-8">
                                <p className="text-8xl font-bold text-white">{report.overallScore}%</p>
                                <p className={`text-2xl font-semibold ${report.overallScore < 60 ? 'text-yellow-400' : 'text-green-400'}`}>{report.rating}</p>
                            </div>
                            <div className="space-y-6 mb-10 text-base">
                                <div><h3 className="text-xl font-bold text-white mb-2">Performance Summary</h3><p className="text-white bg-slate-800/50 p-4 rounded-md">{report.summary}</p></div>
                                <div><h3 className="text-xl font-bold text-white mb-2">Proctoring Summary</h3><p className="text-white bg-slate-800/50 p-4 rounded-md">{warningCount} Warnings Triggered</p></div>
                                <div><h3 className="text-xl font-bold text-white mb-2">Actionable Suggestions</h3><ul className="list-disc list-inside text-white bg-slate-800/50 p-4 rounded-md space-y-2">{report.suggestions.length > 0 ? report.suggestions.map((s, i) => <li key={i}>{s}</li>) : <li>No specific weaknesses detected.</li>}</ul></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <motion.button onClick={() => downloadReport(report)} whileHover={{ scale: 1.05 }} className="group w-full flex items-center justify-center px-6 py-3 font-bold text-white bg-sky-600 rounded-lg"><FaDownload className="mr-3" /> Download Report</motion.button>
                                {/* --- UPDATED UPLOAD BUTTON --- */}
                                <motion.a href="/upload" whileHover={{ scale: 1.05 }} className="group w-full flex items-center justify-center px-6 py-3 font-bold text-white bg-purple-600 rounded-lg"><FaCloudUploadAlt className="mr-3" /> Upload & Analyze</motion.a>
                                <motion.button onClick={() => setInterviewPhase('idle')} whileHover={{ scale: 1.05 }} className="group w-full flex items-center justify-center px-6 py-3 font-bold text-white bg-indigo-600 rounded-lg"><FaRedo className="mr-3" /> Interview Another</motion.button>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}

                {/* --- INTERVIEW SCREEN (Unchanged) --- */}
                {interviewPhase !== 'complete' && (
                    <motion.div key="interview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col lg:flex-row gap-6 w-full h-full max-w-7xl mx-auto">
                        <div className="w-full lg:w-2/3 flex flex-col gap-6">
                            <div className="relative w-full flex-grow rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-slate-700 flex items-center justify-center">
                                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                                {interviewPhase === 'idle' && !cameraError && <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/60"><FaVideo className="text-5xl mb-4" /><h3 className="text-xl font-semibold">Ready for your Interview</h3><p className="max-w-sm mt-2 text-slate-300">Your camera and microphone are required for analysis.</p></div>}
                                {cameraError && <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/70 text-orange-300"><FaVideoSlash className="text-5xl mb-4" /><h3 className="text-xl font-semibold">Media Error</h3><p>{cameraError}</p></div>}
                                {interviewPhase === 'running' && !cameraError && <div className="absolute top-4 left-4 bg-black/60 text-xs px-3 py-1.5 rounded-lg flex items-center gap-2 border border-slate-700"><div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>AI PROCTORING ACTIVE</div>}
                                {isLiveAnalyzing && <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><p className="text-xl font-semibold tracking-widest text-cyan-200">ANALYZING...</p></motion.div>}
                            </div>
                            <GlassCard className="p-4 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                               {Object.entries(liveAnalysisData).map(([key, value]) => {
                                    const icons = {communication: <FaComments/>, clarity: <FaLightbulb/>, attitude: <FaRegSmile/>, eagerness: <FaUserCheck/>, eyeContact: <FaRegEye/>, heartRate: <FaHeartbeat/>};
                                    const formattedLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
                                    return <AnalysisBar key={key} label={formattedLabel} value={value} icon={icons[key]} />;
                               })}
                            </GlassCard>
                        </div>
                        <GlassCard className="w-full lg:w-1/3 flex flex-col p-6">
                            <h2 className="text-2xl font-bold mb-1">HR Console</h2>
                            <p className="text-sm text-slate-300 mb-1">Simulating: <span className="font-semibold text-white">{performanceProfile.name}</span></p>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4"><FaExclamationTriangle className={warningCount > 0 ? "text-yellow-400" : "text-slate-500"} /><span>{warningCount} Proctoring Warnings</span></div>
                            <div className="w-full h-px bg-slate-700 mb-4"></div>
                            <div className="flex flex-col flex-grow">
                                 {interviewPhase === 'running' ? (
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <p className="text-slate-300 font-medium mb-2">Question {currentQuestionIndex + 1}/{questions.length}:</p>
                                            <div className="flex gap-3 items-start"><p className="text-xl text-cyan-300 font-semibold">{activeQuestion}</p></div>
                                        </div>
                                        <p className="text-center text-slate-400">Answer the question verbally.</p>
                                    </div>
                                 ) : <div className="flex-grow flex items-center justify-center"><p className="text-slate-400 text-center">Click "Start Interview" to begin.</p></div>}
                                <div className="mt-auto flex gap-4">
                                    {interviewPhase === 'idle' ? (
                                        <motion.button onClick={startInterview} disabled={!!cameraError} className="group w-full flex items-center justify-center px-8 py-3 font-bold bg-green-600 rounded-lg"><FaArrowRight className="mr-3" />Start Interview</motion.button>
                                    ) : (
                                        <>
                                            <button onClick={handleNextQuestion} disabled={isLiveAnalyzing} className="group w-full flex items-center justify-center px-8 py-3 font-bold bg-cyan-600 rounded-lg disabled:opacity-50">{isLiveAnalyzing ? 'Analyzing...' : currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'End Interview'}{!isLiveAnalyzing && <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />}</button>
                                            {followUpQueue.length > 0 && !isLiveAnalyzing && <button onClick={askFollowUp} title="Ask a Follow-up Question" className="flex-shrink-0 p-4 bg-indigo-500 rounded-lg"><FaPlusCircle /></button>}
                                        </>
                                    )}
                                .</div>
                            </div>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InterviewScreen;