"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Box, ArrowRight, Code2, Layers, Table, User, Package, CheckCircle2, Workflow } from 'lucide-react';

export function EloquentORMSimulator({ isProjectorMode }: { isProjectorMode?: boolean }) {
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
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Workflow className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Eloquent ORM</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Bridging Rows to Objects</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12">
        
        {/* Database Side (The Row) */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full max-w-[220px] rounded-[2rem] border-2 transition-all duration-500 p-5 flex flex-col gap-4 relative ${step >= 1 ? 'bg-primary/5 border-primary/30 shadow-2xl shadow-primary/10' : 'bg-slate-50/5 border-slate-900/10'}`}>
              <div className="flex items-center gap-6 mb-2 text-black">
                 <Table className="w-12 h-12" />
                 <span className="text-lg font-black uppercase tracking-widest">products Table</span>
              </div>
              
              <div className="space-y-4">
                 <div className="grid grid-cols-3 gap-6 border-b border-slate-900/10 pb-1 mb-2">
                    <span className="text-lg font-black text-black uppercase">id</span>
                    <span className="text-lg font-black text-black uppercase">name</span>
                    <span className="text-lg font-black text-black uppercase">price</span>
                 </div>
                 <div className={`grid grid-cols-3 gap-6 p-2 rounded-lg transition-all duration-500 ${step >= 1 ? 'bg-primary/20 border border-primary/30' : 'bg-slate-50/5'}`}>
                    <span className="text-lg font-mono text-black">1</span>
                    <span className="text-lg font-mono text-black font-bold truncate">iPhone</span>
                    <span className="text-lg font-mono text-black">$999</span>
                 </div>
              </div>

              <button 
                onClick={startMapping}
                disabled={isMapping}
                className={`mt-4 w-full h-10 rounded-2xl flex items-center justify-center transition-all ${isMapping ? 'bg-slate-50/5 border border-slate-900/10 text-black' : 'bg-primary border border-primary/50 text-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'}`}
              >
                 <span className="text-lg font-black uppercase tracking-widest">{isMapping ? 'Mapping...' : 'Find(1)'}</span>
              </button>
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Relational Data</span>
        </div>

        {/* The Connector */}
        <div className="relative w-36 flex flex-col items-center justify-center">
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
                      <Box className="w-12 h-12 text-black" />
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
           <ArrowRight className={`w-36 w-36 transition-colors duration-500 ${step > 0 ? 'text-black' : 'text-black'}`} />
        </div>

        {/* PHP Side (The Model) */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full max-w-[240px] rounded-[2rem] border-2 transition-all duration-700 p-6 flex flex-col gap-6 relative overflow-hidden ${step >= 2 ? 'bg-slate-50 border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-slate-50/5 border-slate-900/10 opacity-20'}`}>
              <div className="flex items-center justify-between border-b border-slate-900/5 pb-2">
                 <div className="flex items-center gap-6">
                    <Code2 className="w-12 h-12 text-black" />
                    <span className="text-lg font-black text-black uppercase tracking-widest font-mono">Product Model</span>
                 </div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>

              <div className="font-mono text-lg space-y-6">
                 <div className="text-black">class Product extends <span className="text-black">Model</span> {"{"}</div>
                 
                 <AnimatePresence>
                    {step >= 2 && (
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="pl-4 space-y-4"
                      >
                         <div className="flex flex-col gap-6 bg-slate-50/5 p-3 rounded-xl border border-slate-900/5">
                            <div className="flex justify-between items-center">
                               <span className="text-black text-lg">$item-&gt;name</span>
                               <span className="text-black font-bold">"iPhone"</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-black text-lg">$item-&gt;price</span>
                               <span className="text-black font-bold">999</span>
                            </div>
                         </div>
                         
                         {step === 3 && (
                           <motion.div
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             className="flex items-center gap-6 text-black mt-2 bg-emerald-500/10 p-2 rounded-lg"
                           >
                              <CheckCircle2 className="w-12 h-12" />
                              <span className="text-lg font-black uppercase tracking-widest">Object Hydrated!</span>
                           </motion.div>
                         )}
                      </motion.div>
                    )}
                 </AnimatePresence>
                 
                 <div className="text-black">{"}"}</div>
              </div>

              {step === 3 && (
                <button 
                  onClick={reset}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-50/5 border border-slate-900/10 hover:bg-slate-50/10 transition-colors"
                >
                   <History className="w-12 h-12 text-black" />
                </button>
              )}
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Active Record Pattern</span>
        </div>

      </div>

      {/* Explainer */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${step === 3 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}>
         <span className="text-lg font-black uppercase tracking-[0.2em] leading-relaxed text-black">
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
