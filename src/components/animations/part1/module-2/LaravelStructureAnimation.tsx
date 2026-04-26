"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FolderOpen, FileJson, FileText, Code2, Database, Layout, Globe, Key, Heart } from 'lucide-react';

export function LaravelStructureAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const folders = [
    { id: 'app', name: 'app/', desc: 'The "Heart": Core Logic, Models, Controllers', icon: Heart, color: 'rose' },
    { id: 'routes', name: 'routes/', desc: 'The "Map": HTTP Request & URL Routes', icon: Globe, color: 'sky' },
    { id: 'resources', name: 'resources/', desc: 'The "Face": Frontend Views & Assets', icon: Layout, color: 'amber' },
    { id: 'database', name: 'database/', desc: 'The "Storage": Migrations & Seeders', icon: Database, color: 'emerald' },
    { id: 'env', name: '.env', desc: 'The "Secrets": System Config & Credentials', icon: Key, color: 'black' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "gap-8 scale-110" : "gap-12"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-8 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30">
        <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center border-2 border-black shadow-lg">
          <FolderOpen className="w-12 h-12 text-black" />
        </div>
        <div>
          <h3 className="text-3xl font-black text-black uppercase tracking-widest">Project Anatomy</h3>
          <p className="text-xl font-bold text-black uppercase tracking-widest">Laravel Directory Structure</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20 relative z-20">
        
        {/* 1. Folder Tree */}
        <div className="flex flex-col gap-6 w-96">
           {folders.map((f) => (
             <motion.div
               key={f.id}
               onMouseEnter={() => setHovered(f.id)}
               onMouseLeave={() => setHovered(null)}
               whileHover={{ x: 20 }}
               className={`p-6 rounded-[2rem] border-4 transition-all cursor-pointer flex items-center gap-6 shadow-xl ${hovered === f.id ? `bg-slate-100 border-black scale-105` : 'bg-white border-black/10'}`}
             >
                {f.id === 'env' ? 
                  <FileText className="w-12 h-12 text-black" /> : 
                  <Folder className="w-12 h-12 text-black" />
                }
                <span className="text-xl font-black text-black uppercase tracking-widest">{f.name}</span>
             </motion.div>
           ))}
        </div>

        {/* 2. Detail Display */}
        <div className="w-[450px] h-96 flex items-center justify-center">
           <AnimatePresence mode="wait">
              {hovered ? (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.1, x: -20 }}
                  className="w-full p-10 rounded-[4rem] bg-white border-4 border-black flex flex-col items-center gap-8 shadow-2xl text-center relative overflow-hidden"
                >
                   <div className="absolute top-0 left-0 w-full h-2 bg-black/10" />
                   <div className="w-24 h-24 rounded-[2rem] bg-slate-100 flex items-center justify-center border-2 border-black shadow-inner">
                      {folders.find(f => f.id === hovered)?.icon && React.createElement(folders.find(f => f.id === hovered)!.icon, { className: "w-12 h-12 text-black" })}
                   </div>
                   <div className="space-y-6">
                      <h4 className="text-3xl font-black text-black uppercase tracking-widest">{folders.find(f => f.id === hovered)?.name}</h4>
                      <p className="text-xl font-bold text-black uppercase tracking-widest leading-relaxed">
                         {folders.find(f => f.id === hovered)?.desc}
                      </p>
                   </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-8 text-black opacity-30"
                >
                   <FolderOpen className="w-48 h-48" />
                   <span className="text-2xl font-black uppercase tracking-[0.4em]">Hover to explore</span>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Advice Bar */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-6 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-30"
      >
        <span className="text-xl font-black text-black uppercase tracking-widest">
           80% of your code will live in <span className="underline decoration-4 decoration-rose-500">app/</span> and <span className="underline decoration-4 decoration-sky-500">routes/</span>.
        </span>
      </motion.div>
    </div>
  );
}
