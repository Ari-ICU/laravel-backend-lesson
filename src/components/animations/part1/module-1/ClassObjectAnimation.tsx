"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, Package, User, Database, ShieldCheck, Cpu } from 'lucide-react';

export function ClassObjectAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-full min-h-[400px] flex items-center justify-around px-10 ">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* 1. Blueprint (Class) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-72 p-8 rounded-3xl border-2 border-dashed border-slate-900/20 bg-white/[0.01] flex flex-col gap-6"
      >
        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-slate-50/10 border border-slate-900/20 text-lg font-black uppercase tracking-widest text-black">
          Blueprint (Class)
        </div>

        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-50/5 border border-slate-900/10 flex items-center justify-center">
            <Cpu className="w-12 h-12 text-black" />
          </div>
          <h3 className="text-xl font-black text-black tracking-tight">BankAccount</h3>
        </div>

        <div className="space-y-6">
          <div className="space-y-6">
            <p className="text-lg font-black text-black uppercase tracking-widest">Properties (Data)</p>
            <div className="h-2 w-full bg-slate-50/5 rounded-full" />
            <div className="h-2 w-3/4 bg-slate-50/5 rounded-full" />
          </div>
          <div className="space-y-6">
            <p className="text-lg font-black text-black uppercase tracking-widest">Methods (Actions)</p>
            <div className="h-6 w-full bg-slate-50/5 rounded-xl border border-slate-900/5" />
            <div className="h-6 w-full bg-slate-50/5 rounded-xl border border-slate-900/5" />
          </div>
        </div>
      </motion.div>

      {/* 2. Construction Process (Arrow) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xl font-black text-black uppercase tracking-[0.3em] bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            new
          </span>
          <div className="w-16 h-px bg-gradient-to-r from-white/20 to-primary" />
        </motion.div>
        <span className="text-2xl font-bold text-black uppercase tracking-widest">Instantiating</span>
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

        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-primary text-lg font-black uppercase tracking-widest text-black shadow-lg shadow-primary/20">
          Instance (Object)
        </div>

        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Database className="w-12 h-12 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-black text-black tracking-tight">$myAcc</h3>
            <p className="text-lg font-bold text-black uppercase tracking-widest">Live in Memory</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-6">
            <p className="text-lg font-black text-black uppercase tracking-widest">Actual Data</p>
            <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
              <span className="text-lg font-mono text-black">balance</span>
              <span className="text-lg font-black text-black">$150.00</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
              <span className="text-lg font-mono text-black">acc_number</span>
              <span className="text-lg font-black text-black">"KH-7788"</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
