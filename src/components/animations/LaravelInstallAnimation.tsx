"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Package, FolderPlus, CheckCircle2, Download, Cpu, Loader2 } from 'lucide-react';

export function LaravelInstallAnimation() {
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
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Package className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Project Initialization</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Laravel Installation Flow</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        
        {/* Terminal Window */}
        <div className="w-[500px] rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
           <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              <span className="ml-2 text-[9px] font-bold text-white/20 uppercase tracking-widest font-mono">zsh — 80x24</span>
           </div>
           <div className="p-6 font-mono text-[11px] h-32 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                 <span className="text-emerald-400">➜</span>
                 <span className="text-sky-400">~</span>
                 <AnimatePresence mode="wait">
                    <motion.span
                      key={step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white/80"
                    >
                       {steps[step].cmd}
                    </motion.span>
                 </AnimatePresence>
                 {step < 3 && <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-primary" />}
              </div>
              
              {step === 1 && (
                <div className="flex flex-col gap-2">
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2.5 }}
                        className="h-full bg-primary"
                      />
                   </div>
                   <div className="flex justify-between text-[9px] text-white/20 uppercase font-black">
                      <span>Downloading packages</span>
                      <span>85%</span>
                   </div>
                </div>
              )}
           </div>
        </div>

        {/* Visual Progress Icons */}
        <div className="flex items-center gap-6">
           {steps.map((s, i) => (
             <div key={i} className="flex items-center gap-6">
                <motion.div
                  animate={{ 
                    scale: step === i ? 1.2 : 1,
                    opacity: step >= i ? 1 : 0.2,
                    borderColor: step === i ? 'rgba(99,102,241,1)' : 'rgba(255,255,255,0.1)'
                  }}
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all bg-white/[0.02]`}
                >
                   {step === i && i < 3 ? (
                     <Loader2 className="w-6 h-6 text-primary animate-spin" />
                   ) : (
                     <s.icon className={`w-6 h-6 ${step >= i ? 'text-primary' : 'text-white/20'}`} />
                   )}
                </motion.div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-[2px] rounded-full transition-all ${step > i ? 'bg-primary' : 'bg-white/10'}`} />
                )}
             </div>
           ))}
        </div>

      </div>

      {/* Success Badge */}
      <AnimatePresence>
         {step === 3 && (
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full"
           >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Application Ready</span>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
