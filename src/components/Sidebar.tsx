"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { curriculum, Part } from '@/data/curriculum';
import { cn } from '@/lib/utils';
import { 
  Zap, BookOpen, CheckCircle2, 
  Menu, X, Search, Command, LayoutGrid, 
  ChevronDown, Settings, LogOut
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  activeModuleId?: string;
  activeLessonId?: string;
  activeSlideIndex: number;
  onSelectLesson: (moduleId: string, lessonId: string, slideIndex?: number) => void;
  onOpenCommandCenter?: () => void;
}

export function Sidebar({
  activeModuleId,
  activeLessonId,
  activeSlideIndex,
  onSelectLesson,
  onOpenCommandCenter
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);
  const [expandedModules, setExpandedModules] = useState<string[]>([activeModuleId || '']);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth >= 280 && newWidth <= 600) {
        setWidth(newWidth);
      }
    }
  }, [isResizing]);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  const allLessons = curriculum.flatMap(p => p.modules.flatMap(m => m.lessons));
  const activeIdx = allLessons.findIndex(l => l.id === activeLessonId);
  const progressPct = allLessons.length > 0
    ? Math.round(((activeIdx + 1) / allLessons.length) * 100)
    : 0;

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId) 
        : [...prev, moduleId]
    );
  };

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isCollapsed ? 80 : width }}
      transition={isResizing ? { duration: 0 } : undefined}
      className={cn(
        "h-screen flex flex-col bg-background/80 backdrop-blur-3xl border-r border-black/[0.05] overflow-hidden relative z-50",
        isResizing && "select-none"
      )}
    >
      {/* Resize Handle */}
      {!isCollapsed && (
        <div 
          onMouseDown={startResizing}
          className={cn(
            "absolute top-0 right-0 w-1.5 h-full cursor-col-resize z-[60] transition-all group/resize",
            isResizing ? "bg-primary/40" : "hover:bg-primary/20"
          )}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 rounded-full bg-black/10 group-hover/resize:bg-primary/40 transition-colors" />
        </div>
      )}
      {/* ── Brand header ── */}
      <div className="px-6 h-20 flex items-center justify-between border-b border-black/[0.03] shrink-0">
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Zap className="w-5 h-5 text-primary fill-primary/20" />
            </div>
            <div>
              <p className="text-lg font-black text-black tracking-tighter leading-tight font-outfit">Laravel</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-xs font-bold text-black/30 uppercase tracking-[0.2em] font-inter">Class</p>
              </div>
            </div>
          </motion.div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "p-2 rounded-xl hover:bg-black/[0.05] transition-colors text-black/40 hover:text-black",
            isCollapsed && "mx-auto"
          )}
        >
          {isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Command Center Search ── */}
      {!isCollapsed && (
        <div className="px-4 mt-6 mb-2">
          <button 
            onClick={onOpenCommandCenter}
            className="w-full h-12 bg-black/[0.03] border border-black/[0.05] rounded-xl px-4 flex items-center gap-3 text-black/30 hover:text-black hover:bg-black/[0.06] hover:border-black/10 transition-all group"
          >
            <Search className="w-5 h-5 opacity-50 group-hover:opacity-100" />
            <span className="text-sm font-bold tracking-tight">Search Curriculum...</span>
            <div className="ml-auto flex items-center gap-1.5 opacity-20 group-hover:opacity-60 transition-opacity">
              <Command className="w-4 h-4" />
              <span className="text-xs font-bold">K</span>
            </div>
          </button>
        </div>
      )}

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto py-6 scrollbar-hide px-3 space-y-8">
        {curriculum.map((part: Part) => (
          <div key={part.id}>
            {!isCollapsed && (
              <p className="px-4 mb-4 text-xs font-black text-black/60 uppercase tracking-[0.3em] flex items-center gap-2 font-inter">
                <LayoutGrid className="w-4 h-4 opacity-50" />
                {part.title}
              </p>
            )}

            <div className="space-y-1">
              {part.modules.map((module) => {
                const isModuleActive = activeModuleId === module.id;
                const isExpanded = expandedModules.includes(module.id);

                if (isCollapsed) {
                  return (
                    <button
                      key={module.id}
                      onClick={() => onSelectLesson(module.id, module.lessons[0].id, 0)}
                      className={cn(
                        "w-12 h-12 mx-auto rounded-xl flex items-center justify-center transition-all",
                        isModuleActive ? "bg-primary text-white" : "text-black/20 hover:text-black/40 hover:bg-black/[0.05]"
                      )}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-current" />
                    </button>
                  );
                }

                return (
                  <div key={module.id} className="group/module">
                    <button
                      onClick={() => toggleModule(module.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all",
                        isModuleActive 
                          ? "bg-black/[0.06] text-black" 
                          : "text-black/30 hover:text-black/60 hover:bg-black/[0.03]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          isModuleActive ? "bg-primary shadow-[0_0_10px_rgba(59,130,246,0.4)]" : "bg-black/10 group-hover/module:bg-black/30"
                        )} />
                        <span className="text-base font-black tracking-tight text-black font-outfit">{module.title}</span>
                      </div>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isExpanded ? "rotate-0" : "-rotate-90 opacity-20"
                      )} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden ml-4 mt-1 border-l border-black/[0.03] pl-2 space-y-1"
                        >
                          {module.lessons.map((lesson) => {
                            const isActiveLesson = activeLessonId === lesson.id;
                            const levelColor = {
                              Core: 'text-primary bg-primary/10',
                              Advanced: 'text-secondary bg-secondary/10',
                              Expert: 'text-primary font-black bg-primary/20'
                            }[lesson.level || 'Core'];

                            return (
                              <div key={lesson.id} className="space-y-1 py-1 px-1">
                                <button
                                  onClick={() => onSelectLesson(module.id, lesson.id, 0)}
                                  className={cn(
                                    "w-full text-left px-4 py-4 rounded-2xl text-sm font-bold transition-all flex flex-col gap-2 group/lesson border",
                                    isActiveLesson 
                                      ? "bg-primary/5 border-primary/20" 
                                      : "border-transparent text-black/70 hover:text-black hover:bg-black/[0.03]"
                                  )}
                                >
                                  <div className="flex items-center justify-between w-full">
                                    <span className={cn(
                                      "truncate font-black tracking-tight font-outfit",
                                      isActiveLesson ? "text-black" : "text-inherit"
                                    )}>{lesson.title}</span>
                                    {isActiveLesson && <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
                                  </div>
                                  
                                  <div className="flex items-center gap-2.5">
                                    <span className={cn(
                                      "px-2 py-0.5 rounded-[4px] text-[10px] font-black uppercase tracking-[0.2em] font-inter",
                                      levelColor
                                    )}>
                                      {lesson.level || 'Core'}
                                    </span>
                                    {lesson.duration && (
                                      <span className="text-[10px] font-bold text-black/40 uppercase tracking-tight">
                                        • {lesson.duration}
                                      </span>
                                    )}
                                  </div>
                                </button>

                                {isActiveLesson && (
                                  <div className="pl-4 space-y-0.5 mt-1 border-l border-primary/20 ml-2">
                                    {lesson.slides.map((slide, idx) => {
                                      const isActiveSlide = activeSlideIndex === idx;
                                      const isDone = idx < activeSlideIndex;
                                      return (
                                        <button
                                          key={slide.id}
                                          onClick={() => onSelectLesson(module.id, lesson.id, idx)}
                                          className={cn(
                                            "w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-bold transition-all",
                                            isActiveSlide 
                                              ? "text-primary bg-primary/[0.05]" 
                                              : isDone 
                                              ? "text-black/80 hover:text-black" 
                                              : "text-black/50 hover:text-black/80"
                                          )}
                                        >
                                          <div className={cn(
                                            "w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all",
                                            isActiveSlide ? "border-primary bg-primary shadow-[0_0_8px_rgba(59,130,246,0.4)]" : "border-black/10"
                                          )}>
                                            {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                                          </div>
                                          <span className="truncate font-bold tracking-tight font-inter">{idx + 1}. {slide.title}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ── Progress footer ── */}
      <div className={cn(
        "border-t border-black/[0.03] transition-all duration-300 bg-white/20 backdrop-blur-xl",
        isCollapsed ? "p-4" : "p-6"
      )}>
        {!isCollapsed ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-black text-black/30 uppercase tracking-[0.2em] font-inter">Overall Progress</span>
              </div>
              <span className="text-sm font-black text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] font-outfit">{progressPct}%</span>
            </div>
            <div className="h-1.5 bg-black/[0.04] rounded-full overflow-hidden border border-black/[0.02] relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${progressPct}%`,
                  backgroundPosition: ['0% 0%', '100% 0%']
                }}
                transition={{ 
                  width: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                }}
              />
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.03] flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-black/5 flex items-center justify-center text-[8px] font-bold text-black/40">
                    {i}
                  </div>
                ))}
              </div>
              <button className="p-2 rounded-lg hover:bg-black/[0.05] text-black/20 hover:text-black transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary shadow-lg shadow-primary/10">
              {progressPct}%
            </div>
            <button className="p-2 rounded-lg text-black/10 hover:text-black/40 transition-all">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.aside>
  );
}