"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Layout, ShieldCheck, Zap, Code, Lock, Search, Eye } from 'lucide-react';

export function LaravelFeaturesAnimation() {
  const [activeTab, setActiveTab] = useState('eloquent');

  const features = {
    eloquent: {
      title: 'Eloquent ORM',
      color: 'rose',
      icon: Database,
      desc: 'Database rows as PHP Objects'
    },
    blade: {
      title: 'Blade Engine',
      color: 'amber',
      icon: Layout,
      desc: 'Smart HTML Templating'
    },
    security: {
      title: 'Auto-Security',
      color: 'sky',
      icon: ShieldCheck,
      desc: 'XSS & CSRF Protection'
    }
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <div className="flex gap-4 p-2 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-xl">
         {Object.entries(features).map(([id, feat]) => (
           <button
             key={id}
             onClick={() => setActiveTab(id)}
             className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all ${activeTab === id ? `bg-${feat.color}-500 text-white shadow-xl` : 'text-white/40 hover:bg-white/5'}`}
           >
              <feat.icon className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">{feat.title}</span>
           </button>
         ))}
      </div>

      <div className="relative w-full h-[300px] flex items-center justify-center">
         <AnimatePresence mode="wait">
            {activeTab === 'eloquent' && (
              <motion.div
                key="eloquent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-12"
              >
                 <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest text-center">PHP Code</span>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-[10px] text-white/60">
                       <span className="text-rose-400">User</span>::all();
                    </div>
                 </div>
                 <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity }}>
                    <Zap className="w-6 h-6 text-rose-500" />
                 </motion.div>
                 <div className="flex flex-col gap-3">
                    <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest text-center">SQL Output</span>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-[10px] text-white/40">
                       SELECT * FROM users;
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'blade' && (
              <motion.div
                key="blade"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col gap-6 items-center"
              >
                 <div className="w-96 p-6 rounded-[2rem] bg-amber-500/10 border border-amber-500/20 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-4 right-6 flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                       <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                       <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                    </div>
                    <div className="space-y-3">
                       <div className="flex items-center gap-2">
                          <Code className="w-3 h-3 text-amber-500" />
                          <span className="text-[9px] font-black text-amber-500/60 uppercase">Template</span>
                       </div>
                       <div className="p-4 rounded-xl bg-black/20 font-mono text-[10px]">
                          <p className="text-white/40">&lt;div&gt;</p>
                          <p className="text-amber-400 ml-4">@foreach($users as $user)</p>
                          <p className="text-white/80 ml-8">&#123;&#123; $user-&gt;name &#125;&#125;</p>
                          <p className="text-amber-400 ml-4">@endforeach</p>
                          <p className="text-white/40">&lt;/div&gt;</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-8"
              >
                 <div className="relative">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-32 h-32 rounded-full bg-sky-500/20 flex items-center justify-center border-4 border-sky-500 shadow-[0_0_50px_rgba(14,165,233,0.3)]"
                    >
                       <ShieldCheck className="w-16 h-16 text-sky-500" />
                    </motion.div>
                    
                    {/* Attackers */}
                    {['XSS', 'CSRF', 'Injection'].map((type, i) => (
                      <motion.div
                        key={type}
                        animate={{ 
                          x: i === 0 ? [-100, -60] : i === 1 ? [100, 60] : [0, 0],
                          y: i === 2 ? [100, 60] : [0, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-[8px] font-black text-rose-400 uppercase tracking-widest whitespace-nowrap"
                      >
                         {type} Attack
                      </motion.div>
                    ))}
                 </div>
                 <span className="text-[10px] font-black text-sky-400 uppercase tracking-[0.4em]">Encrypted & Protected</span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full">
         <Eye className="w-4 h-4 text-white/20" />
         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
            {features[activeTab as keyof typeof features].desc}
         </span>
      </div>
    </div>
  );
}
