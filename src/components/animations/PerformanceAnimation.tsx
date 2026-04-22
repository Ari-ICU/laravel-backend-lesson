"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Gauge, ArrowUpRight } from 'lucide-react';

export function PerformanceAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-80 flex items-center justify-around px-10">
      {/* Speed Meter */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-48 h-48 rounded-full border-8 border-white/5 flex items-center justify-center overflow-hidden">
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-primary"
              strokeDasharray="553"
              initial={{ strokeDashoffset: 553 }}
              animate={{ strokeDashoffset: [553, 100, 150, 80] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
          <div className="flex flex-col items-center">
            <motion.span 
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-5xl font-black text-white"
            >
              99
            </motion.span>
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Score</span>
          </div>
        </div>
        <span className="text-xs font-black text-white/20 uppercase tracking-[0.3em]">Lighthouse Speed</span>
      </div>

      {/* Comparison Cards */}
      <div className="flex flex-col gap-8">
        {/* Before */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-64 p-6 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
            <Clock className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Before Cache</div>
            <div className="text-2xl font-black text-white">2.4s</div>
          </div>
        </motion.div>

        {/* After */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-64 p-6 rounded-3xl bg-primary/10 border border-primary/20 flex items-center gap-6 shadow-2xl shadow-primary/20"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Optimized</div>
            <div className="text-2xl font-black text-white flex items-center gap-2">
              42ms
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
