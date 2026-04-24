"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Zap, Database, Globe, Layers, Apple, ShieldCheck, Cpu } from 'lucide-react';

export function AllInOneStacksAnimation() {
  const [activeStack, setActiveStack] = useState<string | null>(null);

  const stacks = [
    { 
      id: 'xampp', 
      name: 'XAMPP', 
      desc: 'The Classic Cross-Platform Stack', 
      features: ['PHP', 'MariaDB', 'Apache', 'Pearl'],
      color: 'amber',
      icon: Layers
    },
    { 
      id: 'laragon', 
      name: 'Laragon', 
      desc: 'Modern, Fast, & isolated (Windows)', 
      features: ['Auto-Virtual Hosts', 'Fast switching', 'Redis/Node support', 'Portable'],
      color: 'sky',
      icon: Zap
    },
    { 
      id: 'dbngin', 
      name: 'DBngin', 
      desc: 'Lightweight DB Management', 
      features: ['MySQL', 'PostgreSQL', 'Redis', 'Zero-config'],
      color: 'emerald',
      icon: Database
    },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Monitor className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Popular Stack Comparison</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Choosing the right tool for your OS</p>
        </div>
      </div>

      <div className="flex gap-6 w-full px-12">
         {stacks.map((stack) => (
           <motion.button
             key={stack.id}
             onClick={() => setActiveStack(stack.id)}
             whileHover={{ y: -5 }}
             className={`flex-1 p-6 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-4 ${activeStack === stack.id ? `bg-${stack.color}-500/10 border-${stack.color}-500 shadow-2xl` : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
           >
              <div className={`w-14 h-14 rounded-2xl bg-${stack.color}-500/10 flex items-center justify-center border border-${stack.color}-500/20`}>
                 <stack.icon className={`w-7 h-7 text-${stack.color}-400`} />
              </div>
              <div className="text-center">
                 <h4 className="text-sm font-black text-white uppercase tracking-widest">{stack.name}</h4>
                 <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">
                    {stack.id === 'xampp' ? 'Windows / Mac / Linux' : stack.id === 'laragon' ? 'Windows Only' : 'Mac / Windows'}
                 </p>
              </div>
           </motion.button>
         ))}
      </div>

      {/* Detail View */}
      <div className="h-32 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {activeStack ? (
              <motion.div
                key={activeStack}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center gap-4"
              >
                 <p className="text-xs font-bold text-white/60 uppercase tracking-widest">{stacks.find(s => s.id === activeStack)?.desc}</p>
                 <div className="flex gap-3">
                    {stacks.find(s => s.id === activeStack)?.features.map((f) => (
                      <div key={f} className="px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 flex items-center gap-2">
                         <div className={`w-1.5 h-1.5 rounded-full bg-${stacks.find(s => s.id === activeStack)?.color}-500`} />
                         <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{f}</span>
                      </div>
                    ))}
                 </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-white/10"
              >
                 <Apple className="w-5 h-5 opacity-20" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Select a stack to see features</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
