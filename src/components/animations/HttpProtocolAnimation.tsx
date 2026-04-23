"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Send, Reply, CheckCircle2, AlertCircle, FileText, Wifi } from 'lucide-react';

export function HttpProtocolAnimation() {
  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Wifi className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">HTTP Request/Response Cycle</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">The Standard Web Protocol</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-32">
        
        {/* 1. Client (Browser) */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Client (Browser)</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-48 p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl flex flex-col items-center gap-4"
          >
             <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Globe className="w-8 h-8 text-primary" />
             </div>
             <div className="space-y-1 text-center">
                <p className="text-xs font-black text-white">Browser</p>
                <p className="text-[9px] font-bold text-white/40 uppercase">Initiates Request</p>
             </div>
          </motion.div>
        </div>

        {/* 2. Communication Path */}
        <div className="relative w-48 h-2">
           <div className="absolute inset-0 bg-white/5 rounded-full" />
           
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
             className="absolute -top-10 left-0 flex flex-col items-center gap-1"
           >
              <div className="px-3 py-1 rounded-full bg-primary text-white text-[8px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">GET /api/v1</div>
              <Send className="w-4 h-4 text-primary" />
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
             className="absolute -bottom-10 left-0 flex flex-col items-center gap-1"
           >
              <Reply className="w-4 h-4 text-emerald-400" />
              <div className="px-3 py-1 rounded-full bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">200 OK</div>
           </motion.div>
        </div>

        {/* 3. Server */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Web Server</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-48 p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl flex flex-col items-center gap-4"
          >
             <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Server className="w-8 h-8 text-secondary" />
             </div>
             <div className="space-y-1 text-center">
                <p className="text-xs font-black text-white">Nginx / Apache</p>
                <p className="text-[9px] font-bold text-white/40 uppercase">Processing...</p>
             </div>
          </motion.div>
        </div>

      </div>

      {/* HTTP Methods & Status Legend */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
         <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Common Methods</span>
            <div className="flex gap-2">
               {['GET', 'POST', 'PUT', 'DELETE'].map(m => (
                 <span key={m} className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[8px] font-black text-primary">{m}</span>
               ))}
            </div>
         </div>
         <div className="flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Status Codes</span>
            <div className="flex gap-4">
               <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span className="text-[9px] font-bold text-white/80">200: Success</span>
               </div>
               <div className="flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3 text-rose-400" />
                  <span className="text-[9px] font-bold text-white/80">404: Not Found</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
