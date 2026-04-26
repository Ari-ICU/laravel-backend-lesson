"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, FileText, Video, ArrowUp } from 'lucide-react';

export function PolymorphicAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeTarget, setActiveTarget] = useState<0 | 1>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTarget(t => (t === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-16">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">Polymorphic Relationship</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">morphTo() / morphMany()</code>
      </div>

      <div className="flex flex-col items-center gap-12 w-full relative">
        
        {/* Targets */}
        <div className="flex items-center justify-center gap-24 w-full">
          <div className="flex flex-col items-center gap-4 relative">
            <motion.div 
              animate={{ 
                scale: activeTarget === 0 ? 1.1 : 1,
                borderColor: activeTarget === 0 ? '#3b82f6' : '#cbd5e1'
              }}
              className={`w-20 h-20 bg-blue-50 rounded-2xl border-4 flex items-center justify-center shadow-lg transition-colors`}
            >
              <FileText className={`w-10 h-10 ${activeTarget === 0 ? 'text-blue-500' : 'text-slate-400'}`} />
            </motion.div>
            <span className="font-bold text-slate-600">Post (App\Models\Post)</span>
          </div>

          <div className="flex flex-col items-center gap-4 relative">
            <motion.div 
              animate={{ 
                scale: activeTarget === 1 ? 1.1 : 1,
                borderColor: activeTarget === 1 ? '#8b5cf6' : '#cbd5e1'
              }}
              className={`w-20 h-20 bg-purple-50 rounded-2xl border-4 flex items-center justify-center shadow-lg transition-colors`}
            >
              <Video className={`w-10 h-10 ${activeTarget === 1 ? 'text-purple-500' : 'text-slate-400'}`} />
            </motion.div>
            <span className="font-bold text-slate-600">Video (App\Models\Video)</span>
          </div>
        </div>

        {/* The Polymorphic Table */}
        <div className="relative flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTarget}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute -top-16 flex flex-col items-center"
            >
              <ArrowUp className={`w-8 h-8 ${activeTarget === 0 ? 'text-blue-500 -ml-32' : 'text-purple-500 ml-32'} transition-all`} />
            </motion.div>
          </AnimatePresence>

          <div className="bg-emerald-50 rounded-3xl border-4 border-emerald-300 p-6 flex flex-col items-center shadow-xl w-80">
            <MessageSquare className="w-12 h-12 text-emerald-500 mb-4" />
            <span className="font-bold text-emerald-700 text-xl mb-2">comments</span>
            
            <div className="w-full bg-white rounded-xl border border-emerald-200 p-3 space-y-2 mt-2">
              <div className="flex justify-between text-sm">
                <span className="font-mono text-slate-500">id:</span>
                <span className="font-mono font-bold">1</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-mono text-slate-500">body:</span>
                <span className="font-mono font-bold">"Great content!"</span>
              </div>
              <div className="h-px bg-slate-100 my-1" />
              <div className="flex justify-between text-sm">
                <span className="font-mono text-slate-500">commentable_id:</span>
                <motion.span 
                  key={`id-${activeTarget}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`font-mono font-bold ${activeTarget === 0 ? 'text-blue-600' : 'text-purple-600'}`}
                >
                  {activeTarget === 0 ? '42' : '15'}
                </motion.span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-mono text-slate-500">commentable_type:</span>
                <motion.span 
                  key={`type-${activeTarget}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`font-mono font-bold text-xs ${activeTarget === 0 ? 'text-blue-600' : 'text-purple-600'}`}
                >
                  {activeTarget === 0 ? 'App\\Models\\Post' : 'App\\Models\\Video'}
                </motion.span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
