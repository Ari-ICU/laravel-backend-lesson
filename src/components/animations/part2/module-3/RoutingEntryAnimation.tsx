"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Home, Info, Mail, Map, User, Signpost } from 'lucide-react';

export function RoutingEntryAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const routes = [
    { id: 'home', path: '/', label: 'Home Page', icon: Home, color: 'sky' },
    { id: 'about', path: '/about', label: 'About Us', icon: Info, color: 'amber' },
    { id: 'contact', path: '/contact', label: 'Contact', icon: Mail, color: 'emerald' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Signpost className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">The Traffic Controller</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">How Laravel Routing Works</p>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-between px-20">
        
        {/* User / Request */}
        <div className="flex flex-col items-center gap-6">
           <motion.div
             animate={{ y: [0, -5, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-42 h-42 rounded-full bg-slate-50/10 flex items-center justify-center border border-slate-900/20 shadow-xl"
           >
              <User className="w-36 w-36 text-black" />
           </motion.div>
           <div className="text-center">
              <span className="text-lg font-black text-black uppercase tracking-widest block">The User</span>
              <span className="text-lg font-bold text-black uppercase tracking-widest italic">Makes a Request</span>
           </div>
        </div>

        {/* Router (The Map) */}
        <div className="relative">
           <div className="w-72 h-72 rounded-3xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center relative shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
              <Map className="w-12 h-12 text-black relative z-10" />
           </div>
           
           {/* Connection Lines */}
           {routes.map((r, i) => (
             <div
               key={r.id}
               className={`absolute top-1/2 left-full w-36 h-px bg-gradient-to-r from-primary/40 to-transparent origin-left transition-all`}
               style={{ transform: `rotate(${(i - 1) * 30}deg)` }}
             />
           ))}
        </div>

        {/* Destinations */}
        <div className="flex flex-col gap-6">
           {routes.map((r) => (
             <motion.button
               key={r.id}
               onClick={() => setSelectedRoute(r.id)}
               whileHover={{ x: 10 }}
               className={`flex items-center gap-6 p-4 rounded-2xl border-2 transition-all ${selectedRoute === r.id ? `bg-${r.color}-500/10 border-${r.color}-500 shadow-lg` : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}
             >
                <div className={`w-12 h-12 rounded-xl bg-${r.color}-500/20 flex items-center justify-center border border-${r.color}-500/30`}>
                   <r.icon className={`w-14 h-14 text-${r.color}-400`} />
                </div>
                <div className="text-left">
                   <span className="text-lg font-black text-black uppercase tracking-widest block">{r.path}</span>
                   <span className="text-lg font-bold text-black uppercase tracking-widest">{r.label}</span>
                </div>
             </motion.button>
           ))}
        </div>

      </div>

      {/* Logic Feedback */}
      <div className="h-16 w-full flex items-center justify-center">
         <AnimatePresence mode="wait">
            {selectedRoute ? (
              <motion.div
                key={selectedRoute}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-8 py-3 rounded-full"
              >
                 <ArrowRight className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-[0.3em]">
                    Route identified: <span className="text-black italic">Laravel directs user to {selectedRoute} logic.</span>
                 </span>
              </motion.div>
            ) : (
              <span className="text-lg font-black text-black uppercase tracking-[0.5em]">Click a URL to start routing</span>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
