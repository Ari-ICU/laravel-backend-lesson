"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, Play, CheckCircle, Server, ShieldCheck, ArrowRight, Loader2, Bug } from 'lucide-react';

export function CICDFlowAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'deploying' | 'finished'>('idle');

  const runPipeline = () => {
    setStatus('testing');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('deploying');
        setTimeout(() => {
          setStatus('finished');
        }, 1500);
      }, 1000);
    }, 2000);
  };

  return (
    <div className={`relative w-full max-w-5xl min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "scale-110" : ""}`}>
      {/* Background Pipeline Path */}
      <div className="absolute w-4/5 h-2 bg-slate-100 rounded-full top-1/2 -translate-y-1/2 -z-10" />

      <div className="flex items-center justify-between w-full px-10 relative">
        
        {/* Stage 1: GitHub Push */}
        <div className="flex flex-col items-center gap-6">
           <motion.div 
            animate={status !== 'idle' ? { scale: 0.9, opacity: 0.5 } : { scale: 1 }}
            className={`w-32 h-32 rounded-[2rem] border-4 bg-white border-black flex items-center justify-center shadow-xl`}
           >
              <GitBranch className="w-16 h-16" />
           </motion.div>
           <span className="text-sm font-black uppercase tracking-widest text-black">Code Push</span>
        </div>

        {/* Stage 2: Testing (GitHub Actions) */}
        <div className="flex flex-col items-center gap-6 relative">
           <div className={`w-40 h-40 rounded-[2.5rem] border-4 flex flex-col items-center justify-center gap-2 transition-all duration-500 ${status === 'testing' ? 'bg-amber-400 border-black shadow-2xl scale-110' : (status === 'success' || status === 'deploying' || status === 'finished' ? 'bg-emerald-500 border-black' : 'bg-white border-slate-200 text-slate-200')}`}>
              {status === 'testing' ? <Loader2 className="w-16 h-16 animate-spin text-black" /> : (status === 'success' || status === 'deploying' || status === 'finished' ? <CheckCircle className="w-16 h-16 text-white" /> : <ShieldCheck className="w-16 h-16" />)}
              <span className={`text-[10px] font-black uppercase ${status === 'testing' ? 'text-black' : (status === 'idle' ? 'text-slate-200' : 'text-white')}`}>Running Tests</span>
           </div>
           <span className={`text-sm font-black uppercase tracking-widest ${status === 'testing' ? 'text-amber-600' : 'text-black'}`}>CI Pipeline</span>
        </div>

        {/* Stage 3: Deploy to Server */}
        <div className="flex flex-col items-center gap-6">
           <motion.div 
            animate={status === 'deploying' ? { y: [-5, 5, -5] } : {}}
            transition={{ repeat: Infinity, duration: 1 }}
            className={`w-32 h-32 rounded-[2rem] border-4 flex items-center justify-center transition-all duration-500 ${status === 'finished' ? 'bg-indigo-500 border-black shadow-xl text-white' : (status === 'deploying' ? 'bg-indigo-400 border-black shadow-2xl scale-110' : 'bg-white border-slate-200 text-slate-200')}`}
           >
              <Server className="w-16 h-16" />
           </motion.div>
           <span className={`text-sm font-black uppercase tracking-widest ${status === 'finished' ? 'text-indigo-600' : 'text-black'}`}>Production</span>
        </div>

      </div>

      {/* Connection Arrows with Particles */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-48 pointer-events-none">
         <div className="relative w-32">
            <AnimatePresence>
               {status === 'testing' && (
                 <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 150, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-4 h-4 bg-amber-500 rounded-full shadow-lg"
                 />
               )}
            </AnimatePresence>
         </div>
         <div className="relative w-32">
            <AnimatePresence>
               {status === 'deploying' && (
                 <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 150, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-4 h-4 bg-indigo-500 rounded-full shadow-lg"
                 />
               )}
            </AnimatePresence>
         </div>
      </div>

      {/* Control Panel */}
      <div className="mt-20 flex flex-col items-center gap-6">
        <button
          onClick={runPipeline}
          disabled={status !== 'idle' && status !== 'finished'}
          className={`flex items-center gap-4 px-12 py-5 rounded-full border-4 border-black font-black uppercase tracking-[0.2em] text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all ${status === 'idle' || status === 'finished' ? 'bg-black text-white hover:bg-slate-900' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
        >
          {status === 'idle' || status === 'finished' ? (
            <>
              <Play className="w-6 h-6" />
              TRIGGER PIPELINE
            </>
          ) : (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              PIPELINE RUNNING...
            </>
          )}
        </button>
        
        <div className="h-10">
           <AnimatePresence mode="wait">
              {status === 'testing' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-amber-600 font-bold uppercase italic">⚡ PHPUnit: Executing 42 tests...</motion.p>}
              {status === 'success' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-emerald-600 font-bold uppercase italic">✅ All tests passed! Starting Deployment...</motion.p>}
              {status === 'deploying' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-indigo-600 font-bold uppercase italic">🚀 Transferring files to Production server...</motion.p>}
              {status === 'finished' && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-emerald-600 font-black uppercase tracking-widest animate-pulse">🎉 DEPLOYMENT SUCCESSFUL!</motion.p>}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
