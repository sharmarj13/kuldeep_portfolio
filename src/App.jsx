import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

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
      
      <main>
        <section id="about">
          <Hero />
        </section>
        
        <Skills />
        
        <Experience />
        
        <Portfolio />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
