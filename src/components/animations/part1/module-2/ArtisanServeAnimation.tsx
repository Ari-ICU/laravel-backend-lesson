"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Globe, Server, ArrowRight, Laptop, Activity, Wifi, Play, Square } from 'lucide-react';

export function ArtisanServeAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-sky-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Server className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Launching Your App</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Local PHP Development Server</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-20 relative z-20">
        
        {/* Terminal Side */}
        <div className="flex-1 flex flex-col items-center gap-8">
           <div className="w-full rounded-[2.5rem] border-4 border-black bg-slate-50 overflow-hidden shadow-2xl relative">
              <div className="px-6 py-4 bg-white border-b-4 border-black flex items-center justify-between">
                 <div className="flex gap-3">
                    <div className="w-4 h-4 rounded-full bg-black/10" />
                    <div className="w-4 h-4 rounded-full bg-black/10" />
                 </div>
                 <span className="text-xl font-black text-black uppercase tracking-widest font-mono">Terminal</span>
              </div>
              <div className="p-8 font-mono text-2xl h-44 flex flex-col justify-center">
                 <div className="flex items-center gap-6">
                    <span className="text-emerald-600 font-black">$</span>
                    <span className="text-black font-bold">php artisan serve</span>
                 </div>
                 <AnimatePresence>
                    {isRunning && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-emerald-700 mt-4 font-bold"
                      >
                         Server running on [127.0.0.1:8000]
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
           
           <button
             onClick={() => setIsRunning(!isRunning)}
             className={`flex items-center gap-6 px-10 py-4 rounded-full border-4 transition-all shadow-2xl ${isRunning ? 'bg-rose-500 border-black text-white' : 'bg-emerald-500 border-black text-white'}`}
           >
              {isRunning ? <Square className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current" />}
              <span className="text-2xl font-black uppercase tracking-widest">
                 {isRunning ? 'Stop Server' : 'Run Command'}
              </span>
           </button>
        </div>

        {/* Signal Connection */}
        <div className="relative flex flex-col items-center justify-center h-full">
           <div className="w-1 h-44 bg-black/10 relative">
              {isRunning && (
                <motion.div
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-4 h-12 bg-sky-500 border-2 border-black rounded-full"
                />
              )}
           </div>
           <div className="mt-6 flex flex-col items-center gap-2">
              <Wifi className={`w-12 h-12 transition-colors ${isRunning ? 'text-sky-600 animate-pulse' : 'text-black/20'}`} />
              <span className={`text-sm font-black uppercase tracking-widest ${isRunning ? 'text-black' : 'text-black/20'}`}>Connection</span>
           </div>
        </div>

        {/* Browser Side */}
        <div className="flex-1 flex flex-col items-center gap-8">
           <div className={`w-full rounded-[2.5rem] border-4 transition-all duration-700 overflow-hidden shadow-2xl relative bg-white ${isRunning ? 'border-black scale-105' : 'border-black/10 grayscale opacity-40'}`}>
              <div className="px-6 py-4 bg-slate-100 border-b-4 border-black/10 flex items-center gap-6">
                 <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-black/20" />
                    <div className="w-3 h-3 rounded-full bg-black/20" />
                 </div>
                 <div className="flex-1 bg-white border-2 border-black/10 rounded-full h-8 flex items-center px-4">
                    <span className="text-sm text-black/60 font-mono font-bold">http://127.0.0.1:8000</span>
                 </div>
              </div>
              <div className="h-44 flex items-center justify-center relative overflow-hidden">
                 <AnimatePresence mode="wait">
                    {isRunning ? (
                      <motion.div
                        key="active"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-4"
                      >
                         <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center border-2 border-sky-500">
                            <Globe className="w-10 h-10 text-sky-600" />
                         </div>
                         <span className="text-2xl font-black text-black uppercase tracking-widest underline decoration-4 decoration-sky-500">Laravel v11.x</span>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center gap-4 opacity-20">
                         <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center border-2 border-slate-300">
                            <Activity className="w-10 h-10 text-black" />
                         </div>
                         <span className="text-xl font-black text-black uppercase tracking-widest">Server Offline</span>
                      </div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border-2 border-black">
                <Laptop className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-black text-black uppercase tracking-widest">Live Preview Mode</span>
           </div>
        </div>

      </div>

      {/* Pro Tip Bar */}
      <motion.div
        animate={isRunning ? { scale: [1, 1.02, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`px-10 py-5 rounded-[2rem] border-4 transition-all shadow-xl relative z-30 ${isRunning ? 'bg-amber-500 border-black text-black' : 'bg-white border-black/10 text-black/40'}`}
      >
         <span className="text-xl font-black uppercase tracking-widest flex items-center gap-6">
            {isRunning ? (
              <>
                <Wifi className="w-8 h-8 animate-pulse" />
                Terminal must stay open to keep the site online!
              </>
            ) : 'Run the command above to view your website.'}
         </span>
      </motion.div>
    </div>
  );
}
