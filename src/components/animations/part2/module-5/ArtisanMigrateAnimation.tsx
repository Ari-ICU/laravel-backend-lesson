"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Play, RotateCcw, Trash2, CheckCircle2, List, RefreshCw, AlertCircle, Terminal as TerminalIcon } from 'lucide-react';

type MigrationStatus = 'idle' | 'migrating' | 'rolling_back' | 'freshing';

export function ArtisanMigrateAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [dbState, setDbState] = useState<string[]>([]);
  const [status, setStatus] = useState<MigrationStatus>('idle');
  const [terminalLines, setTerminalLines] = useState<string[]>(['Ready for command...']);

  const allMigrations = ['users', 'posts', 'products', 'orders'];

  const addLog = (line: string) => {
    setTerminalLines(prev => [...prev.slice(-4), line]);
  };

  const runMigrate = async () => {
    if (dbState.length === allMigrations.length) {
      addLog('> Nothing to migrate.');
      return;
    }
    setStatus('migrating');
    addLog('> php artisan migrate');
    
    for (let i = dbState.length; i < allMigrations.length; i++) {
      await new Promise(r => setTimeout(r, 600));
      const table = allMigrations[i];
      addLog(`Migrating: ${table}... OK`);
      setDbState(prev => [...prev, table]);
    }
    setStatus('idle');
    addLog('Migration completed successfully.');
  };

  const runRollback = async () => {
    if (dbState.length === 0) {
      addLog('> Nothing to rollback.');
      return;
    }
    setStatus('rolling_back');
    addLog('> php artisan migrate:rollback');
    await new Promise(r => setTimeout(r, 800));
    const lastTable = dbState[dbState.length - 1];
    addLog(`Rolled back: ${lastTable}`);
    setDbState(prev => prev.slice(0, -1));
    setStatus('idle');
  };

  const runFresh = async () => {
    setStatus('freshing');
    addLog('> php artisan migrate:fresh');
    await new Promise(r => setTimeout(r, 800));
    addLog('Dropping all tables...');
    setDbState([]);
    await new Promise(r => setTimeout(r, 800));
    addLog('Re-running migrations...');
    
    for (const table of allMigrations) {
      await new Promise(r => setTimeout(r, 400));
      addLog(`Migrating: ${table}... OK`);
      setDbState(prev => [...prev, table]);
    }
    setStatus('idle');
    addLog('Fresh migration complete.');
  };

  return (
    <div className="relative w-full max-w-full min-h-[520px] flex flex-col items-center justify-center  gap-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Terminal View */}
      <div className="w-full max-w-md bg-slate-50 border-2 border-slate-900/10 rounded-2xl shadow-2xl overflow-hidden">
         <div className="bg-slate-50/5 border-b border-slate-900/10 px-4 py-2 flex items-center justify-between">
            <div className="flex gap-4.5">
               <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <span className="text-lg font-black text-black uppercase tracking-widest font-mono italic">Artisan Console</span>
            <TerminalIcon className="w-12 h-12 text-black" />
         </div>
         <div className="p-4 font-mono text-lg space-y-4 min-min-h-[100px] bg-white/40">
            {terminalLines.map((line, i) => (
              <div key={i} className={line.startsWith('>') ? 'text-black' : 'text-black'}>
                <span className="text-black mr-2">$</span>{line}
              </div>
            ))}
            {status !== 'idle' && (
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="inline-block w-1.5 h-3 bg-primary ml-1 align-middle"
              />
            )}
         </div>
      </div>

      <div className="flex items-center justify-center w-full gap-4 px-12">
        
        {/* Controls */}
        <div className="flex flex-col gap-6 w-72">
           <button 
             onClick={runMigrate}
             disabled={status !== 'idle'}
             className={`w-full py-3 rounded-xl border-2 transition-all flex items-center justify-center gap-4 ${status === 'idle' ? 'bg-primary border-primary/50 text-black hover:scale-105' : 'bg-slate-50/5 border-slate-900/10 text-black opacity-50'}`}
           >
              <Play className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">Migrate</span>
           </button>
           
           <button 
             onClick={runRollback}
             disabled={status !== 'idle'}
             className={`w-full py-3 rounded-xl border-2 transition-all flex items-center justify-center gap-4 ${status === 'idle' ? 'bg-slate-50/5 border-slate-900/10 text-black hover:bg-slate-50/10 hover:scale-105' : 'bg-slate-50/5 border-slate-900/10 text-black opacity-50'}`}
           >
              <RotateCcw className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">Rollback</span>
           </button>

           <button 
             onClick={runFresh}
             disabled={status !== 'idle'}
             className={`w-full py-3 rounded-xl border-2 transition-all flex items-center justify-center gap-4 ${status === 'idle' ? 'bg-rose-500/10 border-rose-500/30 text-black hover:bg-rose-500/20 hover:scale-105' : 'bg-slate-50/5 border-slate-900/10 text-black opacity-50'}`}
           >
              <Trash2 className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">Fresh</span>
           </button>
        </div>

        {/* Database Visualization */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-6">
                 <Database className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest">Database Schema</span>
              </div>
              <span className="text-lg font-bold text-black uppercase bg-slate-50/5 px-2 py-0.5 rounded-full">
                 Tables: {dbState.length} / {allMigrations.length}
              </span>
           </div>
           
           <div className="h-72 rounded-[2rem] border-2 border-slate-900/10 bg-white/40 p-6 flex flex-wrap gap-4 content-start relative shadow-2xl">
              <AnimatePresence>
                 {dbState.length > 0 ? (
                   dbState.map((table) => (
                     <motion.div
                       key={table}
                       initial={{ scale: 0, opacity: 0, y: 20 }}
                       animate={{ scale: 1, opacity: 1, y: 0 }}
                       exit={{ scale: 0, opacity: 0, x: 20 }}
                       className="px-4 py-2.5 rounded-2xl bg-slate-50/5 border border-slate-900/10 flex items-center gap-4 shadow-lg"
                     >
                        <CheckCircle2 className="w-12 h-12 text-black" />
                        <span className="text-lg font-black text-black uppercase tracking-widest font-mono">{table}</span>
                     </motion.div>
                   ))
                 ) : (
                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-20">
                      <AlertCircle className="w-36 w-36 text-black" />
                      <span className="text-lg font-black uppercase tracking-[0.2em]">No tables created yet</span>
                   </div>
                 )}
              </AnimatePresence>
           </div>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-2.5 rounded-2xl border transition-all duration-500 ${status !== 'idle' ? 'bg-primary/20 border-primary/40 animate-pulse' : 'bg-white/[0.02] border-slate-900/5'}`}>
         <span className="text-lg font-bold uppercase tracking-widest text-black">
            {status === 'migrating' ? 'Executing Migrations...' : 
             status === 'rolling_back' ? 'Undoing Last Step...' :
             status === 'freshing' ? 'Total Database Reset...' :
             'Use Artisan to manage your database structure safely!'}
         </span>
      </div>
    </div>
  );
}
