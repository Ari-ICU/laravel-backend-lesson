"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, Database, Hash, Type, Calendar, ShieldCheck, HelpCircle, Star, Table, Layout, Code2, Layers } from 'lucide-react';

export function SchemaBuilderAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const schemaLines = [
    { id: 1, type: 'id', code: '$table->id();', label: 'Primary Key', icon: Hash, color: 'primary', desc: 'Auto-incrementing ID' },
    { id: 2, type: 'string', code: '$table->string("name")->unique();', label: 'String (Unique)', icon: Type, color: 'emerald', desc: 'Max 255 chars, No duplicates' },
    { id: 3, type: 'decimal', code: '$table->decimal("price", 10, 2);', label: 'Decimal', icon: Hash, color: 'amber', desc: 'Total 10 digits, 2 decimals' },
    { id: 4, type: 'text', code: '$table->text("bio")->nullable();', label: 'Text (Nullable)', icon: Type, color: 'sky', desc: 'Large text, can be empty' },
    { id: 5, type: 'timestamps', code: '$table->timestamps();', label: 'Timestamps', icon: Calendar, color: 'rose', desc: 'created_at & updated_at' },
  ];

  return (
    <div className={`relative w-full max-w-full min-h-[400px] flex flex-col items-center justify-center  transition-all duration-500 ${isProjectorMode ? "gap-4 scale-110" : "gap-4"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] min-h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-6 bg-slate-50/[0.03] border border-slate-900/10 px-6 py-3 rounded-2xl backdrop-blur-xl">
        <Layers className="w-12 h-12 text-black" />
        <div>
          <h3 className="text-xl font-black text-black">The Schema Builder</h3>
          <p className="text-lg font-bold text-black uppercase tracking-widest">Defining Data Types with PHP</p>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full gap-4 px-12">
        
        {/* Code Editor Side */}
        <div className="flex-1 flex flex-col gap-4">
           <div className="flex items-center gap-6 text-black mb-1">
              <Code2 className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">blueprint.php</span>
           </div>
           <div className="p-6 rounded-3xl bg-slate-50 border border-slate-900/10 font-mono text-lg space-y-6 relative shadow-2xl">
              <div className="text-black">Schema::<span className="text-black">create</span>("products", function ($table) {"{"}</div>
              <div className="pl-4 space-y-4">
                 {schemaLines.map((line) => (
                   <motion.div
                     key={line.id}
                     onMouseEnter={() => setHoveredLine(line.id)}
                     onMouseLeave={() => setHoveredLine(null)}
                     className={`p-2 rounded-lg transition-all cursor-pointer ${hoveredLine === line.id ? 'bg-slate-50/10 text-black' : 'text-black hover:bg-slate-50/5'}`}
                   >
                      {line.code}
                   </motion.div>
                 ))}
              </div>
              <div className="text-black">{"});"}</div>
           </div>
        </div>

        {/* Database Table Side */}
        <div className="flex-1 flex flex-col gap-4">
           <div className="flex items-center gap-6 text-black mb-1">
              <Table className="w-12 h-12" />
              <span className="text-lg font-black uppercase tracking-widest">products table</span>
           </div>
           <div className="h-96 rounded-3xl border-2 border-slate-900/10 bg-white/40 overflow-hidden flex flex-col relative shadow-2xl">
              {/* Table Header */}
              <div className="grid grid-cols-2 bg-slate-50/5 border-b border-slate-900/10 p-3">
                 <span className="text-lg font-black text-black uppercase tracking-widest">Column</span>
                 <span className="text-lg font-black text-black uppercase tracking-widest">Type / Meta</span>
              </div>
              
              {/* Table Rows */}
              <div className="flex-1 overflow-y-auto">
                 {schemaLines.map((line) => (
                   <motion.div
                     key={line.id}
                     animate={hoveredLine === line.id ? { backgroundColor: 'rgba(255, 255, 255, 0.05)', x: 5 } : { backgroundColor: 'transparent', x: 0 }}
                     className={`grid grid-cols-2 p-3 border-b border-slate-900/5 items-center transition-all ${hoveredLine === line.id ? 'opacity-100' : 'opacity-40'}`}
                   >
                      <div className="flex items-center gap-6">
                         <line.icon className={`w-12 h-12 text-${line.color}-400`} />
                         <span className="text-lg font-bold text-black uppercase tracking-widest">{line.type}</span>
                      </div>
                      <div className="flex gap-6">
                         <span className={`px-2 py-0.5 rounded bg-${line.color}-500/10 border border-${line.color}-500/30 text-lg font-black text-${line.color}-400 uppercase`}>
                            {line.label}
                         </span>
                      </div>
                   </motion.div>
                 ))}
              </div>

              {/* Detail Tooltip */}
              <AnimatePresence>
                 {hoveredLine && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-primary/20 border border-primary/30 backdrop-blur-xl flex items-center gap-4"
                   >
                      <Star className="w-12 h-12 text-black fill-primary" />
                      <div>
                         <div className="text-lg font-black text-black uppercase tracking-widest">
                            {schemaLines.find(l => l.id === hoveredLine)?.label}
                         </div>
                         <div className="text-lg text-black">
                            {schemaLines.find(l => l.id === hoveredLine)?.desc}
                         </div>
                      </div>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

      </div>

      {/* Pro Tip */}
      <div className={`px-8 py-2 rounded-full border border-primary/20 bg-primary/5 text-black transition-all ${hoveredLine ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
         <span className="text-lg font-black uppercase tracking-[0.2em]">
            Hover code to see how it builds the table!
         </span>
      </div>
    </div>
  );
}
