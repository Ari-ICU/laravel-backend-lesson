"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, ArrowRight, Brain, Zap, Send, Database, Layout, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

export function ControllerLogicAnimation() {
  const [isOrganized, setIsOrganized] = useState(false);

  const logicBlocks = [
    { id: 'db', label: 'DB Query', icon: Database, color: 'sky' },
    { id: 'validate', label: 'Validation', icon: ShieldCheck, color: 'rose' },
    { id: 'mail', label: 'Email Notification', icon: Send, color: 'amber' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layers className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Separation of Concerns</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Organizing Logic with Controllers</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-12 h-64">
        
        {/* Route File (web.php) */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className={`w-full h-56 rounded-3xl border-2 transition-all duration-700 p-6 flex flex-col gap-3 relative overflow-hidden ${isOrganized ? 'bg-white/5 border-white/10' : 'bg-rose-500/5 border-rose-500/30 shadow-2xl shadow-rose-500/10'}`}>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                 <span className="text-[9px] font-black text-white uppercase tracking-widest font-mono">web.php</span>
                 <FileCode className={`w-4 h-4 ${isOrganized ? 'text-white/20' : 'text-rose-400 animate-pulse'}`} />
              </div>
              
              <div className="font-mono text-[9px] text-white/40 space-y-2">
                 <div>Route::get('/post', <span className={isOrganized ? 'text-emerald-400' : 'text-rose-400'}>{isOrganized ? '[PostController::class, "show"]' : 'function() {'}</span></div>
                 
                 <AnimatePresence>
                    {!isOrganized && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2 pl-4"
                      >
                         {logicBlocks.map(block => (
                           <div key={block.id} className={`flex items-center gap-2 p-2 rounded-lg bg-${block.color}-500/10 border border-${block.color}-500/20 text-${block.color}-400`}>
                              <block.icon className="w-3 h-3" />
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
                      <Zap className="w-16 h-16 text-emerald-400 opacity-10" />
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Routing Layer</span>
        </div>

        {/* Transition Logic */}
        <div className="flex flex-col items-center gap-4">
           <button
             onClick={() => setIsOrganized(!isOrganized)}
             className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${isOrganized ? 'bg-primary/20 border-primary rotate-180' : 'bg-white/5 border-white/10'}`}
           >
              <RefreshCw className={`w-6 h-6 ${isOrganized ? 'text-primary' : 'text-white/20'}`} />
           </button>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Refactor</span>
        </div>

        {/* Controller File */}
        <div className="flex flex-col items-center gap-4 flex-1">
           <div className={`w-full h-56 rounded-3xl border-2 transition-all duration-700 p-6 flex flex-col gap-3 relative overflow-hidden ${isOrganized ? 'bg-emerald-500/5 border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-white/5 border-white/10 opacity-20 grayscale'}`}>
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                 <span className="text-[9px] font-black text-white uppercase tracking-widest font-mono">PostController.php</span>
                 <Brain className={`w-4 h-4 ${isOrganized ? 'text-emerald-400' : 'text-white/20'}`} />
              </div>

              <div className="font-mono text-[9px] text-white/40 space-y-2">
                 <div>public function show() {"{"}</div>
                 
                 <AnimatePresence>
                    {isOrganized && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-2 pl-4"
                      >
                         {logicBlocks.map((block, i) => (
                           <motion.div 
                             key={block.id}
                             initial={{ x: -20, opacity: 0 }}
                             animate={{ x: 0, opacity: 1 }}
                             transition={{ delay: i * 0.1 }}
                             className={`flex items-center gap-2 p-2 rounded-lg bg-${block.color}-500/10 border border-${block.color}-500/20 text-${block.color}-400`}
                           >
                              <block.icon className="w-3 h-3" />
                              <span>{block.label}</span>
                           </motion.div>
                         ))}
                      </motion.div>
                    )}
                 </AnimatePresence>
                 <div>{"}"}</div>
              </div>
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Logic Layer (The Brain)</span>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-6 py-2 rounded-full border transition-all ${isOrganized ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}`}>
         <span className="text-[10px] font-bold uppercase tracking-widest">
            {isOrganized ? 'Code is clean, testable, and reusable!' : 'Logic is trapped in routes! This is hard to maintain.'}
         </span>
      </div>
    </div>
  );
}
