import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight, Star } from 'lucide-react';
import { personalData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-28 bg-[#050510] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-800/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

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

              <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight leading-[0.9] text-white mb-6">
                WORK<br /><span className="text-gradient">HISTORY</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                5 years of crafting user-centric digital products from startups to enterprise-level design systems.
              </p>

              <div className="p-5 glass rounded-2xl border-violet-500/20 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Star size={16} className="text-violet-400 animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="text-violet-400 font-bold text-sm">Current Role</span>
                </div>
                <div className="text-white font-black text-lg font-outfit">Senior UI/UX Designer</div>
                <div className="text-white/60 font-semibold text-sm font-outfit mt-0.5">& Design Lead</div>
                <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest font-bold">Appic Softwares · 2021–Present</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {personalData.stats.map(stat => (
                  <div key={stat.label} className="p-3 glass rounded-xl text-center">
                    <div className="text-2xl font-black text-white font-outfit">{stat.value}</div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Timeline Cards */}
          <div className="lg:col-span-8 space-y-6">
            {personalData.experience.map((exp, idx) => (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-6 md:p-8 glass rounded-2xl hover:border-violet-500/30 transition-all duration-500"
              >
                {/* Year watermark */}
                <div className="absolute top-4 right-6 text-5xl md:text-6xl font-black text-white/[0.03] font-outfit pointer-events-none select-none">
                  {exp.period.split('-')[0].trim()}
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-600/20 text-violet-300 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-violet-500/30">
                        <Briefcase size={10} />
                        {exp.company}
                      </div>
                      {exp.type && (
                        <div className={`inline-flex px-2.5 py-1 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest ${exp.type === 'Full-Time'
                            ? 'bg-green-500/15 text-green-400 border border-green-500/30'
                            : exp.type === 'Freelance'
                              ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          }`}>
                          {exp.type}
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg md:text-2xl font-black font-outfit text-white group-hover:text-violet-300 transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="px-3 py-1 glass rounded-lg text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-2">
                  {exp.description.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item">
                      <div className="w-5 h-5 rounded-full bg-violet-500/15 flex items-center justify-center text-violet-400 shrink-0 mt-0.5 group-hover/item:bg-violet-600 group-hover/item:text-white transition-all">
                        <ChevronRight size={12} />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
