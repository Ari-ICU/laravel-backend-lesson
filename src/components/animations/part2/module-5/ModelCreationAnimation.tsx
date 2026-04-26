"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileCode, Folder, Database, Layout, ArrowRight, CheckCircle2, ChevronRight, HardDrive, Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export function ModelCreationAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [isCreating, setIsCreating] = useState(false);
  const [createdFiles, setCreatedFiles] = useState<string[]>([]);

  const runCommand = async () => {
    setIsCreating(true);
    setCreatedFiles([]);

    const steps = [
      { name: 'app/Models/Product.php', delay: 1000 },
      { name: 'database/migrations/2024_create_products_table.php', delay: 2000 },
      { name: 'app/Http/Controllers/ProductController.php', delay: 3000 },
    ];

    for (const step of steps) {
      await new Promise(r => setTimeout(r, step.delay - (createdFiles.length * 1000)));
      setCreatedFiles(prev => [...prev, step.name]);
    }
    
    setIsCreating(false);
  };

  const reset = () => {
    setCreatedFiles([]);
    setIsCreating(false);
  };

  return (
    <div className="relative w-full max-w-full min-h-[520px] flex flex-col items-center justify-center  gap-6">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Sparkles className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">The Artisan Power-Up</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Generating MVC Scaffold in 1 Command</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-4 px-12">
        
        {/* CLI Side */}
        <div className="flex-1 flex flex-col gap-6">
           <div className="w-full bg-slate-50 border-2 border-slate-900/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-50/5 border-b border-slate-900/10 px-4 py-2 flex items-center justify-between">
                 <TerminalIcon className="w-12 h-12 text-black" />
                 <span className="text-lg font-black text-black uppercase tracking-widest font-mono">Terminal</span>
              </div>
              <div className="p-5 font-mono text-lg h-72 flex flex-col justify-center gap-4">
                 <div className="flex items-center gap-4">
                    <span className="text-black">$</span>
                    <span className="text-black">php artisan make:model Product <span className="text-black">-mc</span></span>
                 </div>
                 
                 <button 
                   onClick={runCommand}
                   disabled={isCreating || createdFiles.length > 0}
                   className={`h-10 px-4 rounded-xl flex items-center justify-center gap-6 transition-all ${isCreating || createdFiles.length > 0 ? 'bg-slate-50/5 border border-slate-900/10 text-black' : 'bg-primary border border-primary/50 text-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95'}`}
                 >
                    <span className="text-lg font-black uppercase tracking-widest">Run Command</span>
                 </button>
              </div>
           </div>
           
           <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white/[0.02] border border-slate-900/5">
              <span className="text-lg font-black text-black uppercase tracking-widest mb-1">Convention Mapping:</span>
              <div className="flex items-center gap-4">
                 <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-black">Product</span>
                    <span className="text-lg text-black uppercase">Singular</span>
                 </div>
                 <ArrowRight className="w-12 h-12 text-black" />
                 <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-black">products</span>
                    <span className="text-lg text-black uppercase">Plural</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Project Files Side */}
        <div className="flex-1 min-h-[320px] bg-white/[0.02] border-2 border-slate-900/10 rounded-[2.5rem] p-8 relative flex flex-col gap-6 overflow-hidden">
           <div className="flex items-center gap-4 mb-4 opacity-40">
              <HardDrive className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">Project Structure</span>
           </div>

           <div className="space-y-4">
              <AnimatePresence>
                 {createdFiles.map((file, i) => (
                   <motion.div
                     key={file}
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     className="flex items-center gap-4 p-3 rounded-xl bg-slate-50/5 border border-slate-900/5 group relative overflow-hidden"
                   >
                      <motion.div
                        initial={{ width: '100%' }}
                        animate={{ width: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-primary/20 z-10"
                      />
                      {file.includes('Model') ? <Sparkles className="w-12 h-12 text-black" /> : 
                       file.includes('migration') ? <Database className="w-12 h-12 text-black" /> : 
                       <Layout className="w-12 h-12 text-black" />}
                      <div className="flex flex-col">
                         <span className="text-lg font-mono text-black">{file}</span>
                         <span className="text-lg font-bold text-black uppercase tracking-widest">
                            {file.includes('Model') ? 'Eloquent Model' : 
                             file.includes('migration') ? 'Table Schema' : 
                             'Web Controller'}
                         </span>
                      </div>
                      <CheckCircle2 className="w-12 h-12 text-black ml-auto" />
                   </motion.div>
                 ))}
              </AnimatePresence>
              
              {!createdFiles.length && !isCreating && (
                <div className="h-full flex flex-col items-center justify-center gap-6 opacity-10 py-12">
                   <Folder className="w-12 h-12 text-black" />
                   <span className="text-lg font-black uppercase tracking-[0.3em]">Empty scaffold</span>
                </div>
              )}
           </div>

           {createdFiles.length === 3 && (
             <motion.button 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               onClick={reset}
               className="mt-auto mx-auto flex items-center gap-6 text-black hover:text-black transition-colors"
             >
                <RefreshCw className="w-12 h-12" />
                <span className="text-lg font-black uppercase tracking-widest">Clear & Retry</span>
             </motion.button>
           )}
        </div>

      </div>

      {/* Footer Insight */}
      <div className={`px-8 py-3 rounded-2xl border transition-all duration-500 text-center max-w-sm ${createdFiles.length === 3 ? 'bg-primary/10 border-primary/20 opacity-100' : 'bg-white/[0.02] border-slate-900/5 opacity-40'}`}>
         <span className="text-lg font-black uppercase tracking-[0.2em] leading-relaxed text-black">
            {createdFiles.length === 3 ? "The '-mc' flag automatically links Model, Migration, and Controller!" : "Artisan helps you follow Laravel conventions effortlessly."}
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
