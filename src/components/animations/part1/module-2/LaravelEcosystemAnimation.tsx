"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Database, Layout, Terminal, Package, Sparkles, Heart } from 'lucide-react';

export function LaravelEcosystemAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const tools = [
    { icon: Database, label: 'Eloquent', color: 'rose' },
    { icon: Layout, label: 'Blade', color: 'amber' },
    { icon: Terminal, label: 'Artisan', color: 'sky' },
    { icon: Package, label: 'Composer', color: 'emerald' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-rose-500 flex items-center justify-center border-2 border-black shadow-lg">
          <Zap className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">The Laravel Ecosystem</h3>
          <p className="text-xl font-bold text-black uppercase tracking-[0.2em]">Built for Web Artisans</p>
        </div>
      </div>

      <div className="relative w-full min-h-[400px] flex items-center justify-center">
        
        {/* Central Core */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-56 h-56 rounded-[3rem] bg-white border-4 border-black p-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] z-20 flex items-center justify-center relative overflow-hidden group"
        >
           <Zap className="w-32 h-32 text-black relative z-10" />
           <motion.div 
             animate={{ opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute inset-0 bg-rose-500/10" 
           />
        </motion.div>

        {/* Orbiting Elements */}
        {tools.map((tool, idx) => {
          const angle = (idx * 360) / tools.length;
          const radius = 180;
          return (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, rotate: angle }}
              animate={{ 
                opacity: 1,
                rotate: angle + 360,
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
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
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="flex flex-col items-center gap-4 pointer-events-auto"
               >
                  <div className="w-20 h-20 rounded-3xl bg-white border-4 border-black shadow-xl flex items-center justify-center group hover:scale-110 transition-transform">
                     <tool.icon className="w-10 h-10 text-black" />
                  </div>
                  <span className="text-lg font-black text-black uppercase tracking-widest bg-white/80 px-4 py-1 rounded-full border border-black/10">{tool.label}</span>
               </motion.div>
            </motion.div>
          );
        })}

        {/* Pulse Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.8, opacity: [0, 0.1, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1.5 }}
            className="absolute w-56 h-56 rounded-full border-2 border-black/20 pointer-events-none"
          />
        ))}

      </div>

      {/* Ecosystem Benefits */}
      <div className="flex flex-wrap justify-center gap-6 relative z-30">
         {[
           { icon: ShieldCheck, label: 'Built-in Security' },
           { icon: Sparkles, label: 'Rapid Development' },
           { icon: Heart, label: 'Developer Happiness' }
         ].map((benefit) => (
           <div key={benefit.label} className="flex items-center gap-4 px-8 py-4 rounded-3xl bg-white border-2 border-black shadow-xl">
              <benefit.icon className="w-10 h-10 text-black" />
              <span className="text-xl font-black text-black uppercase tracking-widest">{benefit.label}</span>
           </div>
         ))}
      </div>
    </div>
  );
}
