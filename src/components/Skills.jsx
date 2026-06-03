import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Code2, Box, Figma, Layers, Cpu } from 'lucide-react';
import { personalData } from '../data';
import Scroll3DWrapper from './Scroll3DWrapper';

gsap.registerPlugin(ScrollTrigger);

const getIcon = (category) => {
  switch (category) {
    case 'Design': return <Figma size={20} />;
    case 'Development': return <Code2 size={20} />;
    default: return <Box size={20} />;
  }
};

const Skills = () => {
  const designSkills = personalData.skills.filter(s => s.category === 'Design');
  const devSkills = personalData.skills.filter(s => s.category === 'Development');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const designBoxRef = useRef(null);
  const devBoxRef = useRef(null);

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

      gsap.fromTo(designBoxRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: designBoxRef.current, start: "top 85%" } }
      );
      gsap.fromTo(devBoxRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: devBoxRef.current, start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12 md:py-20 bg-white dark:bg-[#050510] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-600/5 dark:bg-violet-800/8 rounded-full blur-[100px] pointer-events-none transition-colors" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/5 dark:bg-indigo-800/8 rounded-full blur-[100px] pointer-events-none transition-colors" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="section-tag">Technical Skills</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white">
              MY <span className="text-gradient">EXPERTISE</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
              As a professional Figma Designer and Web Designer, I bridge design artistry with frontend engineering to craft pixel-perfect, user-centric digital experiences.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {[
            { icon: <Figma className="text-pink-600 dark:text-pink-400" size={20} />, label: 'UI Design', desc: 'Figma / Adobe XD' },
            { icon: <Code2 className="text-indigo-600 dark:text-indigo-400" size={20} />, label: 'Frontend Dev', desc: 'React / Bootstrap' },
            { icon: <Layers className="text-purple-600 dark:text-purple-400" size={20} />, label: 'UX Strategy', desc: 'Wireframes / Flows' },
            { icon: <Cpu className="text-cyan-600 dark:text-cyan-400" size={20} />, label: 'Design Lead', desc: '5+ Years Experience' },
          ].map((f, i) => (
            <Scroll3DWrapper key={i}>
              <div
                ref={el => cardsRef.current[i] = el}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-black/[0.05] dark:border-white/10 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-xl h-full"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">{React.cloneElement(f.icon, { 'aria-hidden': 'true' })}</div>
                <div className="font-bold text-slate-900 dark:text-white text-[13px] md:text-sm mb-0.5 tracking-tight">{f.label}</div>
                <div className="text-[9px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest leading-tight">{f.desc}</div>
              </div>
            </Scroll3DWrapper>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Design Skills */}
          <Scroll3DWrapper>
            <div
              ref={designBoxRef}
              className="bg-slate-50/50 dark:bg-white/5 rounded-3xl p-7 md:p-8 border border-black/[0.05] dark:border-white/10 shadow-sm h-full"
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-pink-500/20">
                  <Palette size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white text-base font-outfit">Design Tools</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] font-bold">{designSkills.length} Specialized Skills</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {designSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/[0.05] dark:border-white/10 hover:border-pink-500/30 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                  >
                    <span className="text-pink-600 dark:text-pink-400">{React.cloneElement(getIcon(skill.category), { 'aria-hidden': 'true' })}</span>
                    <span className="font-bold text-sm text-slate-700 dark:text-white tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Scroll3DWrapper>

          {/* Dev Skills */}
          <Scroll3DWrapper>
            <div
              ref={devBoxRef}
              className="bg-slate-50/50 dark:bg-white/5 rounded-3xl p-7 md:p-8 border border-black/[0.05] dark:border-white/10 shadow-sm h-full"
            >
              <div className="flex items-center gap-4 mb-7">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Code2 size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white text-base font-outfit">Development Stack</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] font-bold">{devSkills.length} Core Technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {devSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-black/[0.05] dark:border-white/10 hover:border-indigo-500/30 hover:scale-105 transition-all duration-200 cursor-default shadow-sm"
                  >
                    <span className="text-indigo-600 dark:text-indigo-400">{React.cloneElement(getIcon(skill.category), { 'aria-hidden': 'true' })}</span>
                    <span className="font-bold text-sm text-slate-700 dark:text-white tracking-tight">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Scroll3DWrapper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
