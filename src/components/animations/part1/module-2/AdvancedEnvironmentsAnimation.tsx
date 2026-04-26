"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Zap, Box, Globe, ShieldCheck, Cpu, Code2, Rocket, Layout, ChevronRight } from 'lucide-react';

export function AdvancedEnvironmentsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  const advancedTools = [
    { 
      id: 'valet', 
      name: 'Laravel Valet', 
      desc: 'Minimalist macOS Setup', 
      icon: Zap, 
      color: 'rose',
      details: 'Uses DnsMasq to proxy all *.test requests to your local folders.'
    },
    { 
      id: 'herd', 
      name: 'Laravel Herd', 
      desc: 'One-Click PHP Env', 
      icon: Rocket, 
      color: 'amber',
      details: 'The fastest way to get PHP, Nginx, and DNS on Mac & Windows.'
    },
    { 
      id: 'docker', 
      name: 'Laravel Sail', 
      desc: 'Containerized Consistency', 
      icon: Ship, 
      color: 'sky',
      details: 'Docker-powered environment that works identical on every machine.'
    },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center border-2 border-black shadow-lg">
          <Layout className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Advanced Environments</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Professional-Grade Local Setups</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-8 px-20 relative z-20">
        {advancedTools.map((tool) => (
          <motion.div
            key={tool.id}
            onMouseEnter={() => setActive(tool.id)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ y: -12, scale: 1.02 }}
            className={`relative flex-1 min-h-[420px] rounded-[3rem] p-10 border-4 transition-all cursor-default overflow-hidden flex flex-col items-center justify-between shadow-xl ${active === tool.id ? `bg-white border-black shadow-2xl` : 'bg-slate-50/50 border-black/10'}`}
          >
             <div className={`w-32 h-32 rounded-[2.5rem] flex items-center justify-center border-2 border-black ${active === tool.id ? `bg-${tool.color}-500 shadow-lg` : 'bg-white'}`}>
                <tool.icon className="w-16 h-16 text-black" />
             </div>
             
             <div className="text-center space-y-4">
                <h4 className="text-2xl font-black text-black uppercase tracking-widest">{tool.name}</h4>
                <p className="text-lg font-bold text-black uppercase tracking-widest leading-relaxed opacity-60">{tool.desc}</p>
             </div>

             <div className="w-full flex justify-center pt-6 border-t-2 border-black/5">
                <div className="flex gap-4">
                   {[1, 2, 3].map(i => (
                     <div key={i} className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center ${active === tool.id ? 'bg-black text-white' : 'bg-white text-black/20 border-black/10'}`}>
                        {tool.id === 'docker' ? <Box className="w-6 h-6" /> : tool.id === 'valet' ? <Globe className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Live Insight Bar */}
      <div className="h-20 w-full flex items-center justify-center relative z-30">
         <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-6 bg-white border-2 border-black px-10 py-5 rounded-[2rem] shadow-2xl"
              >
                 <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center border-2 border-black">
                    <ShieldCheck className="w-8 h-8 text-black" />
                 </div>
                 <div className="flex items-center gap-4">
                    <ChevronRight className="w-6 h-6 text-black" />
                    <span className="text-xl font-black text-black uppercase tracking-widest">
                       {advancedTools.find(t => t.id === active)?.details}
                    </span>
                 </div>
              </motion.div>
            ) : (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-black text-black uppercase tracking-[0.5em] opacity-20"
              >
                 Hover to explore tools
              </motion.span>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
