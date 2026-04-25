"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Database, Globe, Box, Cpu, HardDrive } from 'lucide-react';

export function LocalStackAnimation() {
  const components = [
    { name: 'Web Server', icon: Globe, color: 'sky', desc: 'Apache / Nginx' },
    { name: 'PHP Engine', icon: Cpu, color: 'rose', desc: 'Logic Execution' },
    { name: 'Database', icon: Database, color: 'emerald', desc: 'MySQL / MariaDB' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Server className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Local Development Stack</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">A Self-Contained Server on Your PC</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        
        {/* Computer Box */}
        <div className="relative w-[450px] h-[280px] rounded-[3rem] border-2 border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 flex flex-col items-center gap-6 shadow-2xl">
           <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-primary text-[10px] font-black text-white shadow-xl shadow-primary/20 flex items-center gap-2">
              <Laptop className="w-3 h-3" />
              <span>YOUR COMPUTER</span>
           </div>

           {/* Stack Components */}
           <div className="flex gap-4 w-full h-full">
              {components.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex-1 rounded-[2rem] bg-white/[0.03] border border-white/10 p-4 flex flex-col items-center justify-center gap-3 group hover:bg-white/[0.05] transition-all"
                >
                   <div className={`w-12 h-12 rounded-2xl bg-${comp.color}-500/10 flex items-center justify-center border border-${comp.color}-500/20 group-hover:scale-110 transition-transform`}>
                      <comp.icon className={`w-6 h-6 text-${comp.color}-400`} />
                   </div>
                   <div className="text-center">
                      <span className="text-[10px] font-black text-white uppercase tracking-wider block">{comp.name}</span>
                      <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest leading-none">{comp.desc}</span>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Data Flow Line */}
           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-white/10 backdrop-blur-md">
              <HardDrive className="w-3 h-3 text-white/20" />
              <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Everything runs locally</span>
           </div>
        </div>

        {/* Logos/Stacks */}
        <div className="flex items-center gap-8 opacity-40">
           {['XAMPP', 'Laragon', 'MAMP', 'DBngin'].map((stack) => (
             <span key={stack} className="text-[10px] font-black uppercase tracking-widest text-white/60">{stack}</span>
           ))}
        </div>
      </div>
    </div>
  );
}
