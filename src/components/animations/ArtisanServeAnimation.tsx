"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Globe, Server, ArrowRight, Laptop, Activity, Wifi, Play } from 'lucide-react';

export function ArtisanServeAnimation() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Server className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Launching Your App</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Local PHP Development Server</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-12">
        
        {/* Terminal Side */}
        <div className="flex-1 flex flex-col items-center gap-4">
           <div className="w-full rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl relative">
              <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between">
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                 </div>
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">Terminal</span>
              </div>
              <div className="p-6 font-mono text-[10px] h-24 flex flex-col justify-center">
                 <div className="flex items-center gap-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-white/80">php artisan serve</span>
                 </div>
                 <AnimatePresence>
                    {isRunning && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sky-400 mt-2"
                      >
                         Server running on [127.0.0.1:8000]
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
           
           <button
             onClick={() => setIsRunning(!isRunning)}
             className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 transition-all ${isRunning ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' : 'bg-primary/10 border-primary shadow-lg shadow-primary/20 text-white'}`}
           >
              {isRunning ? <Activity className="w-4 h-4 animate-pulse" /> : <Play className="w-4 h-4" />}
              <span className="text-[10px] font-black uppercase tracking-widest">
                 {isRunning ? 'Stop Server' : 'Run Command'}
              </span>
           </button>
        </div>

        {/* Signal Connection */}
        <div className="relative flex flex-col items-center justify-center h-full">
           <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent relative">
              {isRunning && (
                <motion.div
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-1 h-8 bg-primary blur-sm rounded-full"
                />
              )}
           </div>
           <Wifi className={`w-6 h-6 transition-colors ${isRunning ? 'text-primary animate-pulse' : 'text-white/5'}`} />
        </div>

        {/* Browser Side */}
        <div className="flex-1 flex flex-col items-center gap-4">
           <div className={`w-full rounded-2xl border transition-all duration-700 overflow-hidden shadow-2xl relative bg-[#1c1c1c] ${isRunning ? 'border-primary/40' : 'border-white/10 grayscale opacity-40'}`}>
              <div className="px-4 py-2 bg-[#2d2d2d] flex items-center gap-3">
                 <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                 </div>
                 <div className="flex-1 bg-black/20 rounded h-4 flex items-center px-2">
                    <span className="text-[7px] text-white/30 font-mono">127.0.0.1:8000</span>
                 </div>
              </div>
              <div className="h-28 flex items-center justify-center relative overflow-hidden bg-white/5">
                 <AnimatePresence>
                    {isRunning ? (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-2"
                      >
                         <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                            <Globe className="w-5 h-5 text-primary" />
                         </div>
                         <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Laravel v11.x</span>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                            <Activity className="w-5 h-5 text-white/10" />
                         </div>
                         <span className="text-[8px] font-black text-white/10 uppercase tracking-widest">Server Offline</span>
                      </div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
           
           <div className="flex items-center gap-2 text-white/20">
              <Laptop className="w-4 h-4" />
              <span className="text-[8px] font-black uppercase tracking-widest">Live Preview Mode</span>
           </div>
        </div>

      </div>

      {/* Pro Tip */}
      <motion.div
        animate={isRunning ? { scale: [1, 1.05, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`px-6 py-2 rounded-full border transition-all ${isRunning ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-white/[0.02] border-white/5 text-white/20'}`}
      >
         <span className="text-[10px] font-bold uppercase tracking-widest">
            {isRunning ? 'Terminal must stay open to keep the site online!' : 'Run the command to view your website.'}
         </span>
      </motion.div>
    </div>
  );
}
