"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRightCircle, AlertCircle, Bomb, Server, ShieldCheck, HelpCircle } from 'lucide-react';

export function HttpStatusAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [code, setCode] = useState<number | null>(null);

  const statusData: Record<number, { title: string, color: string, icon: any, desc: string }> = {
    200: { title: '200 OK', color: 'emerald', icon: CheckCircle2, desc: 'Everything is perfect!' },
    301: { title: '301 Moved', color: 'sky', icon: ArrowRightCircle, desc: 'Redirecting to new URL...' },
    404: { title: '404 Not Found', color: 'rose', icon: HelpCircle, desc: 'Resource does not exist.' },
    500: { title: '500 Error', color: 'amber', icon: Bomb, desc: 'Server code crashed!' },
  };

  const current = code ? statusData[code] : null;

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Server className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">HTTP Status Codes</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Server Response Standards</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-4">
        
        {/* Buttons */}
        <div className="flex gap-6">
           {Object.keys(statusData).map((c) => {
             const val = parseInt(c);
             const active = code === val;
             return (
               <button
                 key={c}
                 onClick={() => setCode(val)}
                 className={`px-6 py-3 rounded-2xl font-black text-lg uppercase tracking-widest transition-all border ${active ? 'bg-primary text-black border-primary shadow-xl scale-110' : 'bg-slate-50/5 text-black border-slate-900/10 hover:bg-slate-50/10'}`}
               >
                  {c}
               </button>
             );
           })}
        </div>

        {/* Display Area */}
        <div className="w-80 h-96 relative flex items-center justify-center">
           <AnimatePresence mode="wait">
              {!code ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-6 text-black"
                >
                   <ShieldCheck className="w-42 h-42 opacity-20" />
                   <span className="text-lg font-black uppercase tracking-widest">Waiting for Response</span>
                </motion.div>
              ) : (
                <motion.div
                  key={code}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 1.2, opacity: 0, y: -20 }}
                  className={`w-full p-8 rounded-[3rem] bg-${current?.color}-500/10 border border-${current?.color}-500/20 backdrop-blur-xl flex flex-col items-center gap-6 shadow-2xl`}
                >
                   <div className={`w-12 h-12 rounded-3xl bg-${current?.color}-500/20 flex items-center justify-center border border-${current?.color}-500/30 shadow-inner`}>
                      {current && <current.icon className={`w-12 h-12 text-${current.color}-400`} />}
                   </div>
                   <div className="text-center space-y-6">
                      <h4 className={`text-lg font-black text-black`}>{current?.title}</h4>
                      <p className="text-lg font-bold text-black uppercase tracking-widest leading-relaxed px-4">{current?.desc}</p>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Categories Legend */}
      <div className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-6 py-3 rounded-2xl">
         <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">2xx: Success</span>
         </div>
         <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">3xx: Redirect</span>
         </div>
         <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">4xx: Client Error</span>
         </div>
         <div className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-lg font-bold text-black uppercase tracking-widest">5xx: Server Error</span>
         </div>
      </div>
    </div>
  );
}
