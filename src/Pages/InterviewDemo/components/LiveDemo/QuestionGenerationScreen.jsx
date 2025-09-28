// // src/Pages/InterviewDemo/components/LiveDemo/QuestionGenerationScreen.jsx

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaPlus, FaTrash, FaArrowRight } from 'react-icons/fa';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// const QuestionGenerationScreen = ({ roleName, onSubmitQuestions }) => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState('');

//   const handleAddQuestion = () => {
//     if (currentQuestion.trim()) {
//       setQuestions([...questions, currentQuestion.trim()]);
//       setCurrentQuestion('');
//     }
//   };

//   const handleRemoveQuestion = (indexToRemove) => {
//     setQuestions(questions.filter((_, index) => index !== indexToRemove));
//   };

//   const handleSubmit = () => {
//     if (questions.length > 0) {
//       onSubmitQuestions(questions);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-start p-6 pt-24">
//       <motion.div
//         className="w-full max-w-2xl text-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight" variants={itemVariants}>
//           Create Questions for <span className="text-cyan-300">{roleName}</span>
//         </motion.h1>
//         <motion.p className="mt-4 text-lg text-gray-200" variants={itemVariants}>
//           Add at least one question to begin the interview analysis.
//         </motion.p>

//         <motion.div className="mt-10 flex items-center gap-4" variants={itemVariants}>
//           <input
//             type="text"
//             value={currentQuestion}
//             onChange={(e) => setCurrentQuestion(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleAddQuestion()}
//             placeholder="Type your question here..."
//             className="w-full px-5 py-4 bg-white/10 border-2 border-white/20 rounded-xl font-semibold text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//           <button
//             onClick={handleAddQuestion}
//             disabled={!currentQuestion.trim()}
//             className="flex-shrink-0 p-4 bg-cyan-500 rounded-xl text-white transition-transform transform hover:scale-110 disabled:opacity-50"
//             aria-label="Add Question"
//           >
//             <FaPlus />
//           </button>
//         </motion.div>

//         <motion.div className="mt-8 text-left space-y-3" variants={containerVariants}>
//           {questions.map((q, index) => (
//             <motion.div
//               key={index}
//               className="flex justify-between items-center p-4 bg-black/30 rounded-lg"
//               variants={itemVariants}
//               layout
//             >
//               <span className="text-gray-100">{index + 1}. {q}</span>
//               <button onClick={() => handleRemoveQuestion(index)} className="text-red-400 hover:text-red-300">
//                 <FaTrash />
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {questions.length > 0 && (
//           <motion.div className="mt-12" variants={itemVariants}>
//             <button
//               onClick={handleSubmit}
//               className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
//             >
//               Start Interview
//               <FaArrowRight className="ml-3 transform transition-transform duration-300 group-hover:translate-x-2" />
//             </button>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default QuestionGenerationScreen;


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
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleAddQuestion = () => {
    if (currentQuestion.trim()) {
      setQuestions([...questions, currentQuestion.trim()]);
      setCurrentQuestion('');
    }
  };

  const handleRemoveQuestion = (indexToRemove) => {
    setQuestions(questions.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = () => {
    if (questions.length > 0) {
      onSubmitQuestions(questions);
    }
  };

  return (
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
        Add at least one question to begin the interview analysis.
      </motion.p>

      <motion.div className="mt-10 flex items-center gap-4" variants={itemVariants}>
        <input
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddQuestion()}
          placeholder="Type your question and press Enter or the '+' button"
          className="w-full px-5 py-4 bg-slate-800 border-2 border-slate-700 rounded-xl font-semibold text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
        />
        <button
          onClick={handleAddQuestion}
          disabled={!currentQuestion.trim()}
          className="flex-shrink-0 p-4 bg-cyan-500 rounded-xl text-white transition-transform transform hover:scale-110 disabled:opacity-50"
          aria-label="Add Question"
        >
          <FaPlus />
        </button>
      </motion.div>

      <motion.div className="mt-8 text-left space-y-3" variants={containerVariants}>
        {questions.map((q, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center p-4 bg-slate-800/70 border border-slate-700 rounded-lg"
            variants={itemVariants}
            layout
          >
            <span className="text-slate-200">{index + 1}. {q}</span>
            <button onClick={() => handleRemoveQuestion(index)} className="text-red-500 hover:text-red-400 transition-colors">
              <FaTrash />
            </button>
          </motion.div>
        ))}
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
  );
};

export default QuestionGenerationScreen;