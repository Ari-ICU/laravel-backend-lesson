"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Split, ArrowRight, CheckCircle, Server, ShieldCheck, Zap } from 'lucide-react';

export function FormRequestAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isSplit, setIsSplit] = useState(false);

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-12 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center border-2 border-black shadow-lg">
          <FileCode className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Form Request Classes</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Professional Scaffolding & Separation</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full px-20 min-h-[300px] relative z-20">
        
        <AnimatePresence mode="wait">
          {!isSplit ? (
            <motion.div
              key="monolithic"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              className="w-[600px] rounded-[3rem] border-4 border-black bg-white p-10 shadow-2xl flex flex-col items-center gap-6"
            >
               <div className="w-full flex items-center justify-between border-b-2 border-black pb-4">
                  <span className="text-xl font-black uppercase tracking-widest text-black">Controller (Messy)</span>
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-rose-500" />
                     <div className="w-3 h-3 rounded-full bg-amber-500" />
                  </div>
               </div>
               <div className="w-full space-y-4 opacity-40">
                  <div className="h-4 bg-slate-200 rounded-full w-3/4" />
                  <div className="h-4 bg-emerald-200 rounded-full w-full border-2 border-emerald-500" />
                  <div className="h-4 bg-emerald-200 rounded-full w-full border-2 border-emerald-500" />
                  <div className="h-4 bg-emerald-200 rounded-full w-full border-2 border-emerald-500" />
                  <div className="h-4 bg-slate-200 rounded-full w-1/2" />
               </div>
               <div className="mt-4 px-6 py-2 bg-rose-100 border-2 border-rose-500 text-rose-700 rounded-full text-sm font-black uppercase tracking-widest">
                  Validation logic mixed with business logic
               </div>
            </motion.div>
          ) : (
            <motion.div
              key="split"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-12 w-full"
            >
               {/* Form Request Card */}
               <motion.div 
                 initial={{ x: -50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="flex-1 rounded-[2.5rem] border-4 border-black bg-emerald-50 p-8 shadow-xl flex flex-col items-center gap-4 relative"
               >
                  <div className="absolute -top-6 bg-emerald-500 border-2 border-black px-6 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest">
                     Validation Class
                  </div>
                  <ShieldCheck className="w-16 h-16 text-emerald-600" />
                  <h4 className="text-xl font-black text-black uppercase tracking-widest">StorePostRequest</h4>
                  <div className="w-full space-y-2">
                     <div className="h-2 bg-emerald-500/20 rounded-full w-full" />
                     <div className="h-2 bg-emerald-500/20 rounded-full w-full" />
                  </div>
               </motion.div>

               <ArrowRight className="w-12 h-12 text-black animate-pulse" />

               {/* Clean Controller Card */}
               <motion.div 
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 className="flex-1 rounded-[2.5rem] border-4 border-black bg-white p-8 shadow-xl flex flex-col items-center gap-4 relative"
               >
                  <div className="absolute -top-6 bg-black border-2 border-black px-6 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest">
                     Clean Controller
                  </div>
                  <Server className="w-16 h-16 text-black" />
                  <h4 className="text-xl font-black text-black uppercase tracking-widest">PostController</h4>
                  <div className="w-full space-y-2 opacity-20">
                     <div className="h-2 bg-slate-400 rounded-full w-3/4" />
                     <div className="h-2 bg-slate-400 rounded-full w-1/2" />
                  </div>
               </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-8 relative z-30">
        <button
          onClick={() => setIsSplit(!isSplit)}
          className={`flex items-center gap-6 px-12 py-6 rounded-full border-4 transition-all shadow-2xl font-black uppercase tracking-[0.2em] ${isSplit ? 'bg-amber-500 border-black text-black' : 'bg-black border-black text-white'} active:scale-95`}
        >
          {isSplit ? <Zap className="w-8 h-8" /> : <Split className="w-8 h-8" />}
          {isSplit ? 'Restore Original' : 'Refactor to Form Request'}
        </button>
      </div>

      {/* Logic Insight */}
      <div className="h-20 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {isSplit ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-emerald-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4"
              >
                <CheckCircle className="w-8 h-8 text-emerald-600" />
                <span className="text-xl font-black text-black uppercase tracking-widest">Logic is now decoupled & easier to test!</span>
              </motion.div>
            ) : null}
         </AnimatePresence>
      </div>
    </div>
  );
}
