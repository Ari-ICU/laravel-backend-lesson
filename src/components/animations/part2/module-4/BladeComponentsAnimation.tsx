"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, FileCode, Puzzle, MessageSquare, Box, PanelTop, Bell, MousePointer2, Settings, Plus, Layers } from 'lucide-react';

export function BladeComponentsAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [elements, setElements] = useState<string[]>([]);
  const [slotText, setSlotText] = useState('Data saved!');

  const addElement = (type: string) => {
    if (elements.includes(type)) return;
    setElements(prev => [...prev, type]);
  };

  const clear = () => setElements([]);

  return (
    <div className="relative w-full max-w-full min-h-[520px] flex flex-col items-center justify-center  gap-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Puzzle className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">Blade Components & Includes</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Modular UI Assembly</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-4 px-12">
        
        {/* Component Library */}
        <div className="w-96 flex flex-col gap-4">
           <div className="flex items-center gap-6 mb-2 text-black">
              <Layers className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">UI Library</span>
           </div>
           
           <button 
             onClick={() => addElement('navbar')}
             className={`p-4 rounded-2xl border-2 transition-all flex flex-col gap-6 ${elements.includes('navbar') ? 'bg-primary/10 border-primary/40 opacity-50 cursor-not-allowed' : 'bg-slate-50/5 border-slate-900/5 hover:border-slate-900/20 hover:bg-white/[0.08]'}`}
           >
              <div className="flex items-center gap-4">
                 <PanelTop className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest">@include('navbar')</span>
              </div>
              <p className="text-lg text-black text-left">Static partial file injection</p>
           </button>

           <div className={`p-4 rounded-2xl border-2 transition-all flex flex-col gap-4 ${elements.includes('alert') ? 'bg-emerald-500/10 border-emerald-500/40 opacity-50' : 'bg-slate-50/5 border-slate-900/5'}`}>
              <div className="flex items-center gap-4">
                 <Bell className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest">&lt;x-alert&gt;</span>
              </div>
              <input 
                type="text" 
                value={slotText}
                onChange={(e) => setSlotText(e.target.value)}
                placeholder="Type slot content..."
                className="bg-white/40 border border-slate-900/10 rounded-lg px-2 py-1.5 text-lg text-black font-mono focus:outline-none focus:border-emerald-500/50"
              />
              <button 
                onClick={() => addElement('alert')}
                disabled={elements.includes('alert')}
                className="w-full py-2 rounded-lg bg-emerald-500/20 text-black text-lg font-black uppercase tracking-widest hover:bg-emerald-500/30 transition-all"
              >
                 Inject Component
              </button>
           </div>

           <button 
             onClick={clear}
             className="mt-4 flex items-center justify-center gap-6 text-black hover:text-black transition-colors"
           >
              <RefreshCw className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">Reset View</span>
           </button>
        </div>

        {/* Assembly Viewport */}
        <div className="flex-1 min-h-[400px] rounded-[2.5rem] border-4 border-slate-900/10 bg-slate-50 p-6 relative shadow-2xl overflow-hidden flex flex-col gap-6">
           <AnimatePresence>
              {elements.includes('navbar') && (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="w-full h-12 bg-slate-50/5 border border-slate-900/10 rounded-xl flex items-center px-4 justify-between"
                >
                   <div className="flex gap-6">
                      <div className="w-12 h-2 bg-primary/20 rounded-full" />
                      <div className="w-12 h-2 bg-slate-50/5 rounded-full" />
                   </div>
                   <Settings className="w-12 h-12 text-black" />
                </motion.div>
              )}

              {elements.includes('alert') && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full p-4 bg-emerald-500/10 border-2 border-emerald-500/20 rounded-2xl flex items-center gap-6"
                >
                   <div className="w-36 w-36 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 text-black" />
                   </div>
                   <div className="flex-1">
                      <div className="text-lg font-black text-black/40 uppercase tracking-widest mb-1">Slot Content:</div>
                      <div className="text-lg font-bold text-black tracking-wide">{slotText}</div>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>

           {!elements.length && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-10">
                 <Box className="w-12 h-12 text-black" />
                 <span className="text-lg font-black uppercase tracking-[0.3em]">Empty Layout</span>
              </div>
           )}

           <div className="mt-auto flex flex-col gap-6 opacity-20">
              <div className="w-full h-2 bg-slate-50/5 rounded-full" />
              <div className="w-3/4 h-2 bg-slate-50/5 rounded-full" />
           </div>
        </div>

      </div>

      {/* Logic Explainer */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${elements.length ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}>
         <span className="text-lg font-black uppercase tracking-[0.2em] leading-relaxed text-black">
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
