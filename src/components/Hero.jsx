import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Star, Zap, Award, Users } from 'lucide-react';
import { personalData } from '../data';

/* ── Marquee ticker items ── */
const tickerItems = [
  '✦ UI/UX Design', '✦ Figma Expert', '✦ Web Design', '✦ Mobile App UI',
  '✦ Design Systems', '✦ Wireframing', '✦ Prototyping', '✦ Adobe XD',
  '✦ User Research', '✦ React Design', '✦ Brand Identity', '✦ Interaction Design',
];

const Ticker = () => (
  <div className="overflow-hidden py-3 border-y border-white/10 bg-white/[0.02]">
    <motion.div
      className="flex gap-10 whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      {[...tickerItems, ...tickerItems].map((item, i) => (
        <span key={i} className="text-[11px] font-bold uppercase tracking-widest text-slate-500 flex-shrink-0">
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
    className="absolute hidden xl:flex items-center gap-2 px-4 py-2.5 bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl text-white text-xs font-bold shadow-[0_8px_32px_rgba(0,0,0,0.4)] cursor-default"
    style={style}
  >
    <span className="text-violet-400">{icon}</span>
    {label}
  </motion.div>
);

const Hero = () => {
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const cursorGlowRef = useRef(null);

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
        className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050510]"
      >
        {/* ── Cursor follow glow ── */}
        <div
          ref={cursorGlowRef}
          className="absolute pointer-events-none w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            opacity: 0,
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          }}
        />

        {/* ── Background blobs ── */}
        <div ref={blobRef1} className="absolute top-[-5%] left-[-8%] w-[750px] h-[750px] bg-violet-700/18 rounded-full blur-[140px] pointer-events-none" />
        <div ref={blobRef2} className="absolute bottom-[-5%] right-[-8%] w-[650px] h-[650px] bg-indigo-700/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-fuchsia-800/10 rounded-full blur-[100px] pointer-events-none" />

        {/* ── Grid dots pattern ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* ── Floating skill chips ── */}
        <FloatingChip label="Figma Expert" icon={<Star size={12} />} delay={1.2} style={{ top: '22%', left: '5%' }} />
        <FloatingChip label="UI/UX Design" icon={<Zap size={12} />} delay={1.4} style={{ top: '38%', left: '3%' }} />
        <FloatingChip label="5+ Years Exp." icon={<Award size={12} />} delay={1.6} style={{ top: '54%', left: '6%' }} />
        <FloatingChip label="40+ Clients" icon={<Users size={12} />} delay={1.8} style={{ top: '28%', right: '4%' }} />
        <FloatingChip label="Design Systems" icon={<Star size={12} />} delay={2.0} style={{ top: '46%', right: '3%' }} />
        <FloatingChip label="Prototyping" icon={<Zap size={12} />} delay={2.2} style={{ top: '62%', right: '5%' }} />

        {/* ── Main Content ── */}
        <div className="container mx-auto px-6 max-w-screen-xl relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-10 hover:bg-white/10 transition-all cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-slate-300">
                Open to Work · Senior UI/UX Designer · 2026
              </span>
            </motion.div>

            {/* ── Big Title ── */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="font-black font-outfit tracking-tighter leading-[0.82] text-white"
                style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
              >
                I DESIGN
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-black font-outfit tracking-tighter leading-[0.82]"
                style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #60a5fa 70%, #f472b6 100%)' }}
                >
                  DIGITAL
                </span>
              </motion.div>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-black font-outfit tracking-tighter leading-[0.82] text-white"
                style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
              >
                MAGIC.
              </motion.h1>
            </div>

            {/* ── Description + Name ── */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Hi, I'm{' '}
              <span className="text-white font-bold">{personalData.name}</span>{' '}
              — a <span className="text-violet-400 font-semibold">Senior UI/UX Designer</span> from India.
              I craft intuitive, beautiful digital products that users love — from wireframes and prototypes
              to pixel-perfect interfaces and scalable design systems.
            </motion.p>

            {/* ── CTA Buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-20"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_40px_rgba(139,92,246,0.4),0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
              >
                View My Work
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 glass text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/12 hover:border-violet-500/40 transition-all duration-300"
              >
                <Download size={16} className="text-violet-400" />
                Hire Me
              </a>
            </motion.div>

            {/* ── Stats row ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-flex flex-wrap items-center justify-center gap-0 glass rounded-2xl overflow-hidden divide-x divide-white/10"
            >
              {personalData.stats.map((stat) => (
                <div key={stat.label} className="px-8 py-5 text-center hover:bg-white/5 transition-colors">
                  <div
                    className="text-2xl md:text-3xl font-black font-outfit bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(135deg, #a78bfa, #60a5fa)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-white/15 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-gradient-to-b from-violet-400 to-indigo-400 rounded-full"
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
