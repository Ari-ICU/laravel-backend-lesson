"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, MessageSquare, AlertTriangle, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';

export function ErrorDisplayAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [showError, setShowError] = useState(false);

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-12 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-rose-500 flex items-center justify-center border-2 border-black shadow-lg">
          <MessageSquare className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Displaying Errors</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Blade Directives & UX Feedback</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-20 relative z-20">
        
        {/* Blade Template Mockup */}
        <div className="flex-1 rounded-[2.5rem] border-4 border-black bg-slate-900 overflow-hidden shadow-2xl">
           <div className="px-6 py-4 bg-slate-800 border-b-2 border-black flex items-center justify-between">
              <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] font-mono">create.blade.php</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
           </div>
           <div className="p-8 font-mono text-xl space-y-4">
              <div className="text-slate-500">&lt;input name="title"&gt;</div>
              <div className="text-emerald-400">@error('title')</div>
              <div className="pl-8 text-rose-400">
                 &lt;span&gt;&#123;&#123; $message &#125;&#125;&lt;/span&gt;
              </div>
              <div className="text-emerald-400">@enderror</div>
           </div>
        </div>

        {/* Live Preview UI */}
        <div className="flex-1 rounded-[2.5rem] border-4 border-black bg-white p-10 shadow-2xl flex flex-col gap-6 relative">
           <div className="flex items-center gap-4 border-b-2 border-black pb-4">
              <Eye className="w-6 h-6 text-black" />
              <span className="text-xl font-black uppercase tracking-widest text-black">Live UI Preview</span>
           </div>
           
           <div className="space-y-4">
              <label className="text-sm font-black uppercase tracking-widest text-black/40">Post Title</label>
              <input 
                readOnly
                value="Abc"
                className={`w-full p-4 rounded-xl border-4 transition-all bg-slate-50 font-bold text-xl ${showError ? 'border-rose-500 ring-4 ring-rose-500/10' : 'border-black/10'}`}
              />
              
              <AnimatePresence>
                 {showError && (
                   <motion.div
                     initial={{ opacity: 0, height: 0, y: -10 }}
                     animate={{ opacity: 1, height: 'auto', y: 0 }}
                     exit={{ opacity: 0, height: 0, y: -10 }}
                     className="flex items-center gap-3 text-rose-600 overflow-hidden"
                   >
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span className="text-sm font-bold uppercase tracking-wide">The title must be at least 5 characters.</span>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>

           <div className="pt-4 border-t-2 border-black/5">
              <div className="h-12 w-full bg-black rounded-xl flex items-center justify-center text-white font-black uppercase tracking-widest text-sm">
                 Submit Post
              </div>
           </div>
        </div>

      </div>

      {/* Control Panel */}
      <div className="flex items-center gap-8 relative z-30">
        <button
          onClick={() => setShowError(!showError)}
          className={`flex items-center gap-6 px-12 py-6 rounded-full border-4 transition-all shadow-2xl font-black uppercase tracking-[0.2em] ${showError ? 'bg-white border-black text-black' : 'bg-rose-500 border-black text-white'} active:scale-95`}
        >
          {showError ? <EyeOff className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
          {showError ? 'Hide Validation Errors' : 'Simulate Validation Error'}
        </button>
      </div>

      {/* Logic Insight */}
      <div className="h-20 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {showError ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-amber-100 border-2 border-black px-8 py-3 rounded-2xl flex items-center gap-4"
              >
                <AlertTriangle className="w-8 h-8 text-amber-600" />
                <span className="text-xl font-black text-black uppercase tracking-widest">The $message variable is automatically injected!</span>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 text-emerald-600"
              >
                <CheckCircle2 className="w-8 h-8" />
                <span className="text-xl font-black uppercase tracking-widest">Everything looks good!</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
