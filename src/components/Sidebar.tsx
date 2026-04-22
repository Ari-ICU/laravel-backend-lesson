"use client";

import React from 'react';
import { curriculum, Part } from '@/data/curriculum';
import { cn } from '@/lib/utils';
import { ChevronRight, Layout, BookOpen, Settings, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeModuleId?: string;
  activeLessonId?: string;
  activeSlideIndex: number;
  onSelectLesson: (moduleId: string, lessonId: string, slideIndex?: number) => void;
}

export function Sidebar({ activeModuleId, activeLessonId, activeSlideIndex, onSelectLesson }: SidebarProps) {
  return (
    <aside className="w-80 h-screen glass border-r border-white/10 flex flex-col overflow-hidden">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight">Laravel Pro</h1>
          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold">Backend Mastery</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-8 scrollbar-hide">
        {curriculum.map((part: Part) => (
          <div key={part.id} className="space-y-4">
            <h2 className="px-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              {part.title}
            </h2>
            <div className="space-y-1">
              {part.modules.map((module) => (
                <div key={module.id} className="space-y-1">
                  <div 
                    className={cn(
                      "px-4 py-3 rounded-2xl flex items-center gap-4 transition-all cursor-pointer group mb-1",
                      activeModuleId === module.id ? "bg-white/10 text-white shadow-xl border border-white/5" : "text-white/40 hover:text-white/80 hover:bg-white/[0.03]"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center transition-all",
                      activeModuleId === module.id ? "bg-primary/20 text-primary" : "bg-white/5 text-white/20 group-hover:bg-white/10"
                    )}>
                      <Layout className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold tracking-tight">{module.title}</span>
                  </div>
                  
                  <div className="ml-6 pl-6 border-l-2 border-white/5 space-y-2 mb-4">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="space-y-1">
                        <button
                          onClick={() => onSelectLesson(module.id, lesson.id, 0)}
                          className={cn(
                            "w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all relative group",
                            activeLessonId === lesson.id 
                              ? "bg-primary text-white shadow-lg shadow-primary/20" 
                              : "text-white/40 hover:text-white/80 hover:bg-white/[0.05]"
                          )}
                        >
                          {activeLessonId === lesson.id && (
                            <motion.div 
                              layoutId="active-pill"
                              className="absolute left-[-26px] w-1 h-6 bg-primary rounded-full"
                            />
                          )}
                          {lesson.title}
                        </button>

                        {/* Slide List */}
                        {activeLessonId === lesson.id && (
                          <div className="ml-2 space-y-1 py-1">
                            {lesson.slides.map((slide, idx) => (
                              <button
                                key={slide.id}
                                onClick={() => onSelectLesson(module.id, lesson.id, idx)}
                                className={cn(
                                  "w-full text-left px-4 py-2 rounded-lg text-[10px] font-bold transition-all",
                                  activeSlideIndex === idx 
                                    ? "text-primary bg-primary/5" 
                                    : "text-white/20 hover:text-white/40 hover:bg-white/[0.02]"
                                )}
                              >
                                {idx + 1}. {slide.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5">
        <div className="glass p-4 rounded-2xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white/40" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-white/30 uppercase">Course Progress</p>
            <div className="w-32 h-1 bg-white/5 rounded-full mt-1 overflow-hidden">
              <div className="w-1/3 h-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
