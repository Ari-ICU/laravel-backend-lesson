"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, Package, Download, Cloud, CheckCircle2, FastForward, Clock } from 'lucide-react';

export function LaravelCreationWaysAnimation() {
  const [selectedWay, setSelectedWay] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Terminal className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Project Creation Methods</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Composer vs. Laravel Installer</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-12">
        
        {/* Method 1: Composer */}
        <button
          onClick={() => setSelectedWay(1)}
          className={`group relative flex flex-col items-center gap-4 p-8 rounded-[3rem] border-2 transition-all ${selectedWay === 1 ? 'bg-primary/10 border-primary scale-105 shadow-2xl' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
        >
           <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
              <Package className="w-8 h-8 text-white/40 group-hover:text-primary transition-colors" />
           </div>
           <div className="text-center">
              <span className="text-[10px] font-black text-white uppercase tracking-widest block">Way 1</span>
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">composer create-project</span>
           </div>
           <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mt-2">
              <Clock className="w-3 h-3 text-white/40" />
              <span className="text-[8px] font-black text-white/40 uppercase">Standard Speed</span>
           </div>
        </button>

        <div className="w-12 h-12 flex items-center justify-center">
           <Zap className="w-6 h-6 text-white/10" />
        </div>

        {/* Method 2: Installer */}
        <button
          onClick={() => setSelectedWay(2)}
          className={`group relative flex flex-col items-center gap-4 p-8 rounded-[3rem] border-2 transition-all ${selectedWay === 2 ? 'bg-emerald-500/10 border-emerald-500 scale-105 shadow-2xl' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
        >
           <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
              <FastForward className="w-8 h-8 text-white/40 group-hover:text-emerald-400 transition-colors" />
           </div>
           <div className="text-center">
              <span className="text-[10px] font-black text-white uppercase tracking-widest block">Way 2</span>
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">laravel new</span>
           </div>
           <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mt-2">
              <Zap className="w-3 h-3 text-emerald-400" />
              <span className="text-[8px] font-black text-emerald-400 uppercase">Fast (Cached)</span>
           </div>
        </button>

      </div>

      {/* Animation Simulation */}
      <div className="h-24 flex items-center justify-center">
         <AnimatePresence mode="wait">
            {selectedWay && (
              <motion.div
                key={selectedWay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4"
              >
                 <div className="flex items-center gap-8">
                    <Cloud className="w-8 h-8 text-white/10" />
                    <div className="relative w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         animate={{ width: '100%' }}
                         transition={{ duration: selectedWay === 1 ? 4 : 1.5, ease: "linear" }}
                         className={`h-full ${selectedWay === 1 ? 'bg-primary' : 'bg-emerald-500'}`}
                       />
                    </div>
                    <CheckCircle2 className={`w-8 h-8 ${selectedWay === 1 ? 'text-primary' : 'text-emerald-500'}`} />
                 </div>
                 <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">
                    {selectedWay === 1 ? 'Downloading all components from server...' : 'Using cached packages & generating project...'}
                 </span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
