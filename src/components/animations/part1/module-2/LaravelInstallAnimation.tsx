"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Package, FolderPlus, CheckCircle2, Download, Cpu, Loader2 } from 'lucide-react';

export function LaravelInstallAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { title: 'Command', icon: Terminal, cmd: 'composer create-project laravel/laravel my-app' },
    { title: 'Downloading', icon: Download, cmd: 'Downloading dependencies...' },
    { title: 'Configuring', icon: Cpu, cmd: 'Setting up .env and generating keys...' },
    { title: 'Ready', icon: CheckCircle2, cmd: 'Application ready! Build something amazing.' }
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-rose-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Package className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Project Initialization</h3>
          <p className="text-xl font-bold text-black uppercase tracking-[0.2em]">Laravel Installation Flow</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        
        {/* Terminal Window */}
        <div className="w-[600px] rounded-[2.5rem] border-4 border-black bg-slate-50 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative z-20">
           <div className="flex items-center gap-4 px-8 py-5 bg-white border-b-4 border-black">
              <div className="w-4 h-4 rounded-full bg-black/20" />
              <div className="w-4 h-4 rounded-full bg-black/20" />
              <div className="w-4 h-4 rounded-full bg-black/20" />
              <span className="ml-4 text-xl font-black text-black uppercase tracking-widest font-mono">Terminal — 80x24</span>
           </div>
           <div className="p-10 font-mono text-2xl h-80 flex flex-col justify-center gap-8">
              <div className="flex items-center gap-6">
                 <span className="text-emerald-600 font-black">➜</span>
                 <span className="text-sky-600 font-black">~</span>
                 <AnimatePresence mode="wait">
                    <motion.span
                      key={step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-black font-bold"
                    >
                       {steps[step].cmd}
                    </motion.span>
                 </AnimatePresence>
                 {step < 3 && <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-4 h-8 bg-black" />}
              </div>
              
              {step === 1 && (
                <div className="flex flex-col gap-6">
                   <div className="w-full h-4 bg-black/10 rounded-full overflow-hidden border-2 border-black">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.5 }}
                        className="h-full bg-emerald-500"
                      />
                   </div>
                   <div className="flex justify-between text-xl text-black uppercase font-black">
                      <span>Downloading packages</span>
                      <span>85%</span>
                   </div>
                </div>
              )}
           </div>
        </div>

        {/* Visual Progress Icons */}
        <div className="flex items-center gap-8 relative z-20">
           {steps.map((s, i) => (
             <div key={i} className="flex items-center gap-8">
                <motion.div
                  animate={{ 
                    scale: step === i ? 1.2 : 1,
                    opacity: step >= i ? 1 : 0.2,
                    borderColor: step === i ? 'black' : 'rgba(0,0,0,0.1)'
                  }}
                  className={`w-20 h-20 rounded-3xl border-4 flex items-center justify-center transition-all bg-white shadow-xl`}
                >
                   {step === i && i < 3 ? (
                     <Loader2 className="w-10 h-10 text-black animate-spin" />
                   ) : (
                     <s.icon className={`w-10 h-10 text-black`} />
                   )}
                </motion.div>
                {i < steps.length - 1 && (
                   <div className={`w-12 h-1 rounded-full transition-all ${step > i ? 'bg-black' : 'bg-black/10'}`} />
                )}
             </div>
           ))}
        </div>

      </div>

      {/* Success Badge */}
      <div className="h-20 flex items-center justify-center relative z-30">
        <AnimatePresence>
           {step === 3 && (
             <motion.div
               initial={{ y: 20, opacity: 0, scale: 0.8 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               className="flex items-center gap-6 bg-emerald-500 border-4 border-black px-10 py-5 rounded-[2rem] shadow-2xl"
             >
                <CheckCircle2 className="w-12 h-12 text-black" />
                <span className="text-2xl font-black text-black uppercase tracking-widest">Application Ready</span>
             </motion.div>
           )}
        </AnimatePresence>
      </div>
    </div>
  );
}
