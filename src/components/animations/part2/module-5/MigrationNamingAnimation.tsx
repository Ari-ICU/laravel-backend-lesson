"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileCode, Clock, ArrowRight, CheckCircle2, Terminal as TerminalIcon, Sparkles, Hash, Calendar } from 'lucide-react';

export function MigrationNamingAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [inputText, setInputText] = useState('create_products_table');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedFile, setGeneratedFile] = useState<string | null>(null);

  const generate = () => {
    setIsGenerating(true);
    setGeneratedFile(null);
    
    setTimeout(() => {
      const now = new Date();
      const timestamp = now.toISOString().replace(/[-:T]/g, '_').split('.')[0];
      setGeneratedFile(`${timestamp}_${inputText}.php`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Clock className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Migration Naming Strategy</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Timestamps & Semantic Actions</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-4 px-12">
        
        {/* Input Side */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="w-full bg-slate-50 border-2 border-slate-900/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-50/5 border-b border-slate-900/10 px-4 py-2 flex items-center justify-between">
                 <TerminalIcon className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest font-mono">Terminal Input</span>
              </div>
              <div className="p-6 space-y-6">
                 <div className="flex flex-col gap-6">
                    <span className="text-lg font-black text-black uppercase tracking-widest">Migration Name:</span>
                    <div className="flex items-center gap-4 bg-white/40 border border-slate-900/10 rounded-xl px-4 py-3">
                       <span className="text-black font-mono text-lg">$</span>
                       <input 
                         type="text" 
                         value={inputText}
                         onChange={(e) => setInputText(e.target.value.toLowerCase().replace(/\s/g, '_'))}
                         className="bg-transparent border-none focus:outline-none text-black font-mono text-lg w-full"
                         placeholder="e.g. create_users_table"
                       />
                    </div>
                 </div>
                 
                 <button 
                   onClick={generate}
                   disabled={isGenerating || !inputText}
                   className={`w-full h-11 rounded-xl flex items-center justify-center gap-4 transition-all ${isGenerating ? 'bg-slate-50/5 border border-slate-900/10 text-black' : 'bg-primary border border-primary/50 text-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'}`}
                 >
                    <Sparkles className="w-12 h-12" />
                    <span className="text-lg font-black uppercase tracking-widest">Generate File</span>
                 </button>
              </div>
           </div>
        </div>

        {/* Output Side */}
        <div className="flex-1 flex flex-col gap-6 items-center">
           <div className="h-60 w-full rounded-3xl border-2 border-dashed border-slate-900/10 flex flex-col items-center justify-center relative bg-white/[0.01]">
              <AnimatePresence mode="wait">
                 {isGenerating ? (
                   <motion.div
                     key="loading"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="flex flex-col items-center gap-4"
                   >
                      <RefreshCw className="w-36 w-36 text-black animate-spin" />
                      <span className="text-lg font-black text-black uppercase tracking-widest">Adding Timestamp...</span>
                   </motion.div>
                 ) : generatedFile ? (
                   <motion.div
                     key="result"
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="flex flex-col items-center gap-6 w-full px-6"
                   >
                      <div className="p-4 rounded-2xl bg-slate-50/5 border border-slate-900/10 flex items-center gap-6 w-full group transition-all hover:border-emerald-500/30">
                         <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <FileCode className="w-14 h-14 text-black" />
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="text-lg font-mono text-black truncate">{generatedFile}</div>
                            <div className="text-lg font-black text-black uppercase tracking-widest mt-1">Successfully Generated</div>
                         </div>
                      </div>

                      {/* Decomposition */}
                      <div className="flex gap-6 w-full">
                         <div className="flex-1 p-2 rounded-lg bg-primary/10 border border-primary/20 flex flex-col items-center gap-4">
                            <Calendar className="w-12 h-12 text-black" />
                            <span className="text-lg font-black text-black uppercase">Ordering</span>
                         </div>
                         <div className="flex-1 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center gap-4">
                            <Sparkles className="w-12 h-12 text-black" />
                            <span className="text-lg font-black text-black uppercase">Action</span>
                         </div>
                         <div className="flex-1 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 flex flex-col items-center gap-4">
                            <Hash className="w-12 h-12 text-black" />
                            <span className="text-lg font-black text-black uppercase">Table</span>
                         </div>
                      </div>
                   </motion.div>
                 ) : (
                   <div className="flex flex-col items-center gap-4 opacity-20">
                      <FileCode className="w-12 h-12 text-black" />
                      <span className="text-lg font-black uppercase tracking-widest">Waiting for command</span>
                   </div>
                 )}
              </AnimatePresence>
           </div>
           
           <div className={`p-4 rounded-2xl border transition-all duration-500 max-w-[280px] ${generatedFile ? 'bg-primary/5 border-primary/20 opacity-100' : 'opacity-0'}`}>
              <p className="text-lg text-black leading-relaxed text-center italic">
                "The timestamp ensures migrations run in the exact order they were created, preventing schema conflicts."
              </p>
           </div>
        </div>

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
