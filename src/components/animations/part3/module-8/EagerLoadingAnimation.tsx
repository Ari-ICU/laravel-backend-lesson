"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, FileText } from 'lucide-react';

export function EagerLoadingAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isEager, setIsEager] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => {
        if (s >= 5) {
          setIsEager(e => !e);
          return 0;
        }
        return s + 1;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl min-h-[450px] flex flex-col items-center justify-start pt-8 gap-8">
      <div className="flex items-center justify-between w-full px-12">
        <div className={`px-6 py-2 rounded-xl font-bold text-lg transition-all ${!isEager ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-400'}`}>
          N+1 Problem (Lazy)
        </div>
        <div className={`px-6 py-2 rounded-xl font-bold text-lg transition-all ${isEager ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
          Eager Loading (with)
        </div>
      </div>

      <div className="flex w-full px-12 gap-16 relative mt-4">
        {/* App Side */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="p-4 bg-slate-800 text-slate-100 rounded-xl font-mono text-sm">
            {isEager ? 'Post::with("comments")->get()' : 'Post::all() ... foreach'}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {[1, 2, 3].map(i => (
              <div key={i} className={`h-12 border-2 rounded-xl flex items-center px-4 gap-4 transition-all duration-300 ${step >= i ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-slate-50'}`}>
                <FileText className={`w-5 h-5 ${step >= i ? 'text-blue-500' : 'text-slate-300'}`} />
                <span className={step >= i ? 'text-slate-700' : 'text-slate-400'}>Post {i}</span>
                {step >= i + 1 && !isEager && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-auto text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded">Query!</motion.span>
                )}
                {step >= 1 && isEager && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ml-auto text-xs font-bold text-emerald-500 bg-emerald-100 px-2 py-1 rounded">Loaded</motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Database Side */}
        <div className="flex flex-col items-center gap-4 justify-center relative">
          <Database className="w-20 h-20 text-slate-700" />
          <div className="text-center font-bold text-slate-600">Database</div>
          
          <AnimatePresence>
            {!isEager && step > 0 && step <= 4 && (
              <motion.div
                key={`q-${step}`}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="absolute top-1/2 -left-16 bg-red-100 text-red-700 border border-red-300 px-3 py-1 rounded shadow-sm text-sm font-bold"
              >
                SELECT * ...
              </motion.div>
            )}
            {isEager && step === 1 && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="absolute top-1/2 -left-20 bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 rounded shadow-sm text-sm font-bold flex flex-col items-center"
              >
                <span>SELECT posts</span>
                <span>SELECT comments IN (1,2,3)</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
