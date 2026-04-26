"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Globe, Smartphone, Terminal, ShieldCheck, Database, Layout, Key, Lock } from 'lucide-react';

export function RouteFilesAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  const routeFiles = [
    { 
      id: 'web', 
      name: 'web.php', 
      desc: 'Browser Interface', 
      icon: Globe, 
      color: 'sky',
      features: ['Session Persistence', 'CSRF Protection', 'HTML Views'],
      security: Lock
    },
    { 
      id: 'api', 
      name: 'api.php', 
      desc: 'Stateless APIs', 
      icon: Smartphone, 
      color: 'emerald',
      features: ['JSON Responses', 'Token Auth', 'Rate Limiting'],
      security: ShieldCheck
    },
    { 
      id: 'console', 
      name: 'console.php', 
      desc: 'CLI Commands', 
      icon: Terminal, 
      color: 'amber',
      features: ['Artisan Tasks', 'Scheduled Jobs', 'Automation'],
      security: Database
    },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <FileCode className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Route Specialization</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Organizing Requests by Type</p>
        </div>
      </div>

      <div className="flex gap-6 w-full px-12 relative z-10">
         {routeFiles.map((file) => (
           <motion.button
             key={file.id}
             onClick={() => setActive(file.id)}
             whileHover={{ y: -10 }}
             className={`flex-1 p-8 rounded-[3rem] border-2 transition-all flex flex-col items-center gap-6 relative overflow-hidden ${active === file.id ? `bg-${file.color}-500/10 border-${file.color}-500 shadow-2xl` : 'bg-white/[0.02] border-slate-900/5 opacity-60 hover:opacity-100'}`}
           >
              {/* Security Icon Overlay */}
              <AnimatePresence>
                 {active === file.id && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 0.1, scale: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute -top-4 -right-4"
                   >
                      <file.security className="w-12 h-12 text-black" />
                   </motion.div>
                 )}
              </AnimatePresence>

              <div className={`w-42 h-42 rounded-[2rem] bg-${file.color}-500/20 flex items-center justify-center border border-${file.color}-500/30`}>
                 <file.icon className={`w-36 w-36 text-${file.color}-400`} />
              </div>
              
              <div className="text-center">
                 <h4 className="text-lg font-black text-black uppercase tracking-widest">{file.name}</h4>
                 <p className="text-lg font-bold text-black uppercase tracking-[0.2em] mt-1">{file.desc}</p>
              </div>

              {active === file.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="w-full flex flex-col gap-6 border-t border-slate-900/10 pt-4"
                >
                   {file.features.map(f => (
                     <div key={f} className="flex items-center gap-6">
                        <div className={`w-1 h-1 rounded-full bg-${file.color}-500`} />
                        <span className="text-lg font-bold text-black uppercase tracking-widest">{f}</span>
                     </div>
                   ))}
                </motion.div>
              )}
           </motion.button>
         ))}
      </div>

      {/* Context Advice */}
      <div className="h-10">
         <AnimatePresence mode="wait">
            {!active ? (
              <motion.span
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-black text-black uppercase tracking-[0.5em]"
              >
                 Select a file to explore its purpose
              </motion.span>
            ) : (
              <motion.div
                key="advice"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-6 py-2 rounded-full"
              >
                 <span className="text-lg font-bold text-black uppercase tracking-widest">
                    Laravel separates routes to apply the <span className="text-black italic">correct middleware</span> automatically.
                 </span>
              </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
