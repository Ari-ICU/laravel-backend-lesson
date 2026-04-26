"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUp, 
  ArrowDown, 
  Database, 
  Table as TableIcon, 
  Plus, 
  Trash2, 
  Code2, 
  ChevronRight,
  Zap,
  RotateCcw
} from 'lucide-react';

export function MigrationUpDownAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'up' | 'down'>('idle');
  const [tableExists, setTableExists] = useState(false);

  const handleUp = () => {
    setStatus('up');
    setTimeout(() => {
      setTableExists(true);
      setStatus('idle');
    }, 1000);
  };

  const handleDown = () => {
    setStatus('down');
    setTimeout(() => {
      setTableExists(false);
      setStatus('idle');
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-full min-h-[350px] flex flex-col items-center justify-center  gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl z-10">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <RotateCcw className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-black text-black">Migration Lifecycle</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">The Power of up() and down()</p>
        </div>
      </div>

      <div className="flex items-stretch justify-center w-full gap-4 px-12 z-10">
        
        {/* Code Side */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-6 mb-2">
            <Code2 className="w-12 h-12 text-black" />
            <span className="text-lg font-black text-black uppercase tracking-[0.2em]">Method Logic</span>
          </div>
          
          <div className="space-y-4">
            {/* up() card */}
            <motion.button
              onClick={handleUp}
              disabled={tableExists || status !== 'idle'}
              whileHover={{ scale: tableExists ? 1 : 1.02 }}
              whileTap={{ scale: tableExists ? 1 : 0.98 }}
              className={`w-full p-6 rounded-3xl border-2 text-left transition-all relative overflow-hidden group ${
                tableExists 
                  ? 'bg-white/[0.02] border-slate-900/5 opacity-40 grayscale cursor-not-allowed' 
                  : 'bg-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${tableExists ? 'bg-slate-50/10' : 'bg-emerald-500/20'}`}>
                    <ArrowUp className={`w-12 h-12 ${tableExists ? 'text-black' : 'text-black'}`} />
                  </div>
                  {!tableExists && status === 'idle' && (
                    <motion.div 
                      animate={{ x: [0, 5, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ChevronRight className="w-12 h-12 text-black/40" />
                    </motion.div>
                  )}
                </div>
                <h4 className={`text-lg font-black mb-1 ${tableExists ? 'text-black' : 'text-black'}`}>up() Method</h4>
                <p className={`text-lg leading-relaxed font-bold ${tableExists ? 'text-black' : 'text-black/60 uppercase tracking-wider'}`}>
                  Schema::create('products', ...)
                </p>
              </div>
              {status === 'up' && (
                <motion.div 
                  className="absolute inset-0 bg-emerald-500/10"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1 }}
                />
              )}
            </motion.button>

            {/* down() card */}
            <motion.button
              onClick={handleDown}
              disabled={!tableExists || status !== 'idle'}
              whileHover={{ scale: !tableExists ? 1 : 1.02 }}
              whileTap={{ scale: !tableExists ? 1 : 0.98 }}
              className={`w-full p-6 rounded-3xl border-2 text-left transition-all relative overflow-hidden group ${
                !tableExists 
                  ? 'bg-white/[0.02] border-slate-900/5 opacity-40 grayscale cursor-not-allowed' 
                  : 'bg-rose-500/5 border-rose-500/20 hover:border-rose-500/40'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${!tableExists ? 'bg-slate-50/10' : 'bg-rose-500/20'}`}>
                    <ArrowDown className={`w-12 h-12 ${!tableExists ? 'text-black' : 'text-black'}`} />
                  </div>
                  {tableExists && status === 'idle' && (
                    <motion.div 
                      animate={{ x: [0, 5, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ChevronRight className="w-12 h-12 text-black/40" />
                    </motion.div>
                  )}
                </div>
                <h4 className={`text-lg font-black mb-1 ${!tableExists ? 'text-black' : 'text-black'}`}>down() Method</h4>
                <p className={`text-lg leading-relaxed font-bold ${!tableExists ? 'text-black' : 'text-black/60 uppercase tracking-wider'}`}>
                  Schema::dropIfExists('products')
                </p>
              </div>
              {status === 'down' && (
                <motion.div 
                  className="absolute inset-0 bg-rose-500/10"
                  initial={{ x: '-100%' }}
                  animate={{ x: '0%' }}
                  transition={{ duration: 1 }}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Database Visualization Side */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-6 mb-2">
            <Database className="w-12 h-12 text-black" />
            <span className="text-lg font-black text-black uppercase tracking-[0.2em]">Database State</span>
          </div>

          <div className="flex-1 bg-slate-50 border-2 border-slate-900/10 rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {tableExists ? (
                <motion.div
                  key="table"
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: -20 }}
                  className="w-full flex flex-col items-center gap-6"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-3xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-lg shadow-primary/20">
                      <TableIcon className="w-12 h-12 text-black" />
                    </div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-36 w-36 rounded-full bg-emerald-500 flex items-center justify-center border-4 border-[#0d1117]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.3 }}
                    >
                      <Plus className="w-12 h-12 text-black" />
                    </motion.div>
                  </div>

                  <div className="text-center space-y-6">
                    <h5 className="text-lg font-black text-black tracking-tight">'products' Table</h5>
                    <p className="text-lg font-bold text-black uppercase tracking-widest">Active in Schema</p>
                  </div>

                  <div className="w-full space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 w-full bg-slate-50/[0.03] border border-slate-900/5 rounded-lg flex items-center px-4">
                        <div className="w-20 h-1.5 bg-slate-50/10 rounded-full" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-6 opacity-30"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-3xl bg-slate-50/5 border-2 border-dashed border-slate-900/20 flex items-center justify-center">
                      <Database className="w-12 h-12 text-black" />
                    </div>
                    {status === 'down' && (
                      <motion.div 
                        className="absolute -top-2 -right-2 w-36 w-36 rounded-full bg-rose-500 flex items-center justify-center border-4 border-[#0d1117]"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Trash2 className="w-12 h-12 text-black" />
                      </motion.div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-black text-black uppercase tracking-widest">No Table Defined</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Feedback Overlay */}
            <AnimatePresence>
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="absolute bottom-10 px-6 py-2 rounded-full bg-primary border border-primary/50 text-black text-lg font-black uppercase tracking-[0.2em] flex items-center gap-4 shadow-xl shadow-primary/30"
                >
                  <Zap className="w-12 h-12 fill-white" />
                  {status === 'up' ? 'Running php artisan migrate...' : 'Running migrate:rollback...'}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Footer Info */}
      <div className={`px-10 py-4 rounded-3xl bg-slate-50/[0.03] border border-slate-900/10 max-w-[500px] transition-all duration-500 ${status !== 'idle' ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
        <p className="text-lg text-black leading-relaxed text-center font-medium">
          <span className="text-black font-black uppercase tracking-wider mr-2">Key Concept:</span>
          Always ensure your <code className="text-black bg-slate-50/5 px-1 rounded">down()</code> method perfectly reverses 
          everything done in <code className="text-black bg-slate-50/5 px-1 rounded">up()</code> to maintain database integrity.
        </p>
      </div>
    </div>
  );
}
