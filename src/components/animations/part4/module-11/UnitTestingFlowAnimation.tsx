"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, Zap, ShieldCheck, Box, ServerOff, CheckCircle2, Play } from 'lucide-react';

export function UnitTestingFlowAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);

  const startTest = () => {
    setIsRunning(true);
    setStep(1);
    setTimeout(() => setStep(2), 800);
    setTimeout(() => {
      setStep(3);
      setIsRunning(false);
    }, 1600);
  };

  return (
    <div className={`relative w-full max-w-4xl min-h-[400px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "scale-110" : ""}`}>
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-blue-50/30 rounded-[3rem] -z-10" />
      
      <div className="flex flex-col items-center gap-12 w-full">
        {/* Top: The Concept */}
        <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-[2rem] shadow-xl relative z-10">
          <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Beaker className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-black uppercase tracking-widest">Unit Isolation</h3>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-tighter">Fast & Focused Testing</p>
          </div>
        </div>

        {/* Middle: The Flow */}
        <div className="flex items-center justify-around w-full px-10 relative">
          
          {/* Logic Unit */}
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              animate={step === 1 ? { scale: 1.1, rotate: [0, 5, -5, 0] } : {}}
              className={`w-32 h-32 rounded-[2rem] border-4 flex items-center justify-center transition-all duration-300 ${step >= 1 ? 'bg-white border-black shadow-lg' : 'bg-slate-100 border-black/10'}`}
            >
              <Box className={`w-16 h-16 ${step >= 1 ? 'text-blue-500' : 'text-black/20'}`} />
            </motion.div>
            <span className="text-sm font-black uppercase tracking-widest">Logic Unit</span>
          </div>

          {/* Test Engine */}
          <div className="relative flex flex-col items-center gap-4">
             <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <ServerOff className={`w-10 h-10 transition-colors ${step === 1 ? 'text-rose-500' : 'text-slate-300'}`} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">No Framework Boot</span>
             </div>
             
             <motion.div 
              animate={isRunning ? { rotate: 360 } : {}}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className={`w-20 h-20 rounded-full border-4 border-dashed flex items-center justify-center transition-all ${isRunning ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}
             >
                <Zap className={`w-10 h-10 ${isRunning ? 'text-blue-600' : 'text-slate-200'}`} />
             </motion.div>
          </div>

          {/* Result */}
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={step === 3 ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              className="w-32 h-32 rounded-[2rem] border-4 bg-emerald-500 border-black shadow-lg flex items-center justify-center"
            >
              <CheckCircle2 className="w-16 h-16 text-white" />
            </motion.div>
            <span className={`text-sm font-black uppercase tracking-widest ${step === 3 ? 'text-emerald-600' : 'text-transparent'}`}>Passed (~2ms)</span>
          </div>

          {/* Connection Lines (Arrows) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-40 -z-10 pointer-events-none">
             <div className={`h-1 w-32 rounded-full transition-colors ${step >= 1 ? 'bg-blue-500' : 'bg-slate-100'}`} />
             <div className={`h-1 w-32 rounded-full transition-colors ${step >= 2 ? 'bg-emerald-500' : 'bg-slate-100'}`} />
          </div>
        </div>

        {/* Bottom: Action */}
        <div className="flex flex-col items-center gap-6">
           <button
            onClick={startTest}
            disabled={isRunning}
            className={`flex items-center gap-4 px-10 py-5 rounded-full border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-black uppercase tracking-widest text-xl ${isRunning ? 'bg-slate-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-400'}`}
           >
             <Play className="w-6 h-6" />
             Run Unit Test
           </button>
           
           <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-lg font-bold text-blue-600 italic uppercase"
                >
                  ⚡ Executing Pure Logic...
                </motion.p>
              )}
              {step === 3 && (
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-lg font-bold text-emerald-600 italic uppercase"
                >
                  ✅ Result: Correct Output!
                </motion.p>
              )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
