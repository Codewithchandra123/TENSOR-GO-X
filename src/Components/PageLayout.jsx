import React from 'react';

const PageLayout = ({ title, children }) => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h1>
          <div className="text-gray-700 leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;