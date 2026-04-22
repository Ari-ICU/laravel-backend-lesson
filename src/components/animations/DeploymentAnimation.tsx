"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Laptop, Rocket, Shield, Zap, Database } from 'lucide-react';

export function DeploymentAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-80 flex items-center justify-between px-20">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2" />
      
      {/* Animated Pulses */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-primary blur-sm"
          initial={{ left: "15%", opacity: 0 }}
          animate={{ 
            left: ["15%", "85%"],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1.2, 0.5]
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
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-xl group">
          <Laptop className="w-10 h-10 text-white/40 group-hover:text-primary transition-colors" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-[10px] font-black text-white">
            DEV
          </div>
        </div>
        <span className="text-xs font-black text-white/20 uppercase tracking-[0.3em]">Local Machine</span>
      </motion.div>

      {/* Build Process (Center) */}
      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-dashed border-primary/40 flex items-center justify-center">
          <Rocket className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-pulse">Building & Testing</span>
        </div>
      </motion.div>

      {/* Production Server */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 flex flex-col items-center gap-4"
      >
        <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-2xl shadow-emerald-500/10 backdrop-blur-xl group">
          <Server className="w-10 h-10 text-emerald-400/40 group-hover:text-emerald-400 transition-colors" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center text-[10px] font-black text-white">
            PROD
          </div>
        </div>
        <span className="text-xs font-black text-emerald-500/20 uppercase tracking-[0.3em]">Cloud Server</span>
      </motion.div>
    </div>
  );
}
