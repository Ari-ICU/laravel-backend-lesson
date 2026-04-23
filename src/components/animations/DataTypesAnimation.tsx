"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Type, Hash, Percent, ToggleLeft, Layers, Ghost, Search, Database } from 'lucide-react';

export function DataTypesAnimation() {
  const types = [
    { label: 'String', icon: <Type className="w-5 h-5 text-primary" />, value: '"Hello"', color: 'bg-primary/10 border-primary/20' },
    { label: 'Integer', icon: <Hash className="w-5 h-5 text-secondary" />, value: '42', color: 'bg-secondary/10 border-secondary/20' },
    { label: 'Float', icon: <Percent className="w-5 h-5 text-emerald-400" />, value: '19.99', color: 'bg-emerald-500/10 border-emerald-500/20' },
    { label: 'Boolean', icon: <ToggleLeft className="w-5 h-5 text-amber-400" />, value: 'true', color: 'bg-amber-500/10 border-amber-500/20' },
    { label: 'Array', icon: <Layers className="w-5 h-5 text-rose-400" />, value: '[1, 2, 3]', color: 'bg-rose-500/10 border-rose-500/20' },
    { label: 'Null', icon: <Ghost className="w-5 h-5 text-white/40" />, value: 'null', color: 'bg-white/5 border-white/10' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Search className="w-6 h-6 text-primary animate-pulse" />
        <div>
          <h3 className="text-xl font-black text-white">Type Inspector</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Identifying Core Data Types</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-3xl">
        {types.map((type, idx) => (
          <motion.div
            key={type.label}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1, type: "spring" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`relative p-6 rounded-[2rem] border backdrop-blur-xl flex flex-col items-center gap-4 group transition-all cursor-pointer ${type.color}`}
          >
            {/* Type Indicator Icon */}
            <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
              {type.icon}
            </div>

            <div className="text-center">
              <h4 className="text-sm font-black text-white/80 group-hover:text-white transition-colors">{type.label}</h4>
              <p className="text-[10px] font-mono text-white/30 mt-1">{type.value}</p>
            </div>

            {/* Hover Decorative Element */}
            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* Memory Simulation */}
      <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5">
        <Database className="w-4 h-4 text-white/20" />
        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
          Dynamic Memory Allocation : <span className="text-primary font-mono">PHP Engine 8.x</span>
        </span>
      </div>

      {/* Connection Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 bg-primary rounded-full blur-[2px] pointer-events-none"
        />
      ))}
    </div>
  );
}
