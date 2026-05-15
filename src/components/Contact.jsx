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

    // To use this, get a free Access Key from https://web3forms.com/
    // and replace 'YOUR_ACCESS_KEY_HERE' with it.
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
    { icon: <Mail size={18} />, label: 'Email', value: personalData.contact.email, color: 'from-violet-500 to-indigo-500' },
    { icon: <Phone size={18} />, label: 'Phone', value: personalData.contact.phone, color: 'from-indigo-500 to-cyan-500' },
    { icon: <MapPin size={18} />, label: 'Location', value: personalData.contact.location, color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <section id="contact" className="py-16 md:py-28 relative overflow-hidden bg-[#050510]">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-violet-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-screen-xl">

        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
          <span className="section-tag">Get In Touch</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-7xl font-black font-outfit tracking-tight leading-[0.9] text-white mb-6">
              LET'S <span className="text-gradient">CONNECT</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-10 max-w-md leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>

            <div className="space-y-3 mb-10">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-4 p-4 glass rounded-xl hover:border-violet-500/30 transition-colors cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-white font-semibold text-sm mt-0.5">{item.value}</div>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 text-violet-400 transition-all" />
                </motion.div>
              ))}
            </div>

            <a
              href={personalData.contact.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-violet-400 font-bold text-sm hover:bg-violet-500/10 hover:border-violet-500/40 transition-all"
            >
              View Behance Profile <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-black font-outfit text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all placeholder-slate-600"
                      placeholder="Kuldeep Sharma"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all placeholder-slate-600"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all placeholder-slate-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all resize-none placeholder-slate-600"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'loading'}
                  className={`w-full py-4 text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                    formStatus === 'loading' ? 'bg-slate-700 cursor-wait' : 
                    formStatus === 'success' ? 'bg-green-600' :
                    formStatus === 'error' ? 'bg-rose-600' :
                    'bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_30px_rgba(139,92,246,0.25)] hover:shadow-[0_0_50px_rgba(139,92,246,0.45)]'
                  }`}
                >
                  {formStatus === 'loading' ? 'Sending...' : 
                   formStatus === 'success' ? 'Message Sent!' :
                   formStatus === 'error' ? 'Error! Try Again' :
                   <>Send Message <Send size={16} /></>}
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
