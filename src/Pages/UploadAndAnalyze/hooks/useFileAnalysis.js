// src/Pages/UploadAndAnalyze/hooks/useFileAnalysis.js
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// --- CONTEXT-AWARE AI ANALYSIS ENGINE ---

// Keywords and phrases with associated weights for scoring
const SCORE_KEYWORDS = {
  confidence: {
    positive: [['confident', 15], ['clear', 10], ['articulate', 10], ['decisive', 5]],
    negative: [['unsure', -20], ['lack of confidence', -25], ['hesitant', -15], ['difficulty articulating', -20], ['nervous', -10], ['struggled', -15]]
  },
  eagerness: {
    positive: [['enthusiastic', 20], ['eager', 15], ['proactive', 10], ['asked questions', 10]],
    negative: [['passive', -15], ['disengaged', -20], ['uninterested', -20]]
  }
};

// Check if the document is relevant for analysis
const isRelevantDocument = (text) => {
  const textLower = text.toLowerCase();
  const relevanceClues = [
    /candidate/g, /interview/g, /assessment/g, /feedback/g,
    /summary:/g, /role:/g, /conclusion:/g, /recommendation:/g,
    /technical skills/g, /communication skills/g
  ];
  let score = 0;
  relevanceClues.forEach(clue => {
    if ((textLower.match(clue) || []).length > 0) score++;
  });
  return score >= 2;
};

// Extract section text from document using heading
const extractSectionWithRegex = (text, heading) => {
  const regex = new RegExp(`^${heading}:?\\s*([\\s\\S]*?)(?=\\n[A-Z][a-zA-Z\\s]+:|$)`, 'im');
  const match = text.match(regex);
  return match ? match[1].trim() : null;
};

// Generate actionable suggestions based on scores and text content
const generateSuggestions = (textLower, scores) => {
  const suggestions = [];
  if (scores.confidenceScore < 45) {
    suggestions.push("Candidate shows low confidence. Consider mentorship and building smaller, incremental goals to boost self-assurance.");
  }
  if (scores.eagernessScore < 45) {
    suggestions.push("Explore the candidate's motivations to better align their role with their interests and increase engagement.");
  }
  if (textLower.includes("difficulty articulating") || textLower.includes("communication was unclear")) {
    suggestions.push("Communication skills could be improved. Recommend presentation practice or a communications workshop.");
  }
  if (textLower.includes("struggled with technical") || textLower.includes("weakness in")) {
    suggestions.push("A targeted technical upskilling plan is recommended for the identified weak areas.");
  }
  if (suggestions.length === 0) {
    suggestions.push("Candidate performed well. Focus on integrating them into the team culture and providing clear onboarding objectives.");
  }
  return suggestions;
};

// Generate analysis data from text
const generateAnalysisFromText = (text) => {
  const textLower = text.toLowerCase();

  const calculateScore = (category) => {
    let score = 50;
    SCORE_KEYWORDS[category].positive.forEach(([keyword, weight]) => {
      if (textLower.includes(keyword)) score += weight;
    });
    SCORE_KEYWORDS[category].negative.forEach(([keyword, weight]) => {
      if (textLower.includes(keyword)) score += weight;
    });
    return Math.max(0, Math.min(100, score));
  };

  const confidenceScore = calculateScore('confidence');
  const eagernessScore = calculateScore('eagerness');

  const meetingSummary = extractSectionWithRegex(text, 'Summary') || 'Summary could not be automatically extracted.';
  const finalConclusion = extractSectionWithRegex(text, 'Conclusion') || extractSectionWithRegex(text, 'Suggestions') || 'A final conclusion could not be extracted.';
  const suggestionsForImprovement = generateSuggestions(textLower, { confidenceScore, eagernessScore });

  const emotionsData = [
    { name: 'Positive', value: (confidenceScore > 60) ? (confidenceScore - 50) * 2 : 0 },
    { name: 'Neutral', value: (confidenceScore > 40 && confidenceScore < 60) ? 50 : 10 },
    { name: 'Anxious', value: (confidenceScore < 40) ? (50 - confidenceScore) * 2 : 0 }
  ];

  const engagementData = [
    { name: 'Confidence', score: confidenceScore },
    { name: 'Eagerness', score: eagernessScore }
  ];

  return {
    meetingSummary,
    finalConclusion,
    emotionsData,
    engagementData,
    suggestionsForImprovement
  };
};

// --- Custom Hook ---
export const useFileAnalysis = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [progress, setProgress] = useState(0);

  const startAnalysis = useCallback((fileContent) => {
    setStatus('analyzing');
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
          const result = generateAnalysisFromText(fileContent);
          setAnalysisResult(result);
          setStatus('complete');
          return 100;
        }
        return next;
      });
    }, 50);
  }, []);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      setStatus('error');
      setErrorMessage('File type not supported. Please upload a .txt or .md file.');
      return;
    }
    if (!acceptedFiles.length) return;

    const currentFile = acceptedFiles[0];
    setFile(currentFile);
    setStatus('processing');
    setErrorMessage('');
    setAnalysisResult(null);

    const reader = new FileReader();
    reader.onerror = () => {
      setStatus('error');
      setErrorMessage('Error: Could not read the file.');
    };
    reader.onload = () => {
      const fileContent = reader.result;

      if (!isRelevantDocument(fileContent)) {
        setStatus('error');
        setErrorMessage('Invalid Document: This is not a valid analysis report.');
        setFile(null);
        return;
      }

      setTimeout(() => startAnalysis(fileContent), 500);
    };
    reader.readAsText(currentFile);
  }, [startAnalysis]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    disabled: status === 'analyzing' || status === 'processing',
    accept: { 'text/plain': ['.txt', '.md'] },
  });

  const handleRemoveFile = () => {
    setFile(null);
    setAnalysisResult(null);
    setStatus('idle');
    setErrorMessage('');
    setProgress(0);
  };

  return {
    file,
    status,
    progress,
    analysisResult,
    isDragActive,
    getRootProps,
    getInputProps,
    handleRemoveFile,
    errorMessage,
  };
};
