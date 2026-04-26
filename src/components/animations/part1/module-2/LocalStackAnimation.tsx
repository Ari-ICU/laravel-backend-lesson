"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Server, Database, Globe, Box, Cpu, HardDrive } from 'lucide-react';

export function LocalStackAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const components = [
    { name: 'Web Server', icon: Globe, color: 'sky', desc: 'Apache / Nginx' },
    { name: 'PHP Engine', icon: Cpu, color: 'rose', desc: 'Logic Execution' },
    { name: 'Database', icon: Database, color: 'emerald', desc: 'MySQL / MariaDB' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-sky-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Server className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Local Development Stack</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">A Self-Contained Server on Your PC</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8 relative z-20">
        
        {/* Computer Box */}
        <div className="relative w-[960px] min-h-[320px] rounded-[3.5rem] border-4 border-black bg-white p-10 flex flex-col items-center gap-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
           <div className="absolute -top-6 -right-6 p-2 rounded-2xl bg-black text-xl font-black text-white shadow-2xl flex items-center gap-6">
              <Laptop className="w-8 h-8 text-white" />
              <span>YOUR COMPUTER</span>
           </div>

           {/* Stack Components */}
           <div className="flex gap-8 w-full h-full">
              {components.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex-1 rounded-[2.5rem] bg-slate-50 border-2 border-black/10 p-6 flex flex-col items-center justify-center gap-4 group hover:border-black transition-all shadow-md"
                >
                   <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border-2 border-black/10 group-hover:scale-110 transition-transform">
                      <comp.icon className="w-10 h-10 text-black" />
                   </div>
                   <div className="text-center">
                      <span className="text-xl font-black text-black uppercase tracking-wider block">{comp.name}</span>
                      <span className="text-lg font-bold text-black uppercase tracking-widest opacity-60 leading-none">{comp.desc}</span>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Data Flow Line */}
           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 p-2 rounded-full bg-white border-4 border-black shadow-2xl">
              <HardDrive className="w-10 h-10 text-black" />
              <span className="text-md font-black text-black uppercase tracking-[0.2em]">Everything runs locally</span>
           </div>
        </div>

        {/* Logos/Stacks */}
        <div className="flex items-center gap-10 opacity-30 mt-4">
           {['XAMPP', 'Laragon', 'MAMP', 'DBngin'].map((stack) => (
             <span key={stack} className="text-2xl font-black uppercase tracking-[0.3em] text-black">{stack}</span>
           ))}
        </div>
      </div>
    </div>
  );
}
