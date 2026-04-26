"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit, Trash2, User, CheckCircle2, Cloud } from 'lucide-react';

export function HttpMethodsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [items, setItems] = useState([{ id: 1, name: 'Dara', role: 'Dev' }]);
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const handleAction = (method: string) => {
    setActiveMethod(method);
    if (method === 'POST') {
      setItems([...items, { id: Date.now(), name: 'New User', role: 'User' }]);
    } else if (method === 'PUT') {
      setItems(items.map(i => i.id === 1 ? { ...i, name: 'Dara (Updated)' } : i));
    } else if (method === 'DELETE') {
      setItems(items.filter(i => i.id !== 1));
    }
    setTimeout(() => setActiveMethod(null), 1500);
  };

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Cloud className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">HTTP Verbs in Action</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">GET, POST, PUT, DELETE</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16">
        
        {/* 1. Action Panel */}
        <div className="flex flex-col gap-4">
           <p className="text-lg font-black text-black uppercase tracking-[0.3em] text-center">Send Request</p>
           
           <button onClick={() => handleAction('GET')} className="flex items-center gap-6 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 transition-all group">
              <Search className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-lg font-black text-black uppercase tracking-widest">GET</span>
                 <span className="text-lg font-bold text-black uppercase">Read Data</span>
              </div>
           </button>

           <button onClick={() => handleAction('POST')} className="flex items-center gap-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all group">
              <Plus className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-lg font-black text-black uppercase tracking-widest">POST</span>
                 <span className="text-lg font-bold text-black uppercase">Create New</span>
              </div>
           </button>

           <button onClick={() => handleAction('PUT')} className="flex items-center gap-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group">
              <Edit className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-lg font-black text-black uppercase tracking-widest">PUT</span>
                 <span className="text-lg font-bold text-black uppercase">Update Existing</span>
              </div>
           </button>

           <button onClick={() => handleAction('DELETE')} className="flex items-center gap-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-all group">
              <Trash2 className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-lg font-black text-black uppercase tracking-widest">DELETE</span>
                 <span className="text-lg font-bold text-black uppercase">Remove Data</span>
              </div>
           </button>
        </div>

        {/* 2. Server Resource State */}
        <div className="flex flex-col gap-6">
           <p className="text-lg font-black text-black uppercase tracking-[0.3em] text-center">Server Resource State</p>
           <div className="w-80 min-min-h-[300px] rounded-3xl border border-slate-900/10 bg-white/[0.02] p-6 flex flex-col gap-6 backdrop-blur-xl relative">
              
              {/* Method Indicator Overlay */}
              <AnimatePresence>
                 {activeMethod && (
                   <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 20 }}
                     className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white text-black font-black text-lg uppercase tracking-[0.2em] shadow-xl z-20"
                   >
                      Processing {activeMethod}...
                   </motion.div>
                 )}
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                 {items.map((item) => (
                   <motion.div
                     key={item.id}
                     layout
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ 
                        opacity: activeMethod === 'GET' ? [1, 0.5, 1] : 1,
                        scale: 1 
                     }}
                     exit={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
                     className="p-4 rounded-2xl bg-slate-50/[0.03] border border-slate-900/5 flex items-center gap-6 group relative overflow-hidden"
                   >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                         <User className="w-14 h-14 text-black" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-lg font-black text-black">{item.name}</span>
                         <span className="text-lg font-bold text-black uppercase tracking-widest">{item.role}</span>
                      </div>
                      
                      {activeMethod === 'PUT' && item.id === 1 && (
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          className="absolute inset-0 bg-primary/10 border border-primary/40 flex items-center justify-center"
                        >
                           <CheckCircle2 className="w-12 h-12 text-black" />
                        </motion.div>
                      )}
                   </motion.div>
                 ))}
              </AnimatePresence>

              {items.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-black gap-6 opacity-50">
                   <Cloud className="w-12 h-12" />
                   <span className="text-lg font-black uppercase tracking-widest">No Resources Found</span>
                </div>
              )}
           </div>
        </div>

      </div>

      {/* Pro Tip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-6 py-3 rounded-full"
      >
        <span className="text-lg font-bold text-black uppercase tracking-widest">
           Think of methods as <span className="text-black italic">Verbs</span>: What do you want to DO to the data?
        </span>
      </motion.div>
    </div>
  );
}
