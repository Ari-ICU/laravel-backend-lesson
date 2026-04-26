"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, FileCode, ArrowDown, PanelTop, PanelBottom, MousePointer2, Layers, Home, User, Mail, Box } from 'lucide-react';

export function BladeLayoutAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activePage, setActivePage] = useState<'home' | 'profile' | 'contact' | null>(null);

  const pages = [
    { id: 'home', label: 'Home Page', icon: Home, color: 'sky' },
    { id: 'profile', label: 'Profile Page', icon: User, color: 'emerald' },
    { id: 'contact', label: 'Contact Page', icon: Mail, color: 'amber' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layers className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Blade Layout Architecture</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Master Layout & Content Injection</p>
        </div>
      </div>

      <div className="flex gap-6">
         {pages.map((p) => (
           <button
             key={p.id}
             onClick={() => setActivePage(p.id as any)}
             className={`px-6 py-3 rounded-2xl border-2 transition-all flex items-center gap-4 ${activePage === p.id ? `bg-${p.color}-500/10 border-${p.color}-500 shadow-lg shadow-${p.color}-500/20` : 'bg-white/[0.02] border-slate-900/5 hover:border-slate-900/20'}`}
           >
              <p.icon className={`w-12 h-12 ${activePage === p.id ? `text-${p.color}-400` : 'text-black'}`} />
              <span className={`text-lg font-black uppercase tracking-widest ${activePage === p.id ? 'text-black' : 'text-black'}`}>{p.label}</span>
           </button>
         ))}
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-12">
        
        {/* The Master Layout */}
        <div className="relative w-96 min-h-[400px] rounded-3xl border-4 border-slate-900/10 bg-slate-50 p-4 flex flex-col gap-6 shadow-2xl overflow-hidden">
           {/* Header Area */}
           <div className="w-full h-10 rounded-xl bg-slate-50/5 border border-slate-900/10 flex items-center px-4 gap-6">
              <PanelTop className="w-12 h-12 text-black/40" />
              <div className="w-1/2 h-2 bg-slate-50/10 rounded-full" />
           </div>

           {/* The Dynamic Hole (@yield) */}
           <div className="flex-1 w-full rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 relative flex flex-col items-center justify-center p-4">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-primary/20 border border-primary/30 text-lg font-black text-black uppercase tracking-widest">
                 @yield("content")
              </div>
              
              <AnimatePresence mode="wait">
                 {activePage ? (
                   <motion.div
                     key={activePage}
                     initial={{ y: 20, opacity: 0, scale: 0.9 }}
                     animate={{ y: 0, opacity: 1, scale: 1 }}
                     exit={{ y: -20, opacity: 0, scale: 0.9 }}
                     className="w-full h-full flex flex-col gap-4 justify-center"
                   >
                      <div className="w-3/4 h-3 bg-slate-50/20 rounded-full" />
                      <div className="w-full h-2 bg-slate-50/10 rounded-full" />
                      <div className="w-1/2 h-2 bg-slate-50/10 rounded-full" />
                      <div className={`mt-2 w-20 h-6 rounded-lg bg-${pages.find(p => p.id === activePage)?.color}-500/20 border border-${pages.find(p => p.id === activePage)?.color}-500/40`} />
                   </motion.div>
                 ) : (
                   <div className="flex flex-col items-center gap-6 opacity-20">
                      <Box className="w-36 w-36 text-black" />
                      <span className="text-lg font-black uppercase tracking-widest">Waiting for section</span>
                   </div>
                 )}
              </AnimatePresence>
           </div>

           {/* Footer Area */}
           <div className="w-full h-8 rounded-xl bg-slate-50/5 border border-slate-900/10 flex items-center px-4 gap-6 mt-auto">
              <PanelBottom className="w-12 h-12 text-black" />
              <div className="w-1/3 h-1.5 bg-slate-50/5 rounded-full ml-auto" />
           </div>
        </div>

        {/* The Directives Logic */}
        <div className="w-72 flex flex-col gap-6">
           <AnimatePresence mode="wait">
              {activePage ? (
                <motion.div
                  key={activePage}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="p-6 rounded-3xl bg-[#1c1c1c] border border-slate-900/10 shadow-xl space-y-6"
                >
                   <div className="flex items-center gap-6 mb-2">
                      <FileCode className={`w-12 h-12 text-${pages.find(p => p.id === activePage)?.color}-400`} />
                      <span className="text-lg font-black text-black uppercase tracking-widest font-mono">{activePage}.blade.php</span>
                   </div>
                   
                   <div className="font-mono text-lg space-y-4">
                      <div className="text-black">
                         <span className="text-black font-bold">@extends</span>("layouts.app")
                      </div>
                      
                      <div className="space-y-4">
                         <div className="text-black">
                            <span className="text-black font-bold">@section</span>("<span className="text-black">content</span>")
                         </div>
                         <div className="pl-4 border-l-2 border-slate-900/5 py-1 text-black text-lg">
                            &lt;h1&gt; {pages.find(p => p.id === activePage)?.label} &lt;/h1&gt;<br />
                            ... (Page Specific Content)
                         </div>
                         <div className="text-black">
                            <span className="text-black font-bold">@endsection</span>
                         </div>
                      </div>
                   </div>
                </motion.div>
              ) : (
                <div className="h-60 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-slate-900/5 rounded-3xl">
                   <MousePointer2 className="w-12 h-12 text-black animate-bounce" />
                   <span className="text-lg font-black text-black uppercase tracking-widest">Select a page to extend</span>
                </div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-2 rounded-full border transition-all ${activePage ? 'bg-primary/10 border-primary/20 text-black opacity-100' : 'bg-white/[0.02] border-slate-900/5 text-black opacity-0'}`}>
         <span className="text-lg font-bold uppercase tracking-widest">
            Don't repeat yourself. <span className="text-black italic">Extend</span> the layout once, change content everywhere.
         </span>
      </div>
    </div>
  );
}
