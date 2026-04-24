"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Database, ArrowRight, Play, RotateCcw, CheckCircle2, List, Layers, PlusSquare, Trash2, History } from 'lucide-react';

const MIGRATIONS = [
  { id: 'users', file: '2024_01_01_create_users_table.php', table: 'Users' },
  { id: 'posts', file: '2024_01_02_create_posts_table.php', table: 'Posts' },
  { id: 'comments', file: '2024_01_03_create_comments_table.php', table: 'Comments' },
];

export function DatabaseMigrationsAnimation() {
  const [dbState, setDbState] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const runMigrate = () => {
    if (dbState.length >= MIGRATIONS.length) return;
    setIsProcessing(true);
    
    let currentIndex = dbState.length;
    const interval = setInterval(() => {
      if (currentIndex < MIGRATIONS.length) {
        const migration = MIGRATIONS[currentIndex];
        if (migration) {
          setDbState(prev => [...prev, migration.table]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsProcessing(false);
        }
      }

      if (currentIndex >= MIGRATIONS.length) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 800);
  };

  const rollback = () => {
    if (dbState.length === 0) return;
    setIsProcessing(true);
    setTimeout(() => {
      setDbState(prev => prev.slice(0, -1));
      setIsProcessing(false);
    }, 600);
  };

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <History className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Database Migrations</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Version Control for your Schema</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-16 px-12">
        
        {/* Migration Timeline (The Blueprint) */}
        <div className="flex flex-col gap-4 flex-1">
           <div className="flex items-center gap-2 mb-2 text-white/20">
              <List className="w-3 h-3" />
              <span className="text-[8px] font-black uppercase tracking-widest">Migration Files</span>
           </div>
           <div className="space-y-2">
              {MIGRATIONS.map((m, i) => (
                <div 
                  key={m.id}
                  className={`p-3 rounded-xl border transition-all duration-500 flex items-center gap-3 ${dbState.includes(m.table) ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/10'}`}
                >
                   <FileCode className={`w-4 h-4 ${dbState.includes(m.table) ? 'text-emerald-400' : 'text-white/20'}`} />
                   <div className="flex-1 overflow-hidden">
                      <div className={`text-[8px] font-mono truncate ${dbState.includes(m.table) ? 'text-white' : 'text-white/40'}`}>
                         {m.file}
                      </div>
                   </div>
                   {dbState.includes(m.table) && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </div>
              ))}
           </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col items-center gap-6">
           <div className="flex flex-col gap-3">
              <button
                disabled={isProcessing || dbState.length === MIGRATIONS.length}
                onClick={runMigrate}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-xl ${dbState.length === MIGRATIONS.length ? 'bg-white/5 border-white/10 opacity-20' : 'bg-primary border-primary/50 text-white shadow-primary/20 hover:scale-110 active:scale-95'}`}
              >
                 <Play className="w-6 h-6 ml-1" />
              </button>
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest text-center">Migrate</span>
           </div>

           <div className="flex flex-col gap-3">
              <button
                disabled={isProcessing || dbState.length === 0}
                onClick={rollback}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all shadow-xl ${dbState.length === 0 ? 'bg-white/5 border-white/10 opacity-20' : 'bg-rose-500/10 border-rose-500/30 text-rose-500 hover:bg-rose-500/20 hover:scale-110 active:scale-95'}`}
              >
                 <RotateCcw className="w-6 h-6" />
              </button>
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest text-center">Rollback</span>
           </div>
        </div>

        {/* Database (The Result) */}
        <div className="flex flex-col gap-4 flex-1">
           <div className="flex items-center gap-2 mb-2 text-white/20">
              <Database className="w-3 h-3" />
              <span className="text-[8px] font-black uppercase tracking-widest">Real Database</span>
           </div>
           <div className="h-48 rounded-[2rem] border-2 border-white/10 bg-[#0d1117] p-5 flex flex-col gap-2 relative shadow-2xl overflow-hidden">
              <AnimatePresence>
                 {dbState.length > 0 ? (
                   dbState.map((table, i) => (
                     <motion.div
                       key={table}
                       initial={{ y: 20, opacity: 0, scale: 0.8 }}
                       animate={{ y: 0, opacity: 1, scale: 1 }}
                       exit={{ x: 50, opacity: 0 }}
                       className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5 group"
                     >
                        <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
                           <PlusSquare className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{table} Table</span>
                     </motion.div>
                   ))
                 ) : (
                   <div className="flex-1 flex flex-col items-center justify-center gap-3 opacity-10">
                      <Trash2 className="w-8 h-8" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Database Empty</span>
                   </div>
                 )}
              </AnimatePresence>
              
              {/* Status Glow */}
              <div className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-500 ${dbState.length > 0 ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-white/5'}`} />
           </div>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-2 rounded-full border transition-all ${dbState.length > 0 ? 'bg-primary/10 border-primary/20 text-primary opacity-100' : 'bg-white/[0.02] border-white/5 text-white/20 opacity-0'}`}>
         <span className="text-[10px] font-bold uppercase tracking-widest">
            {dbState.length === MIGRATIONS.length ? "Schema fully synchronized!" : "Click 'Migrate' to build your tables."}
         </span>
      </div>
    </div>
  );
}
