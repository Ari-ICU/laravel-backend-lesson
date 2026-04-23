"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Laptop, Rocket, Shield, Zap, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DeploymentAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-96 flex items-center justify-between px-20 overflow-hidden">
      {/* Connector Line with Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.05] -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 blur-sm -translate-y-1/2" />
      
      {/* Animated Pulses */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-0 w-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ left: "15%", opacity: 0 }}
          animate={{ 
            left: ["15%", "85%"],
            opacity: [0, 1, 1, 0],
            scaleX: [0.5, 2, 2, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 1,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Local Environment */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <div className="w-28 h-28 rounded-[2.5rem] bg-white/[0.02] border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-3xl group relative">
          <Laptop className="w-12 h-12 text-white/20 group-hover:text-primary transition-all duration-500 group-hover:scale-110" />
          <div className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-primary text-[9px] font-black text-white shadow-lg shadow-primary/20">
            DEV
          </div>
          <div className="absolute inset-0 rounded-[2.5rem] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Local Machine</span>
      </motion.div>

      {/* Build Process (Center) */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.div 
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20, repeat: Infinity, ease: "linear"
          }}
          className="w-40 h-40 rounded-full border border-dashed border-primary/20 flex items-center justify-center relative"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.1)]"
          >
            <Rocket className="w-10 h-10 text-primary" />
          </motion.div>
          
          {/* Orbiting Dots */}
          {[0, 1, 2].map(i => (
            <div 
              key={i} 
              className="absolute w-2 h-2 rounded-full bg-primary"
              style={{ 
                top: '50%', 
                left: '50%', 
                transform: `rotate(${i * 120}deg) translate(80px) rotate(-${i * 120}deg)` 
              }}
            />
          ))}
        </motion.div>
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] animate-pulse">Processing</span>
          <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">Optimization Phase</span>
        </div>
      </div>

      {/* Production Server */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <div className="w-28 h-28 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center shadow-2xl shadow-emerald-500/10 backdrop-blur-3xl group relative">
          <Server className="w-12 h-12 text-emerald-400/20 group-hover:text-emerald-400 transition-all duration-500 group-hover:scale-110" />
          <div className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-emerald-500 text-[9px] font-black text-white shadow-lg shadow-emerald-500/20">
            PROD
          </div>
          <div className="absolute inset-0 rounded-[2.5rem] bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-[10px] font-black text-emerald-500/20 uppercase tracking-[0.4em]">Cloud Server</span>
      </motion.div>
    </div>
  );
}

