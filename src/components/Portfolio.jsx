import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalData } from '../data';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
             <ExternalLink size={20} className="text-white" />
           </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Web', 'App', 'UI/UX', 'Design'];

  const filteredProjects = filter === 'All'
    ? personalData.projects
    : personalData.projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="portfolio" className="py-28 relative bg-[#050510] overflow-hidden">

      {/* Background blobs - CSS only, no JS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-screen-xl">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="section-tag">Selected Works</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-white">
                MY <span className="text-gradient">PORTFOLIO</span>
              </h2>

            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-2 glass rounded-2xl self-start lg:self-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    filter === cat
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] scale-105'
                      : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Column Grid — no GSAP, simple CSS animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.image + filter}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.4) }}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject({ ...project, index: idx })} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Gallery Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10 bg-[#050510]/98 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Fixed to viewport corner for safety */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/20 backdrop-blur-2xl shadow-xl hover:scale-110 active:scale-95"
                >
                  <X size={28} />
                </button>

                <div className="relative group">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-[95vw] max-h-[85vh] md:max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
                  />
                  
                  {/* Navigation Buttons */}
                  <div className="absolute inset-y-0 -left-4 md:-left-24 flex items-center pointer-events-none">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevIdx = (selectedProject.index - 1 + filteredProjects.length) % filteredProjects.length;
                        setSelectedProject({ ...filteredProjects[prevIdx], index: prevIdx });
                      }}
                      className="pointer-events-auto p-4 md:p-5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 hover:scale-110 backdrop-blur-xl"
                    >
                      <ChevronLeft size={32} />
                    </button>
                  </div>

                  <div className="absolute inset-y-0 -right-4 md:-right-24 flex items-center pointer-events-none">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIdx = (selectedProject.index + 1) % filteredProjects.length;
                        setSelectedProject({ ...filteredProjects[nextIdx], index: nextIdx });
                      }}
                      className="pointer-events-auto p-4 md:p-5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 hover:scale-110 backdrop-blur-xl"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project count */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            {filteredProjects.length} Projects
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={personalData.contact.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_50px_rgba(139,92,246,0.45)] hover:scale-105 transition-all duration-300"
          >
            <ExternalLink size={18} />
            View Full Behance Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
