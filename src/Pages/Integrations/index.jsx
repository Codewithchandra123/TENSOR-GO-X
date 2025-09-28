// src/Pages/Integrations/index.jsx
import React from 'react';
import { useIntegrationsState } from './hooks/useIntegrationsState';

// Child Components
import HeroSection from './components/HeroSection';
import FilterBar from './components/FilterBar';
import IntegrationCard from './components/IntegrationCard';
import IntegrationModal from './components/IntegrationModal';
import RequestCtaSection from './components/RequestCtaSection';

// Styles
import './Integrations.css';

const Integrations = () => {
  const {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    modalIntegration,
    setModalIntegration,
    handleConnect,
    handleDisconnect,
    filteredIntegrations,
    categories,
  } = useIntegrationsState();

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <IntegrationModal
        integration={modalIntegration}
        onClose={() => setModalIntegration(null)}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
      />
      <HeroSection />
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      {/* Integrations Grid Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration, index) => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onOpenModal={setModalIntegration}
                index={index}
              />
            ))}
          </div>
          {filteredIntegrations.length === 0 && (
            <div className="text-center py-10 animate-fade-in-up">
              <h3 className="text-xl font-semibold text-slate-700">No Integrations Found</h3>
              <p className="text-slate-500 mt-2">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>
      
      <RequestCtaSection />
    </div>
  );
};

export default Integrations;