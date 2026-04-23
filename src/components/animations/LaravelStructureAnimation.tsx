"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, FolderOpen, FileJson, FileText, Code2, Database, Layout, Globe, Key, Heart } from 'lucide-react';

export function LaravelStructureAnimation() {
  const [hovered, setHovered] = useState<string | null>(null);

  const folders = [
    { id: 'app', name: 'app/', desc: 'The "Heart": Logic, Models, Controllers', icon: Heart, color: 'rose' },
    { id: 'routes', name: 'routes/', desc: 'The "Map": URL & Route definitions', icon: Globe, color: 'sky' },
    { id: 'resources', name: 'resources/', desc: 'The "Face": Views, CSS, JS', icon: Layout, color: 'amber' },
    { id: 'database', name: 'database/', desc: 'The "Storage": Migrations & Seeds', icon: Database, color: 'emerald' },
    { id: 'env', name: '.env', desc: 'The "Secrets": Database credentials', icon: Key, color: 'primary' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <FolderOpen className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Project Anatomy</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Laravel Directory Structure</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-20">
        
        {/* 1. Folder Tree */}
        <div className="flex flex-col gap-2 w-64">
           {folders.map((f) => (
             <motion.div
               key={f.id}
               onMouseEnter={() => setHovered(f.id)}
               onMouseLeave={() => setHovered(null)}
               whileHover={{ x: 10 }}
               className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${hovered === f.id ? `bg-${f.color}-500/10 border-${f.color}-500/30 shadow-xl` : 'bg-white/[0.02] border-white/5'}`}
             >
                {f.id === 'env' ? <FileText className={`w-5 h-5 ${hovered === f.id ? `text-${f.color}-400` : 'text-white/20'}`} /> : <Folder className={`w-5 h-5 ${hovered === f.id ? `text-${f.color}-400` : 'text-white/20'}`} />}
                <span className={`text-xs font-black uppercase tracking-widest ${hovered === f.id ? 'text-white' : 'text-white/40'}`}>{f.name}</span>
             </motion.div>
           ))}
        </div>

        {/* 2. Detail Display */}
        <div className="w-80 h-64 flex items-center justify-center">
           <AnimatePresence mode="wait">
              {hovered ? (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.1, x: -20 }}
                  className="w-full p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col items-center gap-6 shadow-2xl text-center"
                >
                   <div className={`w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner`}>
                      {folders.find(f => f.id === hovered)?.icon && React.createElement(folders.find(f => f.id === hovered)!.icon, { className: "w-10 h-10 text-primary" })}
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xl font-black text-white">{folders.find(f => f.id === hovered)?.name}</h4>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">
                         {folders.find(f => f.id === hovered)?.desc}
                      </p>
                   </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-4 text-white/10"
                >
                   <FolderOpen className="w-16 h-16 opacity-20" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Hover to explore</span>
                </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>

      {/* Advice */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-3 rounded-full"
      >
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
           80% of your code will live in <span className="text-primary italic">app/</span> and <span className="text-primary italic">routes/</span>.
        </span>
      </motion.div>
    </div>
  );
}
