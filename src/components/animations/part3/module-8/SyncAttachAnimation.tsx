"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckSquare, Square, RefreshCw } from 'lucide-react';

export function SyncAttachAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const dbState = [
    [1, 2],       // initial DB
    [1, 2],       // user checks 3
    [1, 2],       // running sync([1, 3])
    [1, 3]        // final DB
  ];

  const inputState = [
    [1, 2],
    [1, 3],
    [1, 3],
    [1, 3]
  ];

  const currentDb = dbState[step];
  const currentInput = inputState[step];

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex items-center justify-between px-16">
      
      {/* HTML Form */}
      <div className="flex flex-col items-center gap-6 z-10 w-48">
        <div className="text-lg font-bold text-slate-700 bg-white px-4 py-1 rounded-xl shadow-sm border border-slate-200">HTML Form</div>
        <div className="flex flex-col gap-3 w-full bg-slate-50 p-6 rounded-3xl border border-slate-200">
          {[1, 2, 3].map(id => {
            const checked = currentInput.includes(id);
            return (
              <div key={id} className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${checked ? 'bg-blue-50' : ''}`}>
                {checked ? <CheckSquare className="w-5 h-5 text-blue-600" /> : <Square className="w-5 h-5 text-slate-400" />}
                <span className="font-bold text-slate-600">Role {id}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sync Action */}
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.div
          animate={{ rotate: step === 2 ? 180 : 0, scale: step === 2 ? 1.2 : 1 }}
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-colors ${step === 2 ? 'bg-emerald-500' : 'bg-slate-300'}`}
        >
          <RefreshCw className="w-8 h-8" />
        </motion.div>
        <div className="font-mono bg-slate-800 text-emerald-400 px-3 py-1 rounded-lg text-sm shadow-md">
          sync([{currentInput.join(', ')}])
        </div>
      </div>

      {/* Database Pivot */}
      <div className="flex flex-col items-center gap-6 z-10 w-48">
        <div className="text-lg font-bold text-slate-700 bg-white px-4 py-1 rounded-xl shadow-sm border border-slate-200">Pivot Table</div>
        <div className="flex flex-col gap-3 w-full bg-slate-50 p-6 rounded-3xl border border-slate-200 min-h-[180px]">
          <AnimatePresence>
            {currentDb.map(id => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex justify-between items-center bg-white p-2 rounded-lg border border-slate-200 shadow-sm"
              >
                <span className="text-sm font-bold text-slate-400">user:1</span>
                <span className="text-sm font-bold text-emerald-600">role:{id}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
