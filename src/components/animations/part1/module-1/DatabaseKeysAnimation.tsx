"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Key, Link, Users, ShoppingCart, ArrowRight, Table, Lock } from 'lucide-react';

export function DatabaseKeysAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Link className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Relational Architecture</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Primary Keys & Foreign Keys</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-32">
        
        {/* 1. Users Table (Parent) */}
        <div className="flex flex-col gap-6">
           <div className="flex items-center gap-6 px-3 py-1 bg-slate-50/5 border border-slate-900/10 rounded-full w-fit mx-auto">
              <Users className="w-12 h-12 text-black" />
              <span className="text-lg font-black text-black uppercase tracking-widest">Users Table</span>
           </div>
           
           <motion.div
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="w-56 rounded-2xl border border-slate-900/10 bg-white/[0.02] overflow-hidden shadow-2xl"
           >
              <div className="grid grid-cols-2 gap-6 p-3 bg-slate-50/5 border-b border-slate-900/10">
                 <div className="flex items-center gap-4.5">
                    <Key className="w-12 h-12 text-black" />
                    <span className="text-lg font-black text-black uppercase">PK: id</span>
                 </div>
                 <span className="text-lg font-black text-black uppercase">Name</span>
              </div>
              <div className="p-2 space-y-4">
                 <div className="grid grid-cols-2 gap-6 p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-lg font-mono text-black">1</span>
                    <span className="text-lg font-bold text-black">Dara</span>
                 </div>
                 <div className="grid grid-cols-2 gap-6 p-2 text-black">
                    <span className="text-lg font-mono">2</span>
                    <span className="text-lg font-bold">Srey</span>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* 2. Connection Line */}
        <div className="relative w-36">
           <motion.div
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-amber-400 to-primary flex items-center justify-center"
           >
              <motion.div
                animate={{ x: [0, 40, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                 <ArrowRight className="w-12 h-12 text-black" />
              </motion.div>
           </motion.div>
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg font-black text-black uppercase tracking-[0.2em] whitespace-nowrap">
              Relationship
           </div>
        </div>

        {/* 3. Orders Table (Child) */}
        <div className="flex flex-col gap-6">
           <div className="flex items-center gap-6 px-3 py-1 bg-slate-50/5 border border-slate-900/10 rounded-full w-fit mx-auto">
              <ShoppingCart className="w-12 h-12 text-black" />
              <span className="text-lg font-black text-black uppercase tracking-widest">Orders Table</span>
           </div>
           
           <motion.div
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="w-96 rounded-2xl border border-slate-900/10 bg-white/[0.02] overflow-hidden shadow-2xl"
           >
              <div className="grid grid-cols-3 gap-6 p-3 bg-slate-50/5 border-b border-slate-900/10">
                 <span className="text-lg font-black text-black uppercase">id</span>
                 <div className="flex items-center gap-4.5">
                    <Link className="w-12 h-12 text-black" />
                    <span className="text-lg font-black text-black uppercase">FK: user_id</span>
                 </div>
                 <span className="text-lg font-black text-black uppercase">Total</span>
              </div>
              <div className="p-2 space-y-4">
                 <div className="grid grid-cols-3 gap-6 p-2 rounded-lg bg-slate-50/[0.03] border border-slate-900/5">
                    <span className="text-lg font-mono text-black">101</span>
                    <span className="text-lg font-mono text-black font-bold">1</span>
                    <span className="text-lg font-bold text-black">$25</span>
                 </div>
                 <div className="grid grid-cols-3 gap-6 p-2 rounded-lg bg-slate-50/[0.03] border border-slate-900/5">
                    <span className="text-lg font-mono text-black">102</span>
                    <span className="text-lg font-mono text-black font-bold">1</span>
                    <span className="text-lg font-bold text-black">$120</span>
                 </div>
              </div>
           </motion.div>
        </div>

      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-6 py-3 rounded-2xl">
         <div className="flex items-center gap-6">
            <Key className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">Primary Key: Unique ID</span>
         </div>
         <div className="w-px h-4 bg-slate-50/10" />
         <div className="flex items-center gap-6">
            <Link className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">Foreign Key: Connector</span>
         </div>
         <div className="w-px h-4 bg-slate-50/10" />
         <div className="flex items-center gap-6">
            <Lock className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">Integrity: Locked connection</span>
         </div>
      </div>
    </div>
  );
}
