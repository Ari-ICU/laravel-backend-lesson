"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight, Play, SkipForward, Ban, List } from 'lucide-react';

export function LoopsAnimation() {
  const items = [
    { id: 1, label: 'Apple', icon: '🍎' },
    { id: 2, label: 'Banana', icon: '🍌' },
    { id: 3, label: 'Cherry', icon: '🍒' },
    { id: 4, label: 'Date', icon: '🌴' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Loop Engine Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <RefreshCw className="w-6 h-6 text-primary animate-spin-slow" />
        <div>
          <h3 className="text-xl font-black text-white">Foreach Engine</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Iterating through Array</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20">
        {/* Array Source */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Input Array</p>
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 w-40"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-bold text-white/60">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Processing Visual */}
        <div className="relative flex flex-col items-center gap-8">
          <div className="w-24 h-24 rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
            />
            <Play className="w-8 h-8 text-primary fill-primary/20" />
          </div>
          
          <div className="flex flex-col gap-2">
             <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
               <SkipForward className="w-4 h-4 text-emerald-400" />
               <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Continue</span>
             </div>
             <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20">
               <Ban className="w-4 h-4 text-rose-400" />
               <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Break</span>
             </div>
          </div>
        </div>

        {/* Output List */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Output Stream</p>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.6,
                }}
                className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 w-48 shadow-lg shadow-primary/10"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-mono text-white">Echoing item {i}...</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Connection Lines (SVGs) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
