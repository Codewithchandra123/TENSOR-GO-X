import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop"; // Adjust the path

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

// ✅ 1. IMPORT YOUR NEW COMPONENTS
import LoginPage from './Pages/Auth/LoginPage'; // Adjust path if you placed it elsewhere
import SignupPage from './Pages/Auth/SignupPage'; // Adjust path
import ProtectedRoute from './Components/ProtectedRoute'; // Import the protector component


function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
<<<<<<< HEAD
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
=======
      <Routes>
        {/* --- Public Routes (Anyone can see these) --- */}
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
        
        {/* ✅ 2. ADD THE PUBLIC AUTHENTICATION ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* --- Protected Routes (User MUST be logged in to see these) --- */}
        {/* 
          Here, we wrap the pages that should be private inside the ProtectedRoute component.
          If a user is not logged in and tries to go to '/upload', they will be
          automatically redirected to '/login'.
        */}
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
        
        {/* You can add a dedicated dashboard route here as well */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              {/* You can create a new Dashboard component or reuse another page */}
              <UploadAndAnalyze /> 
            </ProtectedRoute>
          } 
        />

      </Routes>
>>>>>>> 52e836f (Updated React code and Firebase integration)
      <Footer />
    </>
  );
}

export default App;