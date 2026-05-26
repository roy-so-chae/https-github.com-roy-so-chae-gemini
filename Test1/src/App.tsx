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
  TrendingUp, 
  ShieldCheck, 
  Play, 
  Filter, 
  Award, 
  Activity, 
  Check, 
  Briefcase, 
  Globe2, 
  PhoneCall, 
  Sliders, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Compass,
  Building,
  Smartphone,
  Maximize2,
  Minimize2,
  Wifi,
  Signal,
  Battery,
  SlidersHorizontal,
  RefreshCw,
  Cpu,
  Shield,
  Laptop
} from 'lucide-react';

// --- TS Types & Enums ---
type PageType = 'perspective' | 'wealth' | 'risk' | 'treasury' | 'esg' | 'advisor';

interface AllocationItem {
  name: string;
  weight: number;
  color: string;
  description: string;
}

// --- Content Data (Fully English) ---
const REAL_TIME_MARKETS = [
  { name: "NEXUS US EQ AI", value: "4,912.40", change: "+1.42%", trend: "up" },
  { name: "BENCHMARK CORE", value: "3,219.15", change: "-0.24%", trend: "down" },
  { name: "AI ALPHA ALTS", value: "12,410.82", change: "+2.85%", trend: "up" },
  { name: "GLOBAL MULTI-SEC", value: "1.0831", change: "+0.12%", trend: "up" }
];

