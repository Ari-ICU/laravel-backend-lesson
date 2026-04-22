"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Lock, Unlock, AlertTriangle, Fingerprint } from 'lucide-react';

export function SecurityAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-80 flex items-center justify-center gap-20">
      {/* Central Shield */}
      <div className="relative">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-56 h-56 rounded-[3rem] bg-emerald-500/10 border-4 border-emerald-500/40 flex items-center justify-center shadow-[0_0_80px_rgba(16,185,129,0.2)]"
        >
          <ShieldCheck className="w-24 h-24 text-emerald-400" />
        </motion.div>
        
        {/* Floating Security Tags */}
        {[
          { icon: <Lock />, label: "CSRF", delay: 0 },
          { icon: <Fingerprint />, label: "AUTH", delay: 1 },
          { icon: <Shield />, label: "XSS", delay: 2 }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [-20, -100],
              x: i === 0 ? -120 : i === 1 ? 0 : 120
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: item.delay,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
              {React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
            </div>
            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Threats Card */}
      <motion.div 
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-72 p-8 rounded-3xl bg-red-500/5 border border-red-500/20 flex flex-col gap-6"
      >
        <div className="flex items-center gap-4">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <span className="text-sm font-black text-red-400 uppercase tracking-widest">Blocked Threats</span>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-white/40">SQL Injection</span>
            <span className="text-red-400">BLOCKED</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-full bg-red-500" 
            />
          </div>
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="text-white/40">CSRF Attack</span>
            <span className="text-red-400">PREVENTED</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
