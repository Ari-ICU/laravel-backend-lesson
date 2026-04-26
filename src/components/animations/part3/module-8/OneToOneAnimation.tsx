"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, ArrowRightLeft } from 'lucide-react';

export function OneToOneAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-12">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">One-to-One</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">hasOne() / belongsTo()</code>
      </div>

      <div className="flex items-center justify-center gap-16 w-full relative">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-2">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-blue-100 rounded-2xl border-4 border-blue-300 flex items-center justify-center shadow-md"
            >
              <Users className="w-10 h-10 text-blue-600" />
            </motion.div>
          </div>
          <span className="font-bold text-slate-600">User</span>
        </div>

        {/* Connection */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "128px", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center relative w-32"
          >
            <div className="h-1.5 w-full bg-slate-300 rounded-full" />
            <ArrowRightLeft className="absolute w-8 h-8 text-slate-400 bg-white p-1 rounded-full border-2 border-slate-200" />
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-2">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-20 h-20 bg-emerald-100 rounded-2xl border-4 border-emerald-300 flex items-center justify-center shadow-md"
            >
              <FileText className="w-10 h-10 text-emerald-600" />
            </motion.div>
          </div>
          <span className="font-bold text-slate-600">Profile</span>
        </div>
      </div>
    </div>
  );
}
