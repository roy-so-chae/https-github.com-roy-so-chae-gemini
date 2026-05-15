/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Leaf, 
  Users 
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-jpm-navy flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className={`text-xl font-medium tracking-tight ${isScrolled ? 'text-jpm-navy' : 'text-white'}`}>
            NEXUS <span className="opacity-60">AI</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {['Solutions', 'Intelligence', 'Sustainability', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-jpm-gold transition-colors ${isScrolled ? 'text-jpm-navy' : 'text-white'}`}>
              {item}
            </a>
          ))}
          <button className={`px-6 py-2 text-sm font-medium border transition-all ${isScrolled ? 'border-jpm-navy text-jpm-navy hover:bg-jpm-navy hover:text-white' : 'border-white text-white hover:bg-white hover:text-jpm-navy'}`}>
            CONTACT
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={isScrolled ? 'text-jpm-navy' : 'text-white'} /> : <Menu className={isScrolled ? 'text-jpm-navy' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-8 gap-6 md:hidden"
          >
            {['Solutions', 'Intelligence', 'Sustainability', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-serif text-jpm-navy border-b border-gray-100 pb-2"
              >
                {item}
              </a>
            ))}
            <button className="bg-jpm-navy text-white py-4 font-medium tracking-wide">
              GET IN TOUCH
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 block ${light ? 'text-jpm-gold' : 'text-jpm-gold'}`}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-serif leading-tight ${light ? 'text-white' : 'text-jpm-navy'}`}
    >
      {title}
    </motion.h2>
  </div>
);

// --- Sections ---

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center bg-jpm-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jpm-navy via-jpm-navy/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
              The Future of <span className="italic text-jpm-gold">Capital</span> is Intelligent.
            </h1>
            <p className="text-xl text-jpm-paper/80 font-light mb-10 max-w-xl leading-relaxed">
              Nexus AI combines decades of institutional expertise with proprietary neural networks to redefine how the world manages wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-jpm-gold text-jpm-navy font-semibold text-sm tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2">
                EXPLORE SOLUTIONS <ChevronRight size={18} />
              </button>
              <button className="px-10 py-5 border border-white/30 text-white font-semibold text-sm tracking-widest hover:bg-white/10 transition-all">
                OUR IMPACT
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Expertise" title="Advanced Financial Infrastructure" />
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Globe />, title: "Global Asset Management", desc: "Access diversified portfolios powered by predictive analytics and real-time global trends." },
              { icon: <ShieldCheck />, title: "Institutional Risk Control", desc: "Rigorous security protocols enhanced by AI that identifies anomalies before they happen." },
              { icon: <Users />, title: "Wealth Transition Strategy", desc: "Multi-generational planning with data-driven insights tailored to family legacies." }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 border-l border-gray-100 hover:border-jpm-gold transition-all"
              >
                <div className="text-jpm-gold mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="text-2xl font-serif mb-4 text-jpm-navy">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{card.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-jpm-navy group-hover:text-jpm-gold transition-colors">
                  LEARN MORE <ArrowUpRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AI INNOVATION (FEATURE) */}
      <section className="bg-jpm-paper py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <SectionHeading subtitle="The Nexus Engine" title="Where Human Insight Meets Algorithmic Precision" />
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our proprietary AI platform doesn't just process data—it contextually understands the subtle nuances of geopolitical shifts and market psychology.
              </p>
              <ul className="space-y-4 mb-10">
                {['Hyper-personalized risk profiling', 'Real-time liquidity forecasting', 'Automated tax-loss harvesting'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-jpm-navy font-medium">
                    <span className="w-2 h-2 rounded-full bg-jpm-gold mt-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full border border-jpm-navy flex items-center justify-center group-hover:bg-jpm-navy transition-all">
                  <ArrowUpRight className="group-hover:text-white transition-colors" />
                </span>
                <span className="text-sm font-bold tracking-widest text-jpm-navy">DEEP TECH OVERVIEW</span>
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200" 
                  alt="AI Tech"
                  className="w-full h-auto"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-jpm-gold/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-jpm-navy/5 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARKET INTELLIGENCE (STATS) */}
      <section id="intelligence" className="py-24 bg-jpm-navy text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading subtitle="Real-Time Data" title="Insights That Move Markets" light />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Assets Under Management", val: "$48B" },
              { label: "Annual Transactions", val: "1.2M" },
              { label: "Markets Analyzed", val: "180+" },
              { label: "AI Signal Confidence", val: "94%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-serif text-jpm-gold mb-2">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-1 rounded-sm bg-gradient-to-r from-jpm-gold/20 via-white/10 to-jpm-gold/20"
          >
            <div className="bg-jpm-navy p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 rounded-lg"><BarChart3 className="text-jpm-gold" /></div>
                <div>
                  <h4 className="text-xl font-serif">Quarterly Market Sentiment</h4>
                  <p className="text-sm text-white/50">Nexus AI reveals bullish patterns in emerging green tech.</p>
                </div>
              </div>
              <button className="px-8 py-3 bg-white text-jpm-navy font-bold text-xs tracking-widest hover:bg-jpm-gold transition-colors">
                DOWNLOAD REPORT
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. SUSTAINABILITY SECTION */}
      <section id="sustainability" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <SectionHeading subtitle="Impact" title="Financing a Sustainable World" />
              <p className="text-gray-500 mb-8">
                Nexus is committed to carbon neutrality and ethical AI development. We believe technology should serve society, not just portfolios.
              </p>
              <button className="group flex items-center gap-2 text-jpm-navy font-bold tracking-widest text-xs">
                ESG FRAMEWORK <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" className="rounded-xl h-[300px] w-full object-cover shadow-lg" alt="Eco 1" />
                <div className="bg-jpm-paper p-6 rounded-xl flex flex-col justify-center gap-3">
                  <Leaf className="text-jpm-gold" />
                  <span className="text-sm font-medium">100% Core AI Powered by Clean Energy</span>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-jpm-navy p-6 rounded-xl flex flex-col justify-center gap-3 text-white">
                  <Cpu className="text-jpm-gold" />
                  <span className="text-sm font-medium">Ethical AI Transparency Governance</span>
                </div>
                <img src="https://images.unsplash.com/photo-1466611653911-954ffaa13b6f?auto=format&fit=crop&q=80&w=800" className="rounded-xl h-[300px] w-full object-cover shadow-lg" alt="Eco 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAREERS / CONTACT SECTION */}
      <section className="bg-jpm-navy py-32 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-jpm-gold to-transparent opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-4xl mx-auto">
              Be part of the financial revolution. <span className="italic text-jpm-gold">Build</span> the nexus.
            </h2>
            <p className="text-white/60 mb-12 text-lg font-light max-w-2xl mx-auto">
              We are looking for exceptional minds in mathematics, engineering, and finance to join our global offices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-jpm-gold text-jpm-navy font-bold text-sm tracking-widest hover:bg-white transition-all shadow-xl shadow-jpm-gold/20">
                OPEN POSITIONS
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-bold text-sm tracking-widest hover:bg-white/10 transition-all">
                TALK TO AN ADVISOR
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-jpm-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
      </section>

      {/* FOOTER */}
      <footer className="bg-jpm-paper py-16 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-jpm-navy flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-medium tracking-tight text-jpm-navy">
                  NEXUS <span className="opacity-60">AI</span>
                </span>
              </div>
              <p className="text-gray-500 max-w-xs text-sm leading-relaxed mb-8">
                Global Headquarters<br />
                125 Financial Square, London<br />
                UK EC2N 1AR
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Insights'].map(link => (
                  <a key={link} href="#" className="text-xs font-bold tracking-widest text-jpm-navy hover:text-jpm-gold transition-colors">{link.toUpperCase()}</a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-xs font-bold tracking-widest text-jpm-navy/40 uppercase mb-6">Offices</h5>
              <ul className="text-sm font-medium text-jpm-navy space-y-3">
                <li>New York</li>
                <li>Singapore</li>
                <li>Zurich</li>
                <li>Seoul</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xs font-bold tracking-widest text-jpm-navy/40 uppercase mb-6">Solutions</h5>
              <ul className="text-sm font-medium text-jpm-navy space-y-3">
                <li>Private Banking</li>
                <li>Digital Assets</li>
                <li>Risk OS</li>
                <li>ESGenius</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <div>© 2026 Nexus AI Finance Group. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-jpm-navy">Privacy Policy</a>
              <a href="#" className="hover:text-jpm-navy">Terms of Service</a>
              <a href="#" className="hover:text-jpm-navy">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
