"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShieldCheck, ArrowRight, User, Database, Lock, CheckCircle, XCircle, CloudOff, Ghost, RefreshCcw } from 'lucide-react';

export function MockingFlowAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isMocked, setIsMocked] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const runRequest = () => {
    setIsRequesting(true);
    setResult(null);
    
    setTimeout(() => {
      setIsRequesting(false);
      setResult(isMocked ? "Success (Fake API)" : "Error (Real API Offline)");
    }, 1500);
  };

  return (
    <div className={`relative w-full max-w-4xl min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "scale-110" : ""}`}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-50/50 rounded-[3rem] -z-10" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-white border-4 border-black px-10 py-6 rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-30 mb-12">
        <div className="w-20 h-20 rounded-2xl bg-indigo-500 flex items-center justify-center border-4 border-black shadow-lg">
          <Ghost className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest leading-none mb-2">Mocking Engine</h3>
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest italic">Simulation of External Services</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full gap-8 relative z-20 px-10">
        
        {/* Your Code */}
        <div className="flex flex-col items-center gap-6 group">
           <div className={`w-40 h-44 rounded-[2rem] border-4 flex flex-col items-center justify-center gap-4 transition-all bg-white border-black shadow-xl`}>
              <User className="w-16 h-16 text-black" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-slate-400">Your Class</span>
                <span className="text-xs font-black text-black">PaymentService</span>
              </div>
           </div>
           <span className="text-sm font-black uppercase tracking-widest text-black">Logic Source</span>
        </div>

        <motion.div 
          animate={isRequesting ? { x: [0, 50, 0], opacity: [1, 0.5, 1] } : {}}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <ArrowRight className={`w-12 h-12 ${isRequesting ? 'text-indigo-500' : 'text-slate-200'}`} />
        </motion.div>

        {/* External Service / Mock */}
        <div className="relative flex flex-col items-center gap-6">
           <AnimatePresence mode="wait">
              {!isMocked ? (
                <motion.div 
                  key="real"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  className="w-48 h-48 rounded-[3rem] border-4 bg-white border-rose-500 flex flex-col items-center justify-center gap-4 shadow-2xl relative"
                >
                  <Globe className="w-20 h-20 text-rose-500 opacity-20" />
                  <CloudOff className="absolute w-12 h-12 text-rose-600" />
                  <span className="text-xs font-black uppercase text-rose-600">Real API (Offline)</span>
                </motion.div>
              ) : (
                <motion.div 
                  key="mock"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  className="w-48 h-48 rounded-[3rem] border-4 bg-indigo-500 border-black flex flex-col items-center justify-center gap-4 shadow-2xl"
                >
                  <Ghost className="w-20 h-20 text-white animate-bounce" />
                  <span className="text-xs font-black uppercase text-white tracking-widest">Mock Service</span>
                  <div className="px-3 py-1 bg-white rounded-full text-[8px] font-black uppercase text-indigo-600 border border-black">Always Returns 200 OK</div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-8 mt-16 relative z-30">
        <button
          onClick={() => setIsMocked(!isMocked)}
          className={`flex items-center gap-4 px-8 py-4 rounded-full border-4 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] font-black uppercase tracking-widest text-sm ${isMocked ? 'bg-indigo-500 border-black text-white' : 'bg-white border-black text-black hover:bg-slate-50'}`}
        >
          <RefreshCcw className={`w-5 h-5 ${isMocked ? 'animate-spin-slow' : ''}`} />
          {isMocked ? 'SWITCH TO REAL' : 'SWITCH TO MOCK'}
        </button>

        <button
          onClick={runRequest}
          disabled={isRequesting}
          className={`flex items-center gap-6 px-12 py-5 rounded-full border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-black uppercase tracking-[0.2em] bg-black text-white ${isRequesting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-900'}`}
        >
          {isRequesting ? 'PROCESSING...' : 'RUN TEST'}
        </button>
      </div>

      {/* Result Insight */}
      <div className="mt-12 h-20 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className={`border-4 border-black px-12 py-4 rounded-[2rem] flex items-center gap-6 shadow-xl ${result.includes("Success") ? 'bg-emerald-400' : 'bg-rose-400'}`}
              >
                {result.includes("Success") ? <CheckCircle className="w-10 h-10 text-white" /> : <XCircle className="w-10 h-10 text-white" />}
                <span className="text-2xl font-black text-black uppercase tracking-widest">{result}</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
