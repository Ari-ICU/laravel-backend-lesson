"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Search, HelpCircle, List, ChevronRight, Hash } from 'lucide-react';

export function ArtisanListAnimation() {
  const [view, setView] = useState<'list' | 'help'>('list');

  const categories = [
    { name: 'make', commands: ['controller', 'model', 'migration', 'middleware'], color: 'rose' },
    { name: 'migrate', commands: ['install', 'refresh', 'rollback', 'status'], color: 'amber' },
    { name: 'route', commands: ['cache', 'clear', 'list'], color: 'sky' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <List className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Exploring Artisan</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Self-Documentation & Discovery</p>
        </div>
      </div>

      <div className="relative w-[550px] rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl flex flex-col">
         {/* Terminal Tabs */}
         <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
            <div className="flex gap-4">
               <button 
                 onClick={() => setView('list')}
                 className={`text-[9px] font-black uppercase tracking-widest transition-colors ${view === 'list' ? 'text-primary' : 'text-white/20'}`}
               >
                  php artisan list
               </button>
               <button 
                 onClick={() => setView('help')}
                 className={`text-[9px] font-black uppercase tracking-widest transition-colors ${view === 'help' ? 'text-primary' : 'text-white/20'}`}
               >
                  php artisan help
               </button>
            </div>
            <div className="flex gap-1.5">
               <div className="w-2 h-2 rounded-full bg-white/10" />
               <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
         </div>

         {/* Terminal Content */}
         <div className="p-8 font-mono text-[11px] h-64 overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
               {view === 'list' ? (
                 <motion.div
                   key="list"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="space-y-6"
                 >
                    {categories.map((cat, idx) => (
                      <motion.div
                        key={cat.name}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-2"
                      >
                         <div className={`text-${cat.color}-400 font-bold flex items-center gap-2`}>
                            <ChevronRight className="w-3 h-3" />
                            {cat.name}
                         </div>
                         <div className="grid grid-cols-2 gap-x-8 gap-y-1 pl-5">
                            {cat.commands.map(cmd => (
                              <div key={cmd} className="text-white/40 group flex items-center gap-2">
                                 <span className="text-white/60">{cat.name}:{cmd}</span>
                                 <span className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">Create a new {cmd}</span>
                              </div>
                            ))}
                         </div>
                      </motion.div>
                    ))}
                 </motion.div>
               ) : (
                 <motion.div
                   key="help"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="space-y-4"
                 >
                    <div className="text-emerald-400">Description:</div>
                    <div className="text-white/80 pl-4">Create a new Eloquent model class</div>
                    
                    <div className="text-emerald-400 mt-4">Usage:</div>
                    <div className="text-white/80 pl-4">make:model [options] [--] &lt;name&gt;</div>
                    
                    <div className="text-emerald-400 mt-4">Options:</div>
                    <div className="space-y-1 pl-4">
                       <div className="flex gap-4"><span className="text-sky-400 w-12">-m</span> <span className="text-white/40">Create a new migration file for the model</span></div>
                       <div className="flex gap-4"><span className="text-sky-400 w-12">-c</span> <span className="text-white/40">Create a new controller for the model</span></div>
                       <div className="flex gap-4"><span className="text-sky-400 w-12">-f</span> <span className="text-white/40">Create a new factory for the model</span></div>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>

      {/* Insight */}
      <div className="flex items-center gap-6">
         <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-5 py-2 rounded-2xl">
            <Search className="w-4 h-4 text-rose-400" />
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Discovery via "list"</span>
         </div>
         <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-5 py-2 rounded-2xl">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Learning via "help"</span>
         </div>
      </div>
    </div>
  );
}
