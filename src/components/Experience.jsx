import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, Star, GraduationCap, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data';
import Scroll3DWrapper from './Scroll3DWrapper';
import Parallax from './Parallax';

const Experience = () => {
  return (
    <section id="experience" className="py-8 md:py-12 bg-[#fcfcfd] dark:bg-[#050510] relative overflow-hidden transition-colors duration-500">
      <Parallax speed={0.3} className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-800/8 rounded-full blur-[120px] pointer-events-none transition-colors duration-700" />

      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left - Sticky Header & Candidate Highlights */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-24 space-y-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                  <span className="section-tag">Career Journey</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white mb-3">
                  WORK<br /><span className="text-gradient">HISTORY</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  5+ years of designing user-centric web applications, enterprise products, and AI workflows from startups to production systems.
                </p>
              </div>

              {/* Current Role Card */}
              <div className="p-4 md:p-5 bg-white dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-violet-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} aria-hidden="true" className="text-violet-600 dark:text-violet-400" />
                  <span className="text-violet-600 dark:text-violet-400 font-extrabold text-xs uppercase tracking-widest">Current Position</span>
                </div>
                <div className="text-slate-900 dark:text-white font-black text-lg font-outfit">Senior UI/UX Designer</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold text-sm font-outfit mt-0.5">& Product Designer</div>
                <p className="text-slate-500 dark:text-slate-400 text-[10px] mt-2 uppercase tracking-widest font-black">Appic Softwares • Jun 2021 – Present</p>
              </div>

              {/* Relocation Readiness Banner */}
              <div className="p-4 md:p-5 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent rounded-2xl border border-emerald-500/20 shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin size={16} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-300 font-black text-xs uppercase tracking-widest">
                    Open to Relocation
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed font-medium">
                  Zero location constraints. 100% ready to relocate to any city across India or globally for full-time, hybrid, or on-site roles.
                </p>
              </div>

              {/* Education Card */}
              <div className="p-4 md:p-5 bg-white dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none">
                <div className="flex items-center gap-2 mb-2.5">
                  <GraduationCap size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xs uppercase tracking-widest">Education</span>
                </div>
                {personalData.education.map((edu, i) => (
                  <div key={i} className={i !== 0 ? "mt-2.5 pt-2.5 border-t border-slate-100 dark:border-white/5" : ""}>
                    <div className="text-sm font-black text-slate-900 dark:text-white font-outfit">{edu.degree}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{edu.institution}</div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest mt-0.5">{edu.year}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Work Timeline & Featured AI Projects */}
          <div className="lg:col-span-8 space-y-5">

            {/* AI Product Projects Spotlight Banner */}
            <div className="p-5 md:p-7 rounded-3xl bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-purple-600/10 dark:bg-white/5 border border-violet-500/20 shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/15 text-violet-700 dark:text-violet-300 text-[10px] font-bold uppercase tracking-widest border border-violet-500/20">
                  <Sparkles size={12} />
                  Selected AI Product Projects
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  CV Portfolio Work
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                Hands-on AI product design focused on conversational UX, agentic workflows, multi-step supervision, and trustworthy human-AI interaction.
              </p>

              <div className="grid sm:grid-cols-3 gap-3.5">
                {personalData.aiProjects.map((aiPrj) => (
                  <div
                    key={aiPrj.title}
                    className="p-4 bg-white dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-white/10 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-1.5">
                        {aiPrj.badge}
                      </span>
                      <h4 className="text-sm font-black font-outfit text-slate-900 dark:text-white mb-2 leading-tight">
                        {aiPrj.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {aiPrj.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-100 dark:border-white/5">
                      {aiPrj.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Timeline */}
            <div className="space-y-4">
              {personalData.experience.map((exp, idx) => (
                <Scroll3DWrapper
                  key={exp.company + idx}
                  className="group relative p-5 md:p-7 bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-violet-500/40 transition-all duration-500 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-xl rounded-2xl"
                >
                  {/* Year watermark */}
                  <Parallax speed={-0.25} className="absolute top-4 right-6 pointer-events-none select-none">
                    <div className="text-5xl md:text-7xl font-black text-slate-100 dark:text-white/[0.02] font-outfit transition-colors">
                      {exp.period.split('-')[0].trim()}
                    </div>
                  </Parallax>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div className="flex-1 min-w-0 relative z-10">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-600/10 dark:bg-violet-600/20 text-violet-700 dark:text-violet-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-violet-500/10 dark:border-violet-500/30">
                          <Briefcase size={10} />
                          {exp.company}
                        </div>
                        {exp.type && (
                          <div className={`inline-flex px-2.5 py-1 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${exp.type === 'Full-Time'
                              ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20'
                              : exp.type === 'Freelance'
                                ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20'
                                : 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20'
                            }`}>
                            {exp.type}
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg md:text-2xl font-black font-outfit text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="px-3.5 py-1 bg-slate-50 dark:bg-white/5 rounded-lg text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest whitespace-nowrap self-start border border-slate-200/80 dark:border-white/10 shadow-sm">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-2 relative z-10">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-100/70 dark:hover:bg-white/10 transition-all group/item">
                        <div className="w-5 h-5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0 mt-0.5 group-hover/item:bg-violet-600 group-hover/item:text-white transition-all">
                          <ChevronRight size={12} aria-hidden="true" />
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed group-hover/item:text-slate-950 dark:group-hover/item:text-white transition-colors">{item}</p>
                      </div>
                    ))}
                  </div>
                </Scroll3DWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
