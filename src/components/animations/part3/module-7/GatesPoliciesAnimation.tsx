"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Edit, Trash2, CheckCircle2, XCircle } from 'lucide-react';

export function GatesPoliciesAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [role, setRole] = useState<'author' | 'reader'>('author');

  useEffect(() => {
    const timer = setInterval(() => {
      setRole(r => r === 'author' ? 'reader' : 'author');
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const actions = [
    { name: 'View', icon: FileText, author: true, reader: true },
    { name: 'Edit', icon: Edit, author: true, reader: false },
    { name: 'Delete', icon: Trash2, author: true, reader: false }
  ];

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-12">
      <div className="flex gap-4 p-2 bg-slate-100 rounded-2xl">
        <div className={`px-6 py-2 rounded-xl font-bold transition-all ${role === 'author' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500'}`}>Post Author</div>
        <div className={`px-6 py-2 rounded-xl font-bold transition-all ${role === 'reader' ? 'bg-white shadow-md text-slate-700' : 'text-slate-500'}`}>Other User</div>
      </div>

      <div className="flex gap-8 w-full justify-center">
        {actions.map((action, i) => {
          const allowed = role === 'author' ? action.author : action.reader;
          
          return (
            <motion.div
              key={action.name}
              layout
              className={`w-32 flex flex-col items-center gap-4 p-6 rounded-3xl border-2 transition-all duration-500 ${allowed ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200 opacity-60'}`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${allowed ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-400'}`}>
                <action.icon className="w-6 h-6" />
              </div>
              <div className="font-bold text-slate-700">{action.name}</div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={allowed ? 'yes' : 'no'}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  {allowed ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <code className="px-4 py-2 bg-slate-800 text-slate-100 rounded-xl font-mono text-sm shadow-lg">
          @can('{role === 'author' ? 'update' : 'delete'}', $post)
        </code>
      </div>
    </div>
  );
}
