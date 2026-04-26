"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Database, Edit3, Trash2, PlusCircle, Search, Layout, Code2, Server } from 'lucide-react';

export function LaravelHttpMethodsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE' | null>(null);

  const methods = [
    { id: 'GET', label: 'GET', icon: Search, color: 'sky', action: 'Fetching Data', code: 'Route::get("/posts", ...)' },
    { id: 'POST', label: 'POST', icon: PlusCircle, color: 'emerald', action: 'Creating New', code: 'Route::post("/posts", ...)' },
    { id: 'PUT', label: 'PUT', icon: Edit3, color: 'amber', action: 'Updating Existing', code: 'Route::put("/posts/{id}", ...)' },
    { id: 'DELETE', label: 'DELETE', icon: Trash2, color: 'rose', action: 'Removing Data', code: 'Route::delete("/posts/{id}", ...)' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layout className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">RESTful Routing</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Mastering HTTP Verbs in Laravel</p>
        </div>
      </div>

      <div className="flex gap-6 mb-4">
         {methods.map((m) => (
           <button
             key={m.id}
             onClick={() => setMethod(m.id as any)}
             className={`px-6 py-3 rounded-2xl border-2 transition-all flex items-center gap-4 ${method === m.id ? `bg-${m.color}-500/10 border-${m.color}-500 shadow-lg shadow-${m.color}-500/20` : 'bg-white/[0.02] border-slate-900/5 hover:border-slate-900/20'}`}
           >
              <m.icon className={`w-12 h-12 ${method === m.id ? `text-${m.color}-400` : 'text-black'}`} />
              <span className={`text-lg font-black uppercase tracking-widest ${method === m.id ? 'text-black' : 'text-black'}`}>{m.label}</span>
           </button>
         ))}
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 px-12 h-96">
        
        {/* Client (Browser) */}
        <div className="flex flex-col items-center gap-6">
           <div className="w-60 h-72 rounded-2xl border border-slate-900/10 bg-slate-50/5 p-4 flex flex-col gap-6">
              <div className="flex gap-4 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-50/10" />
                 <div className="w-1.5 h-1.5 rounded-full bg-slate-50/10" />
              </div>
              <div className="w-full h-2 bg-slate-50/5 rounded-full" />
              <div className="w-3/4 h-2 bg-slate-50/5 rounded-full" />
              <div className="w-1/2 h-2 bg-primary/20 rounded-full mt-auto" />
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Browser Request</span>
        </div>

        {/* Action Beam */}
        <div className="relative w-72 h-px bg-slate-50/10">
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
           <ArrowRight className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 ${method ? 'text-black' : 'text-black'}`} />
        </div>

        {/* Server (Laravel) */}
        <div className="flex flex-col items-center gap-6">
           <div className="w-72 h-60 rounded-[2rem] border-2 border-slate-900/10 bg-slate-50 p-6 relative overflow-hidden flex flex-col gap-4">
              <div className="absolute top-0 right-0 p-3 opacity-5">
                 <Server className="w-42 h-42" />
              </div>
              
              <AnimatePresence mode="wait">
                 {method ? (
                   <motion.div
                     key={method}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="relative z-10 flex flex-col gap-6 h-full"
                   >
                      <div className="flex items-center gap-6">
                         <div className={`px-2 py-0.5 rounded bg-${methods.find(m => m.id === method)?.color}-500/20 border border-${methods.find(m => m.id === method)?.color}-500/40 text-lg font-black text-${methods.find(m => m.id === method)?.color}-400 uppercase tracking-widest`}>
                            {method}
                         </div>
                         <span className="text-lg font-mono text-black">{methods.find(m => m.id === method)?.action}</span>
                      </div>
                      
                      <div className="flex-1 flex flex-col gap-6 justify-center">
                         <div className="p-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/10 font-mono text-lg text-black leading-relaxed">
                            {methods.find(m => m.id === method)?.code}
                         </div>
                         <div className="flex items-center gap-6 text-black">
                            <Database className="w-12 h-12" />
                            <span className="text-lg font-black uppercase tracking-widest">Database Syncing...</span>
                         </div>
                      </div>
                   </motion.div>
                 ) : (
                   <div className="h-full flex flex-col items-center justify-center gap-4 opacity-10">
                      <Code2 className="w-36 w-36" />
                      <span className="text-lg font-black uppercase tracking-[0.3em]">Waiting for Request</span>
                   </div>
                 )}
              </AnimatePresence>
           </div>
           <span className="text-lg font-black text-black uppercase tracking-widest">Laravel App</span>
        </div>

      </div>

      {/* REST Insight */}
      <div className={`px-6 py-2 rounded-full border transition-all ${method ? 'bg-primary/10 border-primary/20 text-black opacity-100' : 'bg-white/[0.02] border-slate-900/5 text-black opacity-0'}`}>
         <span className="text-lg font-bold uppercase tracking-widest">
            Always use <span className="text-black italic">correct verbs</span> for cleaner, professional APIs.
         </span>
      </div>
    </div>
  );
}
