// src/Pages/Integrations/components/FilterBar.jsx
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const FilterBar = ({ categories, activeCategory, setActiveCategory, searchTerm, setSearchTerm }) => (
  <section className="bg-white/50 backdrop-blur-lg sticky top-0 z-10 border-b border-slate-200">
    <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              activeCategory === category
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="relative w-full md:w-1/3">
        <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search integrations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-2.5 border border-slate-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  </section>
);

export default FilterBar;