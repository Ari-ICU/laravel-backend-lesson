"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Database, Layout, Terminal, Package, Sparkles, Heart } from 'lucide-react';

export function LaravelEcosystemAnimation() {
  const tools = [
    { icon: Database, label: 'Eloquent', color: 'rose' },
    { icon: Layout, label: 'Blade', color: 'amber' },
    { icon: Terminal, label: 'Artisan', color: 'sky' },
    { icon: Package, label: 'Composer', color: 'emerald' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <div className="w-8 h-8 rounded-xl bg-rose-500/20 flex items-center justify-center border border-rose-500/30">
          <Zap className="w-5 h-5 text-rose-500" />
        </div>
        <div>
          <h3 className="text-xl font-black text-white">The Laravel Ecosystem</h3>
          <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Built for Web Artisans</p>
        </div>
      </div>

      <div className="relative w-full h-[300px] flex items-center justify-center">
        
        {/* Central Core */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-orange-600 p-8 shadow-[0_0_50px_-12px_rgba(244,63,94,0.5)] z-20 flex items-center justify-center relative overflow-hidden group"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-50" />
           <Zap className="w-full h-full text-white relative z-10" />
        </motion.div>

        {/* Orbiting Elements */}
        {tools.map((tool, idx) => {
          const angle = (idx * 360) / tools.length;
          const radius = 140;
          return (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, rotate: angle }}
              animate={{ 
                opacity: 1,
                rotate: angle + 360,
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                opacity: { duration: 1 }
              }}
              style={{
                position: 'absolute',
                width: radius * 2,
                height: radius * 2,
                top: '50%',
                left: '50%',
                marginTop: -radius,
                marginLeft: -radius,
              }}
              className="flex items-start justify-center pointer-events-none"
            >
               <motion.div
                 animate={{ rotate: -(angle + 360) }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="flex flex-col items-center gap-2 pointer-events-auto"
               >
                  <div className={`w-12 h-12 rounded-2xl bg-${tool.color}-500/10 border border-${tool.color}-500/20 backdrop-blur-xl flex items-center justify-center group hover:scale-110 transition-transform shadow-xl`}>
                     <tool.icon className={`w-6 h-6 text-${tool.color}-400`} />
                  </div>
                  <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{tool.label}</span>
               </motion.div>
            </motion.div>
          );
        })}

        {/* Pulse Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 1.3 }}
            className="absolute w-48 h-48 rounded-full border border-rose-500/20 pointer-events-none"
          />
        ))}

      </div>

      {/* Ecosystem Benefits */}
      <div className="flex gap-8">
         <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Built-in Security</span>
         </div>
         <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Rapid Development</span>
         </div>
         <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/[0.02] border border-white/5">
            <Heart className="w-4 h-4 text-rose-400" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Developer Happiness</span>
         </div>
      </div>
    </div>
  );
}
