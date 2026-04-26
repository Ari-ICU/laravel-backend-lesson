"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, ArrowRight, Brain, Zap, Send, Database, Layout, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

export function ControllerLogicAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isOrganized, setIsOrganized] = useState(false);

  const logicBlocks = [
    { id: 'db', label: 'DB Query', icon: Database, color: 'sky' },
    { id: 'validate', label: 'Validation', icon: ShieldCheck, color: 'rose' },
    { id: 'mail', label: 'Email Notification', icon: Send, color: 'amber' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layers className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Separation of Concerns</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Organizing Logic with Controllers</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-12 h-96">
        
        {/* Route File (web.php) */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full h-56 rounded-3xl border-2 transition-all duration-700 p-6 flex flex-col gap-4 relative overflow-hidden ${isOrganized ? 'bg-slate-50/5 border-slate-900/10' : 'bg-rose-500/5 border-rose-500/30 shadow-2xl shadow-rose-500/10'}`}>
              <div className="flex items-center justify-between border-b border-slate-900/5 pb-2">
                 <span className="text-lg font-black text-black uppercase tracking-widest font-mono">web.php</span>
                 <FileCode className={`w-12 h-12 ${isOrganized ? 'text-black' : 'text-black animate-pulse'}`} />
              </div>
              
              <div className="font-mono text-lg text-black space-y-6">
                 <div>Route::get('/post', <span className={isOrganized ? 'text-black' : 'text-black'}>{isOrganized ? '[PostController::class, "show"]' : 'function() {'}</span></div>
                 
                 <AnimatePresence>
                    {!isOrganized && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-6 pl-4"
                      >
                         {logicBlocks.map(block => (
                           <div key={block.id} className={`flex items-center gap-6 p-2 rounded-lg bg-${block.color}-500/10 border border-${block.color}-500/20 text-${block.color}-400`}>
                              <block.icon className="w-12 h-12" />
                              <span>{block.label}</span>
                           </div>
                         ))}
                      </motion.div>
                    )}
                 </AnimatePresence>
                 {!isOrganized && <div>{"});"}</div>}
              </div>

              {/* Traffic Sign Icon (Only when organized) */}
              <AnimatePresence>
                 {isOrganized && (
                   <motion.div
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="absolute inset-0 flex items-center justify-center pointer-events-none"
                   >
                      <Zap className="w-42 h-42 text-black opacity-10" />
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Routing Layer</span>
        </div>

        {/* Transition Logic */}
        <div className="flex flex-col items-center gap-6">
           <button
             onClick={() => setIsOrganized(!isOrganized)}
             className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${isOrganized ? 'bg-primary/20 border-primary rotate-180' : 'bg-slate-50/5 border-slate-900/10'}`}
           >
              <RefreshCw className={`w-12 h-12 ${isOrganized ? 'text-black' : 'text-black'}`} />
           </button>
           <span className="text-lg font-black text-black uppercase tracking-widest">Refactor</span>
        </div>

        {/* Controller File */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full h-56 rounded-3xl border-2 transition-all duration-700 p-6 flex flex-col gap-4 relative overflow-hidden ${isOrganized ? 'bg-emerald-500/5 border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-slate-50/5 border-slate-900/10 opacity-20 grayscale'}`}>
              <div className="flex items-center justify-between border-b border-slate-900/5 pb-2">
                 <span className="text-lg font-black text-black uppercase tracking-widest font-mono">PostController.php</span>
                 <Brain className={`w-12 h-12 ${isOrganized ? 'text-black' : 'text-black'}`} />
              </div>

              <div className="font-mono text-lg text-black space-y-6">
                 <div>public function show() {"{"}</div>
                 
                 <AnimatePresence>
                    {isOrganized && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-6 pl-4"
                      >
                         {logicBlocks.map((block, i) => (
                           <motion.div 
                             key={block.id}
                             initial={{ x: -20, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{ delay: i * 0.1 }}
                             className={`flex items-center gap-6 p-2 rounded-lg bg-${block.color}-500/10 border border-${block.color}-500/20 text-${block.color}-400`}
                           >
                              <block.icon className="w-12 h-12" />
                              <span>{block.label}</span>
                           </motion.div>
                         ))}
                      </motion.div>
                    )}
                 </AnimatePresence>
                 <div>{"}"}</div>
              </div>
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Logic Layer (The Brain)</span>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-6 py-2 rounded-full border transition-all ${isOrganized ? 'bg-emerald-500/10 border-emerald-500/20 text-black' : 'bg-rose-500/10 border-rose-500/20 text-black'}`}>
         <span className="text-lg font-bold uppercase tracking-widest">
            {isOrganized ? 'Code is clean, testable, and reusable!' : 'Logic is trapped in routes! This is hard to maintain.'}
         </span>
      </div>
    </div>
  );
}
