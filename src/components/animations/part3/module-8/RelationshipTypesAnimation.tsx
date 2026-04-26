"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, Tag, ArrowRightLeft } from 'lucide-react';

export function RelationshipTypesAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeRel, setActiveRel] = useState(0);
  
  const relations = [
    { title: "One-to-One", code: "hasOne()", left: Users, right: FileText, leftLbl: "User", rightLbl: "Profile", nodes: [[1], [1]] },
    { title: "One-to-Many", code: "hasMany()", left: Users, right: FileText, leftLbl: "User", rightLbl: "Posts", nodes: [[1], [1, 2, 3]] },
    { title: "Many-to-Many", code: "belongsToMany()", left: FileText, right: Tag, leftLbl: "Posts", rightLbl: "Tags", nodes: [[1, 2], [1, 2, 3]], pivot: true }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRel(r => (r + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const rel = relations[activeRel];
  const LeftIcon = rel.left;
  const RightIcon = rel.right;

  return (
    <div className="relative w-full max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-12">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-slate-800">{rel.title}</h3>
        <code className="text-lg text-primary bg-primary/10 px-4 py-1 rounded-lg">{rel.code}</code>
      </div>

      <div className="flex items-center justify-center gap-16 w-full relative">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-2">
            {rel.nodes[0].map(n => (
              <motion.div key={`l-${n}`} layoutId={`l-${n}`} className="w-16 h-16 bg-blue-100 rounded-xl border-2 border-blue-300 flex items-center justify-center shadow-sm">
                <LeftIcon className="w-8 h-8 text-blue-600" />
              </motion.div>
            ))}
          </div>
          <span className="font-bold text-slate-600">{rel.leftLbl}</span>
        </div>

        {/* Connections */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {rel.pivot ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-24 h-12 bg-purple-100 border-2 border-purple-300 rounded-xl flex items-center justify-center text-xs font-bold text-purple-700 shadow-md"
            >
              Pivot Table
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center"
            >
              <div className="h-1 w-32 bg-slate-300" />
              <ArrowRightLeft className="absolute w-8 h-8 text-slate-400" />
            </motion.div>
          )}
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="flex flex-col gap-2">
            {rel.nodes[1].map(n => (
              <motion.div key={`r-${n}`} layoutId={`r-${n}`} className="w-16 h-16 bg-emerald-100 rounded-xl border-2 border-emerald-300 flex items-center justify-center shadow-sm">
                <RightIcon className="w-8 h-8 text-emerald-600" />
              </motion.div>
            ))}
          </div>
          <span className="font-bold text-slate-600">{rel.rightLbl}</span>
        </div>
      </div>
    </div>
  );
}
