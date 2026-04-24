"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, FileCode, Puzzle, MessageSquare, Box, PanelTop, Bell, MousePointer2, Settings, Plus, Layers } from 'lucide-react';

export function BladeComponentsAnimation() {
  const [elements, setElements] = useState<string[]>([]);
  const [slotText, setSlotText] = useState('Data saved!');

  const addElement = (type: string) => {
    if (elements.includes(type)) return;
    setElements(prev => [...prev, type]);
  };

  const clear = () => setElements([]);

  return (
    <div className="relative w-full max-w-4xl h-[520px] flex flex-col items-center justify-center overflow-hidden gap-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Puzzle className="w-6 h-6 text-primary" />
        <div>
          <h3 className="text-xl font-black text-white">Blade Components & Includes</h3>
          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Modular UI Assembly</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-12 px-12">
        
        {/* Component Library */}
        <div className="w-64 flex flex-col gap-3">
           <div className="flex items-center gap-2 mb-2 text-white/20">
              <Layers className="w-3 h-3" />
              <span className="text-[8px] font-black uppercase tracking-widest">UI Library</span>
           </div>
           
           <button 
             onClick={() => addElement('navbar')}
             className={`p-4 rounded-2xl border-2 transition-all flex flex-col gap-2 ${elements.includes('navbar') ? 'bg-primary/10 border-primary/40 opacity-50 cursor-not-allowed' : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.08]'}`}
           >
              <div className="flex items-center gap-3">
                 <PanelTop className="w-4 h-4 text-primary" />
                 <span className="text-[9px] font-black text-white uppercase tracking-widest">@include('navbar')</span>
              </div>
              <p className="text-[7px] text-white/40 text-left">Static partial file injection</p>
           </button>

           <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col gap-3 ${elements.includes('alert') ? 'bg-emerald-500/10 border-emerald-500/40 opacity-50' : 'bg-white/5 border-white/5'}`}>
              <div className="flex items-center gap-3">
                 <Bell className="w-4 h-4 text-emerald-400" />
                 <span className="text-[9px] font-black text-white uppercase tracking-widest">&lt;x-alert&gt;</span>
              </div>
              <input 
                type="text" 
                value={slotText}
                onChange={(e) => setSlotText(e.target.value)}
                placeholder="Type slot content..."
                className="bg-black/40 border border-white/10 rounded-lg px-2 py-1.5 text-[8px] text-emerald-400 font-mono focus:outline-none focus:border-emerald-500/50"
              />
              <button 
                onClick={() => addElement('alert')}
                disabled={elements.includes('alert')}
                className="w-full py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-[8px] font-black uppercase tracking-widest hover:bg-emerald-500/30 transition-all"
              >
                 Inject Component
              </button>
           </div>

           <button 
             onClick={clear}
             className="mt-4 flex items-center justify-center gap-2 text-white/20 hover:text-white transition-colors"
           >
              <RefreshCw className="w-3 h-3" />
              <span className="text-[8px] font-black uppercase tracking-widest">Reset View</span>
           </button>
        </div>

        {/* Assembly Viewport */}
        <div className="flex-1 h-80 rounded-[2.5rem] border-4 border-white/10 bg-[#0d1117] p-6 relative shadow-2xl overflow-hidden flex flex-col gap-4">
           <AnimatePresence>
              {elements.includes('navbar') && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl flex items-center px-4 justify-between"
                >
                   <div className="flex gap-4">
                      <div className="w-12 h-2 bg-primary/20 rounded-full" />
                      <div className="w-12 h-2 bg-white/5 rounded-full" />
                   </div>
                   <Settings className="w-3 h-3 text-white/20" />
                </motion.div>
              )}

              {elements.includes('alert') && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full p-4 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-2xl flex items-center gap-4"
                >
                   <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                   </div>
                   <div className="flex-1">
                      <div className="text-[7px] font-black text-emerald-400/40 uppercase tracking-widest mb-1">Slot Content:</div>
                      <div className="text-[10px] font-bold text-white tracking-wide">{slotText}</div>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>

           {!elements.length && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-10">
                 <Box className="w-12 h-12 text-white" />
                 <span className="text-[10px] font-black uppercase tracking-[0.3em]">Empty Layout</span>
              </div>
           )}

           <div className="mt-auto flex flex-col gap-2 opacity-20">
              <div className="w-full h-2 bg-white/5 rounded-full" />
              <div className="w-3/4 h-2 bg-white/5 rounded-full" />
           </div>
        </div>

      </div>

      {/* Logic Explainer */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${elements.length ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-white/5 opacity-40'}`}>
         <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed text-white/80">
            {elements.includes('alert') ? "Slots allow you to pass dynamic content INTO components!" : "Try assembling your page using includes and components."}
         </span>
      </div>
    </div>
  );
}

function RefreshCw(props: any) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function CheckCircle2(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
