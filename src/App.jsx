import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";

import Header from './Components/Navbar';
import Footer from './Components/Footer';

// --- Page Imports ---
import Home from "./Pages/Home/Home";
import About from './Pages/About';
import Features from './Pages/Features/index';
import HowItWorks from './Pages/HowItWorks/HowitisWorks';
import Integrations from './Pages/Integrations/index';
import Pricing from './Pages/Pricing/index';
import Contact from './Pages/Contact/index';
import Careers from './Pages/Careers/index';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';
import InterviewDemo from './Pages/InterviewDemo/index';
import UploadAndAnalyze from './Pages/UploadAndAnalyze/index';

// --- Auth & Protected Imports ---
import LoginPage from './Pages/Auth/LoginPage';
import SignupPage from './Pages/Auth/SignupPage';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* Public Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        <Route 
          path="/upload" 
          element={
            <ProtectedRoute>
              <UploadAndAnalyze />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/demo" 
          element={
            <ProtectedRoute>
              <InterviewDemo />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <UploadAndAnalyze /> 
            </ProtectedRoute>
          } 
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
