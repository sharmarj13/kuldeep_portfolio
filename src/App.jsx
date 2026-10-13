import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionCard from './components/SectionCard';
import SmoothScroll from './components/SmoothScroll';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Refs for tracking section scroll positions
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <SmoothScroll>
        <main className="relative">
          <div ref={heroRef} className="relative">
            <SectionCard index={0} nextRef={skillsRef}>
              <section id="about">
                <Hero />
              </section>
            </SectionCard>
          </div>
          
          <div ref={skillsRef} className="relative">
            <SectionCard index={1} nextRef={experienceRef}>
              <Skills />
            </SectionCard>
          </div>
          
          <div ref={experienceRef} className="relative">
            <SectionCard index={2} nextRef={portfolioRef}>
              <Experience />
            </SectionCard>
          </div>
          
          <div ref={portfolioRef} className="relative">
            <SectionCard index={3} nextRef={contactRef}>
              <Portfolio />
            </SectionCard>
          </div>
          
          <div ref={contactRef} className="relative">
            <SectionCard index={4} nextRef={null}>
              <Contact />
            </SectionCard>
          </div>
        </main>
        
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;

