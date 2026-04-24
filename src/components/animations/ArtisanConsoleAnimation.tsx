"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Database, Zap, FileCode, CheckCircle2, Server, Settings } from 'lucide-react';

export function ArtisanConsoleAnimation() {
  const [activeTask, setActiveTask] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTask((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tasks = [
    { 
      title: 'Generate Code', 
      cmd: 'php artisan make:controller User', 
      icon: FileCode, 
      color: 'sky',
      result: 'Controller created successfully.' 
    },
    { 
      title: 'Manage Database', 
      cmd: 'php artisan migrate', 
      icon: Database, 
      color: 'amber',
      result: 'Migrated: 2024_01_01_create_users_table' 
    },
    { 
      title: 'Optimize App', 
      cmd: 'php artisan config:cache', 
      icon: Zap, 
      color: 'rose',
      result: 'Configuration cached successfully!' 
    }
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Terminal className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Artisan CLI Power</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Automation for Web Artisans</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-12">
        
        {/* Terminal Window */}
        <div className="w-[500px] rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl relative">
           {/* Top Bar */}
           <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                 <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono">Artisan Console</span>
           </div>

           {/* Content */}
           <div className="p-8 font-mono text-[11px] h-32 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                 <span className="text-emerald-400">➜</span>
                 <span className="text-sky-400">project</span>
                 <AnimatePresence mode="wait">
                    <motion.span
                      key={activeTask}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 5 }}
                      className="text-white/80"
                    >
                       {tasks[activeTask].cmd}
                    </motion.span>
                 </AnimatePresence>
                 <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-primary" />
              </div>
              
              <AnimatePresence>
                 <motion.div
                   key={activeTask + 'result'}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="flex items-center gap-2 text-white/40 italic"
                 >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{tasks[activeTask].result}</span>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>

        {/* Task Indicators */}
        <div className="flex items-center gap-12">
           {tasks.map((task, i) => (
             <motion.div
               key={task.title}
               animate={{ 
                 scale: activeTask === i ? 1.1 : 1,
                 opacity: activeTask === i ? 1 : 0.3,
               }}
               className="flex flex-col items-center gap-4"
             >
                <div className={`w-16 h-16 rounded-3xl bg-${task.color}-500/10 border-2 ${activeTask === i ? `border-${task.color}-500 shadow-[0_0_30px_rgba(var(--tw-color-${task.color}-500),0.2)]` : 'border-white/5'} flex items-center justify-center transition-all`}>
                   <task.icon className={`w-8 h-8 ${activeTask === i ? `text-${task.color}-400` : 'text-white/20'}`} />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${activeTask === i ? 'text-white' : 'text-white/20'}`}>{task.title}</span>
             </motion.div>
           ))}
        </div>

      </div>

      {/* Philosophy */}
      <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full">
         <Settings className="w-4 h-4 text-primary" />
         <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
            Don't do it manually — Let <span className="text-primary italic font-black tracking-normal">Artisan</span> handle the boring work.
         </span>
      </div>
    </div>
  );
}
