"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Lock, Unlock, Users, Layout, FileText, ArrowRight, Home, Settings, LogIn, UserCircle } from 'lucide-react';

export function RouteGroupsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
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
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-6"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <ShieldCheck className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Route Groups & Middleware</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Gated Access & Shared Configuration</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex gap-6">
         <button onClick={() => setView('auth')} className={`px-4 py-2 rounded-xl border text-lg font-black uppercase tracking-widest transition-all ${view === 'auth' ? 'bg-primary/10 border-primary text-black' : 'bg-slate-50/5 border-slate-900/5 text-black'}`}>Auth Middleware</button>
         <button onClick={() => setView('prefix')} className={`px-4 py-2 rounded-xl border text-lg font-black uppercase tracking-widest transition-all ${view === 'prefix' ? 'bg-amber-500/10 border-amber-500 text-black' : 'bg-slate-50/5 border-slate-900/5 text-black'}`}>Route Prefixing</button>
      </div>

      <div className="relative w-full flex items-center justify-center gap-16 px-12">
        
        {view === 'auth' ? (
          <>
            {/* The Guard (Middleware) */}
            <div className="flex flex-col items-center gap-6">
               <motion.div
                 animate={isAuthenticated ? { scale: [1, 1.1, 1] } : {}}
                 className={`w-12 h-12 rounded-3xl flex items-center justify-center border-2 transition-all duration-500 ${isAuthenticated ? 'bg-emerald-500/20 border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-rose-500/20 border-rose-500 shadow-lg shadow-rose-500/20'}`}
               >
                  {isAuthenticated ? <Unlock className="w-12 h-12 text-black" /> : <Lock className="w-12 h-12 text-black" />}
               </motion.div>
               <div className="text-center">
                  <span className={`text-lg font-black uppercase tracking-widest block transition-colors ${isAuthenticated ? 'text-black' : 'text-black'}`}>
                     {isAuthenticated ? 'Authenticated' : 'Access Denied'}
                  </span>
                  <button 
                    onClick={() => setIsAuthenticated(!isAuthenticated)}
                    className="mt-3 flex items-center gap-6 px-4 py-1.5 rounded-full bg-slate-50/5 border border-slate-900/10 hover:bg-slate-50/10 transition-all"
                  >
                     <LogIn className="w-12 h-12 text-black" />
                     <span className="text-lg font-bold text-black uppercase">Simulate {isAuthenticated ? 'Logout' : 'Login'}</span>
                  </button>
               </div>
            </div>

            <ArrowRight className={`w-36 w-36 transition-colors ${isAuthenticated ? 'text-black' : 'text-black'}`} />

            {/* The Protected Group */}
            <div className={`flex-1 max-w-sm rounded-[2.5rem] border-2 p-8 transition-all duration-700 ${isAuthenticated ? 'bg-primary/5 border-primary/30 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-20 grayscale scale-95'}`}>
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-36 w-36 rounded-xl bg-primary/20 flex items-center justify-center">
                     <Users className="text-black w-12 h-12" />
                  </div>
                  <span className="text-lg font-black text-black uppercase tracking-widest">Protected Group</span>
               </div>
               <div className="grid gap-4">
                  {groupRoutes.map((r, i) => (
                    <motion.div
                      key={r.name}
                      initial={false}
                      animate={isAuthenticated ? { x: 0, opacity: 1 } : { x: -10, opacity: 0.5 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50/5 border border-slate-900/5"
                    >
                       <div className="flex items-center gap-4">
                          <r.icon className="w-12 h-12 text-black" />
                          <span className="text-lg font-bold text-black uppercase tracking-widest">{r.name}</span>
                       </div>
                       <span className="text-lg font-mono text-black">{r.path}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full max-w-lg">
             <div className="flex items-center gap-6 bg-amber-500/10 border-2 border-amber-500/30 px-8 py-4 rounded-[2rem] w-full">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                   <FileText className="w-12 h-12 text-black" />
                </div>
                <div>
                   <h4 className="text-black font-black text-lg uppercase tracking-widest">Prefix: "admin"</h4>
                   <p className="text-lg font-bold text-black uppercase tracking-widest">Applied to all routes inside</p>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-6 w-full">
                {adminRoutes.map((r, i) => (
                  <motion.div
                    key={r.name}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-4 p-5 rounded-3xl bg-slate-50/[0.03] border border-slate-900/5 items-center group hover:border-amber-500/30 transition-colors"
                  >
                     <div className="w-12 h-12 rounded-2xl bg-slate-50/5 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                        <Settings className="w-14 h-14 text-black group-hover:text-black/50 transition-colors" />
                     </div>
                     <div className="text-center">
                        <span className="text-lg font-black text-black uppercase tracking-widest block mb-1">{r.name}</span>
                        <span className="text-lg font-mono text-black/60">/{r.path}</span>
                     </div>
                  </motion.div>
                ))}
             </div>
             
             <div className="flex items-center gap-4 bg-white/[0.02] border border-slate-900/5 px-6 py-2 rounded-full">
                <span className="text-lg font-bold text-black uppercase tracking-widest">
                   DRY Principle: <span className="text-black italic">Don't Repeat Yourself!</span>
                </span>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
