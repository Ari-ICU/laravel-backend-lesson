"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Rocket, ArrowRight } from 'lucide-react';

export function ThroughRelationsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-16">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">Has Many Through</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">hasManyThrough()</code>
      </div>

      <div className="flex items-center justify-center gap-8 w-full relative">
        
        {/* Project */}
        <div className="flex flex-col items-center gap-4 z-10">
          <motion.div 
            animate={{ scale: step === 0 ? 1.1 : 1 }}
            className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg transition-colors border-4 ${
              step >= 0 ? 'bg-blue-50 border-blue-400' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <Globe className={`w-12 h-12 ${step >= 0 ? 'text-blue-500' : 'text-slate-400'}`} />
          </motion.div>
          <div className="text-center">
            <span className="font-bold text-slate-700 block">Project</span>
            <span className="text-xs text-slate-400 font-mono">id: 1</span>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="flex flex-col items-center justify-center w-16 relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: step >= 1 ? '100%' : 0 }}
            className="h-1 bg-slate-300 absolute"
          />
          {step >= 1 && <ArrowRight className="text-slate-400 w-6 h-6 absolute text-right" />}
        </div>

        {/* Environment */}
        <div className="flex flex-col items-center gap-4 z-10 opacity-70">
          <motion.div 
            animate={{ scale: step === 1 ? 1.1 : 1 }}
            className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-inner transition-colors border-4 border-dashed ${
              step >= 1 ? 'bg-amber-50 border-amber-400' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <Server className={`w-12 h-12 ${step >= 1 ? 'text-amber-500' : 'text-slate-400'}`} />
          </motion.div>
          <div className="text-center">
            <span className="font-bold text-slate-700 block text-sm">Environment</span>
            <span className="text-xs text-slate-400 font-mono">project_id: 1</span>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="flex flex-col items-center justify-center w-16 relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: step >= 2 ? '100%' : 0 }}
            className="h-1 bg-slate-300 absolute"
          />
          {step >= 2 && <ArrowRight className="text-slate-400 w-6 h-6 absolute text-right" />}
        </div>

        {/* Deployment */}
        <div className="flex flex-col items-center gap-4 z-10">
          <motion.div 
            animate={{ scale: step === 2 || step === 3 ? 1.1 : 1 }}
            className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg transition-colors border-4 ${
              step >= 2 ? 'bg-emerald-50 border-emerald-400' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <Rocket className={`w-12 h-12 ${step >= 2 ? 'text-emerald-500' : 'text-slate-400'}`} />
          </motion.div>
          <div className="text-center">
            <span className="font-bold text-slate-700 block">Deployment</span>
            <span className="text-xs text-slate-400 font-mono">env_id: 42</span>
          </div>
        </div>

      </div>

      {/* The Through Line */}
      <div className="h-16 relative w-full flex items-center justify-center">
        <AnimatePresence>
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute w-[80%] flex items-center justify-center"
            >
              <div className="w-full h-1.5 bg-gradient-to-r from-blue-400 via-amber-300 to-emerald-400 rounded-full" />
              <div className="absolute bg-white px-4 py-1 rounded-full border border-slate-200 shadow-md text-sm font-bold text-slate-600">
                Direct Query Access
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
