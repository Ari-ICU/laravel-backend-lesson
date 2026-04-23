"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, ArrowDown, Shield, Zap, Code2, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InheritanceAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[550px] flex flex-col items-center justify-center gap-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Parent Class */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-72 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl group"
      >
        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-primary text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20">
          Parent Class
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white">AppService</h3>
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Base Logic</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs font-mono text-white/60">log($msg)</span>
            </div>
            <span className="text-[8px] font-black text-secondary/60 uppercase">Protected</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 opacity-40">
            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-white/40" />
              <span className="text-xs font-mono text-white/40">config()</span>
            </div>
          </div>
        </div>

        {/* Floating Particles flowing down */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 150, opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
            className="absolute left-1/2 -translate-x-1/2 top-full w-1 h-1 rounded-full bg-primary"
          />
        ))}
      </motion.div>

      {/* Inheritance Connector */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col items-center gap-2 -my-6"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-secondary" />
        <ArrowDown className="w-6 h-6 text-secondary animate-bounce" />
      </motion.div>

      {/* Child Class */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-80 p-6 rounded-3xl bg-secondary/[0.03] border border-secondary/20 backdrop-blur-xl shadow-2xl group"
      >
        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-secondary text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-secondary/20">
          Child Class (Extends)
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Code2 className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white">EmailService</h3>
            <p className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest">Specialized Logic</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Inherited Method */}
          <motion.div 
            animate={{ borderColor: ['rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.5)', 'rgba(6, 182, 212, 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-between p-3 rounded-xl bg-secondary/10 border border-secondary/20"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-xs font-mono text-white">parent::log()</span>
            </div>
            <span className="text-[8px] font-black text-secondary uppercase">Inherited</span>
          </motion.div>

          {/* New/Overridden Method */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-xs font-mono text-white">send($to)</span>
            </div>
            <span className="text-[8px] font-black text-white/40 uppercase">Overridden</span>
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </div>
  );
}
