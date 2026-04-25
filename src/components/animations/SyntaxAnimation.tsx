"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Globe, ArrowRight, Code, FileCode, CheckCircle2, Cpu } from 'lucide-react';

export function SyntaxAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Server className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Server-Side Execution</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">PHP Processing Flow</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20">
        
        {/* 1. Server Side (PHP Processing) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Server Side</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-64 p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl"
          >
             <div className="absolute inset-0 bg-primary/5 animate-pulse" />
             
             <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Cpu className="w-6 h-6 text-primary" />
                   </div>
                   <span className="text-xs font-black text-white/40 uppercase tracking-widest">PHP Engine</span>
                </div>

                {/* Code snippets */}
                <div className="space-y-2">
                   <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/5 font-mono text-[10px]">
                      <span className="text-primary">$greeting</span>
                      <span className="text-white/40">variable</span>
                   </div>
                   <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/5 font-mono text-[10px]">
                      <span className="text-secondary">;</span>
                      <span className="text-white/40">semicolon</span>
                   </div>
                   <div className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/5 font-mono text-[10px]">
                      <span className="text-emerald-400">&lt;?php</span>
                      <span className="text-white/40">tag</span>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        {/* 2. Transition (Rendering) */}
        <div className="flex flex-col items-center gap-4">
           <motion.div
             animate={{ x: [0, 50, 0] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="flex items-center gap-2"
           >
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
              <ArrowRight className="w-5 h-5 text-primary" />
           </motion.div>
           <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Rendering to HTML</span>
        </div>

        {/* 3. Client Side (Browser Display) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Client Side</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-64 p-8 rounded-[3rem] bg-secondary/[0.03] border border-secondary/20 backdrop-blur-xl relative overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-secondary/5" />
             
             <div className="relative z-10 flex flex-col items-center gap-6">
                <Globe className="w-16 h-16 text-secondary opacity-40" />
                <div className="text-center">
                   <p className="text-sm font-black text-white tracking-tight">"Hello World"</p>
                   <p className="text-[9px] font-bold text-secondary uppercase tracking-widest mt-1">Pure HTML Output</p>
                </div>
                <div className="w-full h-px bg-secondary/20" />
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                   <span className="text-[10px] font-bold text-white/40 uppercase">Done</span>
                </div>
             </div>
          </motion.div>
        </div>

      </div>

      {/* Syntax Tip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full"
      >
        <Code className="w-3 h-3 text-primary" />
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Remember: Variables start with <span className="text-primary">$</span> and lines end with <span className="text-secondary">;</span></span>
      </motion.div>
    </div>
  );
}
