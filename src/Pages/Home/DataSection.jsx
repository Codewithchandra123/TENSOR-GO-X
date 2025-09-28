// src/Pages/Home/DataSection.jsx
import React, { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Sector
} from "recharts";
import './DataSection.css';

// --- DATA SETS ---
const emotionsData = [
  { name: "Happy", value: 30, color: "#00C49F" },
  { name: "Neutral", value: 35, color: "#0088FE" },
  { name: "Surprise", value: 15, color: "#FFBB28" },
  { name: "Sad", value: 10, color: "#AF19FF" },
  { name: "Angry", value: 5, color: "#FF8042" },
  { name: "Disgust", value: 5, color: "#FF4F81" },
];

const engagementData = [
  { name: "Interest", score: 95, fill: "url(#gradInterest)" },
  { name: "Confidence", score: 90, fill: "url(#gradConfidence)" },
  { name: "Clarity", score: 88, fill: "url(#gradClarity)" },
  { name: "Eagerness", score: 85, fill: "url(#gradEagerness)" },
  { name: "Seriousness", score: 75, fill: "url(#gradSeriousness)" },
];

const cognitiveData = [
    { name: "Focus", score: 92, fill: "url(#gradFocus)" },
    { name: "Mental Effort", score: 78, fill: "url(#gradEffort)" },
    { name: "Distraction", score: 20, fill: "url(#gradDistraction)" },
    { name: "Understanding", score: 85, fill: "url(#gradUnderstanding)" },
];

// --- UTILITY: DEBOUNCE FUNCTION ---
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
};

// --- CUSTOM CHART COMPONENTS ---
const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="bold">{payload.name}</text>
      <text x={cx} y={cy + 15} dy={8} textAnchor="middle" fill="#eee" fontSize={16}>{`${(percent * 100).toFixed(0)}%`}</text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 10} startAngle={startAngle} endAngle={endAngle} fill={fill} />
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label || payload[0].name}`}</p>
        <p className="value">{`Score: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// --- MAIN COMPONENT ---
const DataSection = () => {
  const [activePieIndex, setActivePieIndex] = useState(0);
  const [chartData, setChartData] = useState('engagement');
  const [visibleEmotions, setVisibleEmotions] = useState(emotionsData.reduce((acc, entry) => ({...acc, [entry.name]: true }), {}));

  const debouncedPieEnter = useCallback(debounce((_, index) => {
    setActivePieIndex(index);
  }, 50), []);

  const handleLegendClick = (emotionName) => {
    setVisibleEmotions(prev => ({...prev, [emotionName]: !prev[emotionName] }));
  };

  const filteredEmotionsData = emotionsData.filter(e => visibleEmotions[e.name]);

  return (
    <section className="data-section">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="section-heading text-5xl font-bold mb-4 text-white">Data-Driven <span className="heading-gradient">Results</span></h2>
          <p className="section-subheading text-lg text-white max-w-3xl mx-auto mb-16">
            Gain deep insights from our advanced analytical models. And We translate complex one - 2 - one round and other Technical Rounds data into clear, actionable results and Make Documentation 
            
            Process for Further Uses And Live Interactivity Sessions.
          </p>
        </motion.div>

        <motion.div className="flex flex-col lg:flex-row gap-8 lg:gap-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* --- PIE CHART CARD --- */}
          <motion.div className="flex-1 glass-card" variants={cardVariants} whileHover={{ y: -10, boxShadow: '0 16px 40px 0 rgba(0, 0, 0, 0.5)' }}>
            <h3 className="card-title">Emotional Analytics</h3>
            {/* --- CHANGED HERE: Removed fixed height class --- */}
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activePieIndex}
                    activeShape={renderActiveShape}
                    data={filteredEmotionsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                    onMouseEnter={debouncedPieEnter}
                  >
                    {filteredEmotionsData.map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="custom-legend">
              {emotionsData.map((entry) => (
                <div key={entry.name} onClick={() => handleLegendClick(entry.name)} className={`legend-item ${visibleEmotions[entry.name] ? 'visible' : ''}`}>
                  <div className="legend-color-box" style={{ backgroundColor: entry.color }}></div>
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- BAR CHART CARD --- */}
          <motion.div className="flex-1 glass-card" variants={cardVariants} whileHover={{ y: -10, boxShadow: '0 16px 40px 0 rgba(0, 0, 0, 0.5)' }}>
            <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-4">
              <h3 className="card-title !mb-0">Performance Metrics</h3>
              <div className="data-toggle-switch">
                <button onClick={() => setChartData('engagement')} className={chartData === 'engagement' ? 'active' : ''}>Engagement</button>
                <button onClick={() => setChartData('cognitive')} className={chartData === 'cognitive' ? 'active' : ''}>Cognitive</button>
              </div>
            </div>
            {/* --- CHANGED HERE: Removed fixed height class --- */}
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData === 'engagement' ? engagementData : cognitiveData} margin={{ top: 20, right: 20, left: -20, bottom: 30 }}>
                  <defs>
                      <linearGradient id="gradInterest" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#10b981" /></linearGradient>
                      <linearGradient id="gradConfidence" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient>
                      <linearGradient id="gradClarity" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient>
                      <linearGradient id="gradEagerness" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#facc15" /><stop offset="100%" stopColor="#eab308" /></linearGradient>
                      <linearGradient id="gradSeriousness" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#f97316" /></linearGradient>
                      <linearGradient id="gradFocus" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient>
                      <linearGradient id="gradEffort" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f472b6" /><stop offset="100%" stopColor="#ec4899" /></linearGradient>
                      <linearGradient id="gradDistraction" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ef4444" /><stop offset="100%" stopColor="#dc2626" /></linearGradient>
                      <linearGradient id="gradUnderstanding" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#a3e635" /><stop offset="100%" stopColor="#84cc16" /></linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#FFFFFF" angle={-45} textAnchor="end" height={80} interval={0} />
                  <YAxis stroke="#FFFFFF" />
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.05)'}} />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {(chartData === 'engagement' ? engagementData : cognitiveData).map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSection;