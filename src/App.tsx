import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Header from "./components/Header";
import {LanguageProvider} from "./contexts/LanguageContext";

function App() {
  return (
      <LanguageProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Hero />
          <Features />
          <Benefits />
          <Pricing />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </LanguageProvider>
  );
}

export default App;
