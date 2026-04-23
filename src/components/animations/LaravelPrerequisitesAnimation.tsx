"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Database, Package, Code2, Cpu, CheckCircle2, Server, Laptop } from 'lucide-react';

export function LaravelPrerequisitesAnimation() {
  const [checked, setChecked] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChecked(prev => {
        if (prev.length >= 3) return [];
        return [...prev, prev.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const requirements = [
    { title: 'PHP Engine', version: '8.2+', icon: Cpu, color: 'rose' },
    { title: 'Composer', version: 'Dependency Manager', icon: Package, color: 'sky' },
    { title: 'Database', version: 'MySQL / SQLite', icon: Database, color: 'emerald' }
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <ShieldCheck className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">System Environment Check</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Ensuring Laravel Compatibility</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20">
        
        {/* 1. System Scanning */}
        <div className="relative">
           <motion.div
             animate={{ 
               scale: [1, 1.05, 1],
               rotate: [0, 5, -5, 0]
             }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-48 h-48 rounded-[3rem] bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              <Laptop className="w-16 h-16 text-white/20" />
              
              {/* Scanner Light */}
              <motion.div
                animate={{ top: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent z-10"
              />
           </motion.div>
        </div>

        {/* 2. Checklist */}
        <div className="flex flex-col gap-4 w-72">
           {requirements.map((req, i) => {
             const isActive = checked.includes(i);
             return (
               <motion.div
                 key={req.title}
                 animate={{ 
                    x: isActive ? 10 : 0,
                    opacity: isActive ? 1 : 0.4,
                    borderColor: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)'
                 }}
                 className="p-4 rounded-2xl bg-white/[0.02] border flex items-center justify-between transition-all group"
               >
                  <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-xl bg-${req.color}-500/10 flex items-center justify-center border border-${req.color}-500/20`}>
                        <req.icon className={`w-5 h-5 text-${req.color}-400`} />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[11px] font-black text-white uppercase tracking-wider">{req.title}</span>
                        <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{req.version}</span>
                     </div>
                  </div>
                  <AnimatePresence>
                     {isActive && (
                       <motion.div
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center"
                       >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                       </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
             );
           })}
        </div>

      </div>

      {/* Helper Suggestion */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full"
      >
        <Server className="w-4 h-4 text-primary" />
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
           Pro Tip: Use <span className="text-primary italic">Laragon</span> or <span className="text-primary italic">XAMPP</span> for an all-in-one setup.
        </span>
      </motion.div>
    </div>
  );
}
