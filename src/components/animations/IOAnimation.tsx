"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Keyboard, Monitor, ArrowRight, ArrowLeft, MessageSquare, User, Cpu } from 'lucide-react';

export function IOAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Terminal className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">I/O Visualizer</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Input (readline) & Output (echo)</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-24">
        
        {/* 1. Input Side (User/Keyboard) */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-48 p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
              <Keyboard className="w-7 h-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">User Input</p>
              <p className="text-xs font-bold text-white/80">readline()</p>
            </div>
          </motion.div>

          {/* Input Particle */}
          <motion.div
            animate={{ x: [0, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2"
          >
            <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-mono text-primary">"Dara"</div>
            <ArrowRight className="w-4 h-4 text-primary/40" />
          </motion.div>
        </div>

        {/* 2. Processing (PHP Engine) */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-10 w-48 h-48 rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex flex-col items-center justify-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <Cpu className="w-12 h-12 text-primary mb-3 relative z-10" />
          <div className="relative z-10 text-center">
            <p className="text-sm font-black text-white tracking-tight">$name</p>
            <p className="text-[9px] font-bold text-primary uppercase tracking-widest">Variable Store</p>
          </div>
        </motion.div>

        {/* 3. Output Side (Monitor/Screen) */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-48 p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <Monitor className="w-7 h-7 text-secondary" />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">System Output</p>
              <p className="text-xs font-bold text-white/80">echo</p>
            </div>
          </motion.div>

          {/* Output Particle */}
          <motion.div
            animate={{ x: [-100, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-secondary/40" />
            <div className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-[10px] font-mono text-secondary">"សួស្តី Dara!"</div>
          </motion.div>
        </div>

      </div>

      {/* Note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full"
      >
        <MessageSquare className="w-3 h-3 text-primary" />
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Use <span className="text-primary">readline</span> for CLI and <span className="text-secondary">echo</span> for display</span>
      </motion.div>
    </div>
  );
}
