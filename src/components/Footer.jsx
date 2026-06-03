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
    { name: 'Behance', href: personalData.contact.behance },
    { name: 'LinkedIn', href: '#' },
    { name: 'Dribbble', href: '#' },
    { name: 'Instagram', href: '#' },
  ];

  const services = [
    { icon: <Figma size={14} />, label: 'UI/UX Design' },
    { icon: <Monitor size={14} />, label: 'Web Design' },
    { icon: <Smartphone size={14} />, label: 'App Design' },
    { icon: <Layers size={14} />, label: 'Design Systems' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-[#030308] text-slate-900 dark:text-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden border-t border-black/[0.05] dark:border-white/5 transition-colors duration-500">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        {/* Main Content */}
        <Scroll3DWrapper>
          <div className="grid lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="text-3xl md:text-4xl font-black font-outfit tracking-tight text-slate-900 dark:text-white mb-4">
                KULDEEP<span className="text-violet-500">.</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                Senior UI/UX Designer with 5+ years of experience crafting intuitive,
                pixel-perfect digital products. Specializing in user research, wireframing,
                prototyping, and design systems for web & mobile.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {services.map(s => (
                  <div
                    key={s.label}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-white/5 border border-black/[0.05] dark:border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 shadow-sm transition-all duration-500 hover:border-violet-500/20"
                  >
                    <span className="text-violet-600 dark:text-violet-400">{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Send an email"
                className="group inline-flex items-center gap-2.5 text-violet-600 dark:text-violet-400 font-bold text-sm md:text-base hover:text-violet-500 dark:hover:text-violet-300 transition-colors"
              >
                {personalData.contact.email}
                <ArrowUpRight size={16} aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Nav Links */}
            <div className="hidden sm:block">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 mb-6">Explore</div>
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
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 mb-6">Stay Connected</div>
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

              {/* Availability Badge */}
              <div className="mt-10 p-5 bg-green-500/[0.03] dark:bg-green-500/5 border border-green-500/10 dark:border-green-500/20 rounded-2xl shadow-sm transition-colors duration-500">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-black text-xs uppercase tracking-widest">Available for Hire</span>
                </div>
                <p className="text-slate-500 dark:text-slate-500 text-[11px] leading-relaxed font-medium">
                  Open to freelance UI/UX projects & full-time opportunities.
                </p>
              </div>
            </div>
          </div>
        </Scroll3DWrapper>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-black/[0.05] dark:border-white/5 transition-colors duration-500">
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
