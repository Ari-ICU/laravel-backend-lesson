"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText } from 'lucide-react';

export function OneToManyAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const posts = [1, 2, 3];

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-12">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">One-to-Many</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">hasMany() / belongsTo()</code>
      </div>

      <div className="flex items-center justify-center gap-24 w-full relative">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-blue-100 rounded-2xl border-4 border-blue-300 flex items-center justify-center shadow-md relative"
          >
            <Users className="w-10 h-10 text-blue-600" />
            
            {/* Draw multiple lines originating from here to the posts */}
            <svg className="absolute top-1/2 left-full w-24 h-48 -translate-y-1/2 pointer-events-none overflow-visible">
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.5 }} d="M 0,96 L 96,16" stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round" />
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.5 }} d="M 0,96 L 96,96" stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round" />
              <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.5 }} d="M 0,96 L 96,176" stroke="#cbd5e1" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>
          <span className="font-bold text-slate-600">User</span>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-4">
            {posts.map((n, i) => (
              <motion.div 
                key={n}
                initial={{ scale: 0.8, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.2), duration: 0.5 }}
                className="w-16 h-16 bg-emerald-100 rounded-2xl border-4 border-emerald-300 flex items-center justify-center shadow-sm"
              >
                <FileText className="w-8 h-8 text-emerald-600" />
              </motion.div>
            ))}
          </div>
          <span className="font-bold text-slate-600 mt-2">Posts</span>
        </div>
      </div>
    </div>
  );
}
