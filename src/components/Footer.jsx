import React from 'react';
import { ArrowUpRight, Heart, Figma, Monitor, Smartphone, Layers } from 'lucide-react';
import { personalData } from '../data';
import Scroll3DWrapper from './Scroll3DWrapper';

const Footer = () => {
  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'LinkedIn', href: personalData.contact.linkedin },
    { name: 'Behance', href: personalData.contact.behance },
    { name: 'Portfolio', href: personalData.contact.portfolio },
  ];

  const services = [
    { icon: <Figma size={14} />, label: 'AI Product UX' },
    { icon: <Monitor size={14} />, label: 'UI/UX & Web Design' },
    { icon: <Smartphone size={14} />, label: 'Mobile App Design' },
    { icon: <Layers size={14} />, label: 'Design Systems' },
  ];

  return (
    <footer className="bg-white dark:bg-[#030308] text-slate-900 dark:text-white pt-10 md:pt-14 pb-8 md:pb-10 relative overflow-hidden border-t border-slate-200/80 dark:border-white/5 transition-colors duration-500">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        {/* Main Content */}
        <Scroll3DWrapper>
          <div className="grid lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="text-3xl md:text-4xl font-black font-outfit tracking-tight text-slate-900 dark:text-white mb-4">
                KULDEEP<span className="text-violet-600 dark:text-violet-400">.</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                Senior UI/UX & AI Product Designer with 5+ years of experience creating responsive websites,
                enterprise web applications, and scalable design systems. Open to relocation anywhere.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {services.map(s => (
                  <div
                    key={s.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:border-violet-500/30"
                  >
                    <span className="text-violet-600 dark:text-violet-400">{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Send an email"
                className="group inline-flex items-center gap-2.5 text-violet-600 dark:text-violet-400 font-bold text-sm md:text-base hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
              >
                {personalData.contact.email}
                <ArrowUpRight size={16} aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Nav Links */}
            <div className="hidden sm:block">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">Explore</div>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                      <a
                        href={link.href}
                        aria-label={`Go to ${link.name}`}
                        className="text-slate-600 dark:text-slate-400 font-bold text-sm hover:text-violet-600 dark:hover:text-white transition-colors flex items-center justify-between gap-3 group"
                      >
                        {link.name}
                        <span className="w-4 h-px bg-slate-300 dark:bg-slate-700 group-hover:w-6 group-hover:bg-violet-500 transition-all duration-300" aria-hidden="true" />
                      </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">Connect & Hire</div>
              <ul className="space-y-4">
                {socials.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow on ${link.name}`}
                      className="text-slate-600 dark:text-slate-400 font-bold text-sm hover:text-violet-600 dark:hover:text-white transition-colors flex items-center justify-between gap-3 group"
                    >
                      {link.name}
                      <span className="w-4 h-px bg-slate-300 dark:bg-slate-700 group-hover:w-6 group-hover:bg-violet-500 transition-all duration-300" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Availability & Relocation Badge */}
              <div className="mt-8 p-4 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-black text-xs uppercase tracking-widest">Available & Relocation Ready</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed font-medium">
                  Open to Full-Time & Contract roles. Ready to relocate anywhere worldwide or join remote teams.
                </p>
              </div>
            </div>
          </div>
        </Scroll3DWrapper>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 md:pt-8 border-t border-black/[0.05] dark:border-white/5 transition-colors duration-500">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} Kuldeep Sharma | Senior UI/UX Designer
          </div>
          <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-700 text-center md:text-right">
            Designed with <Heart size={10} className="text-violet-500 fill-current mx-0.5" /> by Kuldeep Sharma
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-8 md:-bottom-12 left-0 w-full opacity-[0.05] dark:opacity-[0.015] select-none pointer-events-none overflow-hidden transition-opacity duration-500">
        <div className="text-[10rem] md:text-[18rem] font-black font-outfit leading-none whitespace-nowrap tracking-tighter text-slate-900 dark:text-white">UI · UX · DESIGN</div>
      </div>
    </footer>
  );
};

export default Footer;
