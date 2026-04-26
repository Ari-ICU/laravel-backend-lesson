"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, Bug, Search, Code, CheckCircle, AlertCircle } from 'lucide-react';

export function TestingOverviewAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [items, setItems] = useState<{ id: number; status: 'pending' | 'success' | 'fail' }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newItem = { 
          id: Date.now(), 
          status: Math.random() > 0.2 ? 'success' : 'fail' 
        };
        return [...prev.slice(-4), newItem as any];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full max-w-4xl min-h-[400px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "scale-110" : ""}`}>
      {/* Conveyor Belt Background */}
      <div className="absolute w-full h-24 bg-slate-200 bottom-24 rounded-full border-4 border-black -z-10 shadow-[0_10px_0px_0px_rgba(0,0,0,1)]" />
      
      {/* Scanner Machine */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 z-20 flex flex-col items-center">
         <div className="w-40 h-48 bg-white border-4 border-black rounded-t-[2rem] flex flex-col items-center justify-center gap-4 shadow-2xl relative">
            <motion.div 
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute -top-10 text-primary"
            >
               <Search className="w-12 h-12" />
            </motion.div>
            <div className="w-24 h-4 bg-slate-100 rounded-full overflow-hidden border-2 border-black">
               <motion.div 
                animate={{ x: [-100, 100] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1/2 h-full bg-primary"
               />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Auto Inspector</span>
         </div>
      </div>

      {/* Moving Items */}
      <div className="absolute w-full px-20 bottom-32 flex justify-between items-center h-20">
         {items.map((item, idx) => (
           <motion.div
             key={item.id}
             initial={{ x: -200, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             exit={{ x: 600, opacity: 0 }}
             className="relative"
           >
              <div className="w-24 h-24 bg-white border-4 border-black rounded-2xl flex items-center justify-center shadow-lg">
                 <Code className="w-12 h-12 text-slate-400" />
              </div>
              
              {/* Status Badge after passing center */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-4 -right-4"
              >
                 {item.status === 'success' ? (
                   <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                   </div>
                 ) : (
                   <div className="w-10 h-10 rounded-full bg-rose-500 border-2 border-black flex items-center justify-center">
                      <Bug className="w-6 h-6 text-white" />
                   </div>
                 )}
              </motion.div>
           </motion.div>
         ))}
      </div>

      {/* Header Info */}
      <div className="absolute top-0 flex items-center gap-6 bg-white border-4 border-black px-8 py-4 rounded-[2rem] shadow-xl">
        <ClipboardCheck className="w-10 h-10 text-primary" />
        <div>
          <h3 className="text-xl font-black uppercase">Continuous Testing</h3>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Ensuring stability with every change</p>
        </div>
      </div>
      
      <div className="mt-64 text-center">
         <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Code Quality Assurance Pipeline</p>
      </div>
    </div>
  );
}
