import React from 'react';
import { ArrowUpRight, Heart, Figma, Monitor, Smartphone, Layers } from 'lucide-react';
import { personalData } from '../data';

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
    <footer className="bg-[#030308] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-screen-xl">

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-14">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-black font-outfit tracking-tight text-white mb-3">
              KULDEEP<span className="text-violet-500">.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-sm">
              Senior UI/UX Designer with 5+ years of experience crafting intuitive, 
              pixel-perfect digital products. Specializing in user research, wireframing, 
              prototyping, and design systems for web & mobile.
            </p>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {services.map(s => (
                <div
                  key={s.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400"
                >
                  <span className="text-violet-400">{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>

            <a
              href={`mailto:${personalData.contact.email}`}
              className="group inline-flex items-center gap-2 text-violet-400 font-bold text-sm hover:text-violet-300 transition-colors"
            >
              {personalData.contact.email}
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Nav Links */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5">Quick Links</div>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 font-semibold text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-slate-700 group-hover:w-6 group-hover:bg-violet-500 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-5">Find Me On</div>
            <ul className="space-y-3">
              {socials.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 font-semibold text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-slate-700 group-hover:w-6 group-hover:bg-violet-500 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability Badge */}
            <div className="mt-8 p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-400 font-bold text-xs uppercase tracking-widest">Available</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Open to freelance UI/UX projects & full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 border-t border-white/5">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-600">
            &copy; {new Date().getFullYear()} Kuldeep Sharma — All Rights Reserved
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-700">
            Designed & Built with <Heart size={10} className="text-violet-500 fill-current" /> by Kuldeep Sharma
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-8 left-0 w-full opacity-[0.012] select-none pointer-events-none overflow-hidden">
        <div className="text-[15rem] font-black font-outfit leading-none whitespace-nowrap tracking-tighter">UI · UX · DESIGN</div>
      </div>
    </footer>
  );
};

export default Footer;
