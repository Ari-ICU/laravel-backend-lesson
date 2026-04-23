"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, Table, CheckCircle2, Split, Database, AlertTriangle } from 'lucide-react';

export function NormalizationAnimation() {
  const [step, setStep] = useState(0);

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layers className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Database Normalization</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Reducing Redundancy (DRY for DB)</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        
        {/* Step Indicator */}
        <div className="flex gap-2">
           {[0, 1].map((i) => (
             <button
               key={i}
               onClick={() => setStep(i)}
               className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${step === i ? 'bg-primary text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
             >
                {i === 0 ? 'Messy (Redundant)' : 'Clean (Normalized)'}
             </button>
           ))}
        </div>

        <div className="relative w-full h-[280px] flex items-center justify-center">
           <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div
                  key="unnormalized"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex flex-col gap-4 items-center"
                >
                   <div className="flex items-center gap-2 text-rose-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Redundant Data</span>
                   </div>
                   <div className="w-[500px] rounded-2xl border border-rose-500/20 bg-rose-500/5 overflow-hidden">
                      <div className="grid grid-cols-4 gap-4 p-4 bg-rose-500/10 border-b border-rose-500/20 text-[9px] font-black text-rose-400 uppercase">
                         <span>Order ID</span>
                         <span>Customer</span>
                         <span>Email</span>
                         <span>Product</span>
                      </div>
                      <div className="p-2 space-y-1">
                         <div className="grid grid-cols-4 gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-bold text-white/80">
                            <span className="font-mono">101</span>
                            <span className="text-rose-300">Dara</span>
                            <span className="text-rose-300">dara@dev.com</span>
                            <span>Keyboard</span>
                         </div>
                         <div className="grid grid-cols-4 gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-bold text-white/80">
                            <span className="font-mono">102</span>
                            <span className="text-rose-300">Dara</span>
                            <span className="text-rose-300">dara@dev.com</span>
                            <span>Monitor</span>
                         </div>
                         <div className="text-center p-2 text-[9px] font-black text-rose-400/40 uppercase animate-pulse">
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
                  className="flex items-center gap-12"
                >
                   {/* Table 1: Customers */}
                   <div className="flex flex-col gap-3">
                      <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest text-center">Customers</span>
                      <div className="w-48 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden shadow-2xl">
                         <div className="grid grid-cols-2 gap-4 p-3 bg-emerald-500/10 border-b border-emerald-500/20 text-[8px] font-black text-emerald-400 uppercase">
                            <span>ID</span>
                            <span>Name</span>
                         </div>
                         <div className="p-2">
                            <div className="grid grid-cols-2 gap-4 p-2 rounded-lg bg-white/[0.03] text-[10px] font-bold text-white/80">
                               <span className="font-mono text-emerald-400">1</span>
                               <span>Dara</span>
                            </div>
                         </div>
                      </div>
                   </div>

                   <Split className="w-6 h-6 text-white/10" />

                   {/* Table 2: Orders */}
                   <div className="flex flex-col gap-3">
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest text-center">Orders</span>
                      <div className="w-64 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden shadow-2xl">
                         <div className="grid grid-cols-3 gap-4 p-3 bg-primary/10 border-b border-primary/20 text-[8px] font-black text-primary uppercase">
                            <span>ID</span>
                            <span>User ID</span>
                            <span>Product</span>
                         </div>
                         <div className="p-2 space-y-1">
                            <div className="grid grid-cols-3 gap-4 p-2 rounded-lg bg-white/[0.03] text-[10px] font-bold text-white/80">
                               <span className="font-mono">101</span>
                               <span className="font-mono text-emerald-400">1</span>
                               <span>Keyboard</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 p-2 rounded-lg bg-white/[0.03] text-[10px] font-bold text-white/80">
                               <span className="font-mono">102</span>
                               <span className="font-mono text-emerald-400">1</span>
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
      <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
         <motion.div animate={{ opacity: step === 1 ? 1 : 0.3 }} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">No Duplicates</span>
         </motion.div>
         <motion.div animate={{ opacity: step === 1 ? 1 : 0.3 }} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Smaller Size</span>
         </motion.div>
         <motion.div animate={{ opacity: step === 1 ? 1 : 0.3 }} className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <Layers className="w-4 h-4 text-amber-400" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Easy to Maintain</span>
         </motion.div>
      </div>
    </div>
  );
}
