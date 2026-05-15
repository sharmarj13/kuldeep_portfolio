import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalData } from '../data';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-50 dark:bg-white/5 border border-black/[0.05] dark:border-white/10 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] shadow-sm"
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
            <ExternalLink size={20} aria-hidden="true" className="text-white" />
            <span className="sr-only">View Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Web', 'App'];

  const filteredProjects = filter === 'All'
    ? personalData.projects
    : personalData.projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="portfolio" className="py-12 md:py-20 relative bg-white dark:bg-[#050510] overflow-hidden transition-colors duration-500">

      {/* Background blobs - CSS only, no JS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/5 dark:bg-violet-600/8 rounded-full blur-[120px] pointer-events-none transition-colors" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none transition-colors" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="section-tag">Selected Works</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white">
                MY <span className="text-gradient">PORTFOLIO</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-50 dark:bg-white/5 rounded-2xl self-start lg:self-auto border border-black/[0.05] dark:border-white/10 shadow-sm">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 md:px-8 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_10px_20px_rgba(139,92,246,0.3)] scale-105'
                      : 'text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white hover:bg-white dark:hover:bg-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid simple animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
              className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-10 bg-white/95 dark:bg-[#050510]/98 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project gallery"
                  className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] p-4 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-full transition-all border border-black/[0.08] dark:border-white/20 backdrop-blur-2xl shadow-xl hover:scale-110 active:scale-95"
                >
                  <X size={28} aria-hidden="true" />
                </button>

                <div className="relative group">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-w-[95vw] max-h-[85vh] md:max-h-[90vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-black/[0.05] dark:border-white/5"
                  />

                  {/* Navigation Buttons */}
                  <div className="absolute inset-y-0 -left-2 md:-left-24 flex items-center pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const prevIdx = (selectedProject.index - 1 + filteredProjects.length) % filteredProjects.length;
                        setSelectedProject({ ...filteredProjects[prevIdx], index: prevIdx });
                      }}
                      aria-label="Previous project"
                      className="pointer-events-auto p-4 md:p-5 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-full transition-all border border-black/[0.08] dark:border-white/20 hover:scale-110 backdrop-blur-xl shadow-lg"
                    >
                      <ChevronLeft size={24} aria-hidden="true" className="md:w-8 md:h-8" />
                    </button>
                  </div>

                  <div className="absolute inset-y-0 -right-2 md:-right-24 flex items-center pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextIdx = (selectedProject.index + 1) % filteredProjects.length;
                        setSelectedProject({ ...filteredProjects[nextIdx], index: nextIdx });
                      }}
                      aria-label="Next project"
                      className="pointer-events-auto p-4 md:p-5 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-full transition-all border border-black/[0.08] dark:border-white/20 hover:scale-110 backdrop-blur-xl shadow-lg"
                    >
                      <ChevronRight size={24} aria-hidden="true" className="md:w-8 md:h-8" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project count */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/[0.06] dark:via-white/10 to-transparent" />
          <span className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            {filteredProjects.length} Projects Showcased
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black/[0.06] dark:via-white/10 to-transparent" />
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <a
            href={personalData.contact.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full profile on Behance"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
          >
            <ExternalLink size={18} aria-hidden="true" />
            View Full Behance Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
