"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, ArrowRight, FileJson, CheckCircle, Code } from 'lucide-react';

export function UploadFormAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center gap-8 ${isProjectorMode ? "scale-110" : ""}`}>
      <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-3xl shadow-xl">
        <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center border-2 border-black shadow-md">
          <Layout className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-black text-black uppercase tracking-widest">HTML Form Setup</h3>
      </div>

      <div className="flex items-center gap-12 w-full max-w-3xl">
        {/* Form representation */}
        <div className="flex-1 p-6 bg-slate-50 border-2 border-black rounded-3xl space-y-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-black/10 pb-2">
            <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">browser_view.exe</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="h-4 w-2/3 bg-black/10 rounded" />
            <div className="h-10 w-full bg-white border-2 border-black rounded-xl" />
            
            <div className="h-4 w-1/2 bg-black/10 rounded" />
            <div className="h-10 w-full bg-white border-2 border-black rounded-xl flex items-center px-4">
              <span className="text-[10px] font-bold text-black/30 italic">Choose file...</span>
            </div>
            
            <div className="pt-2">
              <button 
                onClick={() => setSubmitted(true)}
                className="w-full h-10 bg-blue-600 border-2 border-black rounded-xl text-white font-black text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
              >
                SUBMIT FORM
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-black/5">
             <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald-600" />
                <span className="text-[9px] font-mono font-bold text-emerald-700">enctype="multipart/form-data"</span>
             </div>
          </div>
        </div>

        <ArrowRight className={`w-12 h-12 text-black ${submitted ? 'animate-pulse' : 'opacity-20'}`} />

        {/* Server representation */}
        <div className="flex-1 p-6 bg-slate-900 border-2 border-black rounded-3xl space-y-4 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FileJson className="w-20 h-20 text-white" />
          </div>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">laravel_backend</span>
          
          <AnimatePresence>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-black text-emerald-300 uppercase tracking-widest">$request-&gt;file() detected!</span>
                </div>
                <div className="bg-blue-500/20 border border-blue-500/40 p-3 rounded-xl">
                  <div className="h-2 w-full bg-blue-500/30 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} className="h-full bg-blue-400" />
                  </div>
                  <span className="text-[8px] font-mono text-blue-300 mt-2 block">Storing to disk...</span>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center h-32 border-2 border-white/5 border-dashed rounded-2xl">
                 <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Waiting for request</span>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {submitted && (
        <button 
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors"
        >
          Reset Demo
        </button>
      )}
    </div>
  );
}
