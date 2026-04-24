"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Box, ArrowRight, Code2, Layers, Table, User, Package, CheckCircle2, Workflow } from 'lucide-react';

export function EloquentORMSimulator() {
  const [isMapping, setIsMapping] = useState(false);
  const [step, setStep] = useState(0);

  const startMapping = () => {
    setIsMapping(true);
    setStep(1);
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => setStep(3), 3000);
  };

  const reset = () => {
    setIsMapping(false);
    setStep(0);
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Workflow className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Eloquent ORM</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Bridging Rows to Objects</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12">
        
        {/* Database Side (The Row) */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className={`w-full max-w-[220px] rounded-[2rem] border-2 transition-all duration-500 p-5 flex flex-col gap-3 relative ${step >= 1 ? 'bg-primary/5 border-primary/30 shadow-2xl shadow-primary/10' : 'bg-white/5 border-white/10'}`}>
              <div className="flex items-center gap-2 mb-2 text-white/20">
                 <Table className="w-3 h-3" />
                 <span className="text-[8px] font-black uppercase tracking-widest">products Table</span>
              </div>
              
              <div className="space-y-1">
                 <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-1 mb-2">
                    <span className="text-[7px] font-black text-white/20 uppercase">id</span>
                    <span className="text-[7px] font-black text-white/20 uppercase">name</span>
                    <span className="text-[7px] font-black text-white/20 uppercase">price</span>
                 </div>
                 <div className={`grid grid-cols-3 gap-2 p-2 rounded-lg transition-all duration-500 ${step >= 1 ? 'bg-primary/20 border border-primary/30' : 'bg-white/5'}`}>
                    <span className="text-[9px] font-mono text-white/40">1</span>
                    <span className="text-[9px] font-mono text-emerald-400 font-bold truncate">iPhone</span>
                    <span className="text-[9px] font-mono text-amber-400">$999</span>
                 </div>
              </div>

              <button 
                onClick={startMapping}
                disabled={isMapping}
                className={`mt-4 w-full h-10 rounded-2xl flex items-center justify-center transition-all ${isMapping ? 'bg-white/5 border border-white/10 text-white/20' : 'bg-primary border border-primary/50 text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'}`}
              >
                 <span className="text-[9px] font-black uppercase tracking-widest">{isMapping ? 'Mapping...' : 'Find(1)'}</span>
              </button>
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Relational Data</span>
        </div>

        {/* The Connector */}
        <div className="relative w-24 flex flex-col items-center justify-center">
           <AnimatePresence>
              {step === 1 && (
                <motion.div
                  initial={{ x: -40, opacity: 0, scale: 0.5 }}
                  animate={{ x: 40, opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute z-20"
                >
                   <div className="w-12 h-12 bg-primary/20 border-2 border-primary/40 rounded-full flex items-center justify-center relative shadow-2xl">
                      <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full animate-pulse" />
                      <Box className="w-6 h-6 text-primary" />
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
           <ArrowRight className={`w-8 h-8 transition-colors duration-500 ${step > 0 ? 'text-primary' : 'text-white/5'}`} />
        </div>

        {/* PHP Side (The Model) */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className={`w-full max-w-[240px] rounded-[2rem] border-2 transition-all duration-700 p-6 flex flex-col gap-4 relative overflow-hidden ${step >= 2 ? 'bg-[#0d1117] border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-white/5 border-white/10 opacity-20'}`}>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                 <div className="flex items-center gap-2">
                    <Code2 className="w-3 h-3 text-emerald-400" />
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">Product Model</span>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>

              <div className="font-mono text-[10px] space-y-4">
                 <div className="text-white/40">class Product extends <span className="text-emerald-400">Model</span> {"{"}</div>
                 
                 <AnimatePresence>
                    {step >= 2 && (
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="pl-4 space-y-3"
                      >
                         <div className="flex flex-col gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                            <div className="flex justify-between items-center">
                               <span className="text-white/40 text-[8px]">$item-&gt;name</span>
                               <span className="text-emerald-400 font-bold">"iPhone"</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-white/40 text-[8px]">$item-&gt;price</span>
                               <span className="text-amber-400 font-bold">999</span>
                            </div>
                         </div>
                         
                         {step === 3 && (
                           <motion.div
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             className="flex items-center gap-2 text-emerald-400 mt-2 bg-emerald-500/10 p-2 rounded-lg"
                           >
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-[9px] font-black uppercase tracking-widest">Object Hydrated!</span>
                           </motion.div>
                         )}
                      </motion.div>
                    )}
                 </AnimatePresence>
                 
                 <div className="text-white/40">{"}"}</div>
              </div>

              {step === 3 && (
                <button 
                  onClick={reset}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                   <History className="w-3 h-3 text-white/40" />
                </button>
              )}
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Active Record Pattern</span>
        </div>

      </div>

      {/* Explainer */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${step === 3 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-white/5 opacity-40'}`}>
         <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-white/80">
            {step === 3 ? "Eloquent maps database columns to PHP properties automatically!" : "Click 'Find(1)' to see the ORM magic."}
         </span>
      </div>
    </div>
  );
}

function History(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}
