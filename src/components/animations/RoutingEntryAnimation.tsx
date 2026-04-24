"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Home, Info, Mail, Map, User, Signpost } from 'lucide-react';

export function RoutingEntryAnimation() {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const routes = [
    { id: 'home', path: '/', label: 'Home Page', icon: Home, color: 'sky' },
    { id: 'about', path: '/about', label: 'About Us', icon: Info, color: 'amber' },
    { id: 'contact', path: '/contact', label: 'Contact', icon: Mail, color: 'emerald' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Signpost className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">The Traffic Controller</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">How Laravel Routing Works</p>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-between px-20">
        
        {/* User / Request */}
        <div className="flex flex-col items-center gap-4">
           <motion.div
             animate={{ y: [0, -5, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-xl"
           >
              <User className="w-8 h-8 text-white/40" />
           </motion.div>
           <div className="text-center">
              <span className="text-[10px] font-black text-white uppercase tracking-widest block">The User</span>
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest italic">Makes a Request</span>
           </div>
        </div>

        {/* Router (The Map) */}
        <div className="relative">
           <div className="w-32 h-32 rounded-3xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center relative shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
              <Map className="w-12 h-12 text-primary relative z-10" />
           </div>
           
           {/* Connection Lines */}
           {routes.map((r, i) => (
             <div
               key={r.id}
               className={`absolute top-1/2 left-full w-24 h-px bg-gradient-to-r from-primary/40 to-transparent origin-left transition-all`}
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
               className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${selectedRoute === r.id ? `bg-${r.color}-500/10 border-${r.color}-500 shadow-lg` : 'bg-white/[0.02] border-white/5 opacity-40'}`}
             >
                <div className={`w-10 h-10 rounded-xl bg-${r.color}-500/20 flex items-center justify-center border border-${r.color}-500/30`}>
                   <r.icon className={`w-5 h-5 text-${r.color}-400`} />
                </div>
                <div className="text-left">
                   <span className="text-[10px] font-black text-white uppercase tracking-widest block">{r.path}</span>
                   <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{r.label}</span>
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
                className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-8 py-3 rounded-full"
              >
                 <ArrowRight className="w-4 h-4 text-primary" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                    Route identified: <span className="text-primary italic">Laravel directs user to {selectedRoute} logic.</span>
                 </span>
              </motion.div>
            ) : (
              <span className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">Click a URL to start routing</span>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
}
