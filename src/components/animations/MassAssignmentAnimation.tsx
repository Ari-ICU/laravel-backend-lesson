"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Database, ArrowRight, User, Package, Lock, Unlock, XCircle, CheckCircle2, Shield } from 'lucide-react';

export function MassAssignmentAnimation() {
  const [isSaving, setIsSaving] = useState(false);
  const [step, setStep] = useState(0);

  const incomingData = [
    { key: 'name', value: 'iPhone 15', allowed: true },
    { key: 'price', value: '999', allowed: true },
    { key: 'is_admin', value: 'true', allowed: false },
  ];

  const startSaving = () => {
    setIsSaving(true);
    setStep(1);
    setTimeout(() => setStep(2), 2000);
  };

  const reset = () => {
    setIsSaving(false);
    setStep(0);
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <ShieldCheck className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Mass Assignment Protection</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Securing your Model Layer</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12 h-64">
        
        {/* Incoming Data (The Request) */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className="w-full max-w-[200px] p-5 rounded-3xl border-2 border-white/10 bg-white/5 flex flex-col gap-3 relative">
              <div className="flex items-center gap-2 mb-2 text-white/20">
                 <User className="w-3 h-3" />
                 <span className="text-[8px] font-black uppercase tracking-widest">Incoming Request</span>
              </div>
              <div className="space-y-2">
                 {incomingData.map((data) => (
                   <div key={data.key} className="p-2 rounded-lg bg-white/40 border border-white/5 flex justify-between items-center overflow-hidden">
                      <span className={`text-[8px] font-mono ${data.allowed ? 'text-white/60' : 'text-rose-400 font-bold'}`}>{data.key}</span>
                      <span className="text-[8px] text-white/20">=&gt; {data.value}</span>
                   </div>
                 ))}
              </div>
              <button 
                onClick={startSaving}
                disabled={isSaving}
                className={`mt-2 w-full h-9 rounded-xl flex items-center justify-center transition-all ${isSaving ? 'bg-white/5 border border-white/10 text-white/20' : 'bg-primary border border-primary/50 text-white hover:scale-105 active:scale-95 shadow-lg shadow-primary/20'}`}
              >
                 <span className="text-[9px] font-black uppercase tracking-widest">{isSaving ? 'Filtering...' : 'Save Product'}</span>
              </button>
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Data Input</span>
        </div>

        {/* The Fillable Gate */}
        <div className="relative w-32 flex flex-col items-center justify-center">
           <div className="h-40 w-1 bg-white/5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-24 rounded-2xl bg-[#1c1c1c] border-2 border-primary/40 flex flex-col items-center justify-center gap-2 z-10 shadow-2xl">
                 <Shield className={`w-6 h-6 ${step >= 2 ? 'text-emerald-400' : 'text-primary'}`} />
                 <span className="text-[7px] font-black text-primary uppercase tracking-[0.2em] font-mono">$fillable</span>
              </div>
              
              {/* Animation Particles */}
              <AnimatePresence>
                 {step === 1 && incomingData.map((data, i) => (
                   <motion.div
                     key={data.key}
                     initial={{ left: -100, opacity: 0 }}
                     animate={data.allowed 
                        ? { left: 200, opacity: [0, 1, 0], scale: [0.5, 1, 0.5] } 
                        : { left: 0, x: [0, -10, 0], opacity: [0, 1, 1, 0] }
                     }
                     transition={{ duration: 1.5, delay: i * 0.3 }}
                     className="absolute top-1/2 -translate-y-1/2 z-20"
                   >
                      <div className={`px-2 py-1 rounded border text-[7px] font-mono ${data.allowed ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' : 'bg-rose-500/20 border-rose-500/40 text-rose-400'}`}>
                         {data.key}
                      </div>
                   </motion.div>
                 ))}
              </AnimatePresence>
           </div>
        </div>

        {/* Database Side */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className={`w-full max-w-[200px] h-52 rounded-[2.5rem] border-2 transition-all duration-700 p-6 flex flex-col gap-4 relative overflow-hidden ${step >= 2 ? 'bg-emerald-500/5 border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-white/5 border-white/10 opacity-20'}`}>
              <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                 <Database className={`w-4 h-4 ${step >= 2 ? 'text-emerald-400' : 'text-white/20'}`} />
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Persisted Table</span>
              </div>

              <div className="space-y-2">
                 <AnimatePresence>
                    {step >= 2 && incomingData.filter(d => d.allowed).map((data, i) => (
                      <motion.div
                        key={data.key}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5 + i * 0.2 }}
                        className="flex justify-between items-center p-2 rounded bg-emerald-500/10 border border-emerald-500/20"
                      >
                         <span className="text-[8px] font-mono text-emerald-400">{data.key}</span>
                         <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      </motion.div>
                    ))}
                 </AnimatePresence>
              </div>

              {step >= 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute bottom-3 right-2 p-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex flex-col items-center"
                >
                   <ShieldAlert className="w-4 h-4 text-rose-500 mb-1" />
                   <span className="text-[6px] font-black text-rose-400 uppercase tracking-widest">Blocked: is_admin</span>
                </motion.div>
              )}
           </div>
           
           {step === 2 && (
              <button 
                onClick={reset}
                className="flex items-center gap-2 text-white/20 hover:text-white transition-colors"
              >
                 <RefreshCw className="w-3 h-3" />
                 <span className="text-[8px] font-black uppercase tracking-widest">Try Again</span>
              </button>
           )}
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${step === 2 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-white/5 opacity-40'}`}>
         <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-white/80">
            {step === 2 ? "The 'is_admin' field was blocked because it's not in $fillable!" : "Only data in the $fillable array can enter the database."}
         </span>
      </div>
    </div>
  );
}

function RefreshCw(props: any) {
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