const STRATEGIC_OUTLOOKS = [
  {
    category: "MACRO INSIGHT",
    title: "Sovereign AI Infrastructure in Family Offices",
    author: "Elena Rostova, Chief Global Strategist",
    readTime: "6 Min Read",
    excerpt: "Institutional capital is expanding from high-latency model access to direct physical ownership of sovereign compute nodes, restructuring global corporate balance sheets."
  },
  {
    category: "PORTFOLIO PERSPECTIVE",
    title: "Predictive Analytics & Private Fixed Income Alpha",
    author: "Dr. Arthur Vance, Head of Fixed Income",
    readTime: "8 Min Read",
    excerpt: "Traditional baseline credit evaluations decay in erratic cycles. Our deep physical stress neural models expose alpha in secondary asset-backed corporate blocks."
  }
];

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('perspective');
  
  // Custom Portfolio Wealth Simulator State
  const [investmentSize, setInvestmentSize] = useState<number>(5000000); // Default 5M USD
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');
  
  // Risk Intelligence State
  const [selectedRiskScenario, setSelectedRiskScenario] = useState<string>('Geopolitical Stress');
  const [isSimulatingRisk, setIsSimulatingRisk] = useState<boolean>(false);
  const [simulatedScore, setSimulatedScore] = useState<number>(91);

  // ESG Impact Metric state
  const [activeEsgMetric, setActiveEsgMetric] = useState<'carbon' | 'governance' | 'infrastructure'>('carbon');

  // Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactService, setContactService] = useState('Bespoke Asset Allocation & Neural Weights');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-scrolled ticker effect
  const [tickerIndex, setTickerIndex] = useState(0);
  useEffect(() => {
    const inter = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % REAL_TIME_MARKETS.length);
    }, 4500);
    return () => clearInterval(inter);
  }, []);

  // --- Samsung Galaxy S25 Specific Customization Control States ---
  const [galaxyColor, setGalaxyColor] = useState<'gray' | 'yellow' | 'violet' | 'black'>('gray');
  const [connectionType, setConnectionType] = useState<'5G' | 'Wi-Fi'>('5G');
  const [batteryLevel, setBatteryLevel] = useState<number>(98);
  const [is120HzSimulated, setIs120HzSimulated] = useState<boolean>(true);
  const [frameScale, setFrameScale] = useState<number>(1); // Scale physical presentation mockup
  const [galaxyTime, setGalaxyTime] = useState<string>('12:45 PM');

  // Sync Samsung Galaxy S25 Clock to real local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      setGalaxyTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const clockInterval = setInterval(updateTime, 30000);
    return () => clearInterval(clockInterval);
  }, []);

  // Compute portfolio allocation depending on inputs
  const computeAllocation = (): AllocationItem[] => {
    if (riskProfile === 'conservative') {
      return [
        { name: "Predictive Alternatives Credit", weight: 35, color: "#9E8256", description: "Secured yields with predictive downside protective overlays." },
        { name: "Sovereign AI Bond Bundles", weight: 40, color: "#0F1E36", description: "Sovereign credits linked to national compute productivity indexes." },
        { name: "Blue-Chip Tech Arbitrage", weight: 15, color: "#C5A880", description: "Market-neutral trade indexes tracking infrastructure leaders." },
        { name: "High-Liquidity Cash Sweep", weight: 10, color: "#E5DEC9", description: "Ultra-short term yielding reserves continuously optimized daily." },
      ];
    } else if (riskProfile === 'balanced') {
      return [
        { name: "Predictive Alternatives Credit", weight: 25, color: "#9E8256", description: "Bespoke private credit with active neural risk buffers." },
        { name: "Dynamic Global Equities (Neural Core)", weight: 45, color: "#0F1E36", description: "Direct equity portfolio weighted dynamically based on global macro signals." },
        { name: "Generative Venture Derivatives", weight: 20, color: "#C5A880", description: "Structured tech investments with high multiple upside potential." },
        { name: "Sovereign Commodities & Metals", weight: 10, color: "#E5DEC9", description: "Scarcity-based assets acting as secure inflation neutralizers." },
      ];
    } else {
      return [
        { name: "Dynamic Global Equities (Neural Core)", weight: 40, color: "#0F1E36", description: "High-conviction growth equities selected by macro deep neural nets." },
        { name: "Generative Venture Derivatives", weight: 35, color: "#C5A880", description: "High-exposure venture options and computational blockchain blocks." },
        { name: "Liquid Alternative Digital Assets", weight: 15, color: "#9E8256", description: "Sovereign hedging cryptographs and decentralized liquidity pools." },
        { name: "Emerging Tech Frontier Assets", weight: 10, color: "#D4C4A8", description: "Early access biotechnologies, clean hydrogen pipelines, and advanced robotics." },
      ];
    }
  };

  const currentAllocation = computeAllocation();

  // Handle Risk simulation trigger
  const runRiskSimulation = () => {
    setIsSimulatingRisk(true);
    let count = 0;
    const interval = setInterval(() => {
      setSimulatedScore(Math.floor(70 + Math.random() * 25));
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsSimulatingRisk(false);
        if (selectedRiskScenario === 'Geopolitical Stress') setSimulatedScore(91);
        if (selectedRiskScenario === 'Liquidity Outflow Event') setSimulatedScore(87);
        if (selectedRiskScenario === 'Neural Model Drifts') setSimulatedScore(96);
      }
    }, 120);
  };

  const handlePageChange = (page: PageType) => {
    setActivePage(page);
    // Find the mobile view container and scroll it to the top!
    const container = document.getElementById('galaxy-inner-scroll');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setContactName('');
        setContactEmail('');
      }, 7000);
    }
  };

  // Galaxy S25 frame borders based on selection
  const getGalaxyFrameColor = () => {
    switch(galaxyColor) {
      case 'yellow': return 'border-amber-400 bg-amber-400/10 shadow-amber-900/40';
      case 'violet': return 'border-indigo-400 bg-indigo-400/10 shadow-indigo-900/40';
      case 'black': return 'border-zinc-800 bg-zinc-800/10 shadow-zinc-950/40';
      default: return 'border-neutral-300 bg-neutral-300/10 shadow-slate-900/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E14] text-[#0F1E36] font-sans antialiased selection:bg-[#9E8256] selection:text-white flex flex-col xl:flex-row justify-center items-stretch p-3 md:p-6 gap-6 xl:gap-8 overflow-x-hidden">
      
      {/* 
        LEFT SIDE PANEL: Galaxy S25 Ultra Presentation & Simulation Controls 
        Provides desktop users with deep premium interactive control over the Galaxy S25 presentation!
      */}
      <div className="w-full xl:w-96 shrink-0 bg-gradient-to-br from-[#121B26] to-[#0A0D13] p-5 md:p-6 rounded-2xl border border-[#9E8256]/25 text-white flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
        
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9E8256]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div>
          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Smartphone size={16} className="text-[#9E8256]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#9E8256] uppercase font-bold">One UI 7.0 Active</span>
          </div>
          
          <h2 className="text-2.5xl font-serif font-semibold tracking-tight text-[#FBF9F6] border-b border-white/10 pb-3">
            Galaxy S25 Ultra <br /><span className="italic text-[#9E8256] font-light">Presentation Suite</span>
          </h2>
          
          <p className="text-xs text-white/70 leading-relaxed font-light mt-4">
            This module optimizes the high-security **J.P. Morgan Nexus AI** platform specifically for the newly architected symmetrical bezels, modern aspect ratio, and punch-hole camera lens of Samsung's flagship Galaxy S25.
          </p>

          {/* Interactive Controller Parameters */}
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#C5A880]">
              <SlidersHorizontal size={13} />
              <span>SIMULATED HARDWARE KEYS</span>
            </div>

            {/* S25 Shell Color Selector */}
            <div className="space-y-2">
              <span className="text-[11px] text-white/60 tracking-wider block uppercase font-mono">1. Outer Titanium Finish</span>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'gray', label: 'Silver', bg: 'bg-neutral-300' },
                  { id: 'yellow', label: 'Yellow', bg: 'bg-amber-100' },
                  { id: 'violet', label: 'Violet', bg: 'bg-indigo-300' },
                  { id: 'black', label: 'Obsidian', bg: 'bg-zinc-800' }
                ].map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setGalaxyColor(color.id as any)}
                    className={`p-1 text-[10px] rounded border transition-all flex flex-col items-center gap-1 ${
                      galaxyColor === color.id ? 'border-[#9E8256] bg-white/10 text-white' : 'border-white/10 hover:border-[#9E8256]/50 text-white/50'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${color.bg} shadow-inner`} />
                    <span>{color.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Signal & Cellular Toggles */}
            <div className="space-y-2">
              <span className="text-[11px] text-white/60 tracking-wider block uppercase font-mono">2. Mobile Connectivity</span>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: '5G', label: '5G Secured', desc: 'Sovereign Network' },
                  { id: 'Wi-Fi', label: 'Wi-Fi 7 Plus', desc: 'Secure Private Vault' }
                ].map((conn) => (
                  <button
                    key={conn.id}
                    onClick={() => setConnectionType(conn.id as any)}
                    className={`py-2 px-1 text-center rounded border transition-all ${
                      connectionType === conn.id ? 'bg-[#9E8256] border-[#9E8256] text-white font-semibold' : 'border-white/10 hover:border-white/20 text-white/60'
                    }`}
                  >
                    <div className="text-[11px]">{conn.label}</div>
                    <div className="text-[8px] opacity-75">{conn.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Battery Controller simulation */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-white/60 font-mono text-xs uppercase">3. S25 Battery Level</span>
                <span className="text-[#C5A880] font-mono font-bold text-xs">{batteryLevel}%</span>
              </div>
              <input 
                type="range"
                min="5"
                max="100"
                value={batteryLevel}
                onChange={(e) => setBatteryLevel(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#9E8256]"
              />
            </div>

            {/* Simulated 120Hz Control */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-white/60 font-mono uppercase">4. OLED 120Hz Animation Smoothness</span>
                <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${is120HzSimulated ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400'}`}>
                  {is120HzSimulated ? '120 FPS' : '60 FPS'}
                </span>
              </div>
              <button
                onClick={() => setIs120HzSimulated(!is120HzSimulated)}
                className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs transition-all flex items-center justify-center gap-1.5 text-white/95"
              >
                <RefreshCw size={12} className={is120HzSimulated ? 'animate-spin opacity-80' : ''} />
                Toggle Adaptive Display Rate
              </button>
            </div>

            {/* Desktop Mockup zoom controller */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-white/60 font-mono uppercase">5. Virtual Zoom Factor</span>
                <span className="text-[#C5A880] font-mono">{Math.round(frameScale * 100)}%</span>
              </div>
              <input 
                type="range"
                min="0.8"
                max="1.2"
                step="0.05"
                value={frameScale}
                onChange={(e) => setFrameScale(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#9E8256]"
              />
            </div>
            
          </div>
        </div>

        {/* Info card at the bottom of panel */}
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#9E8256]">
            <Cpu size={12} strokeWidth={2.5} />
            <span className="tracking-widest uppercase font-mono">System Core Spec</span>
          </div>
          <p className="text-[10.5px] text-white/60 leading-relaxed">
            S25 Ultra layout incorporates symmetrical uniform **1.2mm border ratios** with a minimal centered **Infinity-O camera module**, maximizing readability for high-worth data charts.
          </p>
        </div>

      </div>

      {/* 
        CENTER / RIGHT: REALISTIC SAMSUNG GALAXY S25 / S25 ULTRA HARDWARE MOCKUP 
        Wraps the entire private wealth portal in a stunning physics-accurate titanium bezel state on desktop,
        while adapts seamlessly to mobile screens.
      */}
      <div 
        className="flex-1 flex justify-center items-start transition-all duration-300 p-0"
        style={{ transform: `scale(${frameScale})`, transformOrigin: 'top center' }}
      >
        {/* 
          REALISTIC S25 ENCAPSULATION
          We use custom CSS classes to construct a polished Titanium finish metal chassis layout on desktop, 
          which disappears dynamically for real native-fluid layout on physical small screens.
        */}
        <div className={`w-full max-w-md bg-[#0F1E36] rounded-[42px] p-2 border-4 ${getGalaxyFrameColor()} transition-all duration-500 shadow-2xl relative flex flex-col justify-stretch overflow-hidden`}>
          
          {/* Subtle Titanium Polish highlights with glares */}
          <div className="absolute top-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none opacity-80" />
          <div className="absolute bottom-0 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none opacity-40" />

          {/* Side volume controls and power keys represented in titanium shadow */}
          <div className="absolute top-28 -right-0.5 w-[2px] h-12 bg-neutral-600/80 rounded-l pointer-events-none border-l border-white/10" />
          <div className="absolute top-44 -right-0.5 w-[2px] h-20 bg-neutral-600/80 rounded-l pointer-events-none border-l border-white/10" />
          <div className="absolute top-36 -left-0.5 w-[2px] h-14 bg-neutral-600/80 rounded-r pointer-events-none border-r border-white/10" />

          {/* 
            GALAXY S25 MAIN DISPLAY CANVAS 
            1.2mm uniform edge bezel with absolute border configuration.
          */}
          <div className="w-full bg-[#FBF9F6] rounded-[36px] overflow-hidden relative flex flex-col justify-between min-h-[760px] max-h-[880px] border border-[#0F1E36]/20">
            
            {/* 
              TOP ONE UI 7 DYNAMIC STATUS BAR WITH INFINITY-O SINGLE POINT 
              This replaces traditional iPhone notch with elegant Samsung style camera circle.
            */}
            <div className="space-y-1 relative pt-3 px-5 bg-[#FBF9F6] border-b border-editorial text-[#0F1E36]/80 flex flex-col justify-between select-none z-50">
              
              <div className="flex justify-between items-center h-5">
                
                {/* Left: Device Local Synchronized Time */}
                <div className="text-[11px] font-bold font-mono pl-0.5 tracking-tighter text-[#0F1E36]">
                  {galaxyTime}
                </div>

                {/* Center: S25 Infinity-O micro camera punch hole */}
                <div className="absolute left-1/2 top-[10px] transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-[10px] h-[10px] bg-[#090D12] rounded-full border border-slate-700/40 relative flex justify-center items-center shadow-inner">
                    <div className="w-1.5 h-1.5 bg-[#1F2C40]/50 rounded-full blur-[0.5px] pointer-events-none" />
                  </div>
                </div>

                {/* Right: S25 Status Metrics State */}
                <div className="flex items-center gap-1.5 text-[#0F1E36]">
                  
                  {/* Connectivity icon */}
                  {connectionType === '5G' ? (
                    <div className="flex items-center gap-0.5">
                      <Signal size={12} className="text-[#0F1E36]" />
                      <span className="text-[8px] font-black tracking-tight font-mono hover:text-[#9E8256]">5G</span>
                    </div>
                  ) : (
                    <Wifi size={12} className="text-[#0F1E36]" />
                  )}
                  
                  {/* Bluetooth state indicator icon */}
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse mt-0.5" title="Bluetooth LE Sovereign Link Active" />

                  {/* Battery Icon with responsive controls */}
                  <div className="flex items-center gap-1 leading-none">
                     <span className="text-[8px] font-mono tracking-tighter font-bold">{batteryLevel}%</span>
                    <div className="relative w-5 h-2.5 bg-neutral-200 border border-[#0F1E36]/30 rounded-[3px] p-[1px] flex justify-start items-center">
                      <div 
                        className={`h-full rounded-[1px] ${batteryLevel < 20 ? 'bg-rose-500' : 'bg-[#9E8256]'}`} 
                        style={{ width: `${batteryLevel}%` }} 
                      />
                      <div className="absolute right-[-2.5px] top-[2px] w-[1px] h-[4px] bg-[#0F1E36]" />
                    </div>
                  </div>

                </div>

              </div>

              {/* J.P. Morgan & Galaxy S25 Header Integration */}
              <header className="py-2.5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#0F1E36] flex items-center justify-center border border-[#9E8256]/30">
                    <span className="text-[#FBF9F6] font-serif text-base font-bold tracking-wider">N</span>
                  </div>
                  <div>
                    <h1 className="text-sm font-serif font-black tracking-widest text-[#0F1E36]">NEXUS AI</h1>
                    <p className="text-[7.5px] tracking-[0.25em] uppercase font-bold text-[#9E8256] -mt-1">Private Banking Portal</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] bg-[#9E8256]/15 text-[#9E8256] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase font-mono border border-[#9E8256]/30">S25 SECURITY PREFERENCE</span>
                </div>
              </header>

              {/* DYNAMIC SCROLLING MARKET TICKER */}
              <div className="bg-[#0F1E36] text-[#FBF9F6] -mx-5 px-5 py-2 flex justify-between items-center text-[10px] font-mono tracking-wider overflow-hidden border-b border-[#9E8256]/30 select-none">
                <span className="text-[#9E8256] font-bold uppercase shrink-0 mr-4 text-[9px] tracking-widest">MARKET SIGNAL:</span>
                <div className="flex-1 overflow-hidden relative h-4 flex items-center">
                  {REAL_TIME_MARKETS.map((m, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute right-0 left-0 transition-all duration-500 ease-in-out flex justify-between items-center ${
                        tickerIndex === idx ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
                      }`}
                    >
                      <span className="font-semibold text-white truncate max-w-[120px] text-[9.5px]">{m.name}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#FBF9F6]/85 text-[9.5px] font-semibold">{m.value}</span>
                        <span className={`text-[9.5px] ${m.trend === 'up' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}`}>{m.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 
              ACTIVE SUB-PAGE CONTEXT 
              Optimized inside a scrolling window for custom realistic physics behaviors in One UI.
            */}
            <main 
              id="galaxy-inner-scroll"
              className="flex-1 px-5 py-5 overflow-y-auto overflow-x-hidden relative scrollbar-thin scrollbar-thumb-amber-700 pb-20"
              style={{ transition: is120HzSimulated ? 'scroll-behavior 0.6s cubic-bezier(0.1, 0.9, 0.2, 1)' : 'none' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePage}
                  initial={{ opacity: 0, scale: 0.99, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.99, y: -10 }}
                  transition={{ duration: is120HzSimulated ? 0.28 : 0.45, ease: 'easeOut' }}
                >
                  {activePage === 'perspective' && (
                    <MobilePerspectivePage onSelectOption={handlePageChange} />
                  )}
                  {activePage === 'wealth' && (
                    <MobileWealthPage 
                      investmentSize={investmentSize}
                      setInvestmentSize={setInvestmentSize}
                      riskProfile={riskProfile}
                      setRiskProfile={setRiskProfile}
                      currentAllocation={currentAllocation}
                    />
                  )}
                  {activePage === 'risk' && (
                    <MobileRiskPage 
                      selectedRiskScenario={selectedRiskScenario}
                      setSelectedRiskScenario={setSelectedRiskScenario}
                      isSimulatingRisk={isSimulatingRisk}
                      simulatedScore={simulatedScore}
                      runRiskSimulation={runRiskSimulation}
                    />
                  )}
                  {activePage === 'treasury' && (
                    <MobileTreasuryPage />
                  )}
                  {activePage === 'esg' && (
                    <MobileEsgPage 
                      activeEsgMetric={activeEsgMetric}
                      setActiveEsgMetric={setActiveEsgMetric}
                    />
                  )}
                  {activePage === 'advisor' && (
                    <MobileAdvisorPage 
                      contactName={contactName}
                      setContactName={setContactName}
                      contactEmail={contactEmail}
                      setContactEmail={setContactEmail}
                      contactService={contactService}
                      setContactService={setContactService}
                      isSubmitted={isSubmitted}
                      handleFormSubmit={handleFormSubmit}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* REFINED EDITORIAL FOOTER OVERRIDE (Fully translated in English) */}
            <footer className="px-5 py-6 border-t border-[#0F1E36]/10 bg-[#F5F2ED] text-[10.5px] text-[#4A525D] space-y-3 z-30 select-none pb-24">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-[#0F1E36] flex items-center justify-center">
                  <span className="text-white font-serif text-[10px] font-bold">N</span>
                </div>
                <span className="font-serif font-bold text-[#0F1E36] tracking-widest text-[11px]">NEXUS FINANCE</span>
              </div>
              
              <p className="font-light leading-relaxed text-[#4A525D]/90">
                The Nexus AI Private Portal is a sovereign mobile-exclusive platform custom engineered for multi-family offices and private asset controllers, drawing on J.P. Morgan's elite heritage of security, stewardship, and typographic precision.
              </p>
              
              <div className="pt-3 border-t border-[#0F1E36]/5 text-[8.5px] tracking-widest text-[#4A525D]/70 uppercase space-y-1 font-mono">
                <p>© 2026 Nexus AI Finance Group. All Rights Reserved.</p>
                <p>Conforming to Basel IV & EU AI Act Governance.</p>
              </div>
            </footer>

            {/* 
              PREMIUM BOTTOM NAVIGATION BAR FOR ONE UI 7 
              Modern high-end floating tab controller matching J.P. Morgan styling beautifully.
            */}
            <div className="absolute bottom-5 left-4.5 right-4.5 bg-[#0F1E36] rounded-2xl border border-[#9E8256]/40 py-2.5 px-1.5 flex justify-between items-center shadow-xl shadow-[#0F1E36]/40 z-50 select-none">
              {[
                { id: 'perspective', label: 'Outlook', icon: BookOpen },
                { id: 'wealth', label: 'Allocator', icon: Compass },
                { id: 'risk', label: 'Risk AI', icon: ShieldCheck },
                { id: 'treasury', label: 'Treasury', icon: Building },
                { id: 'esg', label: 'Stewardship', icon: Activity },
                { id: 'advisor', label: 'Consult', icon: PhoneCall },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                return (
                  <button 
                    key={item.id}
                    onClick={() => handlePageChange(item.id as PageType)}
                    className="flex flex-col items-center gap-1 flex-1 transition-all"
                  >
                    <div className={`p-1.5 rounded-lg transition-all duration-300 ${isActive ? 'bg-[#9E8256] text-white scale-110 shadow-md shadow-white/5' : 'text-white/60 hover:text-white/90 hover:scale-105'}`}>
                      <Icon size={14} />
                    </div>
                    <span className={`text-[8px] font-semibold tracking-tighter ${isActive ? 'text-[#9E8256] font-bold' : 'text-white/40'}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 
              SAMSUNG ONE UI DIGITAL GESTURE BAR 
              Realistic premium bar reflecting modern flagship Android.
            */}
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-neutral-400/80 rounded-full z-50 pointer-events-none" />

          </div>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// --- SUB-PAGE 1: PERSPECTIVE (시장 전망) ---
// ==========================================
interface MobilePerspectivePageProps {
  onSelectOption: (page: PageType) => void;
}

function MobilePerspectivePage({ onSelectOption }: MobilePerspectivePageProps) {
  return (
    <div className="space-y-6">
      
      {/* Category Header */}
      <div className="flex justify-between items-center border-b border-[#0F1E36]/10 pb-2">
        <span className="text-[9.5px] font-extrabold tracking-[0.25em] uppercase text-[#9E8256]">ANNUAL STRATEGIC SIGHT</span>
        <span className="text-[10px] font-mono text-slate-400 font-bold">Q2 PREFERENCE</span>
      </div>

      {/* Main Focus Intro */}
      <div className="space-y-3">
        <span className="text-[8px] bg-amber-500/10 text-amber-800 border border-amber-500/20 px-2 py-0.5 rounded font-extrabold uppercase tracking-wider inline-block font-mono">EXECUTIVE ADVISORY</span>
        <h2 className="text-2.5xl font-serif text-[#0F1E36] italic leading-tight font-medium">
          "The Structural Collapse of Traditional Asset Parity"
        </h2>
        <p className="text-xs text-[#4A525D] font-light leading-relaxed">
          According to our Nexus Predictive Neural Network analysis, impending sovereign liquidity events in emerging economies will likely bypass historic bond protections, requiring custom alternative positioning.
        </p>
      </div>

      {/* Feature Cover Image Block */}
      <div className="relative aspect-video rounded-xl overflow-hidden border border-[#9E8256]/30 shadow-md mt-2">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
          alt="Luxury Financial Front" 
          className="w-full h-full object-cover brightness-95"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-85"></div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-[8px] tracking-widest text-[#9E8256] font-bold uppercase font-mono">LOCATION BENCHMARK</p>
          <p className="text-xs font-serif italic text-white/90">Nexus Private Wealth Office, New York NY</p>
        </div>
      </div>

      {/* Real-time Indicator Snapshot */}
      <div className="bg-[#0F1E36] text-white p-4 rounded-xl border border-[#9E8256]/30 space-y-2.5 shadow-md">
        <div className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-[#9E8256] animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest text-[#9E8256] font-extrabold font-mono">AI ENGINE ACTIVE UPDATE</span>
        </div>
        <p className="text-xs font-light text-[#FBF9F6]/85 leading-relaxed">
          Sovereign Shield asset defense algorithm is active. Selected client portfolio allocation resilience is scored at <strong className="text-[#C5A880] font-mono">99.42%</strong> resilient.
        </p>
      </div>

      {/* Strategic Outlooks Feed List */}
      <div className="space-y-4 pt-1">
        <h3 className="text-[9.5px] uppercase font-extrabold tracking-widest text-[#9E8256] border-b border-[#0F1E36]/10 pb-1.5 mb-2 font-mono">
          EXECUTIVE EDITORIALS
        </h3>
        <div className="space-y-4">
          {STRATEGIC_OUTLOOKS.map((outlook, idx) => (
            <div key={idx} className="space-y-2 border-b border-[#0F1E36]/5 pb-3">
              <span className="text-[8.5px] font-bold text-[#9E8256] tracking-wider uppercase font-mono">{outlook.category}</span>
              <h4 className="font-serif text-base text-[#0F1E36] font-semibold leading-snug">
                {outlook.title}
              </h4>
              <p className="text-[11px] text-[#4A525D] font-light leading-relaxed">
                {outlook.excerpt}
              </p>
              <div className="flex gap-2.5 text-[9px] text-[#4A525D]/60 pt-1 font-medium font-mono">
                <span className="font-bold text-[#0F1E36]">{outlook.author}</span>
                <span>•</span>
                <span>{outlook.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Option Trigger Button */}
      <div className="pt-2">
        <button 
          onClick={() => onSelectOption('wealth')}
          className="w-full py-4 px-6 bg-[#0F1E36] text-[#FBF9F6] hover:bg-[#9E8256] hover:text-white border border-[#9E8256]/30 transition-all duration-300 font-serif italic text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg"
        >
          Start Live Allocator Engine <ChevronRight size={14} className="text-[#9E8256]" />
        </button>
      </div>
    </div>
  );
}

// ==========================================
// --- SUB-PAGE 2: WEALTH ALLOCATOR (자산 배분) ---
// ==========================================
interface MobileWealthPageProps {
  investmentSize: number;
  setInvestmentSize: (size: number) => void;
  riskProfile: 'conservative' | 'balanced' | 'aggressive';
  setRiskProfile: (v: 'conservative' | 'balanced' | 'aggressive') => void;
  currentAllocation: AllocationItem[];
}

function MobileWealthPage({ 
  investmentSize, 
  setInvestmentSize, 
  riskProfile, 
  setRiskProfile, 
  currentAllocation 
}: MobileWealthPageProps) {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-[9.5px] font-extrabold tracking-[0.25em] text-[#9E8256] uppercase block font-mono">WEALTH ADVISORY PORTAL</span>
        <h2 className="text-2.5xl font-serif text-[#0F1E36] leading-tight font-medium">
          Optimal Asset <span className="italic text-[#9E8256]">Allocation Simulator</span>
        </h2>
        <p className="text-xs text-[#4A525D] font-light leading-relaxed">
          Based on your target wealth and comfort with volatility, the AI engine dynamically balances modern fixed-income, defensive alts, and premium tech derivatives.
        </p>
      </div>

      {/* Interactive Parameters Board */}
      <div className="bg-white p-5 rounded-xl border border-[#0F1E36]/10 space-y-5 shadow-sm">
        <div className="space-y-2">
          <label className="flex justify-between items-center text-[10px] font-extrabold text-[#0F1E36]/80 tracking-wide uppercase font-mono">
            <span>Target Investment Amount (USD)</span>
            <span className="text-[#9E8256] text-sm font-mono font-bold">${investmentSize.toLocaleString()}</span>
          </label>
          <input 
            type="range" 
            min="100000" 
            max="100000000" 
            step="100000"
            value={investmentSize}
            onChange={(e) => setInvestmentSize(Number(e.target.value))}
            className="w-full h-1.5 bg-[#F4F1EC] rounded-lg appearance-none cursor-pointer accent-[#9E8256]"
          />
          <div className="flex justify-between text-[9px] text-[#4A525D]/60 font-mono font-bold">
            <span>$100K Min</span>
            <span>$50M</span>
            <span>$100M Max</span>
          </div>
        </div>

        {/* Risk profile configuration toggles */}
        <div className="space-y-2">
          <span className="text-[10px] font-extrabold text-[#0F1E36]/80 tracking-wide uppercase block font-mono">Target Volatility Profile</span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'conservative', label: 'Preservation', desc: 'Defensive Focus' },
              { id: 'balanced', label: 'Balanced', desc: 'Combined Growth' },
              { id: 'aggressive', label: 'Frontier Alpha', desc: 'High-Yield Alts' }
            ].map((p) => {
              const isActive = riskProfile === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setRiskProfile(p.id as any)}
                  className={`py-2 px-1 text-center rounded border transition-all duration-300 flex flex-col justify-center items-center ${
                    isActive ? 'bg-[#0F1E36] border-[#0F1E36] text-white shadow-md' : 'bg-[#FBF9F6] border-slate-200 hover:border-[#9E8256] text-[#0F1E36]'
                  }`}
                >
                  <span className="text-xs font-bold leading-none">{p.label}</span>
                  <span className={`text-[8px] mt-1 ${isActive ? 'text-[#C5A880] opacity-100 font-bold' : 'text-slate-400 opacity-85'}`}>{p.desc}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Visual Chart Block */}
      <div className="space-y-4">
        <div className="flex justify-between items-center select-none">
          <h3 className="text-[9px] font-extrabold tracking-widest text-[#9E8256] uppercase font-mono">
            PORTFOLIO BREAKDOWN PERCENTAGES
          </h3>
          <span className="text-[9.5px] font-mono text-slate-400 font-bold uppercase">Q2 ACTIVE</span>
        </div>

        {/* Composite stacked element bar list */}
        <div className="h-6 w-full rounded-2xl overflow-hidden flex border border-[#0F1E36]/10 shadow-sm bg-neutral-100">
          {currentAllocation.map((item, idx) => (
            <div 
              key={idx}
              style={{ width: `${item.weight}%`, backgroundColor: item.color }}
              className="h-full relative group transition-all duration-500 hover:brightness-105"
            />
          ))}
        </div>

        {/* Allocation detail list cards */}
        <div className="space-y-2.5">
          {currentAllocation.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-[#0F1E36]/5 space-y-1.5 shadow-xs">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-bold text-[#0F1E36]">{item.name}</span>
                </div>
                <span className="text-xs font-mono font-bold text-[#9E8256]">{item.weight}%</span>
              </div>
              <p className="text-[10px] text-[#4A525D] leading-relaxed font-light">
                {item.description}
              </p>
              <div className="text-[9px] text-[#9E8256] font-mono font-semibold uppercase tracking-wider pt-1">
                ALLOCATION VALUE: ${(investmentSize * (item.weight / 100)).toLocaleString(undefined, {maximumFractionDigits: 0})} USD
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Disclaimer Pledge Line */}
      <div className="p-4 bg-[#F4F1EC] rounded-xl border border-[#9E8256]/30 text-center space-y-1 mt-2">
        <p className="text-[9px] tracking-wider text-[#9E8256] font-extrabold uppercase font-mono">SAFEGUARD INTEGRITY ALLOCATION</p>
        <p className="text-[11px] font-serif italic text-[#0F1E36]/80 leading-relaxed">
          "Allocation vectors generated represent algorithmic simulations tied directly to current Federal Reserve macro parameters, and do not guarantee exact future returns."
        </p>
      </div>

    </div>
  );
}

// ==========================================
// --- SUB-PAGE 3: RISK INTELLIGENCE (리스크) ---
// ==========================================
interface MobileRiskPageProps {
  selectedRiskScenario: string;
  setSelectedRiskScenario: (v: string) => void;
  isSimulatingRisk: boolean;
  simulatedScore: number;
  runRiskSimulation: () => void;
}

function MobileRiskPage({
  selectedRiskScenario,
  setSelectedRiskScenario,
  isSimulatingRisk,
  simulatedScore,
  runRiskSimulation
}: MobileRiskPageProps) {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-[9px] font-extrabold tracking-[0.25em] text-[#9E8256] uppercase block font-mono">PREDICTIVE RISK KERNEL</span>
        <h2 className="text-2.5xl font-serif text-[#0F1E36] leading-tight">
          Stress Analysis & <span className="italic text-[#9E8256]">Tail-Risk Diagnostics</span>
        </h2>
        <p className="text-xs text-[#4A525D] font-light leading-relaxed">
          Stress-test your customized weights against heavy macro drawdown models and trigger recommended AI risk overlays automatically.
        </p>
      </div>

      {/* Scenario Options Checklist */}
      <div className="space-y-2">
        <span className="text-[10px] font-extrabold text-[#0F1E36]/85 uppercase tracking-wider block font-mono">Active Tail-Risk Scenarios</span>
        <div className="space-y-2">
          {[
            { id: 'Geopolitical Stress', headline: 'Geopolitical Escalation (Capital Controls)', desc: 'Restricted cross-border trades, energy blocks, resources protectionism and emerging market FX fluctuation.' },
            { id: 'Liquidity Outflow Event', headline: 'Liquidity Exodus Shock (Bank Run)', desc: 'Surge in short-term institutional redemption requests sparking severe repo market shortfalls and spread surges.' },
            { id: 'Neural Model Drifts', headline: 'Algorithmic Anomaly & AI Drift', desc: 'Parametric drift across deep-learning electronic systems creating massive market feedback loops.' }
          ].map((scenario) => {
            const isSelected = selectedRiskScenario === scenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => setSelectedRiskScenario(scenario.id)}
                className={`w-full p-4 text-left rounded-xl border transition-all duration-300 ${
                  isSelected ? 'bg-white border-[#9E8256] shadow-md' : 'bg-transparent border-slate-200 hover:border-[#9E8256]/40'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#9E8256]' : 'text-[#0F1E36]'}`}>{scenario.headline}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#9E8256] animate-pulse"></span>}
                </div>
                <p className="text-[10px] text-[#4A525D] font-light leading-relaxed">
                  {scenario.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Simulated Score Gauge Panel */}
      <div className="bg-[#0F1E36] text-[#FBF9F6] p-6 rounded-2xl border border-[#9E8256]/30 space-y-4 shadow-xl relative overflow-hidden">
        
        {/* Subtle geometric lines */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#9E8256]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex justify-between items-center select-none">
          <div className="space-y-0.5">
            <span className="text-[8px] tracking-widest text-[#9E8256] font-bold uppercase font-mono">DYNAMIC RISK OUTLOOK</span>
            <p className="font-serif italic text-sm text-white/95">{selectedRiskScenario}</p>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase animate-pulse">MONITOR ON</span>
        </div>

        {/* Big circular or centered output */}
        <div className="flex justify-center items-center py-4 relative">
          <div className="text-center space-y-1.5 z-10">
            <span className="text-[9px] tracking-widest text-white/50 uppercase font-mono px-1">Estimated Portfolio Resilience</span>
            <div className="text-6xl font-serif text-[#C5A880] tracking-tighter">
              {simulatedScore} <span className="text-xl text-white/40">/ 100</span>
            </div>
            <span className="text-[9.5px] bg-[#9E8256]/20 border border-[#9E8256]/30 text-emerald-400 px-3 py-1 rounded font-mono font-bold uppercase tracking-wider inline-block">
              {simulatedScore >= 90 ? 'EXCELLENT RESILIENCE' : 'STABLE SHIELD ACTIVE'}
            </span>
          </div>
          
          {isSimulatingRisk && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-28 h-28 rounded-full border-4 border-[#9E8256] border-t-transparent animate-spin opacity-40"></div>
            </div>
          )}
        </div>

        {/* Minor diagnostic metadata table */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center font-mono">
          <div className="border-r border-white/10">
            <div className="text-white/40 text-[9px] uppercase tracking-wider font-semibold">Estimated Value-at-Risk (VaR)</div>
            <p className="text-[#FBF9F6] font-bold text-xs mt-1">-3.42% (Normal Threshold)</p>
          </div>
          <div>
            <div className="text-white/40 text-[9px] uppercase tracking-wider font-semibold">Resilience Rating</div>
            <p className="text-[#9E8256] font-bold text-xs mt-1">AAA CLASS SECURE</p>
          </div>
        </div>

        {/* Trigger simulator button */}
        <button
          onClick={runRiskSimulation}
          disabled={isSimulatingRisk}
          className="w-full py-4 bg-[#9E8256] text-white font-serif text-xs uppercase tracking-widest hover:bg-white hover:text-[#0F1E36] transition-all duration-300 disabled:opacity-50 mt-1 flex justify-center items-center gap-2 shadow-lg cursor-pointer"
        >
          {isSimulatingRisk ? 'Simulating Risk Intertwine...' : 'Execute Extreme Stress Diagnostics'}
          <Activity size={13} className={isSimulatingRisk ? 'animate-bounce' : ''} />
        </button>
      </div>

    </div>
  );
}

// ==========================================
// --- SUB-PAGE 4: TREASURY (기업 금융) ---
// ==========================================
function MobileTreasuryPage() {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-[9px] font-extrabold tracking-[0.25em] text-[#9E8256] uppercase block font-mono">TREASURY MANAGEMENT</span>
        <h2 className="text-2.5xl font-serif text-[#0F1E36] leading-tight">
          Smart Treasury <span className="italic text-[#9E8256]">Sweeper & Liquidity</span>
        </h2>
        <p className="text-xs text-[#4A525D] font-light leading-relaxed">
          Deploy cash surpluses dynamically across premium sovereign money market funds and AAA secure baskets with real-time target triggers.
        </p>
      </div>

      {/* Feature visual details columns */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <div className="bg-white p-4 rounded-xl border border-[#0F1E36]/10 space-y-1.5 shadow-sm">
          <div className="text-[#9E8256]"><Sliders size={16} /></div>
          <h4 className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider font-mono">Yield Optimization</h4>
          <p className="text-[10px] text-[#4A525D] leading-relaxed">
            Continually cross-references yields inside secure sovereign vaults, instantly matching exposures.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#0F1E36]/10 space-y-1.5 shadow-sm">
          <div className="text-[#9E8256]"><Building size={16} /></div>
          <h4 className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider font-mono">Same-Day Settlement</h4>
          <p className="text-[10px] text-[#4A525D] leading-relaxed">
            Full redemption accessibility guarantees immediate withdrawals credited directly on the same business day.
          </p>
        </div>
      </div>

      {/* Yield Display Chart Card */}
      <div className="bg-[#0F1E36] text-[#FBF9F6] p-5.5 rounded-2xl border border-[#9E8256]/30 space-y-4 shadow-xl">
        <div className="flex justify-between items-center select-none">
          <span className="text-[8px] tracking-widest text-[#9E8256] font-bold uppercase font-mono">SWIFT SMART SWEEP DEPLOYED</span>
          <span className="px-2 py-0.5 text-[8.5px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase font-mono font-bold animate-pulse">ACTIVE ENGINE</span>
        </div>

        <div className="space-y-1 select-none">
          <span className="text-xs text-white/50 block font-light font-mono uppercase">WEIGHTED OVERNIGHT EFFECTIVE YIELD (APY)</span>
          <div className="text-4xl font-serif text-[#C5A880]">5.42% <span className="text-xs text-white/40 font-normal font-sans">Per Annum (Tax Excl.)</span></div>
        </div>

        {/* Sweep Destinations Table */}
        <div className="space-y-2 pt-2 text-[10.5px] font-mono">
          <span className="text-[8.5px] tracking-widest text-[#9E8256] font-bold uppercase block pb-1 border-b border-white/10">SWEEP REGIONAL BREAKDOWN</span>
          {[
            { dest: "London Corp Sweep Fund [AAA rated]", yieldP: "5.31%", volume: "$15.4M" },
            { dest: "Zurich CHF Secured Treasury Sweeper", yieldP: "4.89%", volume: "$8.9M" },
            { dest: "Singapore Asset Liquid Trust [Sweep]", yieldP: "5.62%", volume: "$22.1M" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5">
              <span className="text-[#FBF9F6]/85 truncate max-w-[170px]">{item.dest}</span>
              <span className="text-[#C5A880] font-bold">{item.yieldP}</span>
              <span className="text-white/40">{item.volume}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ==========================================
// --- SUB-PAGE 5: ESG & IMPACT (지속가능) ---
// ==========================================
interface MobileEsgPageProps {
  activeEsgMetric: 'carbon' | 'governance' | 'infrastructure';
  setActiveEsgMetric: (v: 'carbon' | 'governance' | 'infrastructure') => void;
}

function MobileEsgPage({ activeEsgMetric, setActiveEsgMetric }: MobileEsgPageProps) {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-[9px] font-extrabold tracking-[0.25em] text-[#9E8256] uppercase block font-mono">ESG STEWARDSHIP CONTEXT</span>
        <h2 className="text-2.5xl font-serif text-[#0F1E36] leading-tight">
          ESG & <span className="italic text-[#9E8256]">Sustainable Stewardship</span>
        </h2>
        <p className="text-xs text-[#4A525D] font-light leading-relaxed">
          Ensure your compute footprint and net-zero goals are integrated securely directly within active investment algorithms.
        </p>
      </div>

      {/* Mini tabs JP Morgan style */}
      <div className="flex border-b border-[#0F1E36]/10 pb-px">
        {[
          { id: 'carbon', label: 'Carbon Offset' },
          { id: 'governance', label: 'Proxy Voting' },
          { id: 'infrastructure', label: 'Green Assets' }
        ].map((met) => (
          <button
            key={met.id}
            onClick={() => setActiveEsgMetric(met.id as any)}
            className={`flex-1 pb-2.5 text-[10.5px] font-bold tracking-tighter border-b-2 uppercase transition-all duration-350 cursor-pointer ${
              activeEsgMetric === met.id ? 'border-[#9E8256] text-[#0F1E36]' : 'border-transparent text-slate-400 hover:text-[#0F1E36]/60'
            }`}
          >
            {met.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeEsgMetric}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.25 }}
          className="bg-white p-5 rounded-xl border border-[#0F1E36]/10 space-y-3 shadow-xs min-h-[160px]"
        >
          {activeEsgMetric === 'carbon' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                <span className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider font-mono">Target Annual Carbon Mitigation</span>
                <span className="text-sm font-mono font-bold text-[#9E8256]">854,200 MT</span>
              </div>
              <p className="text-xs text-[#4A525D] leading-relaxed font-light font-sans">
                Nexus high-performance server clusters operate out of carbon-neutral hydro-powered nodes in Switzerland and the American Pacific, reducing computational greenhouse intensity by <strong className="text-[#0F1E36] font-semibold">34.2%</strong> compared to traditional multi-tenant mainframe databases.
              </p>
            </div>
          )}

          {activeEsgMetric === 'governance' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                <span className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider font-mono">Strategic Shareholder Alignment</span>
                <span className="text-sm font-mono font-bold text-[#9E8256]">99.85%</span>
              </div>
              <p className="text-xs text-[#4A525D] leading-relaxed font-light font-sans">
                Every corporate proxy vote and management compliance audit is permanently logged onto a distributed ledger, achieving perfect compliance with elite ESG AAA stewardship principles.
              </p>
            </div>
          )}

          {activeEsgMetric === 'infrastructure' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center border-b border-slate-100 pb-1.5">
                <span className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider font-mono font-sans">Direct Green Infrastructure Assets</span>
                <span className="text-sm font-mono font-bold text-[#9E8256]">$12.4B USD</span>
              </div>
              <p className="text-xs text-[#4A525D] leading-relaxed font-light font-sans">
                Allocating private capital pools into hydrogen grids and micro modular power plants, yielding attractive high-return green index flows tracked in sub-seconds.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative aspect-video rounded-xl overflow-hidden border border-[#9E8256]/30 shadow-md mt-4">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" 
          alt="Sustainable Clean Energy Farm" 
          className="w-full h-full object-cover brightness-95"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] to-transparent opacity-85"></div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-[8px] tracking-widest text-[#9E8256] font-bold uppercase font-mono">IMPACT OUTLOOK</p>
          <p className="text-xs font-serif italic text-white/90">Nexus Smart Energy Strategic Reserve</p>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// --- SUB-PAGE 6: PRIVATE CONSULTING (상담) ---
// ==========================================
interface MobileAdvisorPageProps {
  contactName: string;
  setContactName: (name: string) => void;
  contactEmail: string;
  setContactEmail: (email: string) => void;
  contactService: string;
  setContactService: (service: string) => void;
  isSubmitted: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
}

function MobileAdvisorPage({
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactService,
  setContactService,
  isSubmitted,
  handleFormSubmit
}: MobileAdvisorPageProps) {
  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-[9px] font-extrabold tracking-[0.25em] text-[#9E8256] uppercase block font-mono">CO-OP ONBOARDING</span>
        <h2 className="text-2.5xl font-serif text-[#0F1E36] leading-tight select-none">
          Private Placement <span className="italic text-[#9E8256]">Onboarding</span>
        </h2>
        <p className="text-xs text-[#4A525D] font-light leading-relaxed select-none">
          Connect with an elite private advisor to receive personalized allocations, offline liquidity briefings, and high-worth sovereign reports.
        </p>
      </div>

      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0F1E36] text-[#FBF9F6] p-8 rounded-2xl border border-[#9E8256]/30 text-center space-y-4 shadow-xl select-none"
        >
          <div className="w-12 h-12 rounded-full border border-[#9E8256] text-[#9E8256] flex justify-center items-center mx-auto animate-pulse">
            <Check size={22} />
          </div>
          <h4 className="font-serif text-xl text-white">Consultation Request Confirmed</h4>
          <p className="text-xs text-[#FBF9F6]/75 leading-relaxed font-light">
            Your dedicated Private Banker and Senior Portfolio Strategist have been assigned. An encrypted invitation to a video briefing will be delivered to <strong className="text-[#C5A880] font-mono font-medium">{contactEmail}</strong> within 24 hours.
          </p>
          <div className="text-[9px] text-[#9E8256] font-mono tracking-widest uppercase">
            SECURE ACCESS LINE ENABLED
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleFormSubmit} className="bg-white p-5 rounded-xl border border-[#0F1E36]/10 space-y-4 shadow-sm">
          <div className="space-y-1">
            <label className="text-[9.5px] font-extrabold uppercase tracking-wider text-[#0F1E36]/60 font-mono">Authorized Signatory / Entity Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g., Alexander Mercer, Managing Partner"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#FBF9F6] border border-slate-200 focus:border-[#9E8256] focus:outline-none text-xs text-[#0F1E36]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9.5px] font-extrabold uppercase tracking-wider text-[#0F1E36]/60 font-mono">Secured Corporate Email Address</label>
            <input 
              type="email" 
              required
              placeholder="e.g., mercer@sovereigntrust.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#FBF9F6] border border-slate-200 focus:border-[#9E8256] focus:outline-none text-xs text-[#0F1E36]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9.5px] font-extrabold uppercase tracking-wider text-[#0F1E36]/60 font-mono">Intended Investment Intent / Scope</label>
            <select 
              value={contactService}
              onChange={(e) => setContactService(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#FBF9F6] border border-slate-200 focus:border-[#9E8256] focus:outline-none text-xs text-[#0F1E36] font-semibold"
            >
              <option value="Bespoke Asset Allocation & Neural Weights">Custom Neural Asset Allocation Weighting</option>
              <option value="Real-time Portfolio Stress Testing & Defense Overlays">Real-time Portfolio Stress Testing & Defense Overlays</option>
              <option value="Corporate Overnight Sweep Yield Optimization">Corporate Overnight Sweep Yield Optimization</option>
              <option value="Environmental Impact & AAA Green Bond Allocation">Environmental Impact & AAA Green Bond Allocation</option>
            </select>
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-4 bg-[#0F1E36] text-[#FBF9F6] hover:bg-[#9E8256] hover:text-white border border-[#9E8256]/30 font-serif text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Submit Onboarding Request <ArrowRight size={14} />
            </button>
            <p className="text-[9.5px] text-[#4A525D]/60 text-center mt-2 font-mono">
              SECURE TRACEABLE DATA PROTECTION ENFORCED
            </p>
          </div>
        </form>
      )}

      {/* Legacy support desk information */}
      <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-3 select-none">
        <div className="p-2 bg-[#0F1E36] text-white rounded-lg"><PhoneCall size={16} /></div>
        <div className="text-[11px] leading-relaxed">
          <p className="font-bold text-[#0F1E36]">NEXUS Private Desk Hotline</p>
          <p className="text-[#4A525D] font-light">24/7 Secured Encryption Helpline: +82 (2) 1234-5678</p>
        </div>
      </div>

    </div>
  );
}
