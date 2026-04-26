"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Tag } from 'lucide-react';

export function ManyToManyAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [showPivot, setShowPivot] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPivot(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const users = [1, 2];
  const roles = [1, 2, 3];

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-12">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">Many-to-Many</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">belongsToMany()</code>
      </div>

      <div className="flex items-center justify-center gap-24 w-full relative">
        {/* Left Side: Users */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-4">
            {users.map((n, i) => (
              <motion.div 
                key={`u-${n}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="w-16 h-16 bg-blue-100 rounded-2xl border-4 border-blue-300 flex items-center justify-center shadow-md relative"
              >
                <Users className="w-8 h-8 text-blue-600" />
                {/* Lines to Pivot */}
                <svg className="absolute top-1/2 left-full w-24 h-48 -translate-y-1/2 pointer-events-none overflow-visible z-0">
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: showPivot ? 1 : 0 }} 
                    transition={{ duration: 0.5 }} 
                    d={i === 0 ? "M 0,96 L 96,64" : "M 0,96 L 96,128"} 
                    stroke="#cbd5e1" strokeWidth="3" fill="none" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: showPivot ? 1 : 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }} 
                    d={i === 0 ? "M 0,96 L 96,128" : "M 0,96 L 96,176"} 
                    stroke="#cbd5e1" strokeWidth="3" fill="none" 
                  />
                </svg>
              </motion.div>
            ))}
          </div>
          <span className="font-bold text-slate-600">Users</span>
        </div>

        {/* Center: Pivot Table */}
        <div className="flex flex-col items-center justify-center w-32 z-20">
          <AnimatePresence>
            {showPivot && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-auto py-4 bg-purple-50 border-4 border-purple-300 rounded-2xl flex flex-col items-center justify-center shadow-xl"
              >
                <span className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wider">role_user</span>
                <div className="w-full px-2 space-y-1">
                  <div className="h-2 w-full bg-purple-200 rounded-full" />
                  <div className="h-2 w-full bg-purple-200 rounded-full" />
                  <div className="h-2 w-full bg-purple-200 rounded-full" />
                  <div className="h-2 w-full bg-purple-200 rounded-full" />
                </div>
                
                {/* Lines to Roles */}
                <svg className="absolute top-1/2 left-full w-24 h-48 -translate-y-1/2 pointer-events-none overflow-visible -z-10">
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} d="M 0,64 L 96,16" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 }} d="M 0,96 L 96,96" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} d="M 0,128 L 96,176" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Roles */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-4">
            {roles.map((n, i) => (
              <motion.div 
                key={`r-${n}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.2) }}
                className="w-16 h-16 bg-emerald-100 rounded-2xl border-4 border-emerald-300 flex items-center justify-center shadow-md"
              >
                <Tag className="w-8 h-8 text-emerald-600" />
              </motion.div>
            ))}
          </div>
          <span className="font-bold text-slate-600">Roles</span>
        </div>
      </div>
    </div>
  );
}
