"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, Database, Zap, FileCode, CheckCircle2, Server, Settings } from 'lucide-react';

export function ArtisanConsoleAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
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
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center border-2 border-black shadow-lg">
          <Terminal className="w-12 h-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Artisan CLI Power</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Automation for Web Artisans</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8 relative z-20">
        
        {/* Terminal Window */}
        <div className="w-[960px] rounded-[2.5rem] border-4 border-black bg-slate-50 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative">
           {/* Top Bar */}
           <div className="flex items-center justify-between px-8 py-5 bg-white border-b-4 border-black">
              <div className="flex gap-4">
                 <div className="w-4 h-4 rounded-full bg-black/10" />
                 <div className="w-4 h-4 rounded-full bg-black/10" />
                 <div className="w-4 h-4 rounded-full bg-black/10" />
              </div>
              <span className="text-xl font-black text-black uppercase tracking-widest font-mono">Artisan Console</span>
           </div>

           {/* Content */}
           <div className="p-10 font-mono text-2xl h-80 flex flex-col justify-center gap-8">
              <div className="flex items-center gap-6">
                 <span className="text-emerald-600 font-black">➜</span>
                 <span className="text-sky-600 font-black">project</span>
                 <AnimatePresence mode="wait">
                    <motion.span
                      key={activeTask}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-black font-bold"
                    >
                       {tasks[activeTask].cmd}
                    </motion.span>
                 </AnimatePresence>
                 <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-4 h-8 bg-black" />
              </div>
              
              <AnimatePresence>
                 <motion.div
                   key={activeTask + 'result'}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="flex items-center gap-6 text-emerald-600 font-black italic"
                 >
                    <CheckCircle2 className="w-10 h-10" />
                    <span>{tasks[activeTask].result}</span>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>

        {/* Task Indicators */}
        <div className="flex items-center gap-8">
           {tasks.map((task, i) => (
             <motion.div
               key={task.title}
               animate={{ 
                 scale: activeTask === i ? 1.1 : 1,
                 opacity: activeTask === i ? 1 : 0.3,
               }}
               className="flex flex-col items-center gap-6"
             >
                <div className={`w-32 h-32 rounded-[2.5rem] bg-white border-4 ${activeTask === i ? `border-black shadow-2xl` : 'border-black/5'} flex items-center justify-center transition-all`}>
                   <task.icon className="w-14 h-14 text-black" />
                </div>
                <span className="text-xl font-black text-black uppercase tracking-widest">{task.title}</span>
             </motion.div>
           ))}
        </div>

      </div>

      {/* Philosophy Bar */}
      <div className="flex items-center gap-6 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
         <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center border-2 border-black">
            <Settings className="w-8 h-8 text-black" />
         </div>
         <p className="text-xl font-black text-black uppercase tracking-widest">
            Don't do it manually — Let <span className="underline decoration-4 decoration-rose-500">Artisan</span> handle the boring work.
         </p>
      </div>
    </div>
  );
}
