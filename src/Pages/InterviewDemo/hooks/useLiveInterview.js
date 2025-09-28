// src/Pages/InterviewDemo/hooks/useLiveInterview.js
import { useState, useRef, useCallback } from 'react';
import { ROLES, PERFORMANCE_PROFILES, INITIAL_ANALYSIS } from '../constants';
import { useSpeechSynthesis } from './useSpeechSynthesis';
import { useProctoring } from './useProctoring';

export const useLiveInterview = () => {
  // ... (all existing state declarations remain the same)
  const [liveStep, setLiveStep] = useState('roleSelection');
  const [selectedRole, setSelectedRole] = useState(null);
  const [performanceProfile, setPerformanceProfile] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [followUpQuestions, setFollowUpQuestions] = useState([]);
  const [analysisBaselines, setAnalysisBaselines] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isInterviewRunning, setIsInterviewRunning] = useState(false);
  const [videoStream, setVideoStream] = useState(null);
  const [isLiveAnalyzing, setIsLiveAnalyzing] = useState(false);
  const [realTimeAnalysis, setRealTimeAnalysis] = useState(INITIAL_ANALYSIS);
  const [fullReportData, setFullReportData] = useState([]);
  
  // --- NEW: State for tracking camera errors ---
  const [cameraError, setCameraError] = useState(null);

  const videoRef = useRef(null);
  const analysisIntervalRef = useRef(null);

  const speechBot = useSpeechSynthesis();
  const proctoring = useProctoring(isInterviewRunning && !!videoStream); // Proctoring only active if interview is running AND camera is on

  const runLiveAnalysis = useCallback((questionIndex, currentProfile, stream) => {
    // --- MODIFIED: Only run analysis if camera is active ---
    if (!stream) {
      console.log("Analysis skipped: No active video stream.");
      return;
    }
    
    setIsLiveAnalyzing(true);
    // ... (rest of the simulation logic is the same)
    clearInterval(analysisIntervalRef.current);
    const baseline = analysisBaselines[questionIndex] || analysisBaselines[0];
    const { modifiers } = currentProfile;

    analysisIntervalRef.current = setInterval(() => {
      setRealTimeAnalysis(prev => {
        const newAnalysis = {};
        for (const key in baseline) {
          const target = Math.min(100, baseline[key] * modifiers[key]);
          const fluctuation = (Math.random() - 0.5) * 10;
          newAnalysis[key] = Math.max(0, Math.min(100, Math.round(target + fluctuation)));
        }
        return newAnalysis;
      });
    }, 400);

    setTimeout(() => {
      clearInterval(analysisIntervalRef.current);
      const finalAnalysis = Object.keys(baseline).reduce((acc, key) => {
        acc[key] = Math.max(0, Math.min(100, Math.round(baseline[key] * modifiers[key])));
        return acc;
      }, {});
      setRealTimeAnalysis(finalAnalysis);
      setFullReportData(prev => [...prev, { question: questions[questionIndex], analysis: finalAnalysis }]);
      setIsLiveAnalyzing(false);
    }, 4000);
  }, [analysisBaselines, questions]);
  
  // --- MODIFIED: More robust startInterview with error handling ---
  const startInterview = async () => {
    setCameraError(null); // Reset any previous errors
    const profileKeys = Object.keys(PERFORMANCE_PROFILES);
    const randomProfile = PERFORMANCE_PROFILES[profileKeys[Math.floor(Math.random() * profileKeys.length)]];
    
    setPerformanceProfile(randomProfile);
    setIsInterviewRunning(true);
    setFullReportData([]);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setVideoStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      // Pass the stream directly to ensure analysis runs with the new stream
      runLiveAnalysis(0, randomProfile, stream);
    } catch (err) {
      console.error("Camera access was denied or failed:", err);
      setCameraError("Camera permission denied or device not found. Analysis cannot proceed.");
      // Stop the interview from running if the camera fails
      setIsInterviewRunning(false);
    }
  };

  const endInterview = useCallback(() => {
    setIsInterviewRunning(false);
    speechBot.stop();
    clearInterval(analysisIntervalRef.current);
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
    }
    setVideoStream(null);
    setLiveStep('report');
  }, [videoStream, speechBot]);

  const askNextQuestion = () => {
    speechBot.stop();
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      // Pass the existing videoStream to the next analysis run
      runLiveAnalysis(nextIndex, performanceProfile, videoStream);
    } else {
      endInterview();
    }
  };

  const resetLiveDemo = useCallback(() => {
    // ... (rest of the reset logic is the same)
    setLiveStep('roleSelection');
    setSelectedRole(null);
    setCurrentQuestionIndex(0);
    setPerformanceProfile(null);
    setRealTimeAnalysis(INITIAL_ANALYSIS);
    proctoring.resetProctoring();
    setCameraError(null); // Also clear camera errors on reset
    if (isInterviewRunning || videoStream) {
        endInterview();
    }
  }, [isInterviewRunning, videoStream, endInterview, proctoring]);

  // ... (handleRoleSelect, handleCustomQuestionsSubmit, askFollowUp, downloadReport remain the same)
  const handleRoleSelect = (role) => {
    if (role.isCustom) { setSelectedRole(role); setLiveStep('questionGeneration'); } else {
      const roleData = ROLES[role]; setSelectedRole(roleData); setQuestions([...roleData.questions]);
      setFollowUpQuestions([...roleData.followUps]); setAnalysisBaselines(roleData.analysisBaselines);
      setLiveStep('interview');
    }
  };
  const handleCustomQuestionsSubmit = (customQuestions) => {
    setQuestions(customQuestions); setAnalysisBaselines(ROLES['java'].analysisBaselines);
    setFollowUpQuestions([]); setLiveStep('interview');
  };
  const askFollowUp = () => { /* ... */ };
  const downloadReport = () => { /* ... */ };


  return {
    // ... (all previously returned values)
    liveStep, selectedRole, performanceProfile, questions, followUpQuestions,
    currentQuestionIndex, isInterviewRunning, videoStream, isLiveAnalyzing,
    realTimeAnalysis, fullReportData, videoRef, speechBot, proctoring,
    handleRoleSelect, handleCustomQuestionsSubmit, startInterview, askNextQuestion,
    askFollowUp, resetLiveDemo, downloadReport, endInterview,
    // --- NEW: Expose the camera error state ---
    cameraError,
  };
};