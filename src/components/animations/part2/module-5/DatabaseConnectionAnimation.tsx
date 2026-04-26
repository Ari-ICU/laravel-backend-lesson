"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Server, Settings, ShieldCheck, ShieldAlert, Zap, Globe, Lock, Key, CheckCircle2, XCircle } from 'lucide-react';

export function DatabaseConnectionAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'error'>('idle');

  const startConnection = () => {
    setStatus('connecting');
    setTimeout(() => {
      setStatus('connected');
    }, 2000);
  };

  const reset = () => setStatus('idle');

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Database className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Database Connectivity</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Bridging Application and Storage</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-24 px-12 h-96">
        
        {/* Laravel App Container */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className="w-full max-w-[200px] h-72 rounded-[2rem] border-2 border-slate-900/10 bg-slate-50 p-5 flex flex-col gap-4 relative shadow-2xl">
              <div className="flex items-center gap-6 mb-2">
                 <Settings className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest">Laravel App</span>
              </div>
              
              <div className="p-3 rounded-xl bg-white/[0.02] border border-slate-900/5 space-y-6">
                 <div className="flex items-center gap-6">
                    <Key className="w-12 h-12 text-black/40" />
                    <span className="text-lg font-mono text-black">.env Credentials</span>
                 </div>
                 <div className="space-y-4">
                    <div className="h-1.5 w-full bg-slate-50/5 rounded-full" />
                    <div className="h-1.5 w-3/4 bg-slate-50/5 rounded-full" />
                 </div>
              </div>

              <button 
                onClick={status === 'idle' ? startConnection : reset}
                className={`mt-auto w-full h-10 rounded-2xl flex items-center justify-center transition-all ${status === 'connected' ? 'bg-emerald-500/20 border border-emerald-500/30 text-black' : 'bg-primary border border-primary/50 text-black shadow-lg shadow-primary/20'}`}
              >
                 <span className="text-lg font-black uppercase tracking-widest">
                    {status === 'idle' ? 'Connect DB' : status === 'connecting' ? 'Verifying...' : 'Reset'}
                 </span>
              </button>
           </div>
        </div>

        {/* Connection Pipe */}
        <div className="relative w-60 h-1 bg-slate-50/5">
           <AnimatePresence>
              {status === 'connecting' && (
                <motion.div
                  initial={{ left: 0, width: 0 }}
                  animate={{ left: 0, width: '100%' }}
                  className="absolute top-0 h-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                />
              )}
              {status === 'connected' && (
                <>
                  <div className="absolute top-0 w-full h-full bg-emerald-500/30" />
                  <motion.div
                    animate={{ x: [0, 160] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-emerald-400 blur-sm shadow-lg"
                  />
                </>
              )}
           </AnimatePresence>
           
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border text-lg font-black uppercase tracking-widest backdrop-blur-xl transition-all duration-500 ${status === 'connected' ? 'bg-emerald-500/10 border-emerald-500/40 text-black' : 'bg-slate-50/5 border-slate-900/10 text-black'}`}>
              {status === 'connected' ? 'Established' : 'TCP/IP Pipe'}
           </div>
        </div>

        {/* Database Server Container */}
        <div className="flex flex-col items-center gap-6 flex-1">
           <div className={`w-full max-w-[200px] h-72 rounded-[2rem] border-2 transition-all duration-700 p-6 flex flex-col items-center justify-center gap-6 relative ${status === 'connected' ? 'bg-emerald-500/5 border-emerald-500/30 shadow-2xl shadow-emerald-500/10' : 'bg-slate-50/5 border-slate-900/10 opacity-40 grayscale'}`}>
              <div className="absolute top-4 left-6 flex items-center gap-6">
                 <Server className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest">MySQL Server</span>
              </div>
              
              <div className="relative">
                 <Database className={`w-42 h-42 transition-colors duration-700 ${status === 'connected' ? 'text-black' : 'text-black'}`} />
                 <AnimatePresence>
                    {status === 'connected' && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1 border-2 border-[#0d1117]"
                      >
                         <CheckCircle2 className="w-12 h-12 text-black" />
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="flex flex-col items-center gap-4">
                 <span className="text-lg font-bold text-black uppercase tracking-widest">my_app_db</span>
                 <span className="text-lg font-mono text-black">Port: 3306</span>
              </div>
           </div>
        </div>

      </div>

      {/* Security Tip */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${status === 'connected' ? 'bg-emerald-500/10 border-emerald-500/20 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}>
         <div className="flex items-center gap-4 justify-center mb-1">
            <ShieldCheck className={`w-12 h-12 ${status === 'connected' ? 'text-black' : 'text-black'}`} />
            <span className="text-lg font-black uppercase tracking-widest text-black">Encapsulated Environment</span>
         </div>
         <p className="text-lg font-medium text-black uppercase tracking-widest">The .env file keeps your master keys separate from the code!</p>
      </div>
    </div>
  );
}
