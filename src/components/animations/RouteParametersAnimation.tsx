"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ArrowRight, Code2, ShieldCheck, AlertCircle, User, Search, Terminal, Variable } from 'lucide-react';

export function RouteParametersAnimation() {
  const [activeTab, setActiveTab] = useState<'required' | 'optional' | 'constraint'>('required');
  const [inputValue, setInputValue] = useState('');

  const examples = {
    required: {
      url: '/user/',
      param: '{id}',
      code: 'function ($id) { ... }',
      desc: 'ID is mandatory. Try entering a number.',
      color: 'sky'
    },
    optional: {
      url: '/search/',
      param: '{term?}',
      code: 'function ($term = "all") { ... }',
      desc: 'Term is optional. Defaults to "all" if empty.',
      color: 'emerald'
    },
    constraint: {
      url: '/profile/',
      param: '{username}',
      code: '->where("username", "[A-Za-z]+") ',
      desc: 'Only letters allowed. Try entering numbers.',
      color: 'rose'
    }
  };

  const current = examples[activeTab];
  const isValid = activeTab === 'constraint' 
    ? /^[A-Za-z]*$/.test(inputValue) 
    : (activeTab === 'required' ? inputValue.length > 0 : true);

  return (
    <div className="relative w-full max-w-4xl h-[500px] flex flex-col items-center justify-center overflow-hidden gap-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Variable className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Route Parameters</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Passing Data via URL Segments</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
         {Object.keys(examples).map((key) => (
           <button
             key={key}
             onClick={() => { setActiveTab(key as any); setInputValue(''); }}
             className={`px-4 py-2 rounded-xl border transition-all text-[10px] font-black uppercase tracking-widest ${activeTab === key ? `bg-${examples[key as keyof typeof examples].color}-500/10 border-${examples[key as keyof typeof examples].color}-500/50 text-white` : 'bg-white/5 border-white/5 text-white/40 hover:bg-white/10'}`}
           >
              {key}
           </button>
         ))}
      </div>

      <div className="relative w-full flex flex-col items-center gap-8 px-20">
        
        {/* URL Bar Simulation */}
        <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#1c1c1c] overflow-hidden shadow-2xl">
           <div className="px-4 py-2 bg-[#2d2d2d] flex items-center gap-3">
              <Globe className="w-3 h-3 text-white/20" />
              <div className="flex-1 bg-white/20 rounded h-6 flex items-center px-3 font-mono text-[10px]">
                 <span className="text-white/40 italic">example.test</span>
                 <span className="text-white/80">{current.url}</span>
                 <input
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   placeholder={current.param}
                   className={`bg-transparent border-none outline-none text-primary ml-1 placeholder:text-white/10 w-24`}
                 />
              </div>
           </div>
        </div>

        {/* The Flow Animation */}
        <div className="flex items-center gap-12 h-20">
           <div className="flex flex-col items-center gap-2">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 transition-colors ${isValid ? 'text-primary' : 'text-rose-500'}`}>
                 {activeTab === 'required' ? <User className="w-6 h-6" /> : activeTab === 'optional' ? <Search className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
              </div>
              <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{activeTab === 'constraint' ? 'Validator' : 'Request Data'}</span>
           </div>

           <div className="relative w-24 h-px bg-white/10">
              <AnimatePresence>
                 {inputValue && isValid && (
                   <motion.div
                     initial={{ left: 0, opacity: 0 }}
                     animate={{ left: '100%', opacity: 1 }}
                     transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                     className="absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-primary blur-sm rounded-full"
                   />
                 )}
              </AnimatePresence>
              <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white/5" />
           </div>

           {/* Variable Receiver */}
           <div className="p-4 rounded-2xl bg-[#0d1117] border border-white/10 font-mono text-[10px] relative">
              <div className="text-emerald-400">
                 {current.code.split(' ').map((part, i) => (
                   <span key={i} className={part.startsWith('$') ? 'text-sky-400 font-bold' : ''}>{part} </span>
                 ))}
              </div>
              <AnimatePresence>
                 {inputValue && isValid && (
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="absolute -top-3 -right-3 px-2 py-1 rounded bg-sky-500 text-[8px] font-black text-white shadow-lg"
                   >
                      VAL: {inputValue}
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

        {/* Error Feedback */}
        <AnimatePresence>
           {!isValid && inputValue && (
             <motion.div
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex items-center gap-2 text-rose-400"
             >
                <AlertCircle className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Constraint Failed: Letters Only!</span>
             </motion.div>
           )}
        </AnimatePresence>

        <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest text-center max-w-sm">
           {current.desc}
        </p>
      </div>
    </div>
  );
}
