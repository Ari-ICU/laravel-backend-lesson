"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Package, User, Database, ShieldCheck, Cpu } from 'lucide-react';

export function ClassObjectAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-around px-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* 1. Blueprint (Class) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-72 p-8 rounded-3xl border-2 border-dashed border-white/20 bg-white/[0.01] flex flex-col gap-6"
      >
        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-widest text-white/60">
          Blueprint (Class)
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-white/40" />
          </div>
          <h3 className="text-xl font-black text-white/60 tracking-tight">BankAccount</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Properties (Data)</p>
            <div className="h-2 w-full bg-white/5 rounded-full" />
            <div className="h-2 w-3/4 bg-white/5 rounded-full" />
          </div>
          <div className="space-y-2">
            <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Methods (Actions)</p>
            <div className="h-6 w-full bg-white/5 rounded-xl border border-white/5" />
            <div className="h-6 w-full bg-white/5 rounded-xl border border-white/5" />
          </div>
        </div>
      </motion.div>

      {/* 2. Construction Process (Arrow) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            new
          </span>
          <div className="w-16 h-px bg-gradient-to-r from-white/20 to-primary" />
        </motion.div>
        <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Instantiating</span>
      </motion.div>

      {/* 3. Object Instance */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        className="relative z-10 w-80 p-8 rounded-3xl bg-primary/[0.03] border border-primary/30 backdrop-blur-xl shadow-2xl flex flex-col gap-6 shadow-primary/10"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-primary/5 animate-pulse pointer-events-none" />

        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20">
          Instance (Object)
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white tracking-tight">$myAcc</h3>
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Live in Memory</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[8px] font-black text-primary/60 uppercase tracking-widest">Actual Data</p>
            <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
              <span className="text-[10px] font-mono text-white/60">balance</span>
              <span className="text-sm font-black text-white">$150.00</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
              <span className="text-[10px] font-mono text-white/60">acc_number</span>
              <span className="text-sm font-black text-white">"KH-7788"</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
