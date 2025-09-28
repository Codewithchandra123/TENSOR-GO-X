// src/Pages/Home/Home.jsx
import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import DataSection from "./DataSection";
import CallToAction from "./CallToAction";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white via-indigo-50 to-gray-50 text-gray-800 font-sans min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DataSection />
      <CallToAction />
    </div>
  );
};

export default Home;
