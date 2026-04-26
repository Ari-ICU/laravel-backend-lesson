"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Table, FileJson, Share2, Scaling, ShieldCheck, Zap } from 'lucide-react';

export function SqlNoSqlAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Database className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Database Paradigms</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">SQL vs NoSQL Architecture</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16">
        
        {/* 1. SQL (Relational) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-black text-black uppercase tracking-[0.3em]">SQL (Relational)</p>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[2.5rem] bg-primary/5 border border-primary/20 backdrop-blur-xl flex flex-col gap-6 shadow-2xl group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Table className="w-12 h-12 text-black" />
              </div>
              <span className="text-lg font-black text-black uppercase">Structured Table</span>
            </div>

            {/* Table Simulation */}
            <div className="space-y-4 overflow-hidden rounded-lg border border-slate-900/5 bg-white/40">
               <div className="grid grid-cols-3 gap-4 p-2 bg-slate-50/5">
                 {[1, 2, 3].map(i => <div key={i} className="h-1 rounded-full bg-slate-50/10" />)}
               </div>
               {[1, 2, 3].map(row => (
                 <div key={row} className="grid grid-cols-3 gap-4 p-2 border-t border-slate-900/5">
                   {[1, 2, 3].map(col => <div key={col} className="h-1 rounded-full bg-primary/30" />)}
                 </div>
               ))}
            </div>

            <div className="flex items-center gap-6 mt-2">
              <ShieldCheck className="w-12 h-12 text-black" />
              <span className="text-lg font-bold text-black uppercase tracking-widest">High Integrity (ACID)</span>
            </div>
          </motion.div>
        </div>

        {/* VS Divider */}
        <div className="relative flex flex-col items-center gap-6">
           <div className="w-px h-72 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
           <div className="w-12 h-12 rounded-full bg-slate-50/[0.03] border border-slate-900/10 flex items-center justify-center font-black text-black text-lg">VS</div>
           <div className="w-px h-72 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* 2. NoSQL (Document) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-black text-black uppercase tracking-[0.3em]">NoSQL (Non-Relational)</p>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="w-72 p-6 rounded-[2.5rem] bg-secondary/5 border border-secondary/20 backdrop-blur-xl flex flex-col gap-6 shadow-2xl group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <FileJson className="w-12 h-12 text-black" />
              </div>
              <span className="text-lg font-black text-black uppercase">Flexible Document</span>
            </div>

            {/* Document Simulation */}
            <div className="p-4 rounded-lg border border-slate-900/5 bg-white/40 font-mono text-lg space-y-6">
               <div className="text-black">{'{'}</div>
               <div className="pl-4 text-black">"user": "Dara",</div>
               <div className="pl-4 text-black">"roles": ["admin", "editor"],</div>
               <div className="pl-4 text-black">"metadata": {'{'}...{'}'}</div>
               <div className="text-black">{'}'}</div>
            </div>

            <div className="flex items-center gap-6 mt-2">
              <Zap className="w-12 h-12 text-black" />
              <span className="text-lg font-bold text-black uppercase tracking-widest">High Speed & Flexibility</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Comparison Note */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-2 gap-4 w-full max-w-full"
      >
         <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-white/[0.02] border border-slate-900/5">
            <Share2 className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">SQL: Relational Maps</span>
         </div>
         <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-white/[0.02] border border-slate-900/5">
            <Scaling className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">NoSQL: Easy Horizontal Scaling</span>
         </div>
      </motion.div>
    </div>
  );
}
