"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Box, ArrowDown, Shield, Zap, Code2, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InheritanceAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-full min-h-[350px] flex flex-col items-center justify-center gap-4 ">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Parent Class */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-80 rounded-3xl bg-slate-50/[0.03] border border-slate-900/10 backdrop-blur-xl shadow-2xl group"
      >
        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-primary text-lg font-black uppercase tracking-widest text-black shadow-lg shadow-primary/20">
          Parent Class
        </div>
        
        <div className="flex items-center gap-6 mb-4 mt-2 p-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Users className="w-12 h-12 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-black text-black">AppService</h3>
            <p className="text-lg font-bold text-black uppercase tracking-widest">Base Logic</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-slate-900/5">
            <div className="flex items-center gap-4">
              <Shield className="w-12 h-12 text-black" />
              <span className="text-lg font-mono text-black">log($msg)</span>
            </div>
            <span className="text-lg font-black text-black/60 uppercase">Protected</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-slate-900/5 opacity-40">
            <div className="flex items-center gap-4">
              <Zap className="w-12 h-12 text-black" />
              <span className="text-lg font-mono text-black">config()</span>
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
        className="flex flex-col items-center gap-6 -my-6"
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary to-secondary" />
        <ArrowDown className="w-12 h-12 text-black animate-bounce" />
      </motion.div>

      {/* Child Class */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-92 p-6 rounded-3xl bg-secondary/[0.03] border border-secondary/20 backdrop-blur-xl shadow-2xl group"
      >
        <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-secondary text-lg font-black uppercase tracking-widest text-black shadow-lg shadow-secondary/20">
          Child Class (Extends)
        </div>

        <div className="flex items-center gap-6 mb-6 ">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
            <Code2 className="w-8 h-8 text-black" />
          </div>
          <div>
            <h3 className="text-xl font-black text-black">EmailService</h3>
            <p className="text-lg font-bold text-black uppercase tracking-widest">Specialized Logic</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Inherited Method */}
          <motion.div 
            animate={{ borderColor: ['rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 0.5)', 'rgba(6, 182, 212, 0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-between p-3 rounded-xl bg-secondary/10 border border-secondary/20"
          >
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-black" />
              <span className="text-lg font-mono text-black">parent::log()</span>
            </div>
            <span className="text-lg font-black text-black uppercase">Inherited</span>
          </motion.div>

          {/* New/Overridden Method */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-slate-900/10">
            <div className="flex items-center gap-4">
              <Zap className="w-12 h-12 text-black" />
              <span className="text-lg font-mono text-black">send($to)</span>
            </div>
            <span className="text-lg font-black text-black uppercase">Overridden</span>
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.div>
    </div>
  );
}
