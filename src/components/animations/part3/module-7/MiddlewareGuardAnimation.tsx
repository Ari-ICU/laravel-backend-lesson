"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, ShieldCheck, User, ArrowRight, XCircle } from 'lucide-react';

export function MiddlewareGuardAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const isGuest = step < 2;

  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-between px-12">
      {/* Request Origin */}
      <div className="flex flex-col items-center gap-4 z-10">
        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-colors duration-500 ${isGuest ? 'bg-slate-100 border-slate-300' : 'bg-blue-100 border-blue-300'}`}>
          <User className={`w-10 h-10 ${isGuest ? 'text-slate-500' : 'text-blue-600'}`} />
        </div>
        <span className="font-bold text-slate-700">{isGuest ? 'Guest User' : 'Logged-in User'}</span>
      </div>

      {/* Middleware Guard */}
      <div className="flex flex-col items-center gap-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-2 bg-slate-200 -z-10 rounded-full" />
        
        {/* Moving Request */}
        <motion.div
          animate={{ x: step % 2 === 0 ? -120 : isGuest ? -20 : 120, opacity: step % 2 === 0 ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -ml-4 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>

        <div className={`w-28 h-32 rounded-2xl border-4 flex flex-col items-center justify-center gap-2 bg-white transition-colors duration-500 z-10 ${isGuest && step === 1 ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]' : step === 3 ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'border-slate-300'}`}>
          {isGuest && step === 1 ? (
            <ShieldAlert className="w-12 h-12 text-red-500" />
          ) : step === 3 ? (
            <ShieldCheck className="w-12 h-12 text-emerald-500" />
          ) : (
            <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-800 rounded-full animate-spin" />
          )}
          <span className="font-mono text-xs font-bold text-slate-600">auth</span>
        </div>
        <span className="font-bold text-slate-700 text-lg">Middleware</span>
      </div>

      {/* Target Route */}
      <div className="flex flex-col items-center gap-4 z-10">
        <div className="w-24 h-24 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center">
          <div className="text-indigo-600 font-bold">/dashboard</div>
        </div>
        
        <AnimatePresence>
          {isGuest && step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-10 flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-full font-bold border border-red-200"
            >
              <XCircle className="w-5 h-5" />
              <span>Redirect to Login</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
