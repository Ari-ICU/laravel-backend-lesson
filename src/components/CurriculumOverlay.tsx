"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, ChevronRight, LayoutGrid, Zap } from 'lucide-react';
import { curriculum } from '@/data/curriculum';
import { cn } from '@/lib/utils';

interface CurriculumOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  activeLessonId?: string;
}

export function CurriculumOverlay({ isOpen, onClose, onSelectLesson, activeLessonId }: CurriculumOverlayProps) {
  const [search, setSearch] = useState('');

  const filteredCurriculum = curriculum.map(part => ({
    ...part,
    modules: part.modules.map(mod => ({
      ...mod,
      lessons: mod.lessons.filter(lesson => 
        lesson.title.toLowerCase().includes(search.toLowerCase()) ||
        mod.title.toLowerCase().includes(search.toLowerCase())
      )
    })).filter(mod => mod.lessons.length > 0)
  })).filter(part => part.modules.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-3xl flex flex-col items-center p-20"
        >
          {/* Header */}
          <div className="w-full max-w-7xl flex items-center justify-between mb-20">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <LayoutGrid className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-white tracking-tighter">Curriculum Command Center</h2>
                <p className="text-white/30 font-bold uppercase tracking-[0.3em] text-xs mt-1">Jump to any module or lesson instantly</p>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="w-16 h-16 rounded-full hover:bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all group"
            >
              <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
            </button>
          </div>

          {/* Search */}
          <div className="w-full max-w-4xl relative mb-20">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-8 h-8 text-white/20" />
            <input 
              autoFocus
              type="text"
              placeholder="Search lessons, topics, or modules..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] py-8 pl-24 pr-10 text-3xl font-bold text-white placeholder:text-white/10 focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all"
            />
          </div>

          {/* Grid Content */}
          <div className="w-full max-w-7xl flex-1 overflow-y-auto pr-6 custom-scrollbar">
            <div className="grid grid-cols-3 gap-12">
              {filteredCurriculum.map((part, pIdx) => (
                <div key={pIdx} className="space-y-10">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] px-3 py-1 rounded-md bg-primary/10 border border-primary/20">PART {pIdx + 1}</span>
                    <div className="h-px flex-1 bg-white/[0.05]" />
                  </div>

                  {part.modules.map((mod) => (
                    <div key={mod.id} className="space-y-6">
                      <h3 className="text-xl font-black text-white/80 flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-primary/40" />
                        {mod.title}
                      </h3>
                      <div className="grid gap-3">
                        {mod.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              onSelectLesson(mod.id, lesson.id);
                              onClose();
                            }}
                            className={cn(
                              "group flex items-center justify-between p-5 rounded-2xl border transition-all text-left",
                              activeLessonId === lesson.id 
                                ? "bg-primary border-primary shadow-lg shadow-primary/20" 
                                : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                            )}
                          >
                            <span className={cn(
                              "font-bold text-sm",
                              activeLessonId === lesson.id ? "text-white" : "text-white/40 group-hover:text-white"
                            )}>
                              {lesson.title}
                            </span>
                            <ChevronRight className={cn(
                              "w-4 h-4 transition-transform group-hover:translate-x-1",
                              activeLessonId === lesson.id ? "text-white/60" : "text-white/10 group-hover:text-primary"
                            )} />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
