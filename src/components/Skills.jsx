import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Box, Figma, Layers, Cpu } from 'lucide-react';
import { personalData } from '../data';

const getIcon = (category) => {
  switch (category) {
    case 'Design': return <Figma size={20} />;
    case 'Development': return <Code2 size={20} />;
    default: return <Box size={20} />;
  }
};

const getCategoryColor = (category) => {
  return category === 'Design'
    ? 'from-pink-500/15 to-violet-500/15 border-pink-500/25 text-pink-400'
    : 'from-indigo-500/15 to-cyan-500/15 border-indigo-500/25 text-indigo-400';
};

const Skills = () => {
  const designSkills = personalData.skills.filter(s => s.category === 'Design');
  const devSkills = personalData.skills.filter(s => s.category === 'Development');

  return (
    <section id="skills" className="py-16 md:py-28 bg-[#050510] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-violet-800/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-800/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-screen-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="section-tag">Technical Skills</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-white">
              MY <span className="text-gradient">EXPERTISE</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
              Bridging design artistry with frontend engineering crafting pixel-perfect, user-centric digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {[
            { icon: <Figma className="text-pink-400" size={20} />, label: 'UI Design', desc: 'Figma / Adobe XD', color: 'from-pink-500/10 to-violet-500/10 border-pink-500/20' },
            { icon: <Code2 className="text-indigo-400" size={20} />, label: 'Frontend Dev', desc: 'React / Bootstrap', color: 'from-indigo-500/10 to-cyan-500/10 border-indigo-500/20' },
            { icon: <Layers className="text-purple-400" size={20} />, label: 'UX Strategy', desc: 'Wireframes / Flows', color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20' },
            { icon: <Cpu className="text-cyan-400" size={20} />, label: 'Design Lead', desc: '5+ Years Experience', color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20' },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-4 md:p-5 rounded-2xl bg-gradient-to-br ${f.color} border hover:-translate-y-1 transition-transform duration-300 group`}
            >
              <div className="mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <div className="font-bold text-white text-[13px] md:text-sm mb-0.5">{f.label}</div>
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-tight">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
                <Palette size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Design Tools</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{designSkills.length} Skills</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r ${getCategoryColor(skill.category)} border hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {getIcon(skill.category)}
                  <span className="font-semibold text-sm text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dev Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Development Stack</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{devSkills.length} Skills</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r ${getCategoryColor(skill.category)} border hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {getIcon(skill.category)}
                  <span className="font-semibold text-sm text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
