"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Edit, Trash2, User, CheckCircle2, Cloud } from 'lucide-react';

export function HttpMethodsAnimation() {
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
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Cloud className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">HTTP Verbs in Action</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">GET, POST, PUT, DELETE</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16">
        
        {/* 1. Action Panel */}
        <div className="flex flex-col gap-3">
           <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] text-center">Send Request</p>
           
           <button onClick={() => handleAction('GET')} className="flex items-center gap-4 p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20 transition-all group">
              <Search className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">GET</span>
                 <span className="text-[8px] font-bold text-white/40 uppercase">Read Data</span>
              </div>
           </button>

           <button onClick={() => handleAction('POST')} className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all group">
              <Plus className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">POST</span>
                 <span className="text-[8px] font-bold text-white/40 uppercase">Create New</span>
              </div>
           </button>

           <button onClick={() => handleAction('PUT')} className="flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group">
              <Edit className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest">PUT</span>
                 <span className="text-[8px] font-bold text-white/40 uppercase">Update Existing</span>
              </div>
           </button>

           <button onClick={() => handleAction('DELETE')} className="flex items-center gap-4 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-all group">
              <Trash2 className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start">
                 <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">DELETE</span>
                 <span className="text-[8px] font-bold text-white/40 uppercase">Remove Data</span>
              </div>
           </button>
        </div>

        {/* 2. Server Resource State */}
        <div className="flex flex-col gap-4">
           <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] text-center">Server Resource State</p>
           <div className="w-80 min-h-[300px] rounded-3xl border border-white/10 bg-white/[0.02] p-6 flex flex-col gap-4 backdrop-blur-xl relative">
              
              {/* Method Indicator Overlay */}
              <AnimatePresence>
                 {activeMethod && (
                   <motion.div
                     initial={{ opacity: 0, y: -20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 20 }}
                     className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] shadow-xl z-20"
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
                     className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4 group relative overflow-hidden"
                   >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                         <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-xs font-black text-white">{item.name}</span>
                         <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{item.role}</span>
                      </div>
                      
                      {activeMethod === 'PUT' && item.id === 1 && (
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          className="absolute inset-0 bg-primary/10 border border-primary/40 flex items-center justify-center"
                        >
                           <CheckCircle2 className="w-6 h-6 text-primary" />
                        </motion.div>
                      )}
                   </motion.div>
                 ))}
              </AnimatePresence>

              {items.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-white/10 gap-2 opacity-50">
                   <Cloud className="w-12 h-12" />
                   <span className="text-[10px] font-black uppercase tracking-widest">No Resources Found</span>
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
        className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full"
      >
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
           Think of methods as <span className="text-primary italic">Verbs</span>: What do you want to DO to the data?
        </span>
      </motion.div>
    </div>
  );
}
