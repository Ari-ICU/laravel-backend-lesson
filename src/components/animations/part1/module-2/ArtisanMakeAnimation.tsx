"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileCode, Database, CheckCircle2, Wand2, ArrowRight, Layers, FileText } from 'lucide-react';

export function ArtisanMakeAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [active, setActive] = useState<'controller' | 'model' | null>(null);

  const fileVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 1.1, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center border-2 border-black shadow-lg">
          <Wand2 className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">The "Make" Magic</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Instant Boilerplate Generation</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8 relative z-20">
        {/* Buttons */}
        <div className="flex gap-8">
           <button
             onClick={() => setActive('controller')}
             className={`px-8 py-4 rounded-2xl border-4 transition-all flex items-center gap-6 shadow-xl ${active === 'controller' ? 'bg-sky-500 border-black scale-105' : 'bg-white border-black/10 hover:border-black'}`}
           >
              <Terminal className="w-10 h-10 text-black" />
              <span className="text-xl font-black text-black uppercase tracking-widest">make:controller</span>
           </button>
           <button
             onClick={() => setActive('model')}
             className={`px-8 py-4 rounded-2xl border-4 transition-all flex items-center gap-6 shadow-xl ${active === 'model' ? 'bg-emerald-500 border-black scale-105' : 'bg-white border-black/10 hover:border-black'}`}
           >
              <Layers className="w-10 h-10 text-black" />
              <span className="text-xl font-black text-black uppercase tracking-widest">make:model -m</span>
           </button>
        </div>

        {/* Workspace */}
        <div className="relative h-80 w-full flex items-center justify-center">
           <AnimatePresence mode="wait">
              {active === 'controller' && (
                <motion.div
                  key="controller-flow"
                  className="flex items-center gap-12"
                >
                   <motion.div variants={fileVariants} initial="hidden" animate="visible" exit="exit" className="relative group">
                      <div className="w-80 h-52 rounded-[2.5rem] bg-white border-4 border-black p-6 flex flex-col gap-6 shadow-2xl">
                         <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                            <FileCode className="w-12 h-12 text-black" />
                            <span className="text-xl font-black text-black font-mono">PostController.php</span>
                         </div>
                         <div className="space-y-4 pt-2">
                            <div className="w-full h-2 bg-black/5 rounded-full" />
                            <div className="w-3/4 h-2 bg-black/5 rounded-full" />
                            <div className="w-1/2 h-2 bg-sky-500 rounded-full" />
                         </div>
                         <div className="mt-auto flex justify-center">
                            <CheckCircle2 className="w-10 h-10 text-black/20" />
                         </div>
                      </div>
                   </motion.div>
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="text-left space-y-4">
                      <div className="text-2xl font-black text-black uppercase tracking-widest underline decoration-sky-500 decoration-4">Instant Template</div>
                      <div className="text-lg font-bold text-black uppercase tracking-[0.2em] opacity-60">namespace, class,<br/>use statements</div>
                   </motion.div>
                </motion.div>
              )}

              {active === 'model' && (
                <motion.div
                  key="model-flow"
                  className="flex items-center gap-8"
                >
                   {/* Model File */}
                   <motion.div variants={fileVariants} initial="hidden" animate="visible" exit="exit" className="w-72 h-48 rounded-[2.5rem] bg-white border-4 border-black p-6 flex flex-col gap-6 shadow-2xl">
                      <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                         <Layers className="w-10 h-10 text-black" />
                         <span className="text-xl font-black text-black font-mono">Post.php</span>
                      </div>
                      <div className="space-y-4 pt-2">
                         <div className="w-full h-2 bg-black/5 rounded-full" />
                         <div className="w-2/3 h-2 bg-emerald-500 rounded-full" />
                      </div>
                   </motion.div>

                   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center gap-4">
                      <ArrowRight className="w-12 h-12 text-black" />
                      <span className="text-lg font-black text-black uppercase tracking-widest">-m flag</span>
                   </motion.div>

                   {/* Migration File */}
                   <motion.div variants={fileVariants} initial="hidden" animate="visible" exit="exit" transition={{ delay: 0.2 }} className="w-72 h-48 rounded-[2.5rem] bg-white border-4 border-black p-6 flex flex-col gap-6 shadow-2xl">
                      <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                         <Database className="w-10 h-10 text-black" />
                         <span className="text-xl font-black text-black font-mono">migration.php</span>
                      </div>
                      <div className="space-y-4 pt-2">
                         <div className="w-full h-2 bg-black/5 rounded-full" />
                         <div className="w-3/4 h-2 bg-amber-500 rounded-full" />
                      </div>
                   </motion.div>
                </motion.div>
              )}

              {!active && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-8 text-black opacity-20">
                   <Wand2 className="w-48 h-48" />
                   <span className="text-2xl font-black uppercase tracking-[0.4em]">Click to generate code</span>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
