"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, FileText, Database, ArrowRight } from 'lucide-react';

export function LazyEagerLoadingAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setHasLoaded(h => !h);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-12">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">Lazy Eager Loading</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">
          $user-&gt;load('posts')
        </code>
      </div>

      <div className="flex items-center justify-center gap-24 w-full relative">
        {/* App Side */}
        <div className="flex flex-col items-center gap-8 z-10">
          <motion.div 
            className="w-24 h-24 bg-blue-100 rounded-3xl border-4 border-blue-300 flex items-center justify-center shadow-lg relative"
          >
            <User className="w-12 h-12 text-blue-600" />
            
            {/* Posts that appear when loaded */}
            <AnimatePresence>
              {hasLoaded && (
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="absolute -right-12 flex flex-col gap-1"
                >
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 bg-emerald-100 rounded-lg border-2 border-emerald-300 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-emerald-600" />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <span className="font-bold text-slate-600">User Model</span>
        </div>

        {/* Action/Request Line */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center">
            <motion.div 
              animate={{ x: hasLoaded ? [0, 80, 0] : 0 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="flex items-center"
            >
              <div className="h-1 w-20 bg-slate-200 rounded-full" />
              <ArrowRight className="text-slate-400 w-6 h-6 -ml-2" />
            </motion.div>
          </div>
          <motion.div
            animate={{ 
              opacity: hasLoaded ? 1 : 0.3,
              scale: hasLoaded ? 1.05 : 1
            }}
            className="text-[10px] font-black uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200"
          >
            {hasLoaded ? 'Load Command Sent' : 'Waiting for load()'}
          </motion.div>
        </div>

        {/* Database Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <Database className={`w-20 h-20 transition-colors ${hasLoaded ? 'text-emerald-500' : 'text-slate-400'}`} />
          <span className="font-bold text-slate-600">Database</span>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl w-full text-center">
        <p className="text-sm font-medium text-slate-500 italic">
          "Don't fetch posts until the controller specifically asks for them."
        </p>
      </div>
    </div>
  );
}
