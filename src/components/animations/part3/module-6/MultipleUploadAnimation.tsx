"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Files, File, CheckCircle, Database, Layers, ArrowUpCircle } from 'lucide-react';

export function MultipleUploadAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [uploading, setUploading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const files = ['image1.png', 'photo2.jpg', 'doc3.pdf'];

  const startUpload = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setCompleted(true);
    }, 3000);
  };

  return (
    <div className={`relative w-full max-w-full min-h-[450px] flex flex-col items-center justify-center gap-12 ${isProjectorMode ? "scale-110" : ""}`}>
      <div className="flex items-center gap-6 bg-white border-2 border-black px-8 py-4 rounded-3xl shadow-xl">
        <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center border-2 border-black shadow-md">
          <Layers className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-black text-black uppercase tracking-widest">Multiple File Upload</h3>
      </div>

      <div className="flex items-center justify-between w-full max-w-4xl px-12">
        {/* Source: Multiple Files */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {files.map((file, i) => (
              <motion.div
                key={file}
                initial={{ x: 0, y: 0 }}
                animate={uploading ? { x: 300, y: 0, opacity: 0 } : { x: i * 15, y: i * 15, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                className="absolute w-32 h-40 bg-white border-2 border-black rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2"
              >
                <File className="w-10 h-10 text-purple-600" />
                <span className="text-[9px] font-black text-black uppercase tracking-widest">{file}</span>
              </motion.div>
            ))}
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-black/40 mt-8">gallery[] (Array)</span>
        </div>

        {/* The Action */}
        <div className="flex flex-col items-center gap-6">
           <AnimatePresence mode="wait">
             {!uploading && !completed ? (
               <motion.button
                 key="btn"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={startUpload}
                 className="bg-black text-white px-8 py-4 rounded-2xl border-2 border-black flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(168,85,247,1)]"
               >
                 <ArrowUpCircle className="w-6 h-6 text-purple-400" />
                 <span className="text-xs font-black uppercase tracking-widest">Upload All</span>
               </motion.button>
             ) : uploading ? (
               <motion.div key="loader" className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em]">foreach loops...</span>
               </motion.div>
             ) : (
               <motion.div key="success" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex flex-col items-center gap-2">
                  <div className="bg-emerald-500 p-4 rounded-full border-2 border-black">
                    <CheckCircle className="w-10 h-10 text-black" />
                  </div>
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Done!</span>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Destination: Server / DB */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-48 h-48 rounded-[3rem] bg-slate-900 border-4 border-black flex flex-col items-center justify-center gap-4 relative overflow-hidden shadow-2xl">
             <Database className="w-16 h-16 text-white/20" />
             <div className="flex flex-col gap-2 w-full px-8">
                {files.map((_, i) => (
                  <div key={i} className="h-2 w-full bg-white/5 rounded-full relative overflow-hidden">
                    {completed && <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: i * 0.3 }} className="h-full bg-emerald-500" />}
                  </div>
                ))}
             </div>
             <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Database Records</span>
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-black/40">Stored & Linked</span>
        </div>
      </div>

      {completed && (
        <button 
          onClick={() => { setCompleted(false); setUploading(false); }}
          className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 transition-colors"
        >
          Reset Demo
        </button>
      )}
    </div>
  );
}
