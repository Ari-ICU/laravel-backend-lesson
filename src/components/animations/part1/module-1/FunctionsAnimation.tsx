"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ArrowRight, Zap, Target, Box, Database, Sparkles } from 'lucide-react';

export function FunctionsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Settings className="w-12 h-12 text-black animate-spin-slow" />
        <div>
          <h3 className="text-xl font-black text-black">Function Factory</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Input → Process → Output</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20">
        
        {/* 1. Arguments (Inputs) */}
        <div className="flex flex-col gap-6">
          <p className="text-lg font-black text-black uppercase tracking-[0.3em] mb-2 text-center">Arguments</p>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="group relative"
          >
            <div className="px-6 py-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/10 flex items-center gap-4 shadow-xl">
              <span className="text-lg font-mono text-black">10</span>
              <span className="text-lg font-bold text-black uppercase">int</span>
            </div>
            <motion.div 
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-8 top-1/2 -translate-y-1/2"
            >
              <ArrowRight className="w-12 h-12 text-black/40" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="group relative"
          >
            <div className="px-6 py-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/10 flex items-center gap-4 shadow-xl">
              <span className="text-lg font-mono text-black">20</span>
              <span className="text-lg font-bold text-black uppercase">int</span>
            </div>
            <motion.div 
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2"
            >
              <ArrowRight className="w-12 h-12 text-black/40" />
            </motion.div>
          </motion.div>
        </div>

        {/* 2. Function Box (Process) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 w-96 h-96 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-primary/5 border border-slate-900/10 backdrop-blur-2xl flex flex-col items-center justify-center shadow-2xl overflow-hidden"
        >
          {/* Animated Internal Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-primary rounded-full blur-[60px]"
          />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="w-42 h-42 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-inner">
              <Zap className="w-36 w-36 text-black fill-primary/20" />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-black text-black tracking-tight">sum()</h4>
              <p className="text-lg font-bold text-black uppercase tracking-widest">Processing...</p>
            </div>
          </div>

          {/* Type Hinting Check */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
               <div className="w-1 h-1 rounded-full bg-emerald-400" />
               <span className="text-lg font-black text-black uppercase tracking-widest">Type Checked</span>
            </div>
          </div>
        </motion.div>

        {/* 3. Return Value (Output) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-black text-black uppercase tracking-[0.3em] mb-2 text-center">Return Value</p>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="relative"
          >
            <div className="px-8 py-5 rounded-[2rem] bg-primary text-black shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-slate-900/20 flex flex-col items-center gap-4">
              <span className="text-lg font-black">30</span>
              <span className="text-lg font-black uppercase tracking-widest opacity-60">Result : int</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 border border-primary/30 rounded-[2.5rem] border-dashed pointer-events-none"
            />
            <Sparkles className="absolute -top-3 -right-3 w-12 h-12 text-yellow-400 animate-pulse" />
          </motion.div>
        </div>

      </div>

      {/* Logic Note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-4 py-2 rounded-full"
      >
        <Target className="w-12 h-12 text-black" />
        <span className="text-lg font-bold text-black uppercase tracking-widest">Arguments are the <span className="text-black">Values</span> passed to Parameters</span>
      </motion.div>
    </div>
  );
}
