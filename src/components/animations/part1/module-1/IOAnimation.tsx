"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Keyboard, Monitor, ArrowRight, ArrowLeft, MessageSquare, User, Cpu } from 'lucide-react';

export function IOAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Terminal className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">I/O Visualizer</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Input (readline) & Output (echo)</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-24">
        
        {/* 1. Input Side (User/Keyboard) */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[2.5rem] bg-white/[0.02] border border-slate-900/10 backdrop-blur-xl flex flex-col items-center gap-6 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
              <Keyboard className="w-14 h-14 text-black" />
            </div>
            <div className="text-center">
              <p className="text-lg font-black text-black uppercase tracking-widest mb-1">User Input</p>
              <p className="text-lg font-bold text-black">readline()</p>
            </div>
          </motion.div>

          {/* Input Particle */}
          <motion.div
            animate={{ x: [0, 100], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-6"
          >
            <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-lg font-mono text-black">"Dara"</div>
            <ArrowRight className="w-12 h-12 text-black/40" />
          </motion.div>
        </div>

        {/* 2. Processing (PHP Engine) */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-10 w-72 h-72 rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex flex-col items-center justify-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <Cpu className="w-12 h-12 text-black mb-3 relative z-10" />
          <div className="relative z-10 text-center">
            <p className="text-lg font-black text-black tracking-tight">$name</p>
            <p className="text-lg font-bold text-black uppercase tracking-widest">Variable Store</p>
          </div>
        </motion.div>

        {/* 3. Output Side (Monitor/Screen) */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[2.5rem] bg-white/[0.02] border border-slate-900/10 backdrop-blur-xl flex flex-col items-center gap-6 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20 group-hover:scale-110 transition-transform">
              <Monitor className="w-14 h-14 text-black" />
            </div>
            <div className="text-center">
              <p className="text-lg font-black text-black uppercase tracking-widest mb-1">System Output</p>
              <p className="text-lg font-bold text-black">echo</p>
            </div>
          </motion.div>

          {/* Output Particle */}
          <motion.div
            animate={{ x: [-100, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="flex items-center gap-6"
          >
            <ArrowLeft className="w-12 h-12 text-black/40" />
            <div className="px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-lg font-mono text-black">"សួស្តី Dara!"</div>
          </motion.div>
        </div>

      </div>

      {/* Note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-4 py-2 rounded-full"
      >
        <MessageSquare className="w-12 h-12 text-black" />
        <span className="text-lg font-bold text-black uppercase tracking-widest">Use <span className="text-black">readline</span> for CLI and <span className="text-black">echo</span> for display</span>
      </motion.div>
    </div>
  );
}
