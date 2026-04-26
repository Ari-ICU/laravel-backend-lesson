"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, CheckCircle, Server, ShieldCheck, HardDrive, Search, Link as LinkIcon } from 'lucide-react';

export function FileUploadAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0); // 0: Idle, 1: Validating, 2: Storing, 3: Success

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 2000);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-12 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Upload className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Laravel File Storage</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Secure & Flexible Uploads</p>
        </div>
      </div>

      <div className="relative flex items-center justify-between w-full max-w-4xl px-20 min-h-[300px] relative z-20">
        
        {/* User Side */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-3xl border-4 border-black bg-white shadow-xl flex flex-col items-center justify-center relative">
            <motion.div
              animate={step === 1 || step === 2 ? { y: -20, opacity: 0.5 } : { y: 0, opacity: 1 }}
              className="flex flex-col items-center"
            >
              <File className="w-16 h-16 text-blue-600" />
              <span className="text-xs font-black uppercase tracking-widest mt-2">image.jpg</span>
            </motion.div>
            
            {/* Flying File */}
            <AnimatePresence>
              {(step === 1 || step === 2) && (
                <motion.div
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ x: 300, y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute z-50"
                >
                   <File className="w-10 h-10 text-blue-600 drop-shadow-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-sm font-black uppercase tracking-widest text-black">Client (Form)</span>
        </div>

        {/* Server / Process */}
        <div className="flex-1 flex flex-col items-center gap-8 px-12">
            <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden border-2 border-black">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ 
                        width: step === 1 ? "30%" : step === 2 ? "70%" : step === 3 ? "100%" : "0%" 
                    }}
                    className="h-full bg-blue-500"
                />
            </div>
            
            <div className="flex gap-4">
                <div className={`p-4 rounded-2xl border-2 border-black transition-colors ${step >= 1 ? 'bg-emerald-400' : 'bg-white'}`}>
                    <ShieldCheck className="w-8 h-8 text-black" />
                </div>
                <div className={`p-4 rounded-2xl border-2 border-black transition-colors ${step >= 2 ? 'bg-amber-400' : 'bg-white'}`}>
                    <HardDrive className="w-8 h-8 text-black" />
                </div>
                <div className={`p-4 rounded-2xl border-2 border-black transition-colors ${step >= 3 ? 'bg-blue-400' : 'bg-white'}`}>
                    <LinkIcon className="w-8 h-8 text-black" />
                </div>
            </div>
        </div>

        {/* Storage Side */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-3xl border-4 border-black bg-slate-900 shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
             <Server className="w-16 h-16 text-white" />
             <AnimatePresence>
                {step === 3 && (
                    <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 bg-emerald-500 flex flex-col items-center justify-center p-4 text-center"
                    >
                        <CheckCircle className="w-12 h-12 text-black mb-2" />
                        <span className="text-[10px] font-black text-black uppercase leading-tight">Stored in /avatars</span>
                    </motion.div>
                )}
             </AnimatePresence>
          </div>
          <span className="text-sm font-black uppercase tracking-widest text-black">Server (Storage)</span>
        </div>

      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-8 relative z-30">
        <button
          onClick={() => setStep(1)}
          disabled={step !== 0 && step !== 3}
          className={`flex items-center gap-6 px-12 py-6 rounded-full border-4 transition-all shadow-2xl font-black uppercase tracking-[0.2em] ${step === 0 || step === 3 ? 'bg-black text-white hover:bg-blue-600' : 'bg-slate-200 text-slate-400 border-slate-300'} active:scale-95`}
        >
          {step === 0 || step === 3 ? <Upload className="w-8 h-8" /> : <Search className="w-8 h-8 animate-spin" />}
          {step === 0 ? 'Start Upload' : step === 3 ? 'Upload Another' : 'Processing...'}
        </button>
        {step === 3 && (
            <button
                onClick={() => setStep(0)}
                className="px-8 py-6 rounded-full border-4 border-black bg-white text-black font-black uppercase tracking-widest hover:bg-slate-100 transition-all"
            >
                Reset
            </button>
        )}
      </div>

      {/* Status Insight */}
      <div className="h-20 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="v" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="bg-emerald-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                <span className="text-xl font-black text-black uppercase tracking-widest">Validating File (Size, Mime, Extension)...</span>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="s" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="bg-amber-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4">
                <HardDrive className="w-8 h-8 text-amber-600" />
                <span className="text-xl font-black text-black uppercase tracking-widest">Writing to Disk (Local/S3/Public)...</span>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="d" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="bg-blue-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4">
                <LinkIcon className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-black text-black uppercase tracking-widest">File Ready! Path saved to Database.</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
