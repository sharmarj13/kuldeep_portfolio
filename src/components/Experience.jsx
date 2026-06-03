import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, Star } from 'lucide-react';
import { personalData } from '../data';
import Scroll3DWrapper from './Scroll3DWrapper';

const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-20 bg-white dark:bg-[#050510] relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 dark:bg-indigo-800/8 rounded-full blur-[120px] pointer-events-none transition-colors duration-700" />

      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Left - Sticky Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
                <span className="section-tag">Career Journey</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white mb-6">
                WORK<br /><span className="text-gradient">HISTORY</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                5 years of crafting user-centric digital products from startups to enterprise-level design systems.
              </p>

              <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-black/[0.05] dark:border-violet-500/20 mb-4 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Star size={16} aria-hidden="true" className="text-violet-600 dark:text-violet-400 animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="text-violet-600 dark:text-violet-400 font-bold text-sm uppercase tracking-widest">Current Role</span>
                </div>
                <div className="text-slate-900 dark:text-white font-black text-lg font-outfit">Senior UI/UX Designer</div>
                <div className="text-slate-600 dark:text-white/60 font-semibold text-sm font-outfit mt-0.5">& Design Lead</div>
                <p className="text-slate-500 dark:text-slate-500 text-[10px] mt-2 uppercase tracking-widest font-black opacity-80">Appic Softwares | 2021–Present</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {personalData.stats.map(stat => (
                  <div key={stat.label} className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl text-center border border-black/[0.05] dark:border-white/10 shadow-sm">
                    <div className="text-2xl font-black text-slate-900 dark:text-white font-outfit">{stat.value}</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Timeline Cards */}
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            {personalData.experience.map((exp, idx) => (
              <Scroll3DWrapper
                key={exp.company + idx}
                className="group relative p-6 md:p-8 bg-slate-50 dark:bg-white/5 border border-black/[0.05] dark:border-white/10 hover:border-violet-500/30 transition-all duration-500 shadow-sm hover:shadow-xl rounded-2xl"
              >
                {/* Year watermark */}
                <div className="absolute top-4 right-6 text-5xl md:text-7xl font-black text-slate-100 dark:text-white/[0.02] font-outfit pointer-events-none select-none transition-colors">
                  {exp.period.split('-')[0].trim()}
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-600/10 dark:bg-violet-600/20 text-violet-600 dark:text-violet-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-violet-500/10 dark:border-violet-500/30">
                        <Briefcase size={10} />
                        {exp.company}
                      </div>
                      {exp.type && (
                        <div className={`inline-flex px-2.5 py-1 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${exp.type === 'Full-Time'
                            ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/10'
                            : exp.type === 'Freelance'
                              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/10'
                              : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10'
                          }`}>
                          {exp.type}
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg md:text-2xl font-black font-outfit text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-white dark:bg-white/5 rounded-lg text-[9px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest whitespace-nowrap self-start border border-black/[0.05] dark:border-white/10 shadow-sm">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-2 relative z-10">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-all group/item">
                      <div className="w-5 h-5 rounded-full bg-violet-500/10 dark:bg-violet-500/15 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0 mt-0.5 group-hover/item:bg-violet-600 group-hover/item:text-white transition-all">
                        <ChevronRight size={12} aria-hidden="true" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-slate-300 transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </Scroll3DWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
