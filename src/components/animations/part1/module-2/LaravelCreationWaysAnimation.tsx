"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, Package, Download, Cloud, CheckCircle2, FastForward, Clock } from 'lucide-react';

export function LaravelCreationWaysAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [selectedWay, setSelectedWay] = useState<number | null>(null);

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-sky-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Terminal className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Project Creation Methods</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Composer vs. Laravel Installer</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-12 relative z-20">
        
        {/* Method 1: Composer */}
        <button
          onClick={() => setSelectedWay(1)}
          className={`group relative flex flex-col items-center gap-6 p-10 rounded-[4rem] border-4 transition-all ${selectedWay === 1 ? 'bg-sky-500 border-black scale-105 shadow-2xl' : 'bg-white border-black hover:border-sky-500 shadow-xl'}`}
        >
           <div className={`w-32 h-32 rounded-3xl flex items-center justify-center border-2 transition-colors ${selectedWay === 1 ? 'bg-white border-black' : 'bg-slate-50 border-black/10'}`}>
              <Package className="w-16 h-16 text-black" />
           </div>
           <div className="text-center">
              <span className="text-xl font-black text-black uppercase tracking-widest block">Standard Way</span>
              <span className="text-lg font-bold text-black uppercase tracking-widest">composer create-project</span>
           </div>
           <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-black/5 border border-black/10 mt-2">
              <Clock className="w-6 h-6 text-black" />
              <span className="text-lg font-black text-black uppercase">Reliable & Simple</span>
           </div>
        </button>

        <div className="w-16 h-16 flex items-center justify-center">
           <Zap className="w-16 h-16 text-black" />
        </div>

        {/* Method 2: Installer */}
        <button
          onClick={() => setSelectedWay(2)}
          className={`group relative flex flex-col items-center gap-6 p-10 rounded-[4rem] border-4 transition-all ${selectedWay === 2 ? 'bg-emerald-500 border-black scale-105 shadow-2xl' : 'bg-white border-black hover:border-emerald-500 shadow-xl'}`}
        >
           <div className={`w-32 h-32 rounded-3xl flex items-center justify-center border-2 transition-colors ${selectedWay === 2 ? 'bg-white border-black' : 'bg-slate-50 border-black/10'}`}>
              <FastForward className="w-16 h-16 text-black" />
           </div>
           <div className="text-center">
              <span className="text-xl font-black text-black uppercase tracking-widest block">Pro Way</span>
              <span className="text-lg font-bold text-black uppercase tracking-widest">laravel new</span>
           </div>
           <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-black/5 border border-black/10 mt-2">
              <Zap className="w-6 h-6 text-black" />
              <span className="text-lg font-black text-black uppercase">Fast & Modern</span>
           </div>
        </button>

      </div>

      {/* Animation Simulation */}
      <div className="h-40 flex items-center justify-center w-full relative z-30 px-20">
         <AnimatePresence mode="wait">
            {selectedWay && (
              <motion.div
                key={selectedWay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-8 bg-white border-4 border-black p-8 rounded-[3rem] shadow-2xl w-full max-w-4xl"
              >
                 <div className="flex items-center gap-10 w-full">
                    <Cloud className="w-16 h-16 text-black" />
                    <div className="flex-1 h-6 bg-black/10 rounded-full overflow-hidden border-2 border-black">
                       <motion.div
                         initial={{ width: 0 }}
                         animate={{ width: '100%' }}
                         transition={{ duration: selectedWay === 1 ? 4 : 1.5, ease: "linear" }}
                         className={`h-full ${selectedWay === 1 ? 'bg-sky-500' : 'bg-emerald-500'}`}
                       />
                    </div>
                    <CheckCircle2 className="w-16 h-16 text-black" />
                 </div>
                 <span className="text-2xl font-black text-black uppercase tracking-[0.2em] text-center">
                    {selectedWay === 1 ? 'Downloading all components from server...' : 'Using cached packages & generating project...'}
                 </span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
