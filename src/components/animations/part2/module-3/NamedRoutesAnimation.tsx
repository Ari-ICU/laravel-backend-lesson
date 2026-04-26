"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, Link2, RefreshCcw, Layout, FileCode, CheckCircle2, AlertCircle, ArrowRightLeft, MousePointer2 } from 'lucide-react';

export function NamedRoutesAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [urlPath, setUrlPath] = useState('/user/settings');
  const [isNamed, setIsNamed] = useState(true);

  const togglePath = () => {
    setUrlPath(prev => prev === '/user/settings' ? '/account/preferences' : '/user/settings');
  };

  return (
    <div className="relative w-full max-w-full min-h-[450px] flex flex-col items-center justify-center  gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Tag className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Named Routes</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Abstraction for Reliable Linking</p>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center gap-4 px-12">
         
         {/* Config Side (Source of Truth) */}
         <div className="w-full max-w-full rounded-2xl border-2 border-primary/20 bg-slate-50 p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <FileCode className="w-42 h-42" />
            </div>
            
            <div className="flex items-center justify-between mb-4">
               <span className="text-lg font-black text-black uppercase tracking-widest font-mono">routes/web.php</span>
               <button 
                 onClick={togglePath}
                 className="flex items-center gap-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
               >
                  <RefreshCcw className="w-12 h-12 text-black" />
                  <span className="text-lg font-bold text-black uppercase">Change URL Path</span>
               </button>
            </div>

            <div className="font-mono text-lg space-y-4">
               <div className="text-black italic">// The definition</div>
               <div className="flex items-center flex-wrap gap-x-2">
                  <span className="text-black font-bold">Route</span>
                  <span className="text-black">::get("</span>
                  <motion.span 
                    key={urlPath}
                    initial={{ scale: 1.1, color: '#f43f5e' }}
                    animate={{ scale: 1, color: '#fbbf24' }}
                    className="font-bold"
                  >
                     {urlPath}
                  </motion.span>
                  <span className="text-black">", ...)-&gt;</span>
                  <span className="text-black font-bold">name</span>
                  <span className="text-black">("</span>
                  <span className="text-black font-bold">settings.edit</span>
                  <span className="text-black">");</span>
               </div>
            </div>
         </div>

         {/* Connection Visualizer */}
         <div className="flex gap-6 w-full max-w-full">
            
            {/* Consumer 1: Blade View */}
            <div className="flex-1 flex flex-col gap-4">
               <div className="p-5 rounded-2xl bg-white/[0.02] border border-slate-900/5 flex flex-col gap-6 relative">
                  <div className="flex items-center gap-6 text-black">
                     <Layout className="w-12 h-12" />
                     <span className="text-lg font-black uppercase tracking-widest">Blade View</span>
                  </div>
                  <div className="font-mono text-lg text-black p-3 rounded-xl bg-white/40 border border-slate-900/5">
                     &lt;a href="<span className="text-black">{"{{"}</span> route('<span className="text-black">settings.edit</span>') <span className="text-black">{"}}"}</span>"&gt;
                  </div>
                  <div className="flex items-center gap-6">
                     <CheckCircle2 className="w-12 h-12 text-black" />
                     <span className="text-lg font-bold text-black/60 uppercase tracking-widest">Link Intact</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center justify-center">
               <ArrowRightLeft className="w-12 h-12 text-black" />
            </div>

            {/* Consumer 2: Controller Redirect */}
            <div className="flex-1 flex flex-col gap-4">
               <div className="p-5 rounded-2xl bg-white/[0.02] border border-slate-900/5 flex flex-col gap-6 relative">
                  <div className="flex items-center gap-6 text-black">
                     <RefreshCcw className="w-12 h-12" />
                     <span className="text-lg font-black uppercase tracking-widest">Controller</span>
                  </div>
                  <div className="font-mono text-lg text-black p-3 rounded-xl bg-white/40 border border-slate-900/5">
                     return redirect()-&gt;<span className="text-black">route</span>('<span className="text-black">settings.edit</span>');
                  </div>
                  <div className="flex items-center gap-6">
                     <CheckCircle2 className="w-12 h-12 text-black" />
                     <span className="text-lg font-bold text-black/60 uppercase tracking-widest">Redirect Safe</span>
                  </div>
               </div>
            </div>

         </div>

         {/* Current State Indicator */}
         <div className="flex items-center gap-6 bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full">
            <Link2 className="w-12 h-12 text-black" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">
               Current Link: <span className="text-black">example.test{urlPath}</span>
            </span>
         </div>

      </div>

      {/* Pro Tip */}
      <div className="text-lg font-black text-black uppercase tracking-[0.3em] flex items-center gap-4">
         <MousePointer2 className="w-12 h-12" />
         <span>Click "Change URL Path" to see the magic</span>
      </div>
    </div>
  );
}
