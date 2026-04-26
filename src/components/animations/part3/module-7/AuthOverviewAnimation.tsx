"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Key, CheckCircle, ShieldCheck, Database } from 'lucide-react';

export function AuthOverviewAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className="relative w-full max-w-full min-h-[400px] flex items-center justify-center gap-16">
      {/* User Block */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-24 h-24 rounded-3xl bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center">
          <User className="w-12 h-12 text-blue-600" />
        </div>
        <div className="text-lg font-bold text-slate-700">User</div>
      </motion.div>

      {/* Authentication Process */}
      <div className="relative flex flex-col items-center gap-8 w-64">
        {/* Credentials Flow */}
        <motion.div
          animate={{ x: [-50, 50, -50], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <Key className="w-6 h-6 text-slate-500" />
          <span className="font-mono text-sm text-slate-500">Credentials</span>
        </motion.div>

        {/* Shield */}
        <div className="w-32 h-32 rounded-full bg-emerald-500/10 border-4 border-emerald-500/40 flex items-center justify-center z-10 bg-white">
          <ShieldCheck className="w-16 h-16 text-emerald-600" />
        </div>

        {/* Auth Token / Session */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1.1, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 translate-y-full mt-4 flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold border border-emerald-200"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Authenticated</span>
        </motion.div>
      </div>

      {/* Database/App Block */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-24 h-24 rounded-3xl bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
          <Database className="w-12 h-12 text-slate-600" />
        </div>
        <div className="text-lg font-bold text-slate-700">Application</div>
      </motion.div>
    </div>
  );
}
