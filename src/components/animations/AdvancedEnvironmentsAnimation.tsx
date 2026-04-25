"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Zap, Box, Globe, ShieldCheck, Cpu, Code2, Rocket, Layout } from 'lucide-react';

export function AdvancedEnvironmentsAnimation() {
  const [active, setActive] = useState<string | null>(null);

  const advancedTools = [
    { 
      id: 'valet', 
      name: 'Laravel Valet', 
      desc: 'Minimalist macOS development', 
      icon: Zap, 
      color: 'rose',
      details: 'Uses DnsMasq to proxy all *.test requests to your local folders.'
    },
    { 
      id: 'herd', 
      name: 'Laravel Herd', 
      desc: 'One-Click PHP Environment', 
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
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layout className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Advanced Environments</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Professional-Grade Local Setups</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-8">
        {advancedTools.map((tool) => (
          <motion.div
            key={tool.id}
            onMouseEnter={() => setActive(tool.id)}
            onMouseLeave={() => setActive(null)}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`relative w-64 h-80 rounded-[3rem] p-8 border transition-all cursor-default overflow-hidden ${active === tool.id ? `bg-${tool.color}-500/10 border-${tool.color}-500/30 shadow-2xl` : 'bg-white/[0.02] border-white/5 opacity-60'}`}
          >
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white" />
             </div>

             <div className="relative z-10 flex flex-col items-center h-full justify-between">
                <div className={`w-16 h-16 rounded-[2rem] bg-${tool.color}-500/20 flex items-center justify-center border border-${tool.color}-500/30`}>
                   <tool.icon className={`w-8 h-8 text-${tool.color}-400`} />
                </div>
                
                <div className="text-center space-y-2">
                   <h4 className="text-sm font-black text-white uppercase tracking-widest">{tool.name}</h4>
                   <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">{tool.desc}</p>
                </div>

                <div className="w-full flex justify-center pt-4 border-t border-white/5">
                   <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-white/10 flex items-center justify-center text-[8px] font-bold">
                           {tool.id === 'docker' ? <Box className="w-3 h-3" /> : tool.id === 'valet' ? <Globe className="w-3 h-3" /> : <Cpu className="w-3 h-3" />}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      {/* Live Insight */}
      <div className="h-12 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-2 rounded-full"
              >
                 <ShieldCheck className="w-4 h-4 text-emerald-400" />
                 <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    {advancedTools.find(t => t.id === active)?.details}
                 </span>
              </motion.div>
            ) : (
              <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">Hover to learn more</span>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
