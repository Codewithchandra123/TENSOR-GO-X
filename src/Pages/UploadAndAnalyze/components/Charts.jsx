// src/Pages/UploadAndAnalyze/components/Charts.jsx

import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label,
} from 'recharts';

// The static import is removed from here. We will use props instead.
// We keep CHART_COLORS as it's a constant for styling.
import { CHART_COLORS } from '../data';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0]; // Access the data point from the payload
    const value = data.dataKey === 'score' ? data.value : (data.payload.percent * 100);

    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <p className="label font-bold">{`${label}`}</p>
        <div style={{ color: data.color || data.payload.fill }}>
          {`${data.name}: ${value.toFixed(1)}%`}
        </div>
      </div>
    );
  }
  return null;
};

// --- UPDATE ---
// The component now accepts `emotionsData` and `engagementData` as props.
// Default values are empty arrays to prevent crashes if data is not yet available.
const Charts = ({ emotionsData = [], engagementData = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };
  
  // A check to render a message if data isn't ready, although AnimatePresence handles this.
  if (!emotionsData.length || !engagementData.length) {
    return (
      <div className="mt-10 text-center text-white/70">
        <p>Chart data is loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Emotional Analytics Pie Chart */}
      <div className="glass-pane p-6">
        <h3 className="text-2xl font-bold text-center mb-4 text-white">Emotional Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              // --- UPDATE ---
              // Using the `emotionsData` prop here
              data={emotionsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {/* --- UPDATE --- */}
              {emotionsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
              ))}
            </Pie>
            {activeIndex !== null && emotionsData[activeIndex] && (
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="#FFFFFF" fontSize="16" className="font-semibold">
                {`${emotionsData[activeIndex].name}`}
              </text>
            )}
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement & Attitude Bar Chart */}
      <div className="glass-pane p-6">
        <h3 className="text-2xl font-bold text-center mb-4 text-white">Engagement & Attitude</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            // --- UPDATE ---
            // Using the `engagementData` prop here
            data={engagementData}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="name" stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }}>
              <Label value="Engagement Categories" offset={-15} position="insideBottom" fill="#FFFFFF" />
            </XAxis>
            <YAxis stroke="#FFFFFF" tick={{ fill: '#FFFFFF' }} domain={[0, 100]} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }} />
            <Bar dataKey="score" fill="url(#colorUv)" radius={[10, 10, 0, 0]}>
              {/* --- UPDATE --- */}
              {engagementData.map((entry, index) => (
                <Cell key={`cell-${index}`} className="transition-transform duration-300 ease-in-out transform hover:scale-105" />
              ))}
            </Bar>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;