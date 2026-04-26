"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Gauge, ArrowUpRight, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PerformanceAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-full h-96 flex items-center justify-around px-10">
      {/* Speed Meter Section */}
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative w-56 h-56 rounded-full border border-white/[0.03] flex items-center justify-center bg-white/[0.01] backdrop-blur-3xl shadow-2xl">
          {/* Inner Glow */}
          <div className="absolute inset-4 rounded-full bg-primary/5 blur-xl" />
          
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <motion.circle
              cx="112"
              cy="112"
              r="104"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="653"
              initial={{ strokeDashoffset: 653 }}
              animate={{ strokeDashoffset: [653, 120, 180, 60] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="flex flex-col items-center relative z-10">
            <motion.span 
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-7xl font-black text-black tracking-tighter"
            >
              99
            </motion.span>
            <div className="flex items-center gap-6 mt-1">
              <Activity className="w-12 h-12 text-black" />
              <span className="text-lg font-black text-black uppercase tracking-[0.3em]">Perfect Score</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg font-black text-black uppercase tracking-[0.4em]">Engine Performance</span>
          <div className="w-12 h-1 bg-primary/20 rounded-full ">
            <motion.div 
              animate={{ x: [-48, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-primary"
            />
          </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="flex flex-col gap-6">
        {/* Legacy / Before */}
        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-72 p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] flex items-center gap-6 relative group overflow-hidden"
        >
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
            <Clock className="w-14 h-14 text-black opacity-40 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <p className="text-lg font-black text-black uppercase tracking-widest mb-1">Standard Latency</p>
            <p className="text-lg font-black text-black group-hover:text-black transition-colors">2.4s</p>
          </div>
        </motion.div>

        {/* Optimized / After */}
        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-72 p-8 rounded-[2rem] bg-primary/[0.03] border border-primary/20 flex items-center gap-6 relative group overflow-hidden shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-primary/10 blur-2xl rounded-full" />
          
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
            <Zap className="w-14 h-14 text-black fill-white/20" />
          </div>
          <div>
            <p className="text-lg font-black text-black uppercase tracking-widest mb-1">Expert Optimization</p>
            <div className="flex items-center gap-4">
              <p className="text-lg font-black text-black">42ms</p>
              <div className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-lg font-black text-black">
                -98%
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

