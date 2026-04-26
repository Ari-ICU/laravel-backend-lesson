"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Laptop, Rocket, Shield, Zap, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DeploymentAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-full h-96 flex items-center justify-between px-20 ">
      {/* Connector Line with Glow */}
      <div className="absolute top-1/2 left-0 w-full min-h-[1px] bg-white/[0.05] -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-full min-h-[1px] bg-primary/20 blur-sm -translate-y-1/2" />
      
      {/* Animated Pulses */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-0 w-6 min-h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
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
        <div className="w-42 h-42 rounded-[2.5rem] bg-white/[0.02] border border-slate-900/10 flex items-center justify-center shadow-2xl backdrop-blur-3xl group relative">
          <Laptop className="w-12 h-12 text-black group-hover:text-black transition-all duration-500 group-hover:scale-110" />
          <div className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-primary text-lg font-black text-black shadow-lg shadow-primary/20">
            DEV
          </div>
          <div className="absolute inset-0 rounded-[2.5rem] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-lg font-black text-black uppercase tracking-[0.4em]">Local Machine</span>
      </motion.div>

      {/* Build Process (Center) */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div 
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 20, repeat: Infinity, ease: "linear"
          }}
          className="w-60 h-60 rounded-full border border-dashed border-primary/20 flex items-center justify-center relative"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.1)]"
          >
            <Rocket className="w-12 h-12 text-black" />
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
          <span className="text-lg font-black text-black uppercase tracking-[0.5em] animate-pulse">Processing</span>
          <span className="text-lg font-bold text-black uppercase tracking-widest mt-1">Optimization Phase</span>
        </div>
      </div>

      {/* Production Server */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <div className="w-42 h-42 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center shadow-2xl shadow-emerald-500/10 backdrop-blur-3xl group relative">
          <Server className="w-12 h-12 text-black/20 group-hover:text-black transition-all duration-500 group-hover:scale-110" />
          <div className="absolute -top-2 -right-2 px-2 py-1 rounded-lg bg-emerald-500 text-lg font-black text-black shadow-lg shadow-emerald-500/20">
            PROD
          </div>
          <div className="absolute inset-0 rounded-[2.5rem] bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-lg font-black text-black/20 uppercase tracking-[0.4em]">Cloud Server</span>
      </motion.div>
    </div>
  );
}

