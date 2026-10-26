import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import PageTransition from './components/layout/PageTransition';
import IntroAnimation from './components/layout/Intro';

// Pages & Components
import Home from './pages/Home';
import About from './components/home/About';
import OurWorks from './components/home/Works';
import Results from './components/home/Results';
import Contact from './components/home/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      {/* Intro Animation Screen */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <div className="w-full min-h-screen bg-white text-[#141414] font-sans antialiased overflow-x-hidden selection:bg-[#c8ff3d] selection:text-black">
        
        {/* Global Fixed Navbar */}
        <Navbar />

        {/* Route Pages */}
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/works" element={<PageTransition><OurWorks /></PageTransition>} />
          <Route path="/results" element={<PageTransition><Results /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;