"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardDrive, FolderOpen, Link as LinkIcon, Globe, Terminal, CheckCircle } from 'lucide-react';

export function StorageLinkAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isLinked, setIsLinked] = useState(false);

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center gap-8 ${isProjectorMode ? "scale-110" : ""}`}>
      <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-3xl shadow-xl">
        <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center border-2 border-black shadow-md">
          <Terminal className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-black text-black uppercase tracking-widest">Storage Symlink System</h3>
      </div>

      <div className="relative flex items-center justify-center gap-32 w-full max-w-4xl">
        {/* Source: storage/app/public */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-[2.5rem] bg-slate-900 border-4 border-black flex flex-col items-center justify-center relative shadow-2xl">
            <HardDrive className="w-16 h-16 text-white mb-2" />
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center px-4">storage/app/public</span>
            <div className="absolute -bottom-4 bg-amber-500 border-2 border-black px-3 py-1 rounded-full">
              <span className="text-[9px] font-black text-black uppercase tracking-widest">Private Space</span>
            </div>
          </div>
        </div>

        {/* The Connection */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`h-2 w-full border-2 border-black border-dashed ${isLinked ? 'bg-amber-400' : 'bg-black/5'} transition-colors duration-1000`} />
          </div>
          
          <AnimatePresence>
            {!isLinked ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLinked(true)}
                className="relative z-10 bg-black text-white px-6 py-4 rounded-2xl border-2 border-black flex flex-col items-center gap-2 shadow-[8px_8px_0px_0px_rgba(245,158,11,1)]"
              >
                <Terminal className="w-5 h-5 text-amber-400" />
                <span className="text-[10px] font-mono font-bold">php artisan storage:link</span>
              </motion.button>
            ) : (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="relative z-10 bg-emerald-500 border-4 border-black p-4 rounded-full shadow-2xl"
              >
                <LinkIcon className="w-8 h-8 text-black" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Destination: public/storage */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-40 h-40 rounded-[2.5rem] bg-blue-50 border-4 border-black flex flex-col items-center justify-center relative shadow-2xl">
            <Globe className="w-16 h-16 text-blue-600 mb-2" />
            <span className="text-[10px] font-black text-black/40 uppercase tracking-widest text-center px-4">public/storage</span>
            
            <AnimatePresence>
              {isLinked && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-emerald-500/10 flex flex-col items-center justify-center"
                >
                   <CheckCircle className="w-12 h-12 text-emerald-600 mb-2" />
                   <span className="text-[8px] font-black text-emerald-800 uppercase tracking-widest">Symlink Created</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute -bottom-4 bg-blue-500 border-2 border-black px-3 py-1 rounded-full">
              <span className="text-[9px] font-black text-white uppercase tracking-widest">Public Access</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl text-center">
        <p className="text-sm font-bold text-black/60 italic leading-relaxed">
          {isLinked 
            ? "Files can now be accessed via URL: http://your-app.com/storage/filename.jpg"
            : "Files in storage are private. Use the link command to make them accessible to the web."}
        </p>
      </div>

      {isLinked && (
        <button 
          onClick={() => setIsLinked(false)}
          className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-600 transition-colors"
        >
          Reset Demo
        </button>
      )}
    </div>
  );
}
