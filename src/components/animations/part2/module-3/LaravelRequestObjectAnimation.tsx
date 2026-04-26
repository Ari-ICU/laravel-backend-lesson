"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, User, Code2, Database, Layout, Globe, FileText, CheckCircle2, Package, Search } from 'lucide-react';

export function LaravelRequestObjectAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
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
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Package className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">The Request Object</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Bridging User Input to Backend Logic</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12 h-96">
        
        {/* User Frontend (The Form) */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className="w-full max-w-[180px] p-5 rounded-3xl border-2 border-slate-900/10 bg-slate-50/5 flex flex-col gap-4 relative">
              <div className="flex items-center gap-6 mb-2">
                 <Layout className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest">User Form</span>
              </div>
              <div className="space-y-6">
                 <div className="text-lg font-bold text-black uppercase">Title</div>
                 <div className="w-full h-6 rounded bg-white/40 border border-slate-900/10 flex items-center px-2">
                    <span className="text-lg text-black font-mono italic">Hello Laravel!</span>
                 </div>
              </div>
              <button 
                onClick={startAnimation}
                disabled={isSubmitting}
                className={`mt-2 w-full h-8 rounded-xl flex items-center justify-center transition-all ${isSubmitting ? 'bg-slate-50/5 border border-slate-900/10 text-black' : 'bg-primary border border-primary/50 text-black hover:scale-105 active:scale-95 shadow-lg shadow-primary/20'}`}
              >
                 <span className="text-lg font-black uppercase tracking-widest">{isSubmitting ? 'Sending...' : 'Submit'}</span>
              </button>
           </div>
        </div>

        {/* The Request Object (The Envelope) */}
        <div className="relative w-72 flex flex-col items-center justify-center">
           <AnimatePresence>
              {step === 1 && (
                <motion.div
                  initial={{ left: 0, opacity: 0, scale: 0.5 }}
                  animate={{ left: '100%', opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute z-20 flex flex-col items-center gap-6"
                >
                   <div className="w-16 h-12 bg-primary/20 border-2 border-primary/40 rounded-xl flex items-center justify-center relative shadow-2xl">
                      <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
                      <Mail className="w-12 h-12 text-black" />
                   </div>
                   <span className="text-lg font-mono text-black font-bold uppercase tracking-widest">$request</span>
                </motion.div>
              )}
           </AnimatePresence>
           <ArrowRight className={`w-36 w-36 ${step > 0 ? 'text-black' : 'text-black'}`} />
        </div>

        {/* Controller Side (The Logic) */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full h-62 rounded-[2.5rem] border-2 transition-all duration-700 p-6 flex flex-col gap-6 relative overflow-hidden ${step >= 2 ? 'bg-slate-50 border-primary/30 shadow-2xl shadow-primary/10' : 'bg-slate-50/5 border-slate-900/10 opacity-20'}`}>
              <div className="flex items-center justify-between border-b border-slate-900/5 pb-2">
                 <span className="text-lg font-black text-black uppercase tracking-widest font-mono">PostController.php</span>
                 <Code2 className={`w-12 h-12 ${step >= 2 ? 'text-black' : 'text-black'}`} />
              </div>

              <div className="font-mono text-lg text-black space-y-6">
                 <div>public function store(<span className="text-black">Request</span> <span className="text-black font-bold">$request</span>) {"{"}</div>
                 
                 <AnimatePresence>
                    {step >= 2 && (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="pl-4 space-y-4"
                      >
                         <div className="text-black italic">// Laravel automatically injects $request</div>
                         <div className="flex flex-wrap gap-x-2 items-center bg-slate-50/5 p-2 rounded-lg border border-slate-900/5">
                            <span className="text-black">$title</span>
                            <span className="text-black">=</span>
                            <span className="text-black">$request</span>
                            <span className="text-black">-&gt;</span>
                            <span className="text-black">input</span>
                            <span className="text-black">("title");</span>
                         </div>
                         
                         {step === 3 && (
                           <motion.div
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             className="flex items-center gap-6 text-black mt-2"
                           >
                              <CheckCircle2 className="w-12 h-12" />
                              <span className="text-lg font-black uppercase tracking-widest">Extracted: "Hello Laravel!"</span>
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
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-50/5 border border-slate-900/10 hover:bg-slate-50/10 transition-colors"
                >
                   <RefreshCw className="w-12 h-12 text-black" />
                </button>
              )}
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Dependency Injection</span>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${step === 3 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}>
         <span className="text-lg font-black uppercase tracking-[0.2em] leading-relaxed text-black">
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
