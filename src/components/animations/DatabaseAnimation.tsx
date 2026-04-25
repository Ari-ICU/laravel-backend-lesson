"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Table, ArrowRight, Search, PlusCircle } from 'lucide-react';

export function DatabaseAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-80 flex items-center justify-center gap-16">
      {/* Table 1: Users */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
      >
        <div className="px-6 py-4 border-b border-white/10 bg-primary/10 flex items-center gap-3">
          <Database className="w-5 h-5 text-primary" />
          <span className="text-xs font-black text-white uppercase tracking-widest">users</span>
        </div>
        <div className="p-4 space-y-3">
          {[
            { id: 1, name: "Ratha", email: "ratha@..." },
            { id: 2, name: "Dara", email: "dara@..." }
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-[10px] font-bold py-2 border-b border-white/5 last:border-0">
              <span className="text-primary">#{row.id}</span>
              <span className="text-white/60">{row.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Relationship Arrow */}
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-8 h-8 text-primary/40" />
        </motion.div>
        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">1 : N</span>
      </div>

      {/* Table 2: Posts */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-64 rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl"
      >
        <div className="px-6 py-4 border-b border-white/10 bg-amber-500/10 flex items-center gap-3">
          <Table className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-black text-white uppercase tracking-widest">posts</span>
        </div>
        <div className="p-4 space-y-3">
          {[
            { id: 101, user_id: 1, title: "Eloquent..." },
            { id: 102, user_id: 1, title: "Migrations..." }
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-[10px] font-bold py-2 border-b border-white/5 last:border-0">
              <span className="text-amber-400">user_id: {row.user_id}</span>
              <span className="text-white/60">{row.title}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Query Tooltip */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl bg-white/60 border border-white/10 backdrop-blur-xl flex items-center gap-4"
      >
        <Search className="w-4 h-4 text-primary" />
        <code className="text-xs font-mono text-emerald-400">{"User::with('posts')->get()"}</code>
      </motion.div>
    </div>
  );
}
