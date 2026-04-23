"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRightCircle, AlertCircle, Bomb, Server, ShieldCheck, HelpCircle } from 'lucide-react';

export function HttpStatusAnimation() {
  const [code, setCode] = useState<number | null>(null);

  const statusData: Record<number, { title: string, color: string, icon: any, desc: string }> = {
    200: { title: '200 OK', color: 'emerald', icon: CheckCircle2, desc: 'Everything is perfect!' },
    301: { title: '301 Moved', color: 'sky', icon: ArrowRightCircle, desc: 'Redirecting to new URL...' },
    404: { title: '404 Not Found', color: 'rose', icon: HelpCircle, desc: 'Resource does not exist.' },
    500: { title: '500 Error', color: 'amber', icon: Bomb, desc: 'Server code crashed!' },
  };

  const current = code ? statusData[code] : null;

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Server className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">HTTP Status Codes</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Server Response Standards</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        
        {/* Buttons */}
        <div className="flex gap-4">
           {Object.keys(statusData).map((c) => {
             const val = parseInt(c);
             const active = code === val;
             return (
               <button
                 key={c}
                 onClick={() => setCode(val)}
                 className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border ${active ? 'bg-white text-black border-white shadow-xl scale-110' : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'}`}
               >
                  {c}
               </button>
             );
           })}
        </div>

        {/* Display Area */}
        <div className="w-80 h-64 relative flex items-center justify-center">
           <AnimatePresence mode="wait">
              {!code ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4 text-white/20"
                >
                   <ShieldCheck className="w-16 h-16 opacity-20" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Waiting for Response</span>
                </motion.div>
              ) : (
                <motion.div
                  key={code}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.2, opacity: 0, y: -20 }}
                  className={`w-full p-8 rounded-[3rem] bg-${current?.color}-500/10 border border-${current?.color}-500/20 backdrop-blur-xl flex flex-col items-center gap-6 shadow-2xl`}
                >
                   <div className={`w-20 h-20 rounded-3xl bg-${current?.color}-500/20 flex items-center justify-center border border-${current?.color}-500/30 shadow-inner`}>
                      {current && <current.icon className={`w-10 h-10 text-${current.color}-400`} />}
                   </div>
                   <div className="text-center space-y-2">
                      <h4 className={`text-2xl font-black text-white`}>{current?.title}</h4>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest leading-relaxed px-4">{current?.desc}</p>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Categories Legend */}
      <div className="flex items-center gap-8 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-2xl">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">2xx: Success</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">3xx: Redirect</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">4xx: Client Error</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">5xx: Server Error</span>
         </div>
      </div>
    </div>
  );
}
