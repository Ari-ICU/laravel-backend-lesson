"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Lock, Unlock, Database, User, Shield, Zap, AlertTriangle } from 'lucide-react';

export function SecurityFlowAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [shieldActive, setShieldActive] = useState(true);
  const [attacks, setAttacks] = useState<{ id: number; type: string; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (attacks.length < 5) {
        setAttacks(prev => [
          ...prev,
          {
            id: Date.now(),
            type: ['XSS', 'CSRF', 'SQLi'][Math.floor(Math.random() * 3)],
            x: Math.random() * 100 - 50, // Start from random side
            y: Math.random() * 100 - 50
          }
        ]);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [attacks]);

  const removeAttack = (id: number) => {
    setAttacks(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className={`relative w-full max-w-5xl min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "scale-110" : ""}`}>
      
      {/* Central Server / Application */}
      <div className="relative">
         {/* Shield Aura */}
         <AnimatePresence>
            {shieldActive && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.1 }}
                exit={{ scale: 1.5, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-500 rounded-full -m-20 pointer-events-none"
              />
            )}
         </AnimatePresence>

         <div className={`w-48 h-48 rounded-[3rem] border-8 flex flex-col items-center justify-center gap-4 transition-all duration-500 relative z-20 ${shieldActive ? 'bg-white border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.5)]' : 'bg-rose-50 border-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.3)]'}`}>
            {shieldActive ? (
              <ShieldCheck className="w-24 h-24 text-blue-500" />
            ) : (
              <ShieldAlert className="w-24 h-24 text-rose-500 animate-bounce" />
            )}
            <span className={`text-xs font-black uppercase tracking-widest ${shieldActive ? 'text-blue-600' : 'text-rose-600'}`}>
              {shieldActive ? 'Laravel Protected' : 'Vulnerable App'}
            </span>
         </div>

         {/* Incoming Attacks */}
         <div className="absolute inset-0 z-30 pointer-events-none">
            {attacks.map((attack) => (
              <motion.div
                key={attack.id}
                initial={{ x: attack.x > 0 ? 300 : -300, y: attack.y > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                onAnimationComplete={() => removeAttack(attack.id)}
                className="absolute"
              >
                 <div className={`px-4 py-2 rounded-full border-2 border-black flex items-center gap-2 shadow-lg ${shieldActive ? 'bg-white' : 'bg-rose-500 text-white animate-ping'}`}>
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] font-black uppercase">{attack.type}</span>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>

      {/* Control Panel */}
      <div className="mt-24 flex flex-col items-center gap-8 relative z-40">
        <div className="flex items-center gap-6">
           <button
            onClick={() => setShieldActive(true)}
            className={`flex items-center gap-4 px-10 py-5 rounded-full border-4 border-black font-black uppercase tracking-widest text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all ${shieldActive ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-blue-50'}`}
           >
             <Lock className="w-6 h-6" />
             ACTIVATE CSRF & XSS DEFENSE
           </button>

           <button
            onClick={() => setShieldActive(false)}
            className={`flex items-center gap-4 px-10 py-5 rounded-full border-4 border-black font-black uppercase tracking-widest text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all ${!shieldActive ? 'bg-rose-500 text-white' : 'bg-white text-black hover:bg-rose-50'}`}
           >
             <Unlock className="w-6 h-6" />
             BYPASS SECURITY (DANGEROUS)
           </button>
        </div>

        <div className="flex gap-12 bg-white border-2 border-black/5 px-12 py-6 rounded-[2.5rem] shadow-sm">
           <div className="flex flex-col items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${shieldActive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span className="text-[10px] font-black uppercase tracking-tighter">SQL Binding</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${shieldActive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span className="text-[10px] font-black uppercase tracking-tighter">CSRF Tokens</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${shieldActive ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              <span className="text-[10px] font-black uppercase tracking-tighter">XSS Filtering</span>
           </div>
        </div>
      </div>

      {/* Logic Feedback */}
      <div className="mt-12 h-16 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {!shieldActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-amber-100 border-4 border-amber-500 px-8 py-3 rounded-2xl flex items-center gap-4"
              >
                <AlertTriangle className="w-8 h-8 text-amber-600" />
                <span className="text-xl font-black text-amber-700 uppercase tracking-widest">Warning: Application at high risk!</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
