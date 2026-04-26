"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitMerge, Check, X, ShieldAlert, Zap, UserCheck, ShieldCloseIcon } from 'lucide-react';

export function LogicAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Logic Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <GitBranch className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Decision Engine</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Controlling Code Flow</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-24">
        
        {/* 1. Input Condition */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative z-10 w-72 p-4 rounded-3xl bg-white/[0.02] border border-slate-900/10 backdrop-blur-xl flex flex-col gap-6"
        >
          <div className="text-lg font-black text-black uppercase tracking-widest">Condition</div>
          <div className="p-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/5 font-mono text-lg text-black">
            $role === 'admin'
          </div>
          <div className="flex justify-center">
             <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="text-black"
             >
               <Zap className="w-14 h-14 fill-primary/20" />
             </motion.div>
          </div>
        </motion.div>

        {/* 2. Logic Branching Visual */}
        <div className="relative flex flex-col items-center gap-6">
          <div className="relative h-72 w-px bg-slate-50/10">
            {/* Branch 1: Success */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="absolute top-1/4 left-0 h-px bg-gradient-to-r from-emerald-500 to-transparent origin-left rotate-[-30deg]" 
            />
            
            {/* Branch 2: Default */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-primary to-transparent origin-left" 
            />

            {/* Branch 3: Failure */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              className="absolute bottom-1/4 left-0 h-px bg-gradient-to-r from-rose-500 to-transparent origin-left rotate-[30deg]" 
            />
          </div>
        </div>

        {/* 3. Outcomes */}
        <div className="flex flex-col gap-6">
          {/* Success Outcome */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 w-56"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <UserCheck className="w-14 h-14 text-black" />
            </div>
            <div>
              <p className="text-lg font-black text-black uppercase tracking-widest">Admin</p>
              <p className="text-lg font-bold text-black">Full Access Granted</p>
            </div>
          </motion.div>

          {/* Editor Outcome */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6 p-4 rounded-2xl bg-primary/5 border border-primary/20 w-56"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldAlert className="w-14 h-14 text-black" />
            </div>
            <div>
              <p className="text-lg font-black text-black uppercase tracking-widest">Editor</p>
              <p className="text-lg font-bold text-black">Limited Access</p>
            </div>
          </motion.div>

          {/* Guest Outcome */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-6 p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 w-56"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center">
              <GitMerge className="w-14 h-14 text-black" />
            </div>
            <div>
              <p className="text-lg font-black text-black uppercase tracking-widest">Guest</p>
              <p className="text-lg font-bold text-black">Access Denied</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Comparison Tip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-4 py-2 rounded-full"
      >
        <Check className="w-12 h-12 text-black" />
        <span className="text-lg font-bold text-black uppercase tracking-widest">Pro Tip: Always use <span className="text-black">===</span> for strict logic</span>
      </motion.div>
    </div>
  );
}
