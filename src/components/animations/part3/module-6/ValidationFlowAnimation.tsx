"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, ArrowRight, User, Database, Lock, CheckCircle, XCircle } from 'lucide-react';

export function ValidationFlowAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const handleNext = () => {
    if (step === 1) {
      // Simulate validation result
      setStep(2);
    } else if (step === 2) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-12 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-sky-500 flex items-center justify-center border-2 border-black shadow-lg">
          <ShieldCheck className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Validation Pipeline</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">The Guardian of Data Integrity</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-20 relative z-20">
        
        {/* User Input */}
        <div className="flex flex-col items-center gap-6">
           <div className={`w-32 h-32 rounded-[2rem] border-4 flex items-center justify-center transition-all ${step >= 0 ? 'bg-white border-black shadow-xl' : 'bg-slate-50 border-black/10 opacity-40'}`}>
              <User className="w-16 h-16 text-black" />
           </div>
           <span className="text-xl font-black uppercase tracking-widest text-black">User Input</span>
        </div>

        <ArrowRight className={`w-12 h-12 text-black transition-opacity ${step >= 1 ? 'opacity-100' : 'opacity-10 animate-pulse'}`} />

        {/* Validation Gate */}
        <div className="relative flex flex-col items-center gap-6">
           <motion.div 
             animate={step === 1 ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
             transition={{ repeat: Infinity, duration: 2 }}
             className={`w-44 h-44 rounded-[2.5rem] border-4 flex flex-col items-center justify-center gap-4 transition-all ${step >= 1 ? 'bg-white border-black shadow-2xl scale-110' : 'bg-slate-50 border-black/10 opacity-40'}`}
           >
              <Lock className={`w-16 h-16 ${step === 2 ? (isValid ? 'text-emerald-500' : 'text-rose-500') : 'text-black'}`} />
              <span className="text-xs font-black uppercase tracking-tighter text-black">Validator</span>
           </motion.div>
           
           <AnimatePresence>
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 bg-black text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest whitespace-nowrap"
                >
                  Checking Rules...
                </motion.div>
              )}
           </AnimatePresence>
        </div>

        <ArrowRight className={`w-12 h-12 text-black transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-10'}`} />

        {/* Final Result */}
        <div className="flex flex-col items-center gap-6">
           <motion.div 
             animate={step === 2 ? { scale: 1.1 } : { scale: 1 }}
             className={`w-32 h-32 rounded-[2rem] border-4 flex items-center justify-center transition-all ${step === 2 ? (isValid ? 'bg-emerald-500 border-black shadow-xl' : 'bg-rose-500 border-black shadow-xl') : 'bg-slate-50 border-black/10 opacity-40'}`}
           >
              {step === 2 ? (
                isValid ? <Database className="w-16 h-16 text-white" /> : <XCircle className="w-16 h-16 text-white" />
              ) : (
                <Database className="w-16 h-16 text-black/20" />
              )}
           </motion.div>
           <span className={`text-xl font-black uppercase tracking-widest ${step === 2 ? (isValid ? 'text-emerald-600' : 'text-rose-600') : 'text-black/20'}`}>
              {step === 2 ? (isValid ? 'Saved to DB' : 'Request Blocked') : 'Database'}
           </span>
        </div>

      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-8 relative z-30">
        <button
          onClick={() => {
            setIsValid(true);
            handleNext();
          }}
          className={`flex items-center gap-6 px-10 py-5 rounded-full border-4 transition-all shadow-2xl font-black uppercase tracking-[0.2em] bg-emerald-500 border-black text-white active:scale-95`}
        >
          <CheckCircle className="w-8 h-8" />
          Test Valid Input
        </button>

        <button
          onClick={() => {
            setIsValid(false);
            handleNext();
          }}
          className={`flex items-center gap-6 px-10 py-5 rounded-full border-4 transition-all shadow-2xl font-black uppercase tracking-[0.2em] bg-rose-500 border-black text-white active:scale-95`}
        >
          <XCircle className="w-8 h-8" />
          Test Invalid Input
        </button>

        <button
          onClick={() => {
            setStep(0);
          }}
          className="p-5 rounded-full bg-white border-2 border-black hover:bg-slate-50 transition-all text-black active:rotate-180 duration-500"
        >
          <motion.div whileTap={{ rotate: 180 }}><User className="w-6 h-6" /></motion.div>
        </button>
      </div>

      {/* Logic Insight */}
      <div className="h-20 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-amber-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-black flex items-center justify-center font-black text-xs">!</div>
                <span className="text-xl font-black text-black uppercase tracking-widest">Running defined rules (required, unique, max...)</span>
              </motion.div>
            ) : step === 2 && !isValid ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-rose-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4"
              >
                <ShieldAlert className="w-8 h-8 text-rose-600" />
                <span className="text-xl font-black text-black uppercase tracking-widest">Error 422: Redirecting with Error messages</span>
              </motion.div>
            ) : null}
         </AnimatePresence>
      </div>
    </div>
  );
}
