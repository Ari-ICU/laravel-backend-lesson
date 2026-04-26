"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Layout, ShieldCheck, Zap, 
  Code, Lock, Search, Eye, Terminal, 
  Table, Filter, Layers, Server, Cpu
} from 'lucide-react';

export function LaravelFeaturesAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeTab, setActiveTab] = useState('eloquent');

  const features = {
    eloquent: {
      title: 'Eloquent ORM',
      color: 'rose',
      icon: Database,
      desc: 'Elegant Database Interactions'
    },
    blade: {
      title: 'Blade Engine',
      color: 'amber',
      icon: Layout,
      desc: 'Powerful Templating System'
    },
    artisan: {
      title: 'Artisan CLI',
      color: 'emerald',
      icon: Terminal,
      desc: 'Accelerated Development Tool'
    },
    migrations: {
      title: 'Migrations',
      color: 'indigo',
      icon: Table,
      desc: 'Database Version Control'
    },
    middleware: {
      title: 'Middleware',
      color: 'violet',
      icon: Filter,
      desc: 'HTTP Request Filtering'
    },
    security: {
      title: 'Security',
      color: 'sky',
      icon: ShieldCheck,
      desc: 'Built-in Protection'
    }
  };

  const colors: Record<string, string> = {
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-500',
    violet: 'bg-violet-500',
    sky: 'bg-sky-500',
  };

  return (
    <div className={`relative w-full max-w-7xl min-h-[700px] flex flex-col items-center justify-start py-10 transition-all duration-500 ${isProjectorMode ? "gap-12" : "gap-16"}`}>
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-50/50 -z-10 rounded-[4rem] pointer-events-none" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Title Section */}
      <div className="text-center space-y-4">
        <h2 className={`font-black text-black uppercase tracking-[0.2em] ${isProjectorMode ? "text-5xl" : "text-4xl"}`}>
          Laravel Ecosystem Features
        </h2>
        <p className={`font-medium text-black uppercase tracking-widest ${isProjectorMode ? "text-2xl" : "text-xl"}`}>
          The Modern PHP Framework for Web Artisans
        </p>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-4 bg-white border border-black/10 rounded-[2.5rem] shadow-2xl relative z-50">
         {Object.entries(features).map(([id, feat]) => (
           <button
             key={id}
             onClick={() => setActiveTab(id)}
             className={`flex flex-col items-center gap-3 px-6 py-6 rounded-[1.5rem] transition-all duration-300 group ${
               activeTab === id 
               ? `${colors[feat.color as keyof typeof colors]} text-black shadow-xl scale-105` 
               : 'text-black border border-black/5 hover:bg-black/[0.02]'
             }`}
           >
              <feat.icon className={`w-12 h-12 transition-transform duration-500 ${activeTab === id ? 'scale-110' : 'group-hover:rotate-12'}`} />
              <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">{feat.title}</span>
           </button>
         ))}
      </div>

      {/* Main Content Area */}
      <div className="relative w-full flex-1 flex items-center justify-center px-10 z-10">
         <AnimatePresence mode="wait">
            {/* ELOQUENT */}
            {activeTab === 'eloquent' && (
              <motion.div
                key="eloquent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full flex flex-col md:flex-row items-center justify-center gap-12"
              >
                 <div className="flex flex-col gap-6 w-full max-w-md">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center">
                        <Code className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-xl font-black text-black uppercase tracking-widest">PHP Instance</span>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white border-2 border-black shadow-xl font-mono text-2xl text-black space-y-2">
                       <p className="font-bold text-black">// Fetch active users</p>
                       <p><span className="font-bold text-black">$users</span> = <span className="font-black text-black">User</span>::where(<span className="font-bold text-black">'active'</span>, <span className="font-bold text-black">true</span>)</p>
                       <p className="ml-8 font-black text-black">-&gt;orderBy(<span className="font-bold text-black">'name'</span>)</p>
                       <p className="ml-8 font-black text-black">-&gt;get();</p>
                    </div>
                 </div>

                 <motion.div 
                    animate={{ 
                      x: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:flex pointer-events-none"
                  >
                    <Zap className="w-20 h-20 text-black" />
                 </motion.div>

                 <div className="flex flex-col gap-6 w-full max-w-md">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center">
                        <Database className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-xl font-black text-black uppercase tracking-widest">SQL Generation</span>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-slate-50 border-2 border-black shadow-xl font-mono text-2xl text-black">
                       <p className="font-black text-black">SELECT * FROM users</p>
                       <p><span className="font-black text-black">WHERE</span> active = 1</p>
                       <p><span className="font-black text-black">ORDER BY</span> name ASC;</p>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* BLADE */}
            {activeTab === 'blade' && (
              <motion.div
                key="blade"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl"
              >
                 <div className="space-y-6">
                    <span className="text-xl font-black text-black uppercase tracking-widest flex items-center gap-3">
                      <Code className="w-8 h-8 text-black" /> Blade Syntax
                    </span>
                    <div className="p-10 rounded-[3rem] bg-white border-2 border-black shadow-2xl font-mono text-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-5">
                          <Layout className="w-32 h-32" />
                       </div>
                       <p className="text-black font-bold">@extends('layouts.app')</p>
                       <p className="text-black font-bold">@section('content')</p>
                       <p className="text-black mt-4">&lt;h1&gt;Welcome, &#123;&#123; $user-&gt;name &#125;&#125;&lt;/h1&gt;</p>
                       <p className="text-black mt-4 font-black text-black">@if($user-&gt;isAdmin())</p>
                       <p className="text-black ml-8 font-bold">&lt;p&gt;Admin Dashboard&lt;/p&gt;</p>
                       <p className="text-black font-black text-black">@endif</p>
                       <p className="text-black font-bold mt-4">@endsection</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <span className="text-xl font-black text-black uppercase tracking-widest flex items-center gap-3">
                      <Eye className="w-8 h-8 text-black" /> Rendered HTML
                    </span>
                    <div className="p-10 rounded-[3rem] bg-slate-50 border-2 border-black border-dashed shadow-inner flex flex-col gap-6">
                       <div className="w-full h-12 bg-white rounded-xl border border-black/10 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-black/20" />
                          <div className="w-3 h-3 rounded-full bg-black/20" />
                          <div className="w-3 h-3 rounded-full bg-black/20" />
                       </div>
                       <div className="space-y-6 pt-4">
                          <h1 className="text-5xl font-black text-black">Welcome, John Doe</h1>
                          <div className="px-6 py-3 bg-black/5 border-2 border-black/20 rounded-2xl inline-block">
                             <span className="text-xl font-black text-black uppercase tracking-widest">Admin Dashboard</span>
                          </div>
                          <div className="h-4 w-3/4 bg-black/10 rounded-full" />
                          <div className="h-4 w-1/2 bg-black/10 rounded-full" />
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* ARTISAN */}
            {activeTab === 'artisan' && (
              <motion.div
                key="artisan"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="w-full max-w-4xl"
              >
                 <div className="p-12 rounded-[3.5rem] bg-slate-50 border-4 border-black shadow-[0_30px_100px_rgba(0,0,0,0.1)] relative group">
                    <div className="absolute -top-6 left-12 px-8 py-3 bg-black text-white rounded-2xl border-4 border-black font-black text-xl uppercase tracking-widest">
                       Terminal API
                    </div>
                    <div className="font-mono text-3xl space-y-8">
                       <div className="flex gap-4">
                          <span className="text-black font-black">$</span>
                          <span className="text-black font-bold">php artisan make:controller UserController --resource</span>
                       </div>
                       <div className="space-y-2 pt-4">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-black flex items-center gap-4 font-black"
                          >
                             <ShieldCheck className="w-8 h-8" />
                             <span>Controller created successfully.</span>
                          </motion.div>
                          <motion.div 
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{ delay: 1.5 }}
                             className="text-black flex items-center gap-4 font-black"
                          >
                             <CheckCircle className="w-8 h-8" />
                             <span>Routes updated automatically.</span>
                          </motion.div>
                       </div>
                       <div className="flex gap-4 pt-10">
                          <span className="text-black font-black">$</span>
                          <motion.span 
                            animate={{ opacity: [1, 0, 1] }} 
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-4 h-10 bg-black" 
                          />
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* MIGRATIONS */}
            {activeTab === 'migrations' && (
              <motion.div
                key="migrations"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="w-full max-w-6xl flex flex-col md:flex-row gap-12 items-center"
              >
                 <div className="flex-1 space-y-6">
                    <span className="text-xl font-black text-black uppercase tracking-widest flex items-center gap-3">
                      <Code className="w-8 h-8 text-black" /> Migration Blueprint
                    </span>
                    <div className="p-8 rounded-[2.5rem] bg-white border-2 border-black shadow-xl font-mono text-xl text-black">
                       <p className="text-black font-black">Schema::create('orders', function (Blueprint $table) &#123;</p>
                       <p className="ml-8 font-bold text-black">$table-&gt;id();</p>
                       <p className="ml-8 font-bold text-black">$table-&gt;foreignId('user_id')-&gt;constrained();</p>
                       <p className="ml-8 font-bold text-black">$table-&gt;string('status')-&gt;default('pending');</p>
                       <p className="ml-8 font-bold text-black">$table-&gt;decimal('amount', 10, 2);</p>
                       <p className="ml-8 font-bold text-black">$table-&gt;timestamps();</p>
                       <p className="font-black text-black">&#125;);</p>
                    </div>
                 </div>

                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="p-4"
                 >
                    <Cpu className="w-20 h-20 text-black" />
                 </motion.div>

                 <div className="flex-1 space-y-6">
                    <span className="text-xl font-black text-black uppercase tracking-widest flex items-center gap-3">
                      <Table className="w-8 h-8 text-black" /> Database Table
                    </span>
                    <div className="overflow-hidden rounded-[2.5rem] border-2 border-black bg-white shadow-2xl w-full">
                       <table className="w-full text-lg">
                          <thead className="bg-slate-100 text-black border-b-2 border-black">
                             <tr>
                                <th className="p-4 text-left font-black uppercase tracking-widest">ID</th>
                                <th className="p-4 text-left font-black uppercase tracking-widest">User</th>
                                <th className="p-4 text-left font-black uppercase tracking-widest">Status</th>
                                <th className="p-4 text-left font-black uppercase tracking-widest">Price</th>
                             </tr>
                          </thead>
                          <tbody className="text-black font-bold">
                             <tr className="border-b border-black/5">
                                <td className="p-4">1</td>
                                <td className="p-4">#102</td>
                                <td className="p-4"><span className="px-3 py-1 bg-black text-white rounded-full text-sm font-black">PENDING</span></td>
                                <td className="p-4 font-black">$99.00</td>
                             </tr>
                             <tr>
                                <td className="p-4">2</td>
                                <td className="p-4">#105</td>
                                <td className="p-4"><span className="px-3 py-1 bg-black text-white rounded-full text-sm font-black">PAID</span></td>
                                <td className="p-4 font-black">$145.00</td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* MIDDLEWARE */}
            {activeTab === 'middleware' && (
              <motion.div
                key="middleware"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="w-full max-w-5xl flex flex-col items-center gap-12"
              >
                 <div className="flex items-center gap-16 relative">
                    {/* User Request */}
                    <div className="flex flex-col items-center gap-4">
                       <div className="w-24 h-24 rounded-3xl bg-white border-2 border-black flex items-center justify-center shadow-lg">
                          <Server className="w-12 h-12 text-black" />
                       </div>
                       <span className="text-lg font-black text-black">Request</span>
                    </div>

                    <motion.div
                       animate={{ x: [0, 600] }}
                       transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                       className="absolute left-12 top-8 w-8 h-8 rounded-full bg-black shadow-xl z-20 pointer-events-none"
                    />

                    {/* Middlewares */}
                    <div className="flex gap-12 relative z-10">
                       {['Auth', 'Log', 'Verify'].map((m, i) => (
                         <div key={m} className="flex flex-col items-center gap-4">
                            <motion.div 
                              animate={{ 
                                scale: [1, 1.05, 1],
                                borderColor: ['rgba(0,0,0,1)', 'rgba(0,0,0,1)', 'rgba(0,0,0,1)']
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                              className="w-32 h-40 rounded-3xl bg-black/5 border-4 border-black flex items-center justify-center relative overflow-hidden"
                            >
                               <div className="absolute top-0 w-full h-2 bg-black/10" />
                               <Filter className="w-10 h-10 text-black" />
                               <span className="absolute bottom-4 font-black text-black text-xs uppercase tracking-widest">{m}</span>
                            </motion.div>
                         </div>
                       ))}
                    </div>

                    {/* Controller */}
                    <div className="flex flex-col items-center gap-4">
                       <div className="w-24 h-24 rounded-3xl bg-black/10 border-2 border-black flex items-center justify-center shadow-lg">
                          <Layers className="w-12 h-12 text-black" />
                       </div>
                       <span className="text-lg font-black text-black">Response</span>
                    </div>
                 </div>
                 
                 <div className="p-8 rounded-[2.5rem] bg-black/5 border-2 border-black text-center max-w-2xl">
                    <p className="text-2xl font-black text-black leading-tight uppercase tracking-widest">
                       Pipeline Pattern: Every request passes through multiple layers of logic before reaching the controller.
                    </p>
                 </div>
              </motion.div>
            )}

            {/* SECURITY */}
            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                className="w-full flex flex-col items-center gap-10"
              >
                 <div className="relative">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-80 h-80 rounded-[4rem] bg-black/5 flex items-center justify-center border-4 border-black shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative overflow-hidden"
                    >
                       <ShieldCheck className="w-48 h-48 text-black" />
                    </motion.div>
                    
                    {/* Attackers */}
                    {['XSS', 'CSRF', 'SQL Injection', 'Mass Assignment'].map((type, i) => (
                      <motion.div
                        key={type}
                        animate={{ 
                          x: i === 0 ? [-250, -100] : i === 1 ? [250, 100] : i === 2 ? [0, 0] : [0, 0],
                          y: i === 2 ? [250, 100] : i === 3 ? [-250, -100] : [0, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-2xl bg-black text-white border-2 border-black font-black text-xl uppercase tracking-widest whitespace-nowrap shadow-xl pointer-events-none"
                      >
                         {type} BLOCKED
                      </motion.div>
                    ))}
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
                    <div className="p-8 rounded-[2rem] bg-white border-2 border-black shadow-lg flex items-center gap-6">
                       <Lock className="w-12 h-12 text-black" />
                       <div>
                          <p className="font-black text-black uppercase tracking-widest text-lg">Auto-Escaping</p>
                          <p className="text-black font-bold">XSS Protection is native</p>
                       </div>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white border-2 border-black shadow-lg flex items-center gap-6">
                       <ShieldCheck className="w-12 h-12 text-black" />
                       <div>
                          <p className="font-black text-black uppercase tracking-widest text-lg">CSRF Tokens</p>
                          <p className="text-black font-bold">Safe Form Submissions</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Dynamic Detail Bar */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 bg-white border-2 border-black px-10 py-5 rounded-[2.5rem] shadow-2xl relative z-50"
      >
         <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center border-2 border-black">
            {React.createElement(features[activeTab as keyof typeof features].icon, { className: "w-8 h-8 text-white" })}
         </div>
         <div className="flex flex-col">
            <span className="text-xs font-black text-black uppercase tracking-[0.3em]">Core Feature Insight</span>
            <span className={`font-black text-black uppercase tracking-[0.1em] ${isProjectorMode ? "text-3xl" : "text-2xl"}`}>
               {features[activeTab as keyof typeof features].desc}
            </span>
         </div>
      </motion.div>
    </div>
  );
}

// Add these to lucide-react imports if missing or use placeholders
function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
