import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Download, Star, Zap, Award, Users, Mail } from 'lucide-react';
import { personalData } from '../data';

gsap.registerPlugin(ScrollTrigger);

/* ── Marquee ticker items ── */
const tickerItems = [
  '✦ UI/UX Design', '✦ Figma Expert', '✦ Web Design', '✦ Mobile App UI',
  '✦ Design Systems', '✦ Wireframing', '✦ Prototyping', '✦ Adobe XD',
  '✦ User Research', '✦ React Design', '✦ Brand Identity', '✦ Interaction Design',
];

const Ticker = () => (
  <div className="overflow-hidden py-4 border-y border-black/[0.03] dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
    <motion.div
      className="flex gap-10 whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span key={i} className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex-shrink-0">
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

/* ── Floating skill chip ── */
const FloatingChip = ({ label, icon, style, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute hidden xl:flex items-center gap-2 px-4 py-2.5 bg-white/90 dark:bg-white/5 backdrop-blur-2xl border border-black/[0.08] dark:border-white/10 rounded-2xl text-slate-800 dark:text-white text-[11px] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] cursor-default transition-all duration-500"
    style={style}
  >
    <span className="text-violet-600 dark:text-violet-400">{icon}</span>
    {label}
  </motion.div>
);

const Hero = () => {
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const cursorGlowRef = useRef(null);
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo([title1Ref.current, title2Ref.current, title3Ref.current], 
        { y: 150, opacity: 0, rotateZ: 4 }, 
        { y: 0, opacity: 1, rotateZ: 0, duration: 1.4, stagger: 0.15, ease: "power4.out", delay: 0.2 }
      );
      
      gsap.to(blobRef1.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(blobRef2.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* ── Blob float ── */
  useEffect(() => {
    let rafId;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const t = (ts - start) / 1000;
      if (blobRef1.current) blobRef1.current.style.transform = `translate(${Math.sin(t * 0.4) * 20}px, ${Math.cos(t * 0.3) * 25}px)`;
      if (blobRef2.current) blobRef2.current.style.transform = `translate(${Math.cos(t * 0.35) * 18}px, ${Math.sin(t * 0.45) * 22}px)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* ── Cursor glow ── */
  useEffect(() => {
    const section = document.getElementById('hero-section');
    if (!section || !cursorGlowRef.current) return;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursorGlowRef.current.style.left = `${x}px`;
      cursorGlowRef.current.style.top = `${y}px`;
      cursorGlowRef.current.style.opacity = '1';
    };
    const onLeave = () => { cursorGlowRef.current.style.opacity = '0'; };
    section.addEventListener('mousemove', onMove, { passive: true });
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <section
        id="hero-section"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#050510] transition-colors duration-500"
      >
        {/* ── Cursor follow glow ── */}
        <div
          ref={cursorGlowRef}
          className="absolute pointer-events-none w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            opacity: 0,
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          }}
        />

        {/* ── Background blobs ── */}
        <div ref={blobRef1} className="absolute top-[-5%] left-[-8%] w-[750px] h-[750px] bg-violet-600/10 dark:bg-violet-700/15 rounded-full blur-[140px] pointer-events-none transition-colors duration-700" />
        <div ref={blobRef2} className="absolute bottom-[-5%] right-[-8%] w-[650px] h-[650px] bg-indigo-600/8 dark:bg-indigo-700/12 rounded-full blur-[130px] pointer-events-none transition-colors duration-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-fuchsia-500/5 dark:bg-fuchsia-800/10 rounded-full blur-[100px] pointer-events-none" />

        {/* ── Grid dots pattern ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* ── Floating skill chips ── */}
        <FloatingChip label="Figma Expert" icon={<Star size={12} />} delay={1.2} style={{ top: '22%', left: '5%' }} />
        <FloatingChip label="UI/UX Designer" icon={<Zap size={12} />} delay={1.4} style={{ top: '38%', left: '3%' }} />
        <FloatingChip label="5+ Years Exp." icon={<Award size={12} />} delay={1.6} style={{ top: '54%', left: '6%' }} />
        <FloatingChip label="40+ Clients" icon={<Users size={12} />} delay={1.8} style={{ top: '28%', right: '4%' }} />
        <FloatingChip label="Design Systems" icon={<Star size={12} />} delay={2.0} style={{ top: '46%', right: '3%' }} />
        <FloatingChip label="Web Designer" icon={<Zap size={12} />} delay={2.2} style={{ top: '62%', right: '5%' }} />

        {/* ── Main Content ── */}
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10 pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-slate-50 dark:bg-white/5 border border-black/[0.06] dark:border-white/10 mb-8 md:mb-10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all cursor-default shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.45em] text-slate-600 dark:text-slate-300">
                Open to Work | Figma Designer | 2026
              </span>
            </motion.div>

            {/* ── Big Title ── */}
            <div className="overflow-hidden mb-4 md:mb-6">
              <h1
                ref={title1Ref}
                className="font-black font-outfit tracking-tighter leading-[0.82] text-slate-900 dark:text-white"
                style={{ fontSize: 'clamp(3.5rem, 15vw, 11rem)', transformOrigin: 'left center' }}
              >
                I DESIGN
              </h1>
            </div>
            <div className="overflow-hidden mb-3 md:mb-4">
              <div
                ref={title2Ref}
                className="font-black font-outfit tracking-tighter leading-[0.82]"
                style={{ fontSize: 'clamp(3.5rem, 15vw, 11rem)', transformOrigin: 'left center' }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #60a5fa 70%, #f472b6 100%)' }}
                >
                  DIGITAL
                </span>
              </div>
            </div>
            <div className="overflow-hidden mb-10 md:mb-12">
              <h1
                ref={title3Ref}
                className="font-black font-outfit tracking-tighter leading-[0.82] text-slate-900 dark:text-white"
                style={{ fontSize: 'clamp(3.5rem, 15vw, 11rem)', transformOrigin: 'left center' }}
              >
                MAGIC.
              </h1>
            </div>

            {/* ── Description + Name ── */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-sm md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 px-4 md:px-0"
            >
              Hi, I'm{' '}
              <span className="text-slate-900 dark:text-white font-bold">{personalData.name}</span>{' '}
              a professional <span className="text-violet-600 dark:text-violet-400 font-semibold">Figma Designer</span> and <span className="text-violet-600 dark:text-violet-400 font-semibold">Senior UI/UX Designer</span> from India.
              I craft intuitive, beautiful digital products and user experiences from wireframes and prototypes
              to pixel-perfect interfaces and scalable design systems.
            </motion.p>

            {/* ── CTA Buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 md:mb-20"
            >
              <a
                href="/images/Kuldeep_Sharma.pdf"
                download="Kuldeep_Sharma.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Download CV"
                className="group inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-[0_10px_30px_rgba(139,92,246,0.25)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.4)] hover:scale-105 transition-all duration-300"
              >
                Download CV
                <Download size={16} aria-hidden="true" className="group-hover:translate-y-0.5 transition-transform animate-bounce" />
              </a>
              <a
                href="#portfolio"
                aria-label="View Portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-slate-100 dark:hover:bg-white/10 border border-black/[0.08] dark:border-violet-500/40 transition-all duration-300"
              >
                View Portfolio
                <ArrowUpRight size={16} aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* ── Stats row ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-2 md:inline-flex items-center justify-center bg-slate-50/80 dark:bg-[#050510]/50 rounded-2xl md:rounded-2xl overflow-hidden border border-black/[0.05] dark:border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.02)]"
            >
              {personalData.stats.map((stat, idx) => (
                <div key={stat.label} className={`px-4 py-4 md:px-8 md:py-5 text-center hover:bg-black/[0.02] dark:hover:bg-white/5 transition-colors ${idx !== personalData.stats.length - 1 ? 'border-r border-black/[0.05] dark:border-white/10' : ''}`}>
                  <div
                    className="text-xl md:text-3xl font-black font-outfit bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #60a5fa)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[8px] md:text-[9px] text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest mt-1 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 rounded-full border-2 border-violet-500/20 dark:border-violet-400/20 flex justify-center pt-2 shadow-glow" aria-hidden="true">
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]"
            />
          </div>
        </div>
      </section>

      {/* ── Marquee ticker below hero ── */}
      <Ticker />
    </>
  );
};

export default Hero;
