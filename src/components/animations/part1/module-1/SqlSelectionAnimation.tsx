"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Filter, SortDesc, CheckCircle2, Table, LayoutList } from 'lucide-react';

export function SqlSelectionAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const users = [
    { id: 1, name: 'Dara', country: 'Cambodia', status: 'Active' },
    { id: 2, name: 'John', country: 'USA', status: 'Inactive' },
    { id: 3, name: 'Srey', country: 'Cambodia', status: 'Active' },
    { id: 4, name: 'Mike', country: 'UK', status: 'Active' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Search className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">SQL Query Visualizer</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Select, Where, Order By</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-4">
        
        {/* 1. Source Table */}
        <div className="flex flex-col gap-6">
           <p className="text-lg font-black text-black uppercase tracking-[0.3em] text-center">Source Table (Users)</p>
           <div className="w-96 rounded-2xl border border-slate-900/10 bg-white/[0.02] overflow-hidden">
              <div className="grid grid-cols-2 gap-6 p-3 bg-slate-50/5 border-b border-slate-900/10">
                 <div className="text-lg font-black text-black uppercase">Name</div>
                 <div className="text-lg font-black text-black uppercase">Country</div>
              </div>
              <div className="p-2 space-y-4">
                 {users.map((user, idx) => (
                   <motion.div
                     key={user.id}
                     animate={{ 
                       opacity: user.country === 'Cambodia' ? 1 : 0.3,
                       x: user.country === 'Cambodia' ? [0, 5, 0] : 0
                     }}
                     transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                     className={`grid grid-cols-2 gap-6 p-2 rounded-lg text-lg font-bold ${user.country === 'Cambodia' ? 'bg-primary/10 text-black' : 'text-black'}`}
                   >
                      <span>{user.name}</span>
                      <span>{user.country}</span>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* 2. Logic Center */}
        <div className="flex flex-col gap-6">
           {/* WHERE Filter */}
           <motion.div
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5"
           >
              <Filter className="w-12 h-12 text-black" />
              <div className="flex flex-col">
                 <span className="text-lg font-black text-black uppercase tracking-widest">WHERE</span>
                 <span className="text-lg font-mono text-black">country = 'Cambodia'</span>
              </div>
           </motion.div>

           {/* ORDER BY */}
           <motion.div
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
             className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5"
           >
              <SortDesc className="w-12 h-12 text-black" />
              <div className="flex flex-col">
                 <span className="text-lg font-black text-black uppercase tracking-widest">ORDER BY</span>
                 <span className="text-lg font-mono text-black">created_at DESC</span>
              </div>
           </motion.div>
        </div>

        {/* 3. Result Set */}
        <div className="flex flex-col gap-6">
           <p className="text-lg font-black text-black uppercase tracking-[0.3em] text-center">Result Set</p>
           <div className="w-56 rounded-2xl border border-primary/20 bg-primary/5 overflow-hidden shadow-2xl shadow-primary/10">
              <div className="p-3 bg-primary/10 border-b border-primary/20 flex items-center gap-6">
                 <LayoutList className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase">Selected Rows</span>
              </div>
              <div className="p-2 space-y-6">
                 {[1, 2].map((i) => (
                   <motion.div
                     key={i}
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ delay: 1 + i * 0.3 }}
                     className="p-3 rounded-xl bg-slate-50/[0.03] border border-slate-900/10 flex items-center justify-between"
                   >
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <div className="flex flex-col items-end">
                         <div className="h-1.5 w-12 bg-white/40 rounded-full mb-1" />
                         <div className="h-1 w-8 bg-slate-50/10 rounded-full" />
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

      </div>

      {/* Pro Tip */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-4 py-2 rounded-full"
      >
        <CheckCircle2 className="w-12 h-12 text-black" />
        <span className="text-lg font-bold text-black uppercase tracking-widest">Select <span className="text-black">*</span> means "Grab All Columns"</span>
      </motion.div>
    </div>
  );
}
