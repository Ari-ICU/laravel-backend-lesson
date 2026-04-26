"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Database, ArrowRight, User, Package, Lock, Unlock, XCircle, CheckCircle2, Shield } from 'lucide-react';

export function MassAssignmentAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
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
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <ShieldCheck className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Mass Assignment Protection</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Securing your Model Layer</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12 h-96">
        
        {/* Incoming Data (The Request) */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className="w-full max-w-[200px] p-5 rounded-3xl border-2 border-slate-900/10 bg-slate-50/5 flex flex-col gap-4 relative">
              <div className="flex items-center gap-6 mb-2 text-black">
                 <User className="w-12 h-12" />
                 <span className="text-lg font-black uppercase tracking-widest">Incoming Request</span>
              </div>
              <div className="space-y-6">
                 {incomingData.map((data) => (
                   <div key={data.key} className="p-2 rounded-lg bg-white/40 border border-slate-900/5 flex justify-between items-center overflow-hidden">
                      <span className={`text-lg font-mono ${data.allowed ? 'text-black' : 'text-black font-bold'}`}>{data.key}</span>
                      <span className="text-lg text-black">=&gt; {data.value}</span>
                   </div>
                 ))}
              </div>
              <button 
                onClick={startSaving}
                disabled={isSaving}
                className={`mt-2 w-full h-9 rounded-xl flex items-center justify-center transition-all ${isSaving ? 'bg-slate-50/5 border border-slate-900/10 text-black' : 'bg-primary border border-primary/50 text-black hover:scale-105 active:scale-95 shadow-lg shadow-primary/20'}`}
              >
                 <span className="text-lg font-black uppercase tracking-widest">{isSaving ? 'Filtering...' : 'Save Product'}</span>
              </button>
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Data Input</span>
        </div>

        {/* The Fillable Gate */}
        <div className="relative w-72 flex flex-col items-center justify-center">
           <div className="h-60 w-1 bg-slate-50/5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-36 rounded-2xl bg-[#1c1c1c] border-2 border-primary/40 flex flex-col items-center justify-center gap-6 z-10 shadow-2xl">
                 <Shield className={`w-12 h-12 ${step >= 2 ? 'text-black' : 'text-black'}`} />
                 <span className="text-lg font-black text-black uppercase tracking-[0.2em] font-mono">$fillable</span>
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
                      <div className={`px-2 py-1 rounded border text-lg font-mono ${data.allowed ? 'bg-emerald-500/20 border-emerald-500/40 text-black' : 'bg-rose-500/20 border-rose-500/40 text-black'}`}>
                         {data.key}
                      </div>
                   </motion.div>
                 ))}
              </AnimatePresence>
           </div>
        </div>

        {/* Database Side */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full max-w-[200px] h-52 rounded-[2.5rem] border-2 transition-all duration-700 p-6 flex flex-col gap-6 relative overflow-hidden ${step >= 2 ? 'bg-emerald-500/5 border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-slate-50/5 border-slate-900/10 opacity-20'}`}>
              <div className="flex items-center gap-6 border-b border-slate-900/5 pb-2">
                 <Database className={`w-12 h-12 ${step >= 2 ? 'text-black' : 'text-black'}`} />
                 <span className="text-lg font-black text-black uppercase tracking-widest">Persisted Table</span>
              </div>

              <div className="space-y-6">
                 <AnimatePresence>
                    {step >= 2 && incomingData.filter(d => d.allowed).map((data, i) => (
                      <motion.div
                        key={data.key}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5 + i * 0.2 }}
                        className="flex justify-between items-center p-2 rounded bg-emerald-500/10 border border-emerald-500/20"
                      >
                         <span className="text-lg font-mono text-black">{data.key}</span>
                         <CheckCircle2 className="w-12 h-12 text-black" />
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
                   <ShieldAlert className="w-12 h-12 text-black mb-1" />
                   <span className="text-lg font-black text-black uppercase tracking-widest">Blocked: is_admin</span>
                </motion.div>
              )}
           </div>
           
           {step === 2 && (
              <button 
                onClick={reset}
                className="flex items-center gap-6 text-black hover:text-black transition-colors"
              >
                 <RefreshCw className="w-12 h-12" />
                 <span className="text-lg font-black uppercase tracking-widest">Try Again</span>
              </button>
           )}
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${step === 2 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}>
         <span className="text-lg font-black uppercase tracking-[0.2em] leading-relaxed text-black">
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
