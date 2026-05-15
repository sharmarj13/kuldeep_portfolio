import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    const accessKey = '6207c0ec-4582-417b-af96-06a061a24bd9'; 

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };
  const contactItems = [
    { icon: <Mail size={18} />, label: 'Email', value: personalData.contact.email, color: 'from-violet-500 to-indigo-500 shadow-violet-500/20' },
    { icon: <Phone size={18} />, label: 'Phone', value: personalData.contact.phone, color: 'from-indigo-500 to-cyan-500 shadow-indigo-500/20' },
    { icon: <MapPin size={18} />, label: 'Location', value: personalData.contact.location, color: 'from-pink-500 to-rose-500 shadow-pink-500/20' },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden bg-white dark:bg-[#050510] transition-colors duration-500">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-violet-600/5 dark:bg-violet-800/10 rounded-full blur-[120px] pointer-events-none transition-colors" />

      <div className="container mx-auto px-6 max-w-screen-xl relative z-10">

        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
          <span className="section-tag">Get In Touch</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-slate-900 dark:text-white mb-6">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mb-10 max-w-md leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>

            <div className="space-y-3 mb-10">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  aria-label={`Contact via ${item.label}: ${item.value}`}
                  className="group flex items-center gap-4 p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-black/[0.05] dark:border-white/10 hover:border-violet-500/30 transition-all cursor-pointer shadow-sm"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {React.cloneElement(item.icon, { 'aria-hidden': 'true' })}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-slate-900 dark:text-white font-bold text-sm md:text-base mt-0.5">{item.value}</div>
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" className="ml-auto opacity-0 group-hover:opacity-100 text-violet-500 dark:text-violet-400 transition-all" />
                </motion.div>
              ))}
            </div>

            <a
              href={personalData.contact.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Behance Profile"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-50 dark:bg-white/5 rounded-xl text-violet-600 dark:text-violet-400 font-bold text-sm border border-black/[0.05] dark:border-white/10 hover:bg-violet-500/10 hover:border-violet-500/40 transition-all shadow-sm"
            >
              View Behance Profile <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-slate-50/50 dark:bg-white/5 rounded-3xl p-7 md:p-10 border border-black/[0.05] dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none">
              <h3 className="text-2xl md:text-3xl font-black font-outfit text-slate-900 dark:text-white mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.15em] mb-2.5 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-white/5 border border-black/[0.08] dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/5 transition-all placeholder-slate-400 dark:placeholder-slate-600 shadow-sm"
                      placeholder="Kuldeep Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.15em] mb-2.5 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-white/5 border border-black/[0.08] dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/5 transition-all placeholder-slate-400 dark:placeholder-slate-600 shadow-sm"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.15em] mb-2.5 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-white/5 border border-black/[0.08] dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/5 transition-all placeholder-slate-400 dark:placeholder-slate-600 shadow-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.15em] mb-2.5 ml-1">Your Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-white/5 border border-black/[0.08] dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white text-sm outline-none focus:border-violet-500/60 focus:ring-4 focus:ring-violet-500/5 transition-all resize-none placeholder-slate-400 dark:placeholder-slate-600 shadow-sm"
                    placeholder="Tell me about your project and goals..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={formStatus === 'loading'}
                  aria-label={formStatus === 'loading' ? 'Sending message' : 'Send message'}
                  className={`w-full py-4.5 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
                    formStatus === 'loading' ? 'bg-slate-700 cursor-wait' : 
                    formStatus === 'success' ? 'bg-green-600' :
                    formStatus === 'error' ? 'bg-rose-600' :
                    'bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)]'
                  }`}
                >
                  {formStatus === 'loading' ? 'Sending...' : 
                   formStatus === 'success' ? 'Message Sent Successfully!' :
                   formStatus === 'error' ? 'Error! Please Try Again' :
                   <>Send Message <Send size={18} aria-hidden="true" /></>}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
