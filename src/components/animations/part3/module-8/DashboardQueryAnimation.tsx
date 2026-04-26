"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, FileText, FolderOpen, ChevronRight } from 'lucide-react';

export function DashboardQueryAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab(t => (t + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const data = [
    { label: "Categories", icon: FolderOpen, count: 5, color: "blue" },
    { label: "Posts", icon: FileText, count: 124, color: "emerald" },
    { label: "Authors", icon: Users, count: 12, color: "purple" }
  ];

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-8 bg-slate-50/50 rounded-[3rem] p-8 border border-slate-200 shadow-inner">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-3">
          <LayoutDashboard className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold text-slate-800">Dashboard Optimization</h3>
        </div>
        <code className="text-sm text-primary bg-primary/10 px-4 py-1 rounded-lg block">
          Category::with(['latestPost.user'])-&gt;withCount('posts')
        </code>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full">
        {data.map((item, i) => (
          <motion.div
            key={item.label}
            animate={{ 
              scale: activeTab === i ? 1.05 : 1,
              backgroundColor: activeTab === i ? 'white' : 'transparent',
              borderColor: activeTab === i ? '#3b82f6' : '#e2e8f0'
            }}
            className="p-6 rounded-3xl border-2 transition-colors flex flex-col items-center gap-3 shadow-sm"
          >
            <item.icon className={`w-8 h-8 ${activeTab === i ? 'text-primary' : 'text-black'}`} />
            <div className="text-center">
              <div className="text-3xl font-black text-slate-800">{item.count}</div>
              <div className="text-[12px] font-black uppercase tracking-widest text-black">{item.label}</div>
            </div>
            
            {activeTab === i && (
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full"
              >
                Eager Loaded
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Query Flow Visualization */}
      <div className="w-full h-16 bg-white rounded-2xl border border-slate-200 flex items-center px-6 gap-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div className="flex-1 overflow-hidden">
          <motion.div 
            animate={{ x: [-100, 300] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="font-mono text-sm text-black whitespace-nowrap"
          >
            SELECT * FROM categories LEFT JOIN posts ON ... LEFT JOIN users ON ...
          </motion.div>
        </div>
        <div className="flex items-center gap-1 text-[12px] font-bold text-black uppercase tracking-tighter">
          1 Query <ChevronRight className="w-3 h-3" /> Result
        </div>
      </div>
    </div>
  );
}
