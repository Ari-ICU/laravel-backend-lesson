"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Box, Rocket, Feather, BarChart3, Info } from 'lucide-react';

export function FrameworkComparisonAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const frameworks = [
    { name: 'Slim', features: 20, complexity: 10, icon: Feather, color: 'sky' },
    { name: 'CodeIgniter', features: 40, complexity: 30, icon: Rocket, color: 'amber' },
    { name: 'Laravel', features: 90, complexity: 70, icon: Zap, color: 'rose' },
    { name: 'Symfony', features: 100, complexity: 95, icon: Box, color: 'emerald' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-[2rem] shadow-2xl relative z-30">
        <BarChart3 className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-2xl font-black text-black uppercase tracking-widest">PHP Framework Landscape</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Feature Richness vs. System Weight</p>
        </div>
      </div>

      <div className="relative w-full max-w-4xl min-h-[400px] px-20">
        {/* Graph Axes */}
        <div className="absolute bottom-0 left-20 right-0 h-1 bg-black" />
        <div className="absolute bottom-0 left-20 top-0 w-1 bg-black" />
        
        {/* Labels */}
        <div className="absolute -left-10 top-1/2 -rotate-90 text-xl font-black text-black uppercase tracking-[0.4em]">Complexity</div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xl font-black text-black uppercase tracking-[0.4em]">Features & Tools</div>

        {/* Framework Points */}
        {frameworks.map((fw, idx) => (
          <motion.div
            key={fw.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              left: `calc(20px + ${fw.features}%)`,
              bottom: `${fw.complexity}%`
            }}
            transition={{ delay: idx * 0.2, type: 'spring', damping: 12 }}
            className="absolute -translate-x-1/2 translate-y-1/2 group z-20"
          >
             <div className="relative flex flex-col items-center gap-4 p-5 rounded-3xl bg-white border-2 border-black shadow-2xl hover:scale-110 hover:bg-slate-50 transition-all cursor-help">
                <fw.icon className="w-12 h-12 text-black" />
                <span className="text-lg font-black text-black uppercase tracking-widest">{fw.name}</span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                   <div className="px-6 py-3 rounded-2xl bg-black text-white text-lg font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">
                      {fw.name === 'Laravel' ? 'The All-Rounder' : fw.name === 'Symfony' ? 'Enterprise Foundation' : fw.name === 'Slim' ? 'Micro-API King' : 'Lightweight Classic'}
                   </div>
                   <div className="w-3 h-3 bg-black rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
                </div>
             </div>
          </motion.div>
        ))}

        {/* Modular Nature Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-10 px-20">
           <motion.path
             d="M 90 30 Q 95 15 100 5"
             fill="transparent"
             stroke="black"
             strokeWidth="2"
             strokeDasharray="6 6"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 2, delay: 1 }}
           />
        </svg>
      </div>

      {/* Insight Bar */}
      <div className="flex items-center gap-6 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
         <div className="w-14 h-14 rounded-2xl bg-rose-500 flex items-center justify-center border-2 border-black">
            <Info className="w-8 h-8 text-black" />
         </div>
         <p className="text-xl font-black text-black uppercase tracking-widest">
            Laravel sits in the <span className="underline decoration-4 decoration-rose-500">Sweet Spot</span>: High features with elegant syntax.
         </p>
      </div>
    </div>
  );
}
