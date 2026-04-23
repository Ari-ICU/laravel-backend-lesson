"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Key, Link, Users, ShoppingCart, ArrowRight, Table, Lock } from 'lucide-react';

export function DatabaseKeysAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Link className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Relational Architecture</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Primary Keys & Foreign Keys</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-32">
        
        {/* 1. Users Table (Parent) */}
        <div className="flex flex-col gap-4">
           <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
              <Users className="w-3 h-3 text-white/40" />
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Users Table</span>
           </div>
           
           <motion.div
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="w-56 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-2xl"
           >
              <div className="grid grid-cols-2 gap-2 p-3 bg-white/5 border-b border-white/10">
                 <div className="flex items-center gap-1.5">
                    <Key className="w-3 h-3 text-amber-400" />
                    <span className="text-[8px] font-black text-amber-400 uppercase">PK: id</span>
                 </div>
                 <span className="text-[8px] font-black text-white/40 uppercase">Name</span>
              </div>
              <div className="p-2 space-y-1">
                 <div className="grid grid-cols-2 gap-2 p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-[10px] font-mono text-white">1</span>
                    <span className="text-[10px] font-bold text-white/80">Dara</span>
                 </div>
                 <div className="grid grid-cols-2 gap-2 p-2 text-white/20">
                    <span className="text-[10px] font-mono">2</span>
                    <span className="text-[10px] font-bold">Srey</span>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* 2. Connection Line */}
        <div className="relative w-24">
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
                 <ArrowRight className="w-4 h-4 text-primary" />
              </motion.div>
           </motion.div>
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-primary uppercase tracking-[0.2em] whitespace-nowrap">
              Relationship
           </div>
        </div>

        {/* 3. Orders Table (Child) */}
        <div className="flex flex-col gap-4">
           <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mx-auto">
              <ShoppingCart className="w-3 h-3 text-white/40" />
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Orders Table</span>
           </div>
           
           <motion.div
             initial={{ x: 20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="w-64 rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden shadow-2xl"
           >
              <div className="grid grid-cols-3 gap-2 p-3 bg-white/5 border-b border-white/10">
                 <span className="text-[8px] font-black text-white/40 uppercase">id</span>
                 <div className="flex items-center gap-1.5">
                    <Link className="w-3 h-3 text-primary" />
                    <span className="text-[8px] font-black text-primary uppercase">FK: user_id</span>
                 </div>
                 <span className="text-[8px] font-black text-white/40 uppercase">Total</span>
              </div>
              <div className="p-2 space-y-1">
                 <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-mono text-white/40">101</span>
                    <span className="text-[10px] font-mono text-primary font-bold">1</span>
                    <span className="text-[10px] font-bold text-white/80">$25</span>
                 </div>
                 <div className="grid grid-cols-3 gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-mono text-white/40">102</span>
                    <span className="text-[10px] font-mono text-primary font-bold">1</span>
                    <span className="text-[10px] font-bold text-white/80">$120</span>
                 </div>
              </div>
           </motion.div>
        </div>

      </div>

      {/* Legend */}
      <div className="flex items-center gap-8 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-2xl">
         <div className="flex items-center gap-2">
            <Key className="w-3 h-3 text-amber-400" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Primary Key: Unique ID</span>
         </div>
         <div className="w-px h-4 bg-white/10" />
         <div className="flex items-center gap-2">
            <Link className="w-3 h-3 text-primary" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Foreign Key: Connector</span>
         </div>
         <div className="w-px h-4 bg-white/10" />
         <div className="flex items-center gap-2">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Integrity: Locked connection</span>
         </div>
      </div>
    </div>
  );
}
