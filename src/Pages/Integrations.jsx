// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { SiZoom, SiGooglemeet, SiSlack, SiJira } from 'react-icons/si';
// import { FiSearch, FiX } from 'react-icons/fi';

// // ✅ Inline SVG fallback for Microsoft Teams (since not available in react-icons@5.5.0)
// const MicrosoftTeamsSVG = ({ size = 32, className = "" }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 256 256"
//     fill="currentColor"
//     width={size}
//     height={size}
//     className={className}
//   >
//     <path d="M104 80a40 40 0 1 0-40-40 40 40 0 0 0 40 40ZM64 96a32 32 0 0 0-32 32v40a32 32 0 0 0 32 32h40a32 32 0 0 0 32-32v-40a32 32 0 0 0-32-32Zm104-32a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm24 24a28 28 0 0 0-28 28v36a28 28 0 0 0 28 28h28a28 28 0 0 0 28-28v-36a28 28 0 0 0-28-28Z" />
//   </svg>
// );

// // --- Main Data for Integrations ---
// const integrationsList = [
//   {
//     id: 'zoom',
//     name: 'Zoom',
//     category: 'Video Conferencing',
//     logo: <SiZoom size={32} className="text-blue-500" />,
//     description: 'Automatically analyze participant engagement and generate summaries for all your Zoom calls.',
//     color: 'blue'
//   },
//   {
//     id: 'meet',
//     name: 'Google Meet',
//     category: 'Video Conferencing',
//     logo: <SiGooglemeet size={32} className="text-green-500" />,
//     description: "Transform your Google Meet sessions with Go-X's AI. Get live cues and post-meeting analytics.",
//     color: 'green'
//   },
//   {
//     id: 'teams',
//     name: 'Microsoft Teams',
//     category: 'Video Conferencing',
//     logo: <MicrosoftTeamsSVG size={32} className="text-indigo-500" />,
//     description: 'Bring AI-powered insights to your Teams meetings to improve focus and capture key decisions.',
//     color: 'indigo'
//   },
//   {
//     id: 'slack',
//     name: 'Slack',
//     category: 'Productivity',
//     logo: <SiSlack size={32} className="text-purple-500" />,
//     description: 'Send automated meeting summaries and action items directly to your designated Slack channels.',
//     color: 'purple'
//   },
//   {
//     id: 'jira',
//     name: 'Jira',
//     category: 'Productivity',
//     logo: <SiJira size={32} className="text-sky-600" />,
//     description: 'Create Jira tickets for action items directly from your Go-X meeting summaries.',
//     color: 'sky'
//   },
// ];

// // --- Integration Modal Component ---
// const IntegrationModal = ({ integration, onClose, onConnect, onDisconnect }) => {
//   if (!integration) return null;

//   const colorClasses = {
//     blue: 'bg-blue-600 hover:bg-blue-700',
//     green: 'bg-green-600 hover:bg-green-700',
//     indigo: 'bg-indigo-600 hover:bg-indigo-700',
//     purple: 'bg-purple-600 hover:bg-purple-700',
//     sky: 'bg-sky-600 hover:bg-sky-700',
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-fast">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
//         >
//           <FiX size={24} />
//         </button>
//         <div className="flex items-center gap-4 mb-4">
//           {integration.logo}
//           <h2 className="text-3xl font-bold text-slate-800">
//             {integration.name}
//           </h2>
//         </div>
//         <p className="text-slate-600 mb-8 leading-relaxed">
//           {integration.description}
//         </p>

//         {integration.status === 'disconnected' ? (
//           <button
//             onClick={() => onConnect(integration.id)}
//             disabled={integration.isLoading}
//             className={`w-full font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses[integration.color]} text-white`}
//           >
//             {integration.isLoading ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 
//                     5.291A7.962 7.962 0 014 12H0c0 
//                     3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Connecting...
//               </>
//             ) : (
//               'Connect this app'
//             )}
//           </button>
//         ) : (
//           <div className="flex flex-col items-center gap-2">
//             <div className="w-full text-center bg-green-100 text-green-800 font-bold py-3 px-4 rounded-lg">
//               <p>Connected</p>
//             </div>
//             <button
//               onClick={() => onDisconnect(integration.id)}
//               className="text-sm text-slate-500 hover:text-red-600 p-2 rounded-lg transition-colors"
//             >
//               Disconnect
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // --- Main Integrations Component ---
// const Integrations = () => {
//   const [integrations, setIntegrations] = useState(
//     integrationsList.map((int) => ({
//       ...int,
//       status: 'disconnected',
//       isLoading: false,
//     }))
//   );
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [modalIntegration, setModalIntegration] = useState(null);

