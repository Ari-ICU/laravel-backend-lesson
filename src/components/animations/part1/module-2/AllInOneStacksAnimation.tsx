"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Zap, Database, Globe, Layers, Apple, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';

export function AllInOneStacksAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeStack, setActiveStack] = useState<string | null>(null);

  const stacks = [
    { 
      id: 'xampp', 
      name: 'XAMPP', 
      desc: 'The Classic Cross-Platform Stack', 
      features: ['PHP', 'MariaDB', 'Apache', 'Pearl'],
      color: 'amber',
      icon: Layers,
      os: 'Windows / Mac / Linux'
    },
    { 
      id: 'laragon', 
      name: 'Laragon', 
      desc: 'Modern, Fast, & Isolated (Windows)', 
      features: ['Auto-Virtual Hosts', 'Fast switching', 'Redis Support', 'Portable'],
      color: 'sky',
      icon: Zap,
      os: 'Windows Only'
    },
    { 
      id: 'dbngin', 
      name: 'DBngin', 
      desc: 'Lightweight DB Management', 
      features: ['MySQL', 'PostgreSQL', 'Redis', 'Zero-config'],
      color: 'emerald',
      icon: Database,
      os: 'Mac / Windows'
    },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center border-2 border-black shadow-lg">
          <Monitor className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Popular Stack Comparison</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Choosing the right tool for your OS</p>
        </div>
      </div>

      <div className="flex gap-8 w-full px-20 relative z-20">
         {stacks.map((stack) => (
           <motion.button
             key={stack.id}
             onClick={() => setActiveStack(stack.id)}
             whileHover={{ y: -8 }}
             className={`flex-1 p-10 rounded-[2.5rem] border-4 transition-all flex flex-col items-center gap-8 shadow-xl ${activeStack === stack.id ? `bg-white border-black scale-105 shadow-2xl` : 'bg-slate-50/50 border-black/10 hover:border-black hover:bg-white'}`}
           >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-black ${activeStack === stack.id ? `bg-${stack.color}-500 shadow-lg` : 'bg-white'}`}>
                 <stack.icon className="w-12 h-12 text-black" />
              </div>
              <div className="text-center">
                 <h4 className="text-2xl font-black text-black uppercase tracking-widest">{stack.name}</h4>
                 <div className="mt-2 inline-block px-4 py-1 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest">
                    {stack.os}
                 </div>
              </div>
           </motion.button>
         ))}
      </div>

      {/* Detail View */}
      <div className="h-60 w-full flex items-center justify-center relative z-20">
         <AnimatePresence mode="wait">
            {activeStack ? (
              <motion.div
                key={activeStack}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-8"
              >
                 <div className="flex items-center gap-6">
                    <ChevronRight className="w-10 h-10 text-emerald-600" />
                    <p className="text-3xl font-black text-black uppercase tracking-widest">{stacks.find(s => s.id === activeStack)?.desc}</p>
                 </div>
                 <div className="flex gap-6">
                    {stacks.find(s => s.id === activeStack)?.features.map((f) => (
                      <div key={f} className="px-8 py-3 rounded-2xl bg-white border-2 border-black shadow-lg flex items-center gap-4">
                         <div className={`w-4 h-4 rounded-full bg-${stacks.find(s => s.id === activeStack)?.color}-500 border-2 border-black`} />
                         <span className="text-xl font-black text-black uppercase tracking-widest">{f}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center gap-6 text-black/20"
              >
                 <Layers className="w-24 h-24" />
                 <span className="text-2xl font-black uppercase tracking-[0.4em]">Select a stack to see features</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
