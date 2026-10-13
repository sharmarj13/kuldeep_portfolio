import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Layers, X, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data';
import Scroll3DWrapper from './Scroll3DWrapper';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_40px_rgba(139,92,246,0.2)] shadow-sm flex flex-col hover:-translate-y-1.5"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop";
          }}
        />

        {/* Hover Content Overlay - Shows rich project info clearly on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4 z-10 backdrop-blur-[2px]">
          <div className="flex justify-end">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/20 group-hover:scale-110 transition-transform">
              <ExternalLink size={16} aria-hidden="true" />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-1 mb-1.5">
              {project.tags.map((t, idx) => (
                <span key={idx} className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-violet-600/90 text-white shadow-sm">
                  {t}
                </span>
              ))}
            </div>
            <h4 className="font-black font-outfit text-sm md:text-base text-white tracking-tight leading-snug drop-shadow-md">
              {project.title}
            </h4>
            <div className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold text-violet-300 uppercase tracking-widest">
              <span>Click to view full preview</span>
              <ArrowUpRight size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Card Info Bottom Bar */}
      <div className="p-3.5 bg-white dark:bg-[#070714] flex items-center justify-between gap-2 border-t border-slate-100 dark:border-white/5">
        <div className="min-w-0 flex-1">
          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 dark:text-white truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {project.title}
          </h4>
        </div>
        <div className="flex gap-1 flex-shrink-0">
          {project.tags.slice(0, 2).map((t, i) => (
            <span key={i} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Web', 'Product', 'App', 'AI Design'];
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );
      gsap.to(bg1Ref.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true }
      });
      gsap.to(bg2Ref.current, {
        yPercent: -40,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const filteredProjects = filter === 'All'
    ? personalData.projects
    : filter === 'AI Design'
      ? []
      : personalData.projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="portfolio" ref={sectionRef} className="py-8 md:py-12 relative bg-[#fcfcfd] dark:bg-[#050510] overflow-hidden transition-colors duration-500">

      {/* Background blobs */}
      <div ref={bg1Ref} className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-600/8 rounded-full blur-[120px] pointer-events-none transition-colors" />
      <div ref={bg2Ref} className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none transition-colors" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        {/* Header */}
        <div ref={headerRef} className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="section-tag">Featured Works & Case Studies</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 md:gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white">
                CURATED <span className="text-gradient">PORTFOLIO</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl self-start lg:self-auto border border-slate-200/90 dark:border-white/10 shadow-sm">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 md:px-6 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_8px_20px_rgba(139,92,246,0.3)] scale-105'
                      : 'text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white hover:bg-white dark:hover:bg-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* If AI Design filter selected, show rich AI Project Cards */}
        {filter === 'AI Design' && (
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-6 md:mb-8">
            {personalData.aiProjects.map((prj, i) => (
              <div
                key={prj.title}
                className="p-5 md:p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-violet-600/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                      {prj.badge}
                    </span>
                    <Sparkles size={16} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-black font-outfit text-slate-900 dark:text-white mb-1">
                    {prj.title}
                  </h3>
                  <div className="text-xs font-bold text-violet-600 dark:text-violet-400 mb-4">
                    {prj.tagline}
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {prj.desc}
                  </p>
                </div>
                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {prj.tags.map((t, ti) => (
                      <span key={ti} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/images/latest_kuldeep_cv.pdf"
                    download="latest_kuldeep_cv.pdf"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                  >
                    View Project Breakdown in CV <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regular Projects Grid */}
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
                <Scroll3DWrapper>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject({ ...project, index: idx })}
                  />
                </Scroll3DWrapper>
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
        <div className="mt-8 md:mt-10 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/[0.06] dark:via-white/10 to-transparent" />
          <span className="text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            {filteredProjects.length} Projects Showcased
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-black/[0.06] dark:via-white/10 to-transparent" />
        </div>

        {/* CTA */}
        <div className="mt-6 md:mt-8 text-center">
          <a
            href={personalData.contact.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View full profile on Behance"
            className="inline-flex items-center gap-3 px-8 py-3.5 md:px-10 md:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
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
