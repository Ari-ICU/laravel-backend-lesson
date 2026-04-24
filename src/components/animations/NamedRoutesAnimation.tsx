"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Link2, RefreshCcw, Layout, FileCode, CheckCircle2, AlertCircle, ArrowRightLeft, MousePointer2 } from 'lucide-react';

export function NamedRoutesAnimation() {
  const [urlPath, setUrlPath] = useState('/user/settings');
  const [isNamed, setIsNamed] = useState(true);

  const togglePath = () => {
    setUrlPath(prev => prev === '/user/settings' ? '/account/preferences' : '/user/settings');
  };

  return (
    <div className="relative w-full max-w-4xl h-[540px] flex flex-col items-center justify-center overflow-hidden gap-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Tag className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Named Routes</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Abstraction for Reliable Linking</p>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center gap-12 px-12">
         
         {/* Config Side (Source of Truth) */}
         <div className="w-full max-w-2xl rounded-2xl border-2 border-primary/20 bg-[#0d1117] p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <FileCode className="w-16 h-16" />
            </div>
            
            <div className="flex items-center justify-between mb-4">
               <span className="text-[8px] font-black text-white/20 uppercase tracking-widest font-mono">routes/web.php</span>
               <button 
                 onClick={togglePath}
                 className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
               >
                  <RefreshCcw className="w-3 h-3 text-primary" />
                  <span className="text-[8px] font-bold text-white uppercase">Change URL Path</span>
               </button>
            </div>

            <div className="font-mono text-[11px] space-y-1">
               <div className="text-white/40 italic">// The definition</div>
               <div className="flex items-center flex-wrap gap-x-2">
                  <span className="text-rose-400 font-bold">Route</span>
                  <span className="text-white/60">::get("</span>
                  <motion.span 
                    key={urlPath}
                    initial={{ scale: 1.1, color: '#f43f5e' }}
                    animate={{ scale: 1, color: '#fbbf24' }}
                    className="font-bold"
                  >
                     {urlPath}
                  </motion.span>
                  <span className="text-white/60">", ...)-&gt;</span>
                  <span className="text-sky-400 font-bold">name</span>
                  <span className="text-white/60">("</span>
                  <span className="text-emerald-400 font-bold">settings.edit</span>
                  <span className="text-white/60">");</span>
               </div>
            </div>
         </div>

         {/* Connection Visualizer */}
         <div className="flex gap-10 w-full max-w-2xl">
            
            {/* Consumer 1: Blade View */}
            <div className="flex-1 flex flex-col gap-3">
               <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-4 relative">
                  <div className="flex items-center gap-2 text-white/20">
                     <Layout className="w-4 h-4" />
                     <span className="text-[8px] font-black uppercase tracking-widest">Blade View</span>
                  </div>
                  <div className="font-mono text-[9px] text-white/60 p-3 rounded-xl bg-black/40 border border-white/5">
                     &lt;a href="<span className="text-sky-400">{"{{"}</span> route('<span className="text-emerald-400">settings.edit</span>') <span className="text-sky-400">{"}}"}</span>"&gt;
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                     <span className="text-[8px] font-bold text-emerald-500/60 uppercase tracking-widest">Link Intact</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center justify-center">
               <ArrowRightLeft className="w-6 h-6 text-white/5" />
            </div>

            {/* Consumer 2: Controller Redirect */}
            <div className="flex-1 flex flex-col gap-3">
               <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-4 relative">
                  <div className="flex items-center gap-2 text-white/20">
                     <RefreshCcw className="w-4 h-4" />
                     <span className="text-[8px] font-black uppercase tracking-widest">Controller</span>
                  </div>
                  <div className="font-mono text-[9px] text-white/60 p-3 rounded-xl bg-black/40 border border-white/5">
                     return redirect()-&gt;<span className="text-sky-400">route</span>('<span className="text-emerald-400">settings.edit</span>');
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                     <span className="text-[8px] font-bold text-emerald-500/60 uppercase tracking-widest">Redirect Safe</span>
                  </div>
               </div>
            </div>

         </div>

         {/* Current State Indicator */}
         <div className="flex items-center gap-4 bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full">
            <Link2 className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">
               Current Link: <span className="text-emerald-400">example.test{urlPath}</span>
            </span>
         </div>

      </div>

      {/* Pro Tip */}
      <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] flex items-center gap-3">
         <MousePointer2 className="w-3 h-3" />
         <span>Click "Change URL Path" to see the magic</span>
      </div>
    </div>
  );
}
