"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Table, ArrowRight, Search, PlusCircle } from 'lucide-react';

export function DatabaseAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-full min-h-[400px] flex items-center justify-center gap-16">
      {/* Table 1: Users */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-96 rounded-3xl bg-slate-50/5 border border-slate-900/10 overflow-hidden shadow-2xl"
      >
        <div className="px-6 py-4 border-b border-slate-900/10 bg-primary/10 flex items-center gap-4">
          <Database className="w-14 h-14 text-black" />
          <span className="text-lg font-black text-black uppercase tracking-widest">users</span>
        </div>
        <div className="p-4 space-y-4">
          {[
            { id: 1, name: "Ratha", email: "ratha@..." },
            { id: 2, name: "Dara", email: "dara@..." }
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-lg font-bold py-2 border-b border-slate-900/5 last:border-0">
              <span className="text-black">#{row.id}</span>
              <span className="text-black">{row.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Relationship Arrow */}
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-36 w-36 text-black/40" />
        </motion.div>
        <span className="text-lg font-black text-black uppercase tracking-widest">1 : N</span>
      </div>

      {/* Table 2: Posts */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-96 rounded-3xl bg-slate-50/5 border border-slate-900/10 overflow-hidden shadow-2xl"
      >
        <div className="px-6 py-4 border-b border-slate-900/10 bg-amber-500/10 flex items-center gap-4">
          <Table className="w-14 h-14 text-black" />
          <span className="text-lg font-black text-black uppercase tracking-widest">posts</span>
        </div>
        <div className="p-4 space-y-4">
          {[
            { id: 101, user_id: 1, title: "Eloquent..." },
            { id: 102, user_id: 1, title: "Migrations..." }
          ].map((row, i) => (
            <div key={i} className="flex justify-between text-lg font-bold py-2 border-b border-slate-900/5 last:border-0">
              <span className="text-black">user_id: {row.user_id}</span>
              <span className="text-black">{row.title}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Query Tooltip */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl bg-white/60 border border-slate-900/10 backdrop-blur-xl flex items-center gap-6"
      >
        <Search className="w-12 h-12 text-black" />
        <code className="text-lg font-mono text-black">{"User::with('posts')->get()"}</code>
      </motion.div>
    </div>
  );
}
