// src/Pages/InterviewDemo/components/LiveDemo/QuestionGenerationScreen.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaArrowRight } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const QuestionGenerationScreen = ({ roleName, onSubmitQuestions }) => {
  const [questions, setQuestions] = useState([
    // Pre-filled with some default questions for demonstration
    "Tell me about a challenging project you've worked on.",
    "How do you handle tight deadlines and pressure?"
  ]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  // --- LOGIC IMPLEMENTED ---
  const handleAddQuestion = () => {
    if (!currentQuestion.trim()) return; // Prevent adding empty questions
    setQuestions([...questions, currentQuestion.trim()]);
    setCurrentQuestion(''); // Clear the input field after adding
  };

  const handleRemoveQuestion = (indexToRemove) => {
    setQuestions(questions.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = () => {
    if (questions.length > 0) {
      onSubmitQuestions(questions); // Pass the final list of questions to the parent component
    }
  };

  return (
    // This structure is correct for vertical centering.
    // The parent of this component must have a defined height (e.g., h-screen, h-full) for this to work.
    <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-slate-900 text-white">
        <motion.div
            className="w-full max-w-2xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" variants={itemVariants}>
                Create Questions for <span className="text-cyan-400">{roleName}</span>
            </motion.h1>
            <motion.p className="mt-4 text-lg text-slate-300" variants={itemVariants}>
                Add or remove questions, then start the interview analysis.
            </motion.p>

            <motion.div className="mt-10 flex flex-col sm:flex-row items-center gap-4" variants={itemVariants}>
                <input
                    type="text"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddQuestion()}
                    placeholder="Type your question..."
                    className="w-full px-5 py-4 bg-slate-800 border-2 border-slate-700 rounded-xl font-semibold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                />
                <button
                    onClick={handleAddQuestion}
                    disabled={!currentQuestion.trim()}
                    className="w-full sm:w-auto flex-shrink-0 p-4 bg-cyan-500 rounded-xl text-white transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Add Question"
                >
                    <FaPlus className="mx-auto sm:mx-0" />
                </button>
            </motion.div>

            {/* List of questions with smooth animation on add/remove */}
            <motion.div className="mt-8 text-left space-y-3" layout>
                <AnimatePresence>
                    {questions.map((q, index) => (
                        <motion.div
                            key={index} // Using index is okay here as we are not re-ordering
                            className="flex justify-between items-center p-4 bg-slate-800/70 border border-slate-700 rounded-lg"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, x: -50 }}
                            layout
                        >
                            <span className="text-slate-200 text-sm sm:text-base break-words w-[90%]">{index + 1}. {q}</span>
                            <button onClick={() => handleRemoveQuestion(index)} className="text-red-500 hover:text-red-400 transition-colors p-2">
                                <FaTrash />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {questions.length > 0 && (
                <motion.div className="mt-12" variants={itemVariants}>
                    <button
                        onClick={handleSubmit}
                        className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
                    >
                        Start Interview
                        <FaArrowRight className="ml-3 transform transition-transform duration-300 group-hover:translate-x-1.5" />
                    </button>
                </motion.div>
            )}
        </motion.div>
    </div>
  );
};

export default QuestionGenerationScreen;