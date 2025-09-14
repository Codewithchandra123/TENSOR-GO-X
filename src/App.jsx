import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ScrollToTop from "./Components/ScrollToTop"; // Adjust the path
import Header from './Components/Navbar';
import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Features from './Pages/Features';
import HowItWorks from './Pages/HowItWorks';
import Integrations from './Pages/Integrations';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Careers from './Pages/Careers';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import InterviewDemo from './Pages/InterviewDemo'; // ✅ New page
import UploadAndAnalyze from './Pages/UploadAndAnalyze'; // ✅ New page


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
{/*       <main className="min-h-screen p-6 bg-neutral-light-gray flex-grow"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/demo" element={<InterviewDemo />} /> {/* ✅ only once */}
          <Route path="/upload" element={<UploadAndAnalyze />} /> 
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
{/*       </main> */}
      <Footer />
    </>
  );
}

export default App;
