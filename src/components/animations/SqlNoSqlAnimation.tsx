"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Table, FileJson, Share2, Scaling, ShieldCheck, Zap } from 'lucide-react';

export function SqlNoSqlAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Database className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Database Paradigms</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">SQL vs NoSQL Architecture</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16">
        
        {/* 1. SQL (Relational) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">SQL (Relational)</p>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[2.5rem] bg-primary/5 border border-primary/20 backdrop-blur-xl flex flex-col gap-4 shadow-2xl group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Table className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-black text-white/80 uppercase">Structured Table</span>
            </div>

            {/* Table Simulation */}
            <div className="space-y-1 overflow-hidden rounded-lg border border-white/5 bg-black/40">
               <div className="grid grid-cols-3 gap-1 p-2 bg-white/5">
                 {[1, 2, 3].map(i => <div key={i} className="h-1 rounded-full bg-white/10" />)}
               </div>
               {[1, 2, 3].map(row => (
                 <div key={row} className="grid grid-cols-3 gap-1 p-2 border-t border-white/5">
                   {[1, 2, 3].map(col => <div key={col} className="h-1 rounded-full bg-primary/30" />)}
                 </div>
               ))}
            </div>

            <div className="flex items-center gap-2 mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">High Integrity (ACID)</span>
            </div>
          </motion.div>
        </div>

        {/* VS Divider */}
        <div className="relative flex flex-col items-center gap-4">
           <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center font-black text-white/20 text-xs">VS</div>
           <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* 2. NoSQL (Document) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">NoSQL (Non-Relational)</p>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[2.5rem] bg-secondary/5 border border-secondary/20 backdrop-blur-xl flex flex-col gap-4 shadow-2xl group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <FileJson className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-xs font-black text-white/80 uppercase">Flexible Document</span>
            </div>

            {/* Document Simulation */}
            <div className="p-4 rounded-lg border border-white/5 bg-black/40 font-mono text-[10px] space-y-2">
               <div className="text-secondary">{'{'}</div>
               <div className="pl-4 text-white/40">"user": "Dara",</div>
               <div className="pl-4 text-white/40">"roles": ["admin", "editor"],</div>
               <div className="pl-4 text-white/40">"metadata": {'{'}...{'}'}</div>
               <div className="text-secondary">{'}'}</div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">High Speed & Flexibility</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Comparison Note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-2 gap-8 w-full max-w-2xl"
      >
         <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
            <Share2 className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">SQL: Relational Maps</span>
         </div>
         <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
            <Scaling className="w-3 h-3 text-secondary" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">NoSQL: Easy Horizontal Scaling</span>
         </div>
      </motion.div>
    </div>
  );
}
