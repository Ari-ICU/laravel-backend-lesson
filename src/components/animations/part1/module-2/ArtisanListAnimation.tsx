"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Search, HelpCircle, List, ChevronRight, Hash } from 'lucide-react';

export function ArtisanListAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [view, setView] = useState<'list' | 'help'>('list');

  const categories = [
    { name: 'make', commands: ['controller', 'model', 'migration', 'middleware'], color: 'rose' },
    { name: 'migrate', commands: ['install', 'refresh', 'rollback', 'status'], color: 'amber' },
    { name: 'route', commands: ['cache', 'clear', 'list'], color: 'sky' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center border-2 border-black shadow-lg">
          <List className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Exploring Artisan</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Self-Documentation & Discovery</p>
        </div>
      </div>

      <div className="relative w-[960px] rounded-[2.5rem] border-4 border-black bg-slate-50 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col relative z-20">
         {/* Terminal Tabs */}
         <div className="flex items-center justify-between px-8 py-5 bg-white border-b-4 border-black">
            <div className="flex gap-10">
               <button 
                 onClick={() => setView('list')}
                 className={`text-2xl font-black uppercase tracking-widest transition-all ${view === 'list' ? 'text-black scale-105 underline decoration-4 decoration-sky-500 underline-offset-8' : 'text-black/40 hover:text-black'}`}
               >
                  php artisan list
               </button>
               <button 
                 onClick={() => setView('help')}
                 className={`text-2xl font-black uppercase tracking-widest transition-all ${view === 'help' ? 'text-black scale-105 underline decoration-4 decoration-amber-500 underline-offset-8' : 'text-black/40 hover:text-black'}`}
               >
                  php artisan help
               </button>
            </div>
            <div className="flex gap-4">
               <div className="w-4 h-4 rounded-full bg-black/10" />
               <div className="w-4 h-4 rounded-full bg-black/10" />
            </div>
         </div>

         {/* Terminal Content */}
         <div className="p-10 font-mono text-2xl h-[450px] overflow-y-auto custom-scrollbar bg-slate-50">
            <AnimatePresence mode="wait">
               {view === 'list' ? (
                 <motion.div
                   key="list"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="space-y-10"
                 >
                    {categories.map((cat, idx) => (
                      <motion.div
                        key={cat.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-6"
                      >
                         <div className="text-black font-black flex items-center gap-6 border-b-2 border-black/5 pb-2">
                            <ChevronRight className="w-10 h-10 text-emerald-600" />
                            <span className="uppercase tracking-widest">{cat.name}</span>
                         </div>
                         <div className="grid grid-cols-2 gap-x-12 gap-y-4 pl-10">
                            {cat.commands.map(cmd => (
                              <div key={cmd} className="text-black group flex flex-col gap-1">
                                 <span className="font-bold text-sky-700">{cat.name}:{cmd}</span>
                                 <span className="text-lg font-medium opacity-60 italic">Create a new {cmd} template</span>
                              </div>
                            ))}
                         </div>
                      </motion.div>
                    ))}
                 </motion.div>
               ) : (
                 <motion.div
                   key="help"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="space-y-8"
                 >
                    <div className="space-y-2">
                       <div className="text-black font-black uppercase tracking-widest opacity-40">Description:</div>
                       <div className="text-black font-bold pl-6">Create a new Eloquent model class</div>
                    </div>
                    
                    <div className="space-y-2">
                       <div className="text-black font-black uppercase tracking-widest opacity-40">Usage:</div>
                       <div className="text-emerald-700 font-bold pl-6 font-mono">make:model [options] [--] &lt;name&gt;</div>
                    </div>
                    
                    <div className="space-y-4">
                       <div className="text-black font-black uppercase tracking-widest opacity-40">Options:</div>
                       <div className="space-y-6 pl-6">
                          <div className="flex gap-8"><span className="text-sky-700 font-black w-20">-m</span> <span className="text-black font-medium opacity-80">Create a new migration file for the model</span></div>
                          <div className="flex gap-8"><span className="text-sky-700 font-black w-20">-c</span> <span className="text-black font-medium opacity-80">Create a new controller for the model</span></div>
                          <div className="flex gap-8"><span className="text-sky-700 font-black w-20">-f</span> <span className="text-black font-medium opacity-80">Create a new factory for the model</span></div>
                       </div>
                    </div>
                 </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>

      {/* Insight Bar */}
      <div className="flex items-center gap-10 relative z-30">
         <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-[2rem] shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center border-2 border-black shadow-lg">
               <Search className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-black text-black uppercase tracking-widest">Discovery via <span className="italic">list</span></span>
         </div>
         <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-[2rem] shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center border-2 border-black shadow-lg">
               <HelpCircle className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-black text-black uppercase tracking-widest">Learning via <span className="italic">help</span></span>
         </div>
      </div>
    </div>
  );
}
