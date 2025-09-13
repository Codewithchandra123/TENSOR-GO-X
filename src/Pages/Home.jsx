import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

// --- ICONS (Inline SVG for self-contained component) ---
const FaEye = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor"><path d="M288 144a110.1 110.1 0 0 0 -110.1 110.1c0 60.6 49.5 110.1 110.1 110.1 60.6 0 110.1-49.5 110.1-110.1S348.6 144 288 144zM288 336c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm288-80c0-14.7-11.3-26.6-25.9-27.9-19.1-1.9-37.1 2.3-53.1 10.9-19.4 10.5-35.1 24.3-46.7 41.5-11.6 17.2-18.3 36.3-21.9 57.3-3.6 21-3.6 42.5 0 63.5 3.6 21 10.3 40.1 21.9 57.3 11.6 17.2 27.3 31 46.7 41.5 16 8.6 34 12.8 53.1 10.9 14.6-1.3 25.9-13.2 25.9-27.9V256zM288 384c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-80-160c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm80-160c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm-176-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/></svg>;
const FaMicrophoneAlt = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M192 256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64s64 28.7 64 64v128c0 35.3-28.7 64-64 64zm160-96c-17.7 0-32 14.3-32 32v64c0 62.1-43.9 113.3-102.6 125.6-5.8 1.2-11.5 1.8-17.4 1.8h-1c-15.6-1.5-30.8-5.3-44.5-11.5-35.8-15.9-57.8-51.4-57.8-90.4v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 74.5 45.4 138.3 109.8 163.6l-29.3 117.2c-4.4 17.6 1.8 36.1 14.8 49.1s31.5 19.2 49.1 14.8l117.2-29.3c17.6-4.4 36.1-1.8 49.1 14.8s19.2 31.5 14.8 49.1L384 512V256c0-17.7-14.3-32-32-32z"/></svg>;
const FaChartLine = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M492.3 84.8L413 0l-7.5 7.5-88.6 88.6L297.7 85c-15.6-15.6-40.9-15.6-56.6 0l-45.3 45.3-95.7 95.7-96.1 96.1c-15.6 15.6-15.6 40.9 0 56.6l96.1 96.1c15.6 15.6 40.9 15.6 56.6 0l96.1-96.1 95.7-95.7 45.3-45.3c15.6-15.6 15.6-40.9 0-56.6zM320 288c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/></svg>;

// --- MOCK DATA ---
const emotionsData = [
  { name: 'Happy', value: 30 },
  { name: 'Sad', value: 10 },
  { name: 'Angry', value: 5 },
  { name: 'Surprise', value: 15 },
  { name: 'Disgust', value: 5 },
  { name: 'Neutral', value: 35 },
];

const engagementData = [
  { name: 'Eagerness', score: 85 },
  { name: 'Confidence', score: 90 },
  { name: 'Seriousness', score: 75 },
  { name: 'Interest', score: 95 },
  { name: 'Clarity', score: 88 },
];

const features = [
  {
    icon: <FaEye />,
    title: "Real-time Facial and Body Analytics",
    description: "Our AI model analyzes non-verbal cues to provide instant feedback on participant engagement, sentiment, and focus."
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "AI-Powered Meeting Summaries",
    description: "Go-X automatically generates concise summaries, key decisions, and actionable items from every virtual meeting."
  },
  {
    icon: <FaChartLine />,
    title: "Physiological Data Monitoring",
    description: "Gain unique insights into stress levels and heart rate to ensure team well-being and productivity during calls."
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white via-indigo-50 to-gray-50 text-gray-800 font-sans min-h-screen">

      {/* --- Hero Section with Text Logo --- */}
      <section className="relative text-center py-20 md:py-36 px-6 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 top-0 right-0"></div>
          <div className="absolute w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 bottom-0 left-0"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center animate-fade-in-up">
          {/* Animated Text Logo */}
          <h1 className="text-7xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse-slow">
            Go-X
          </h1>

          <p className="text-lg md:text-2xl font-bold tracking-wide text-gray-800">
            by TensorGo
          </p>

          <h2 className="text-4xl md:text-6xl font-bold font-headings leading-tight mt-10">
            Unlock Deeper Insights from Every Meeting.
          </h2>

          <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto">
            AI-powered analytics to transform virtual collaboration and revolutionize team dynamics.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/demo" className="inline-block py-4 px-10 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-700 duration-300">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="inline-block text-gray-700 font-bold text-lg py-4 px-10 border-2 border-gray-400 rounded-full transition-colors hover:border-indigo-600 hover:text-indigo-600 duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* --- Visual Features Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Features That Drive Insight</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent transition-all duration-500 hover:border-indigo-400 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Advanced Hover Effect: Glowing border and background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-40 blur"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-5xl text-indigo-600 mb-4 group-hover:text-teal-600 transition-colors duration-500">{feature.icon}</div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Metrics and Data Section --- */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Data-Driven Results</h2>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Pie Chart */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: '0ms' }}>
              <h3 className="text-2xl font-bold text-center mb-6">Emotional Analytics</h3>
              <div className="h-64">
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={emotionsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg animate-fade-in" style={{ animationDelay: '150ms' }}>
              <h3 className="text-2xl font-bold text-center mb-6">Engagement & Clarity</h3>
              <div className="h-64">
                <BarChart width={300} height={300} data={engagementData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="score" fill="#82ca9d" />
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action - with enhanced styling --- */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-20 text-center text-white">
        <div className="container mx-auto px-6 animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Meetings?</h2>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto mb-8">
            Start your journey with Go-X and unlock the hidden potential within every conversation.
          </p>
          <Link to="/contact" className="inline-block py-4 px-10 bg-white text-indigo-700 font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-200 duration-300">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* --- STYLES FOR ANIMATIONS & EFFECTS --- */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes blob {
          0% { transform: scale(1) translate(0px, 0px); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0px, 0px); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out both; }

        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-in { animation: scaleIn 0.8s ease-out both; }
        
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-pulse-slow { animation: pulseSlow 4s infinite ease-in-out; }

        .blur {
          filter: blur(8px);
        }
      `}</style>
    </div>
  );
};

export default Home;
