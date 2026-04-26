"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, FileImage, FileCode, ArrowRight, User, Server } from 'lucide-react';

export function WebServerAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Server className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Internal Server Architecture</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Nginx & PHP-FPM Workflow</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full">
        
        {/* 1. Client (Outside) */}
        <div className="absolute left-0 flex flex-col items-center gap-6">
           <User className="w-36 w-36 text-black" />
           <motion.div
             animate={{ x: [0, 40, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
              <ArrowRight className="w-12 h-12 text-black" />
           </motion.div>
        </div>

        <div className="flex items-center gap-20 pl-20">
           
           {/* 2. Nginx (Front Door) */}
           <div className="flex flex-col items-center gap-6">
              <span className="text-lg font-black text-black uppercase tracking-widest">Front Door</span>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-72 p-8 rounded-[3rem] bg-primary/10 border border-primary/20 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col items-center gap-6 group"
              >
                 <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                 <ShieldCheck className="w-12 h-12 text-black relative z-10" />
                 <span className="text-lg font-black text-black relative z-10">Nginx / Apache</span>
              </motion.div>
           </div>

           {/* 3. Decision Logic */}
           <div className="flex flex-col gap-4">
              {/* Static Path */}
              <div className="flex items-center gap-6 group">
                 <motion.div
                   animate={{ x: [0, 20, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 >
                    <ArrowRight className="w-12 h-12 text-black/40" />
                 </motion.div>
                 <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10 grayscale group-hover:grayscale-0 transition-all">
                    <FileImage className="w-12 h-12 text-black" />
                    <span className="text-lg font-bold text-black uppercase">Static File (Fast)</span>
                 </div>
              </div>

              {/* Dynamic Path */}
              <div className="flex items-center gap-6 group">
                 <motion.div
                   animate={{ x: [0, 20, 0] }}
                   transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                 >
                    <ArrowRight className="w-12 h-12 text-black/40" />
                 </motion.div>
                 <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-amber-500/5 border border-amber-500/10 grayscale group-hover:grayscale-0 transition-all">
                    <FileCode className="w-12 h-12 text-black" />
                    <span className="text-lg font-bold text-black uppercase">PHP File (Logic)</span>
                 </div>
              </div>
           </div>

           {/* 4. PHP-FPM (The Engine) */}
           <div className="flex flex-col items-center gap-6">
              <span className="text-lg font-black text-black uppercase tracking-widest">Processing</span>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-72 p-8 rounded-[3rem] bg-secondary/10 border border-secondary/20 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col items-center gap-6 group"
              >
                 <Cpu className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black">PHP-FPM</span>
              </motion.div>
           </div>

        </div>

      </div>

      {/* Summary Note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-6 py-3 rounded-full"
      >
        <ShieldCheck className="w-12 h-12 text-black" />
        <span className="text-lg font-bold text-black uppercase tracking-widest">Nginx handles the "Crowd" while PHP-FPM handles the "Math"</span>
      </motion.div>
    </div>
  );
}
