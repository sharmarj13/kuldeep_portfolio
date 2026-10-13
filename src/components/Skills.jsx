import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Code2, Sparkles, Figma, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data';
import Scroll3DWrapper from './Scroll3DWrapper';
import Parallax from './Parallax';

gsap.registerPlugin(ScrollTrigger);

const categoryIcons = {
  "AI Product UX": <Sparkles size={22} className="text-violet-600 dark:text-violet-400" />,
  "Product & UX Design": <Figma size={22} className="text-pink-600 dark:text-pink-400" />,
  "Design Systems & Tools": <Layers size={22} className="text-indigo-600 dark:text-indigo-400" />,
  "Front-End Engineering": <Code2 size={22} className="text-cyan-600 dark:text-cyan-400" />
};

const categoryAccents = {
  "AI Product UX": {
    badgeBg: "from-violet-500/10 to-purple-500/10 border-violet-500/30",
    iconBg: "bg-gradient-to-br from-violet-600 to-purple-600 text-white shadow-violet-500/20",
    tagBorder: "hover:border-violet-500/40 hover:bg-violet-500/5",
    tagDot: "bg-violet-500"
  },
  "Product & UX Design": {
    badgeBg: "from-pink-500/10 to-rose-500/10 border-pink-500/30",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-pink-500/20",
    tagBorder: "hover:border-pink-500/40 hover:bg-pink-500/5",
    tagDot: "bg-pink-500"
  },
  "Design Systems & Tools": {
    badgeBg: "from-indigo-500/10 to-blue-500/10 border-indigo-500/30",
    iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-indigo-500/20",
    tagBorder: "hover:border-indigo-500/40 hover:bg-indigo-500/5",
    tagDot: "bg-indigo-500"
  },
  "Front-End Engineering": {
    badgeBg: "from-cyan-500/10 to-teal-500/10 border-cyan-500/30",
    iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-cyan-500/20",
    tagBorder: "hover:border-cyan-500/40 hover:bg-cyan-500/5",
    tagDot: "bg-cyan-500"
  }
};

const Skills = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
      );
      
      gsap.fromTo(cardsRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)", scrollTrigger: { trigger: headerRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-8 md:py-12 bg-[#fcfcfd] dark:bg-[#050510] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <Parallax speed={-0.3} className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-violet-500/5 dark:bg-violet-800/8 rounded-full blur-[120px] pointer-events-none transition-colors" />
      <Parallax speed={0.4} className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-indigo-500/5 dark:bg-indigo-800/8 rounded-full blur-[120px] pointer-events-none transition-colors" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-6 md:mb-8"
        >
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="section-tag">Core Capabilities</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
            <div>
              <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white">
                EXPERTISE & <span className="text-gradient">CAPABILITIES</span>
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-lg leading-relaxed">
              Bridging strategic product thinking, Figma design systems, AI conversational UX, and hands-on frontend implementation to deliver production-ready digital products.
            </p>
          </div>
        </div>

        {/* Top 4 Quick Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {[
            { icon: <Sparkles className="text-violet-600 dark:text-violet-400" size={20} />, label: 'AI Product UX', desc: 'Agentic & Conversational' },
            { icon: <Figma className="text-pink-600 dark:text-pink-400" size={20} />, label: 'Product & UI/UX', desc: 'Wireframes & Research' },
            { icon: <Layers className="text-indigo-600 dark:text-indigo-400" size={20} />, label: 'Design Systems', desc: 'WCAG & Figma Libraries' },
            { icon: <Code2 className="text-cyan-600 dark:text-cyan-400" size={20} />, label: 'Frontend Stack', desc: 'React, Next.js, HTML5' },
          ].map((f, i) => (
            <Scroll3DWrapper key={i}>
              <div
                ref={el => cardsRef.current[i] = el}
                className="p-4 md:p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-xl h-full"
              >
                <div className="mb-2.5 group-hover:scale-110 transition-transform duration-300">{React.cloneElement(f.icon, { 'aria-hidden': 'true' })}</div>
                <div className="font-extrabold text-slate-900 dark:text-white text-[13px] md:text-sm mb-0.5 tracking-tight">{f.label}</div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest leading-tight">{f.desc}</div>
              </div>
            </Scroll3DWrapper>
          ))}
        </div>

        {/* 4 Categorized Skill Boxes */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {personalData.skillCategories.map((cat, idx) => {
            const accent = categoryAccents[cat.title] || categoryAccents["AI Product UX"];
            return (
              <Scroll3DWrapper key={cat.title}>
                <div
                  className="bg-white dark:bg-white/5 rounded-3xl p-5 md:p-7 border border-slate-200/90 dark:border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-none h-full hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${accent.iconBg} flex items-center justify-center shadow-lg`}>
                      {categoryIcons[cat.title] || <Cpu size={20} />}
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 dark:text-white text-lg font-outfit">{cat.title}</h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] font-bold">
                        {cat.skills.length} Core Competencies
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skillName) => (
                      <div
                        key={skillName}
                        className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 ${accent.tagBorder} hover:scale-105 transition-all duration-200 cursor-default shadow-sm`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${accent.tagDot}`} />
                        <span className="font-bold text-xs md:text-sm text-slate-800 dark:text-slate-100 tracking-tight">{skillName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Scroll3DWrapper>
            );
          })}
        </div>

        {/* Recruiter Deliverables Callout */}
        <div className="mt-6 md:mt-8 p-5 md:p-7 rounded-3xl bg-gradient-to-r from-violet-600/5 via-indigo-600/5 to-purple-600/5 dark:bg-white/[0.03] border border-violet-500/20 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
              Standard Project Deliverables
            </div>
            <div className="text-base md:text-lg font-bold text-slate-900 dark:text-white">
              Figma UI Designs • UX Reasoning • Edge & Error States • Interactive Prototypes • React / Next.js Implementation
            </div>
          </div>
          <a
            href="/images/latest_kuldeep_cv.pdf"
            download="latest_kuldeep_cv.pdf"
            className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-all whitespace-nowrap shadow-md"
          >
            Review in Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
