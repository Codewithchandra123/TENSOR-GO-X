// src/Pages/InterviewDemo/index.jsx
import React, { useState } from 'react';
import { FaUndo } from 'react-icons/fa';

// Hooks
import { useLiveInterview } from './hooks/useLiveInterview';

// Components
import ModeSelection from './components/ModeSelection';
import QuestionGenerationScreen from './components/LiveDemo/QuestionGenerationScreen';
import RoleSelection from './components/LiveDemo/RoleSelection';
import InterviewScreen from './components/LiveDemo/InterviewScreen';
import ReportScreen from './components/LiveDemo/ReportScreen';

// Styles
import './InterviewDemo.css';

const InterviewDemo = () => {
  const [mode, setMode] = useState('selection'); // 'selection', 'liveDemo'
  const liveInterview = useLiveInterview();

  // This is a persistent layout wrapper for all live demo screens
  // It handles the full-screen alignment and the reset button
  const PageLayout = ({ children, showReset = true }) => (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 animate-fade-in-up">
      {showReset && (
        <button
          onClick={liveInterview.resetLiveDemo}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2 bg-slate-800/70 border border-slate-700 text-white rounded-lg backdrop-blur-sm hover:bg-slate-700 transition-colors"
          title="Start Over"
        >
          <FaUndo />
          <span className="hidden sm:inline">Start Over</span>
        </button>
      )}
      {children}
    </div>
  );

  // Renders the correct component based on the current step in the live demo
  const renderLiveDemo = () => {
    switch (liveInterview.liveStep) {
      case 'roleSelection':
        return (
          <PageLayout showReset={false}> {/* No reset on the first step */}
            <RoleSelection onRoleSelect={liveInterview.handleRoleSelect} />
          </PageLayout>
        );

      case 'questionGeneration':
        return (
          <PageLayout>
            <QuestionGenerationScreen
              roleName={liveInterview.selectedRole?.name}
              onSubmitQuestions={liveInterview.handleCustomQuestionsSubmit}
            />
          </PageLayout>
        );

      case 'interview':
        // InterviewScreen has a complex internal layout, but PageLayout centers it
        return (
          <PageLayout>
            <InterviewScreen {...liveInterview} />
          </PageLayout>
        );

      case 'report':
        return (
          <PageLayout>
            <ReportScreen {...liveInterview} />
          </PageLayout>
        );

      default:
        // Fallback to role selection if state is invalid
        liveInterview.resetLiveDemo();
        return null;
    }
  };

  return (
    <main className="min-h-screen w-full bg-primary text-white font-sans">
      {mode === 'selection' ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <ModeSelection onSelectMode={setMode} />
        </div>
      ) : (
        renderLiveDemo()
      )}
    </main>
  );
};

export default InterviewDemo;