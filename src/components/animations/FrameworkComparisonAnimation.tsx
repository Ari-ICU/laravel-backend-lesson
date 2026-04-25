"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Box, Rocket, Feather, BarChart3, Info } from 'lucide-react';

export function FrameworkComparisonAnimation() {
  const frameworks = [
    { name: 'Slim', features: 20, complexity: 10, icon: Feather, color: 'sky' },
    { name: 'CodeIgniter', features: 40, complexity: 30, icon: Rocket, color: 'amber' },
    { name: 'Laravel', features: 90, complexity: 70, icon: Zap, color: 'rose' },
    { name: 'Symfony', features: 100, complexity: 95, icon: Box, color: 'emerald' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <BarChart3 className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">PHP Framework Landscape</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Feature Richness vs. System Weight</p>
        </div>
      </div>

      <div className="relative w-full max-w-2xl h-[300px]">
        {/* Graph Axes */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
        <div className="absolute bottom-0 left-0 w-px h-full bg-white/10" />
        
        {/* Labels */}
        <div className="absolute -left-16 top-1/2 -rotate-90 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Complexity</div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Features & Tools</div>

        {/* Framework Points */}
        {frameworks.map((fw, idx) => (
          <motion.div
            key={fw.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              left: `${fw.features}%`,
              bottom: `${fw.complexity}%`
            }}
            transition={{ delay: idx * 0.2, type: 'spring', damping: 12 }}
            className="absolute -translate-x-1/2 translate-y-1/2 group"
          >
             <div className={`relative flex flex-col items-center gap-3 p-4 rounded-3xl bg-${fw.color}-500/10 border border-${fw.color}-500/20 backdrop-blur-xl hover:scale-110 hover:bg-${fw.color}-500/20 transition-all cursor-help shadow-2xl`}>
                <fw.icon className={`w-8 h-8 text-${fw.color}-400`} />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">{fw.name}</span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                   <div className="px-4 py-2 rounded-xl bg-white text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">
                      {fw.name === 'Laravel' ? 'The All-Rounder' : fw.name === 'Symfony' ? 'Enterprise Foundation' : fw.name === 'Slim' ? 'Micro-API King' : 'Lightweight Classic'}
                   </div>
                   <div className="w-2 h-2 bg-white rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                </div>
             </div>
          </motion.div>
        ))}

        {/* Connection Lines (Modular Nature) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
           <motion.path
             d="M 90 30 Q 95 15 100 5"
             fill="transparent"
             stroke="white"
             strokeWidth="1"
             strokeDasharray="4 4"
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 2, delay: 1 }}
           />
        </svg>
      </div>

      {/* Insight */}
      <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full">
         <Info className="w-4 h-4 text-primary" />
         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
            Laravel sits in the <span className="text-rose-400 italic">Sweet Spot</span>: High features with elegant syntax.
         </span>
      </div>
    </div>
  );
}
