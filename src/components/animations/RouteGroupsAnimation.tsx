"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Lock, Unlock, Users, Layout, FileText, ArrowRight, Home, Settings, LogIn, UserCircle } from 'lucide-react';

export function RouteGroupsAnimation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState<'auth' | 'prefix'>('auth');

  const groupRoutes = [
    { name: 'Dashboard', icon: Layout, path: '/dashboard' },
    { name: 'Profile', icon: UserCircle, path: '/profile' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  const adminRoutes = [
    { name: 'Users', path: 'admin/users' },
    { name: 'Reports', path: 'admin/reports' },
    { name: 'System', path: 'admin/system' },
  ];

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <ShieldCheck className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Route Groups & Middleware</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Gated Access & Shared Configuration</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2">
         <button onClick={() => setView('auth')} className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${view === 'auth' ? 'bg-primary/10 border-primary text-white' : 'bg-white/5 border-white/5 text-white/40'}`}>Auth Middleware</button>
         <button onClick={() => setView('prefix')} className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${view === 'prefix' ? 'bg-amber-500/10 border-amber-500 text-white' : 'bg-white/5 border-white/5 text-white/40'}`}>Route Prefixing</button>
      </div>

      <div className="relative w-full flex items-center justify-center gap-16 px-12">
        
        {view === 'auth' ? (
          <>
            {/* The Guard (Middleware) */}
            <div className="flex flex-col items-center gap-4">
               <motion.div
                 animate={isAuthenticated ? { scale: [1, 1.1, 1] } : {}}
                 className={`w-24 h-24 rounded-3xl flex items-center justify-center border-2 transition-all duration-500 ${isAuthenticated ? 'bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-rose-500/20 border-rose-500 shadow-lg shadow-rose-500/20'}`}
               >
                  {isAuthenticated ? <Unlock className="w-10 h-10 text-emerald-400" /> : <Lock className="w-10 h-10 text-rose-400" />}
               </motion.div>
               <div className="text-center">
                  <span className={`text-[10px] font-black uppercase tracking-widest block transition-colors ${isAuthenticated ? 'text-emerald-400' : 'text-rose-400'}`}>
                     {isAuthenticated ? 'Authenticated' : 'Access Denied'}
                  </span>
                  <button 
                    onClick={() => setIsAuthenticated(!isAuthenticated)}
                    className="mt-3 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                     <LogIn className="w-3 h-3 text-white/40" />
                     <span className="text-[8px] font-bold text-white/60 uppercase">Simulate {isAuthenticated ? 'Logout' : 'Login'}</span>
                  </button>
               </div>
            </div>

            <ArrowRight className={`w-8 h-8 transition-colors ${isAuthenticated ? 'text-primary' : 'text-white/5'}`} />

            {/* The Protected Group */}
            <div className={`flex-1 max-w-sm rounded-[2.5rem] border-2 p-8 transition-all duration-700 ${isAuthenticated ? 'bg-primary/5 border-primary/30 opacity-100' : 'bg-white/[0.02] border-white/5 opacity-20 grayscale scale-95'}`}>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
                     <Users className="text-primary w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Protected Group</span>
               </div>
               <div className="grid gap-3">
                  {groupRoutes.map((r, i) => (
                    <motion.div
                      key={r.name}
                      initial={false}
                      animate={isAuthenticated ? { x: 0, opacity: 1 } : { x: -10, opacity: 0.5 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                    >
                       <div className="flex items-center gap-3">
                          <r.icon className="w-4 h-4 text-white/20" />
                          <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{r.name}</span>
                       </div>
                       <span className="text-[8px] font-mono text-white/20">{r.path}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-8 w-full max-w-lg">
             <div className="flex items-center gap-4 bg-amber-500/10 border-2 border-amber-500/30 px-8 py-4 rounded-[2rem] w-full">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                   <FileText className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                   <h4 className="text-amber-500 font-black text-sm uppercase tracking-widest">Prefix: "admin"</h4>
                   <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Applied to all routes inside</p>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-4 w-full">
                {adminRoutes.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-3 p-5 rounded-3xl bg-white/[0.03] border border-white/5 items-center group hover:border-amber-500/30 transition-colors"
                  >
                     <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                        <Settings className="w-5 h-5 text-white/10 group-hover:text-amber-500/50 transition-colors" />
                     </div>
                     <div className="text-center">
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest block mb-1">{r.name}</span>
                        <span className="text-[7px] font-mono text-amber-500/60">/{r.path}</span>
                     </div>
                  </motion.div>
                ))}
             </div>
             
             <div className="flex items-center gap-3 bg-white/[0.02] border border-white/5 px-6 py-2 rounded-full">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                   DRY Principle: <span className="text-amber-500 italic">Don't Repeat Yourself!</span>
                </span>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
