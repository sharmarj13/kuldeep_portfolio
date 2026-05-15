import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-[#050510]/85 backdrop-blur-2xl px-6 py-3 rounded-2xl shadow-xl border border-black/5 dark:border-white/10' : 'border-transparent'}`}>

            {/* Logo */}
            <div className="text-xl md:text-2xl font-black font-outfit tracking-tight text-slate-900 dark:text-white">
              KULDEEP<span className="text-violet-500">SHARMA</span>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-black/10 dark:border-white/10"
              >
                {theme === 'dark'
                  ? <Sun size={16} aria-hidden="true" className="text-amber-400" />
                  : <Moon size={16} aria-hidden="true" className="text-indigo-600" />}
              </button>
              <a
                href="#contact"
                aria-label="Hire Me"
                className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 transition-all"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-500 dark:text-slate-400 border border-black/10 dark:border-white/10"
              >
                {theme === 'dark' ? <Sun size={16} aria-hidden="true" className="text-amber-400" /> : <Moon size={16} aria-hidden="true" className="text-indigo-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-900 dark:text-white border border-black/10 dark:border-white/10"
              >
                {mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[110] bg-white dark:bg-[#050510]/98 backdrop-blur-xl flex flex-col p-8 lg:hidden"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="text-2xl font-black font-outfit text-slate-900 dark:text-white">KULDEEP<span className="text-violet-500">.</span></div>
                <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 rounded-full glass flex items-center justify-center border border-black/10 dark:border-white/10">
                  <X size={20} className="text-slate-900 dark:text-white" />
                </button>
              </div>
              <ul className="space-y-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-label={`Navigate to ${link.name}`}
                      className="text-4xl font-black font-outfit uppercase tracking-tight text-slate-900 dark:text-white hover:text-violet-500 transition-colors inline-flex items-center gap-4 group"
                    >
                      {link.name}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all" size={28} aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center mt-8 block">
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
