"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Database, Edit3, Trash2, PlusCircle, Search, Layout, Code2, Server } from 'lucide-react';

export function LaravelHttpMethodsAnimation() {
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE' | null>(null);

  const methods = [
    { id: 'GET', label: 'GET', icon: Search, color: 'sky', action: 'Fetching Data', code: 'Route::get("/posts", ...)' },
    { id: 'POST', label: 'POST', icon: PlusCircle, color: 'emerald', action: 'Creating New', code: 'Route::post("/posts", ...)' },
    { id: 'PUT', label: 'PUT', icon: Edit3, color: 'amber', action: 'Updating Existing', code: 'Route::put("/posts/{id}", ...)' },
    { id: 'DELETE', label: 'DELETE', icon: Trash2, color: 'rose', action: 'Removing Data', code: 'Route::delete("/posts/{id}", ...)' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layout className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">RESTful Routing</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Mastering HTTP Verbs in Laravel</p>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
         {methods.map((m) => (
           <button
             key={m.id}
             onClick={() => setMethod(m.id as any)}
             className={`px-6 py-3 rounded-2xl border-2 transition-all flex items-center gap-3 ${method === m.id ? `bg-${m.color}-500/10 border-${m.color}-500 shadow-lg shadow-${m.color}-500/20` : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}
           >
              <m.icon className={`w-4 h-4 ${method === m.id ? `text-${m.color}-400` : 'text-white/20'}`} />
              <span className={`text-[10px] font-black uppercase tracking-widest ${method === m.id ? 'text-white' : 'text-white/40'}`}>{m.label}</span>
           </button>
         ))}
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-12 h-64">
        
        {/* Client (Browser) */}
        <div className="flex flex-col items-center gap-4">
           <div className="w-40 h-32 rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2">
              <div className="flex gap-1 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                 <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full" />
              <div className="w-3/4 h-2 bg-white/5 rounded-full" />
              <div className="w-1/2 h-2 bg-primary/20 rounded-full mt-auto" />
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Browser Request</span>
        </div>

        {/* Action Beam */}
        <div className="relative w-32 h-px bg-white/10">
           <AnimatePresence>
              {method && (
                <motion.div
                  initial={{ left: 0, opacity: 0 }}
                  animate={{ left: '100%', opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className={`absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-${methods.find(m => m.id === method)?.color}-500 blur-sm rounded-full`}
                />
              )}
           </AnimatePresence>
           <ArrowRight className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${method ? 'text-white/20' : 'text-white/5'}`} />
        </div>

        {/* Server (Laravel) */}
        <div className="flex flex-col items-center gap-4">
           <div className="w-48 h-40 rounded-[2rem] border-2 border-white/10 bg-[#0d1117] p-6 relative overflow-hidden flex flex-col gap-3">
              <div className="absolute top-0 right-0 p-3 opacity-5">
                 <Server className="w-16 h-16" />
              </div>
              
              <AnimatePresence mode="wait">
                 {method ? (
                   <motion.div
                     key={method}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="relative z-10 flex flex-col gap-4 h-full"
                   >
                      <div className="flex items-center gap-2">
                         <div className={`px-2 py-0.5 rounded bg-${methods.find(m => m.id === method)?.color}-500/20 border border-${methods.find(m => m.id === method)?.color}-500/40 text-[8px] font-black text-${methods.find(m => m.id === method)?.color}-400 uppercase tracking-widest`}>
                            {method}
                         </div>
                         <span className="text-[9px] font-mono text-white/40">{methods.find(m => m.id === method)?.action}</span>
                      </div>
                      
                      <div className="flex-1 flex flex-col gap-2 justify-center">
                         <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[8px] text-white/80 leading-relaxed">
                            {methods.find(m => m.id === method)?.code}
                         </div>
                         <div className="flex items-center gap-2 text-emerald-400">
                            <Database className="w-3 h-3" />
                            <span className="text-[7px] font-black uppercase tracking-widest">Database Syncing...</span>
                         </div>
                      </div>
                   </motion.div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center gap-3 opacity-10">
                      <Code2 className="w-8 h-8" />
                      <span className="text-[8px] font-black uppercase tracking-[0.3em]">Waiting for Request</span>
                   </div>
                 )}
              </AnimatePresence>
           </div>
           <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Laravel App</span>
        </div>

      </div>

      {/* REST Insight */}
      <div className={`px-6 py-2 rounded-full border transition-all ${method ? 'bg-primary/10 border-primary/20 text-primary opacity-100' : 'bg-white/[0.02] border-white/5 text-white/20 opacity-0'}`}>
         <span className="text-[10px] font-bold uppercase tracking-widest">
            Always use <span className="text-white italic">correct verbs</span> for cleaner, professional APIs.
         </span>
      </div>
    </div>
  );
}
