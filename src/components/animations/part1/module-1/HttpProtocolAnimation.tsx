"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Send, Reply, CheckCircle2, AlertCircle, FileText, Wifi } from 'lucide-react';

export function HttpProtocolAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] min-h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Wifi className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">HTTP Request/Response Cycle</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">The Standard Web Protocol</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-32">
        
        {/* 1. Client (Browser) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-black text-black uppercase tracking-[0.3em]">Client (Browser)</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-72 p-8 rounded-[3rem] bg-slate-50/[0.03] border border-slate-900/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl flex flex-col items-center gap-6"
          >
             <div className="w-42 h-42 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Globe className="w-36 w-36 text-black" />
             </div>
             <div className="space-y-4 text-center">
                <p className="text-lg font-black text-black">Browser</p>
                <p className="text-lg font-bold text-black uppercase">Initiates Request</p>
             </div>
          </motion.div>
        </div>

        {/* 2. Communication Path */}
        <div className="relative w-72 h-2">
           <div className="absolute inset-0 bg-slate-50/5 rounded-full" />
           
           {/* Request Packet */}
           <motion.div
             animate={{ 
               x: [-20, 200],
               opacity: [0, 1, 1, 0]
             }}
             transition={{ 
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="absolute -top-10 left-0 flex flex-col items-center gap-4"
           >
              <div className="px-3 py-1 rounded-full bg-primary text-black text-lg font-black uppercase tracking-widest shadow-lg shadow-primary/20">GET /api/v1</div>
              <Send className="w-12 h-12 text-black" />
           </motion.div>

           {/* Response Packet */}
           <motion.div
             animate={{ 
               x: [200, -20],
               opacity: [0, 1, 1, 0]
             }}
             transition={{ 
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut",
               delay: 1.5
             }}
             className="absolute -bottom-10 left-0 flex flex-col items-center gap-4"
           >
              <Reply className="w-12 h-12 text-black" />
              <div className="px-3 py-1 rounded-full bg-emerald-500 text-black text-lg font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">200 OK</div>
           </motion.div>
        </div>

        {/* 3. Server */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg font-black text-black uppercase tracking-[0.3em]">Web Server</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-72 p-8 rounded-[3rem] bg-slate-50/[0.03] border border-slate-900/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl flex flex-col items-center gap-6"
          >
             <div className="w-42 h-42 rounded-3xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Server className="w-36 w-36 text-black" />
             </div>
             <div className="space-y-4 text-center">
                <p className="text-lg font-black text-black">Nginx / Apache</p>
                <p className="text-lg font-bold text-black uppercase">Processing...</p>
             </div>
          </motion.div>
        </div>

      </div>

      {/* HTTP Methods & Status Legend */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-full">
         <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/[0.02] border border-slate-900/5">
            <span className="text-lg font-black text-black uppercase tracking-widest">Common Methods</span>
            <div className="flex gap-6">
               {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
                 <span key={m} className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-lg font-black text-black">{m}</span>
               ))}
            </div>
         </div>
         <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/[0.02] border border-slate-900/5">
            <span className="text-lg font-black text-black uppercase tracking-widest">Status Codes</span>
            <div className="flex gap-6">
               <div className="flex items-center gap-4.5">
                  <CheckCircle2 className="w-12 h-12 text-black" />
                  <span className="text-lg font-bold text-black">200: Success</span>
               </div>
               <div className="flex items-center gap-4.5">
                  <AlertCircle className="w-12 h-12 text-black" />
                  <span className="text-lg font-bold text-black">404: Not Found</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
