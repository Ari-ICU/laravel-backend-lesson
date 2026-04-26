"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, CheckCircle, XCircle, AlertCircle, Sparkles, Send } from 'lucide-react';

export function ValidationInlineAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const rules = [
    { name: 'title', rule: 'required|min:5', value: 'Hello' },
    { name: 'email', rule: 'required|email', value: 'user@example.com' },
    { name: 'age', rule: 'required|numeric|min:18', value: '20' }
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-12 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-emerald-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Code2 className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Inline Validation</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">The validate() Method in Action</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-12 px-20 relative z-20">
        
        {/* Code Editor Mockup */}
        <div className="flex-1 rounded-[2.5rem] border-4 border-black bg-slate-900 overflow-hidden shadow-2xl">
           <div className="px-6 py-4 bg-slate-800 border-b-2 border-black flex items-center justify-between">
              <div className="flex gap-3">
                 <div className="w-3 h-3 rounded-full bg-rose-500" />
                 <div className="w-3 h-3 rounded-full bg-amber-500" />
                 <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] font-mono">PostController.php</span>
           </div>
           <div className="p-8 font-mono text-xl space-y-2">
              <div className="text-slate-400">$request-&gt;validate([</div>
              {rules.map((r, i) => (
                <div key={i} className="pl-8 flex items-center gap-4">
                   <span className="text-emerald-400">"{r.name}"</span>
                   <span className="text-slate-400">=&gt;</span>
                   <span className="text-sky-400">"{r.rule}"</span>
                   <span className="text-slate-600">,</span>
                </div>
              ))}
              <div className="text-slate-400">]);</div>
           </div>
        </div>

        {/* Action & Feedback */}
        <div className="flex flex-col gap-6 w-80">
           <button
             onClick={() => setIsSuccess(true)}
             className="w-full py-6 rounded-2xl bg-white border-4 border-black shadow-xl hover:translate-y-[-4px] active:translate-y-0 transition-all flex items-center justify-center gap-4 group"
           >
              <Send className="w-8 h-8 text-black group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-black uppercase tracking-widest text-black">Send Valid</span>
           </button>

           <button
             onClick={() => setIsSuccess(false)}
             className="w-full py-6 rounded-2xl bg-slate-100 border-4 border-black shadow-xl hover:translate-y-[-4px] active:translate-y-0 transition-all flex items-center justify-center gap-4"
           >
              <AlertCircle className="w-8 h-8 text-black" />
              <span className="text-xl font-black uppercase tracking-widest text-black">Send Invalid</span>
           </button>

           <AnimatePresence mode="wait">
              {isSuccess !== null && (
                <motion.div
                  key={isSuccess ? 'success' : 'fail'}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className={`w-full p-6 rounded-2xl border-4 flex flex-col items-center gap-4 shadow-2xl ${isSuccess ? 'bg-emerald-500 border-black text-white' : 'bg-rose-500 border-black text-white'}`}
                >
                   {isSuccess ? <CheckCircle className="w-12 h-12" /> : <XCircle className="w-12 h-12" />}
                   <span className="text-lg font-black uppercase tracking-widest text-center">
                      {isSuccess ? 'Validation Passed! Proceeding to DB.' : 'Validation Failed! Redirecting with Errors.'}
                   </span>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Pro Tip */}
      <div className="px-10 py-5 rounded-[2rem] bg-amber-500 border-4 border-black shadow-xl flex items-center gap-6 relative z-30">
         <Sparkles className="w-10 h-10 text-black animate-pulse" />
         <span className="text-xl font-black uppercase tracking-widest text-black">
            The validate() method automatically handles failure & redirects!
         </span>
      </div>
    </div>
  );
}
