// // src/Pages/UploadAndAnalyze/components/AnalysisReport.jsx
// import React from 'react';
// import { FaLightbulb, FaDownload } from 'react-icons/fa';
// import AnimatedMetric from './AnimatedMetric';

// const AnalysisReport = ({ result }) => {
//   const handleDownload = () => {
//     // Format the text content for the report
//     const reportContent = `
// ANALYSIS REPORT
// =========================

// MEETING SUMMARY:
// ${result.meetingSummary}

// -------------------------

// KEY METRICS:
// - Eagerness Score: ${result.engagementData.find(d => d.name === 'Eagerness')?.score || 'N/A'}%
// - Confidence Score: ${result.engagementData.find(d => d.name === 'Confidence')?.score || 'N/A'}%

// -------------------------

// FINAL CONCLUSION:
// ${result.finalConclusion}
//     `;

//     // Create a Blob from the text content
//     const blob = new Blob([reportContent.trim()], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'Analysis_Report.txt'; // The filename for the download
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="p-6 bg-white/5 rounded-2xl shadow-inner h-full flex flex-col">
//       <div className="flex justify-between items-start mb-5">
//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">Analysis Report</h2>
//           <button
//             onClick={handleDownload}
//             className="flex items-center gap-2 px-3 py-2 bg-white/10 text-white font-semibold rounded-lg shadow-md hover:bg-white/20 transition-all duration-300"
//             aria-label="Download analysis report"
//           >
//             <FaDownload />
//             <span className="hidden sm:inline">Download</span>
//           </button>
//       </div>
//       <div className="space-y-6 flex-grow">
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-2">Meeting Summary</h3>
//           <p className="text-white/80 text-sm md:text-base leading-relaxed">{result.meetingSummary}</p>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <AnimatedMetric label="Eagerness" value={result.engagementData.find(d => d.name === 'Eagerness')?.score || 0} />
//           <AnimatedMetric label="Confidence" value={result.engagementData.find(d => d.name === 'Confidence')?.score || 0} />
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
//             <FaLightbulb className="text-yellow-400" /> Final Conclusion
//           </h3>
//           <p className="text-white text-base font-medium bg-white/10 p-3 rounded-lg">
//             {result.finalConclusion}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalysisReport;





// src/Pages/UploadAndAnalyze/components/AnalysisReport.jsx
import React from 'react';
import { FaLightbulb, FaDownload, FaWrench } from 'react-icons/fa';
import AnimatedMetric from './AnimatedMetric';

const AnalysisReport = ({ result }) => {
  const handleDownload = () => {
    // Format the text content for the report including suggestions
    const suggestionsText = result.suggestionsForImprovement?.length
      ? result.suggestionsForImprovement.map((s, i) => `  ${i + 1}. ${s}`).join('\n')
      : 'No suggestions available.';

    const reportContent = `
ANALYSIS REPORT
=========================

MEETING SUMMARY:
${result.meetingSummary}

-------------------------

KEY METRICS:
- Eagerness Score: ${result.engagementData.find(d => d.name === 'Eagerness')?.score || 'N/A'}%
- Confidence Score: ${result.engagementData.find(d => d.name === 'Confidence')?.score || 'N/A'}%

-------------------------

SUGGESTIONS FOR IMPROVEMENT:
${suggestionsText}

-------------------------

FINAL CONCLUSION:
${result.finalConclusion}
    `;

    const blob = new Blob([reportContent.trim()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Analysis_Report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-white/5 rounded-2xl shadow-inner h-full flex flex-col">
      <div className="flex justify-between items-start mb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">Analysis Report</h2>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-3 py-2 bg-white/10 text-white font-semibold rounded-lg shadow-md hover:bg-white/20 transition-all duration-300"
          aria-label="Download analysis report"
        >
          <FaDownload />
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>

      <div className="space-y-6 flex-grow">
        {/* Meeting Summary */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Meeting Summary</h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">{result.meetingSummary}</p>
        </div>

        {/* Animated Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <AnimatedMetric label="Eagerness" value={result.engagementData.find(d => d.name === 'Eagerness')?.score || 0} />
          <AnimatedMetric label="Confidence" value={result.engagementData.find(d => d.name === 'Confidence')?.score || 0} />
        </div>

        {/* Suggestions for Improvement */}
        {result.suggestionsForImprovement && result.suggestionsForImprovement.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              <FaWrench className="text-cyan-400" /> Suggestions for Improvement
            </h3>
            <ul className="space-y-2 list-disc list-inside bg-white/10 p-4 rounded-lg">
              {result.suggestionsForImprovement.map((suggestion, index) => (
                <li key={index} className="text-white/90 text-sm md:text-base">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Final Conclusion */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <FaLightbulb className="text-yellow-400" /> Final Conclusion
          </h3>
          <p className="text-white text-base font-medium bg-white/10 p-3 rounded-lg">
            {result.finalConclusion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;
