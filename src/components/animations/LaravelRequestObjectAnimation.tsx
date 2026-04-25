"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, User, Code2, Database, Layout, Globe, FileText, CheckCircle2, Package, Search } from 'lucide-react';

export function LaravelRequestObjectAnimation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(0);

  const startAnimation = () => {
    setIsSubmitting(true);
    setStep(1);
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => setStep(3), 3000);
  };

  const reset = () => {
    setIsSubmitting(false);
    setStep(0);
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Package className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">The Request Object</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Bridging User Input to Backend Logic</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12 h-64">
        
        {/* User Frontend (The Form) */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className="w-full max-w-[180px] p-5 rounded-3xl border-2 border-white/10 bg-white/5 flex flex-col gap-3 relative">
              <div className="flex items-center gap-2 mb-2">
                 <Layout className="w-3 h-3 text-white/20" />
                 <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">User Form</span>
              </div>
              <div className="space-y-2">
                 <div className="text-[8px] font-bold text-white/40 uppercase">Title</div>
                 <div className="w-full h-6 rounded bg-white/40 border border-white/10 flex items-center px-2">
                    <span className="text-[8px] text-primary font-mono italic">Hello Laravel!</span>
                 </div>
              </div>
              <button 
                onClick={startAnimation}
                disabled={isSubmitting}
                className={`mt-2 w-full h-8 rounded-xl flex items-center justify-center transition-all ${isSubmitting ? 'bg-white/5 border border-white/10 text-white/20' : 'bg-primary border border-primary/50 text-white hover:scale-105 active:scale-95 shadow-lg shadow-primary/20'}`}
              >
                 <span className="text-[9px] font-black uppercase tracking-widest">{isSubmitting ? 'Sending...' : 'Submit'}</span>
              </button>
           </div>
        </div>

        {/* The Request Object (The Envelope) */}
        <div className="relative w-32 flex flex-col items-center justify-center">
           <AnimatePresence>
              {step === 1 && (
                <motion.div
                  initial={{ left: 0, opacity: 0, scale: 0.5 }}
                  animate={{ left: '100%', opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute z-20 flex flex-col items-center gap-2"
                >
                   <div className="w-16 h-12 bg-primary/20 border-2 border-primary/40 rounded-xl flex items-center justify-center relative shadow-2xl">
                      <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
                      <Mail className="w-6 h-6 text-primary" />
                   </div>
                   <span className="text-[8px] font-mono text-primary font-bold uppercase tracking-widest">$request</span>
                </motion.div>
              )}
           </AnimatePresence>
           <ArrowRight className={`w-8 h-8 ${step > 0 ? 'text-primary' : 'text-white/5'}`} />
        </div>

        {/* Controller Side (The Logic) */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className={`w-full h-62 rounded-[2.5rem] border-2 transition-all duration-700 p-6 flex flex-col gap-4 relative overflow-hidden ${step >= 2 ? 'bg-[#0d1117] border-primary/30 shadow-2xl shadow-primary/10' : 'bg-white/5 border-white/10 opacity-20'}`}>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                 <span className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">PostController.php</span>
                 <Code2 className={`w-4 h-4 ${step >= 2 ? 'text-primary' : 'text-white/20'}`} />
              </div>

              <div className="font-mono text-[9px] text-white/40 space-y-4">
                 <div>public function store(<span className="text-emerald-400">Request</span> <span className="text-sky-400 font-bold">$request</span>) {"{"}</div>
                 
                 <AnimatePresence>
                    {step >= 2 && (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="pl-4 space-y-3"
                      >
                         <div className="text-white/20 italic">// Laravel automatically injects $request</div>
                         <div className="flex flex-wrap gap-x-2 items-center bg-white/5 p-2 rounded-lg border border-white/5">
                            <span className="text-sky-400">$title</span>
                            <span className="text-white/60">=</span>
                            <span className="text-sky-400">$request</span>
                            <span className="text-white/60">-&gt;</span>
                            <span className="text-emerald-400">input</span>
                            <span className="text-white/60">("title");</span>
                         </div>
                         
                         {step === 3 && (
                           <motion.div
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             className="flex items-center gap-2 text-emerald-400 mt-2"
                           >
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-[10px] font-black uppercase tracking-widest">Extracted: "Hello Laravel!"</span>
                           </motion.div>
                         )}
                      </motion.div>
                    )}
                 </AnimatePresence>
                 
                 <div className="mt-auto">{"}"}</div>
              </div>

              {step === 3 && (
                <button 
                  onClick={reset}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                   <RefreshCw className="w-3 h-3 text-white/40" />
                </button>
              )}
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Dependency Injection</span>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${step === 3 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-white/5 opacity-40'}`}>
         <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-white/80">
            {step === 3 ? "The $request object is your single source of truth for all incoming data!" : "Click 'Submit' to see the data journey."}
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
