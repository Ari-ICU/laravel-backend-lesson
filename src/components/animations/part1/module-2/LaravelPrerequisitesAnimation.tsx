"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Database, Package, Code2, Cpu, CheckCircle2, Server, Laptop } from 'lucide-react';

export function LaravelPrerequisitesAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
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
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-rose-500 flex items-center justify-center border-2 border-black shadow-lg">
          <ShieldCheck className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">System Environment Check</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Ensuring Laravel Compatibility</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 relative z-20">
        
        {/* 1. System Scanning */}
        <div className="relative">
           <motion.div
             animate={{ 
               scale: [1, 1.05, 1],
               rotate: [0, 5, -5, 0]
             }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-80 h-80 rounded-[4rem] bg-white border-4 border-black flex items-center justify-center shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              <Laptop className="w-48 h-48 text-black" />
              
              {/* Scanner Light */}
              <motion.div
                animate={{ top: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent z-10"
              />
           </motion.div>
        </div>

        {/* 2. Checklist */}
        <div className="flex flex-col gap-6 w-80">
           {requirements.map((req, i) => {
             const isActive = checked.includes(i);
             return (
               <motion.div
                 key={req.title}
                 animate={{ 
                    x: isActive ? 20 : 0,
                    opacity: isActive ? 1 : 0.4,
                    borderColor: isActive ? 'black' : 'rgba(0,0,0,0.1)'
                 }}
                 className="p-5 rounded-3xl bg-white border-4 flex items-center justify-between transition-all group shadow-xl"
               >
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border-2 border-black/10">
                        <req.icon className="w-10 h-10 text-black" />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-xl font-black text-black uppercase tracking-wider">{req.title}</span>
                        <span className="text-lg font-bold text-black uppercase tracking-widest">{req.version}</span>
                     </div>
                  </div>
                  <AnimatePresence>
                     {isActive && (
                       <motion.div
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center shadow-lg"
                       >
                          <CheckCircle2 className="w-6 h-6 text-black" />
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
        className="flex items-center gap-6 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30"
      >
        <Server className="w-10 h-10 text-black" />
        <span className="text-xl font-black text-black uppercase tracking-widest">
           Pro Tip: Use <span className="underline decoration-4 decoration-sky-500">Laragon</span> or <span className="underline decoration-4 decoration-amber-500">XAMPP</span> for an all-in-one setup.
        </span>
      </motion.div>
    </div>
  );
}
