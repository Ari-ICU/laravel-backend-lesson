"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Plus, Edit3, Trash2, ShieldAlert, ArrowDown, Save, CheckCircle2 } from 'lucide-react';

export function SqlManipulationAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [items, setItems] = useState([
    { id: 1, name: 'Dara', email: 'dara@dev.com', status: 'Pending' },
    { id: 2, name: 'Srey', email: 'srey@dev.com', status: 'Active' },
  ]);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const triggerAction = (type: string) => {
    setLastAction(type);
    if (type === 'SELECT') {
       // Just a visual pulse for selection
    } else if (type === 'INSERT') {
       const newItem = { id: Date.now(), name: 'New User', email: 'new@dev.com', status: 'Active' };
       setItems([...items, newItem]);
    } else if (type === 'UPDATE') {
       setItems(items.map(item => item.id === 1 ? { ...item, status: 'Active' } : item));
    } else if (type === 'DELETE') {
       setItems(items.filter(item => item.id !== 1));
    }
    setTimeout(() => setLastAction(null), 2000);
  };

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Database className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">CRUD Visualizer</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Select, Insert, Update, Delete</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16">
        
        {/* 1. Action Panel */}
        <div className="flex flex-col gap-4">
           <p className="text-lg font-black text-black uppercase tracking-[0.3em] text-center">Execute Command</p>
           
           <button 
             onClick={() => triggerAction('SELECT')}
             className="flex items-center gap-6 p-4 rounded-2xl bg-white/[0.05] border border-slate-900/10 hover:bg-white/[0.1] transition-all group"
           >
              <Database className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <span className="text-lg font-black text-black uppercase tracking-widest">SELECT * FROM</span>
           </button>

           <button 
             onClick={() => triggerAction('INSERT')}
             className="flex items-center gap-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all group"
           >
              <Plus className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <span className="text-lg font-black text-black uppercase tracking-widest">INSERT INTO</span>
           </button>

           <button 
             onClick={() => triggerAction('UPDATE')}
             className="flex items-center gap-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group"
           >
              <Edit3 className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <span className="text-lg font-black text-black uppercase tracking-widest">UPDATE SET</span>
           </button>

           <button 
             onClick={() => triggerAction('DELETE')}
             className="flex items-center gap-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-all group"
           >
              <Trash2 className="w-14 h-14 text-black group-hover:scale-110 transition-transform" />
              <span className="text-lg font-black text-black uppercase tracking-widest">DELETE FROM</span>
           </button>
        </div>

        {/* 2. Visual Table */}
        <div className="flex flex-col gap-6">
           <p className="text-lg font-black text-black uppercase tracking-[0.3em] text-center">Live Database Table</p>
           <div className="w-96 rounded-3xl border border-slate-900/10 bg-white/[0.02] overflow-hidden shadow-2xl backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-6 p-4 bg-slate-50/5 border-b border-slate-900/10 text-lg font-black text-black uppercase">
                 <span>Name</span>
                 <span>Email</span>
                 <span>Status</span>
              </div>
              <div className="p-2 min-min-h-[200px]">
                 <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: 20 }}
                        className="grid grid-cols-3 gap-6 p-4 rounded-xl hover:bg-slate-50/[0.03] transition-colors items-center border border-transparent hover:border-slate-900/5"
                      >
                         <span className="text-lg font-bold text-black">{item.name}</span>
                         <span className="text-lg font-mono text-black truncate">{item.email}</span>
                         <div className={`px-2 py-0.5 rounded-full text-lg font-black uppercase text-center w-fit ${item.status === 'Active' ? 'bg-emerald-500/10 text-black' : 'bg-primary/10 text-black'}`}>
                            {item.status}
                         </div>
                      </motion.div>
                    ))}
                 </AnimatePresence>
                 {items.length === 0 && (
                   <div className="h-60 flex items-center justify-center text-black text-lg uppercase font-black tracking-widest">Table Empty</div>
                 )}
              </div>
           </div>
        </div>

      </div>

      {/* Security Warning */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-4 bg-rose-500/5 border border-rose-500/20 px-6 py-3 rounded-2xl max-w-lg"
      >
        <ShieldAlert className="w-14 h-14 text-black" />
        <span className="text-lg font-bold text-black/80 uppercase tracking-widest leading-relaxed">
          Security Alert: Always use <span className="text-black">WHERE</span> with Update/Delete to prevent wiping the whole table!
        </span>
      </motion.div>

      {/* Action Notification */}
      <AnimatePresence>
         {lastAction && (
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -20, opacity: 0 }}
             className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-emerald-500 text-black font-black text-lg uppercase tracking-widest flex items-center gap-6 shadow-xl shadow-emerald-500/20"
           >
              <CheckCircle2 className="w-12 h-12" />
              {lastAction} Success
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
