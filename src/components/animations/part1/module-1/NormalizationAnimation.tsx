"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, Table, CheckCircle2, Split, Database, AlertTriangle } from 'lucide-react';

export function NormalizationAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0);

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layers className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Database Normalization</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Reducing Redundancy (DRY for DB)</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-4">
        
        {/* Step Indicator */}
        <div className="flex gap-6">
           {[0, 1].map((i) => (
             <button
               key={i}
               onClick={() => setStep(i)}
               className={`px-4 py-1.5 rounded-full text-lg font-black uppercase tracking-widest transition-all ${step === i ? 'bg-primary text-black' : 'bg-slate-50/5 text-black hover:bg-slate-50/10'}`}
             >
                {i === 0 ? 'Messy (Redundant)' : 'Clean (Normalized)'}
             </button>
           ))}
        </div>

        <div className="relative w-full min-h-[280px] flex items-center justify-center">
           <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div
                  key="unnormalized"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col gap-6 items-center"
                >
                   <div className="flex items-center gap-6 text-black">
                      <AlertTriangle className="w-12 h-12" />
                      <span className="text-lg font-black uppercase tracking-widest">Redundant Data</span>
                   </div>
                   <div className="w-[500px] rounded-2xl border border-rose-500/20 bg-rose-500/5 overflow-hidden">
                      <div className="grid grid-cols-4 gap-6 p-4 bg-rose-500/10 border-b border-rose-500/20 text-lg font-black text-black uppercase">
                         <span>Order ID</span>
                         <span>Customer</span>
                         <span>Email</span>
                         <span>Product</span>
                      </div>
                      <div className="p-2 space-y-4">
                         <div className="grid grid-cols-4 gap-6 p-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/5 text-lg font-bold text-black">
                            <span className="font-mono">101</span>
                            <span className="text-black">Dara</span>
                            <span className="text-black">dara@dev.com</span>
                            <span>Keyboard</span>
                         </div>
                         <div className="grid grid-cols-4 gap-6 p-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/5 text-lg font-bold text-black">
                            <span className="font-mono">102</span>
                            <span className="text-black">Dara</span>
                            <span className="text-black">dara@dev.com</span>
                            <span>Monitor</span>
                         </div>
                         <div className="text-center p-2 text-lg font-black text-black/40 uppercase animate-pulse">
                            Warning: Customer info is duplicated!
                         </div>
                      </div>
                   </div>
                </motion.div>
              ) : (
                <motion.div
                  key="normalized"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-center gap-4"
                >
                   {/* Table 1: Customers */}
                   <div className="flex flex-col gap-4">
                      <span className="text-lg font-black text-black uppercase tracking-widest text-center">Customers</span>
                      <div className="w-72 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden shadow-2xl">
                         <div className="grid grid-cols-2 gap-6 p-3 bg-emerald-500/10 border-b border-emerald-500/20 text-lg font-black text-black uppercase">
                            <span>ID</span>
                            <span>Name</span>
                         </div>
                         <div className="p-2">
                            <div className="grid grid-cols-2 gap-6 p-2 rounded-lg bg-slate-50/[0.03] text-lg font-bold text-black">
                               <span className="font-mono text-black">1</span>
                               <span>Dara</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   <Split className="w-12 h-12 text-black" />

                   {/* Table 2: Orders */}
                   <div className="flex flex-col gap-4">
                      <span className="text-lg font-black text-black uppercase tracking-widest text-center">Orders</span>
                      <div className="w-96 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden shadow-2xl">
                         <div className="grid grid-cols-3 gap-6 p-3 bg-primary/10 border-b border-primary/20 text-lg font-black text-black uppercase">
                            <span>ID</span>
                            <span>User ID</span>
                            <span>Product</span>
                         </div>
                         <div className="p-2 space-y-4">
                            <div className="grid grid-cols-3 gap-6 p-2 rounded-lg bg-slate-50/[0.03] text-lg font-bold text-black">
                               <span className="font-mono">101</span>
                               <span className="font-mono text-black">1</span>
                               <span>Keyboard</span>
                            </div>
                            <div className="grid grid-cols-3 gap-6 p-2 rounded-lg bg-slate-50/[0.03] text-lg font-bold text-black">
                               <span className="font-mono">102</span>
                               <span className="font-mono text-black">1</span>
                               <span>Monitor</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Benefits */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-full">
         <motion.div animate={{ opacity: step === 1 ? 1 : 0.3 }} className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-slate-900/5">
            <CheckCircle2 className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">No Duplicates</span>
         </motion.div>
         <motion.div animate={{ opacity: step === 1 ? 1 : 0.3 }} className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-slate-900/5">
            <Database className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">Smaller Size</span>
         </motion.div>
         <motion.div animate={{ opacity: step === 1 ? 1 : 0.3 }} className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-slate-900/5">
            <Layers className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">Easy to Maintain</span>
         </motion.div>
      </div>
    </div>
  );
}
