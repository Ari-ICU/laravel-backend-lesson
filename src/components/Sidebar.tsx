"use client";

import React from 'react';
import { curriculum, Part } from '@/data/curriculum';
import { cn } from '@/lib/utils';
import { ChevronRight, Zap, BookOpen, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeModuleId?: string;
  activeLessonId?: string;
  activeSlideIndex: number;
  onSelectLesson: (moduleId: string, lessonId: string, slideIndex?: number) => void;
}

export function Sidebar({
  activeModuleId,
  activeLessonId,
  activeSlideIndex,
  onSelectLesson,
}: SidebarProps) {

  // Calculate total lessons & completed (lessons before active) for progress bar
  const allLessons = curriculum.flatMap(p => p.modules.flatMap(m => m.lessons));
  const activeIdx = allLessons.findIndex(l => l.id === activeLessonId);
  const progressPct = allLessons.length > 0
    ? Math.round(((activeIdx + 1) / allLessons.length) * 100)
    : 0;

  return (
    <aside className="w-72 h-screen flex flex-col bg-[#09090f] border-r border-white/[0.07] overflow-hidden">

      {/* ── Brand header ── */}
      <div className="px-6 py-6 border-b border-white/[0.06] flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/20">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-base font-black text-white tracking-tight">Laravel Pro</p>
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Backend Expertise</p>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        {curriculum.map((part: Part) => (
          <div key={part.id} className="mb-6">

            {/* Part label */}
            <p className="px-6 mb-2 text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">
              {part.title}
            </p>

            {part.modules.map((module) => {
              const isModuleActive = activeModuleId === module.id;

              return (
                <div key={module.id} className="mb-1">
                  {/* Module row */}
                  <div className={cn(
                    'flex items-center gap-3 px-5 py-3 mx-2 rounded-2xl transition-all',
                    isModuleActive
                      ? 'bg-white/[0.07] text-white'
                      : 'text-white/35 hover:text-white/60 hover:bg-white/[0.03]'
                  )}>
                    <span className={cn(
                      'w-1.5 h-1.5 rounded-full shrink-0 transition-colors',
                      isModuleActive ? 'bg-primary shadow-[0_0_8px_rgba(99,102,241,0.7)]' : 'bg-white/15'
                    )} />
                    <span className="text-sm font-bold tracking-tight truncate">{module.title}</span>
                  </div>

                  {/* Lessons */}
                  <div className="ml-4 pl-5 border-l border-white/[0.05] mt-1 mb-3 space-y-0.5">
                    {module.lessons.map((lesson) => {
                      const isActiveLesson = activeLessonId === lesson.id;

                      return (
                        <div key={lesson.id}>
                          <button
                            onClick={() => onSelectLesson(module.id, lesson.id, 0)}
                            className={cn(
                              'relative w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all',
                              isActiveLesson
                                ? 'bg-primary/15 text-primary'
                                : 'text-white/35 hover:text-white/70 hover:bg-white/[0.04]'
                            )}
                          >
                            {isActiveLesson && (
                              <motion.span
                                layoutId="lesson-marker"
                                className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-1 h-5 bg-primary rounded-full"
                              />
                            )}
                            {lesson.title}
                          </button>

                          {/* Slide list — only shown for active lesson */}
                          {isActiveLesson && (
                            <div className="ml-2 mt-0.5 mb-1 space-y-0.5">
                              {lesson.slides.map((slide, idx) => {
                                const isActiveSlide = activeSlideIndex === idx;
                                const isDone = idx < activeSlideIndex;
                                return (
                                  <button
                                    key={slide.id}
                                    onClick={() => onSelectLesson(module.id, lesson.id, idx)}
                                    className={cn(
                                      'w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all',
                                      isActiveSlide
                                        ? 'text-primary bg-primary/[0.07]'
                                        : isDone
                                        ? 'text-white/30 hover:text-white/50'
                                        : 'text-white/15 hover:text-white/30'
                                    )}
                                  >
                                    {isDone
                                      ? <CheckCircle2 className="w-3 h-3 text-emerald-400/60 shrink-0" />
                                      : <span className={cn(
                                          'w-3 h-3 rounded-full border shrink-0 flex items-center justify-center',
                                          isActiveSlide ? 'border-primary bg-primary/30' : 'border-white/10'
                                        )} />
                                    }
                                    <span className="truncate">{idx + 1}. {slide.title}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* ── Progress footer ── */}
      <div className="px-5 py-5 border-t border-white/[0.06] shrink-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-white/25" />
            <span className="text-[10px] font-black text-white/25 uppercase tracking-[0.2em]">Course Progress</span>
          </div>
          <span className="text-xs font-black text-primary">{progressPct}%</span>
        </div>
        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
        <p className="mt-2 text-[9px] text-white/15 font-medium">
          Lesson {Math.max(activeIdx + 1, 0)} of {allLessons.length}
        </p>
      </div>
    </aside>
  );
}