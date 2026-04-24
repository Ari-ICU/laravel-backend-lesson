"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileCode, Database, CheckCircle2, Wand2, ArrowRight, Layers, FileText } from 'lucide-react';

export function ArtisanMakeAnimation() {
  const [active, setActive] = useState<'controller' | 'model' | null>(null);

  const fileVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Wand2 className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">The "Make" Magic</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Instant Boilerplate Generation</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        {/* Buttons */}
        <div className="flex gap-4">
           <button
             onClick={() => setActive('controller')}
             className={`px-6 py-3 rounded-2xl border-2 transition-all flex items-center gap-3 ${active === 'controller' ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
           >
              <Terminal className={`w-4 h-4 ${active === 'controller' ? 'text-primary' : 'text-white/40'}`} />
              <span className={`text-[10px] font-black uppercase tracking-widest ${active === 'controller' ? 'text-white' : 'text-white/40'}`}>make:controller</span>
           </button>
           <button
             onClick={() => setActive('model')}
             className={`px-6 py-3 rounded-2xl border-2 transition-all flex items-center gap-3 ${active === 'model' ? 'bg-emerald-500/10 border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
           >
              <Layers className={`w-4 h-4 ${active === 'model' ? 'text-emerald-400' : 'text-white/40'}`} />
              <span className={`text-[10px] font-black uppercase tracking-widest ${active === 'model' ? 'text-white' : 'text-white/40'}`}>make:model -m</span>
           </button>
        </div>

        {/* Workspace */}
        <div className="relative h-48 w-full flex items-center justify-center">
           <AnimatePresence mode="wait">
              {active === 'controller' && (
                <motion.div
                  key="controller-flow"
                  className="flex items-center gap-8"
                >
                   <motion.div variants={fileVariants} initial="hidden" animate="visible" exit="exit" className="relative group">
                      <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="w-32 h-44 rounded-2xl bg-[#0d1117] border border-primary/30 p-4 flex flex-col gap-2 relative z-10">
                         <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                            <FileCode className="w-4 h-4 text-primary" />
                            <span className="text-[8px] font-bold text-white/20 font-mono">PostController.php</span>
                         </div>
                         <div className="w-full h-1 bg-white/5 rounded-full" />
                         <div className="w-3/4 h-1 bg-white/5 rounded-full" />
                         <div className="w-1/2 h-1 bg-primary/20 rounded-full" />
                         <div className="mt-auto flex justify-center">
                            <CheckCircle2 className="w-4 h-4 text-primary opacity-40" />
                         </div>
                      </div>
                   </motion.div>
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center space-y-2">
                      <div className="text-[10px] font-black text-white uppercase tracking-widest">Instant Template</div>
                      <div className="text-[8px] font-bold text-white/20 uppercase tracking-widest">namespace, class, use statements</div>
                   </motion.div>
                </motion.div>
              )}

              {active === 'model' && (
                <motion.div
                  key="model-flow"
                  className="flex items-center gap-12"
                >
                   {/* Model File */}
                   <motion.div variants={fileVariants} initial="hidden" animate="visible" exit="exit" className="w-32 h-44 rounded-2xl bg-[#0d1117] border border-emerald-500/30 p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                         <Layers className="w-4 h-4 text-emerald-400" />
                         <span className="text-[8px] font-bold text-white/20 font-mono">Post.php</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full" />
                      <div className="w-2/3 h-1 bg-emerald-500/20 rounded-full" />
                   </motion.div>

                   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center gap-1">
                      <ArrowRight className="w-6 h-6 text-white/10" />
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">-m flag</span>
                   </motion.div>

                   {/* Migration File */}
                   <motion.div variants={fileVariants} initial="hidden" animate="visible" exit="exit" transition={{ delay: 0.2 }} className="w-32 h-44 rounded-2xl bg-[#0d1117] border border-amber-500/30 p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                         <Database className="w-4 h-4 text-amber-500" />
                         <span className="text-[8px] font-bold text-white/20 font-mono">migration.php</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full" />
                      <div className="w-3/4 h-1 bg-amber-500/20 rounded-full" />
                   </motion.div>
                </motion.div>
              )}

              {!active && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4 text-white/10">
                   <Wand2 className="w-12 h-12 opacity-20" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Click to generate code</span>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