//   const handleConnect = (id) => {
//     setIntegrations((prev) =>
//       prev.map((int) =>
//         int.id === id ? { ...int, isLoading: true } : int
//       )
//     );
//     setTimeout(() => {
//       setIntegrations((prev) =>
//         prev.map((int) =>
//           int.id === id
//             ? { ...int, status: 'connected', isLoading: false }
//             : int
//         )
//       );
//       setModalIntegration((prev) =>
//         prev && prev.id === id
//           ? { ...prev, status: 'connected', isLoading: false }
//           : prev
//       );
//     }, 1500);
//   };

//   const handleDisconnect = (id) => {
//     setIntegrations((prev) =>
//       prev.map((int) =>
//         int.id === id ? { ...int, status: 'disconnected' } : int
//       )
//     );
//     setModalIntegration((prev) =>
//       prev && prev.id === id
//         ? { ...prev, status: 'disconnected' }
//         : prev
//     );
//   };

//   const filteredIntegrations = integrations
//     .filter((int) => activeCategory === 'All' || int.category === activeCategory)
//     .filter((int) =>
//       int.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   const categories = ['All', ...new Set(integrationsList.map((int) => int.category))];

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       <IntegrationModal
//         integration={modalIntegration}
//         onClose={() => setModalIntegration(null)}
//         onConnect={handleConnect}
//         onDisconnect={handleDisconnect}
//       />

//       {/* Hero Section */}
//       <section className="bg-white border-b border-slate-200">
//         <div className="container mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
//             Integrate Go-X Seamlessly
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//             Connect Go-X with the tools you use every day to automate workflows
//             and unlock deeper insights.
//           </p>
//         </div>
//       </section>

//       {/* Filters and Search Section */}
//       <section className="bg-white/50 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
//         <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
//                   activeCategory === category
//                     ? 'bg-indigo-600 text-white shadow-md'
//                     : 'bg-white text-slate-700 hover:bg-slate-200'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//           <div className="relative w-full md:w-1/3">
//             <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search integrations..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Integrations Grid Section */}
//       <section className="py-16 sm:py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredIntegrations.map((integration, index) => (
//               <button
//                 key={integration.id}
//                 onClick={() => setModalIntegration(integration)}
//                 className="bg-white p-6 rounded-2xl shadow-lg text-left flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     {integration.logo}
//                     <div
//                       className={`flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full ${
//                         integration.status === 'connected'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-slate-100 text-slate-600'
//                       }`}
//                     >
//                       <div
//                         className={`w-2 h-2 rounded-full ${
//                           integration.status === 'connected'
//                             ? 'bg-green-500'
//                             : 'bg-slate-400'
//                         }`}
//                       ></div>
//                       {integration.status === 'connected'
//                         ? 'Connected'
//                         : 'Not Connected'}
//                     </div>
//                   </div>
//                   <h2 className="text-2xl font-bold text-slate-800 mb-2">
//                     {integration.name}
//                   </h2>
//                   <p className="text-slate-600 mb-6 leading-relaxed">
//                     {integration.description}
//                   </p>
//                 </div>
//                 <div
//                   className={`w-full font-bold py-2.5 px-6 rounded-lg transition-all text-center ${
//                     integration.status === 'connected'
//                       ? 'bg-slate-100 text-slate-800'
//                       : 'bg-indigo-50 text-indigo-800'
//                   }`}
//                 >
//                   {integration.status === 'connected'
//                     ? 'View Settings'
//                     : 'Connect'}
//                 </div>
//               </button>
//             ))}
//           </div>
//           {filteredIntegrations.length === 0 && (
//             <div className="text-center py-10 animate-fade-in-up">
//               <h3 className="text-xl font-semibold text-slate-700">
//                 No Integrations Found
//               </h3>
//               <p className="text-slate-500 mt-2">
//                 Try adjusting your search or filter.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Request an Integration Section */}
//       <section className="bg-white">
//         <div className="container mx-auto px-6 py-20 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
//             Don't See Your Tool?
//           </h2>
//           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//             We're always adding new integrations based on customer feedback. Let
//             us know what you'd like to see next.
//           </p>
//           <Link
//             to="/contact"
//             className="mt-8 inline-block bg-slate-800 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             Request an Integration
//           </Link>
//         </div>
//       </section>

//       <style>{`
//         @keyframes fadeIn-up {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up { animation: fadeIn-up 0.5s ease-out forwards; opacity: 0; }
//         @keyframes fadeIn-fast {
//           from { opacity: 0; } to { opacity: 1; }
//         }
//         .animate-fade-in-fast { animation: fadeIn-fast 0.2s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// };

// export default Integrations;
