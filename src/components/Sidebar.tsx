"use client";

import React, { useState } from 'react';
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
  const [expandedModules, setExpandedModules] = useState<string[]>([activeModuleId || '']);

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
      animate={{ width: isCollapsed ? 80 : 320 }}
      className="h-screen flex flex-col bg-background/80 backdrop-blur-3xl border-r border-white/[0.05] overflow-hidden relative z-50"
    >
      {/* ── Brand header ── */}
      <div className="px-6 h-20 flex items-center justify-between border-b border-white/[0.03] shrink-0">
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
              <p className="text-sm font-black text-white tracking-tight leading-none mb-1">Laravel Pro</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.15em]">Expert Course</p>
              </div>
            </div>
          </motion.div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "p-2 rounded-xl hover:bg-white/[0.05] transition-colors text-white/40 hover:text-white",
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
            className="w-full h-12 bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 flex items-center gap-3 text-white/30 hover:text-white hover:bg-white/[0.06] hover:border-white/10 transition-all group"
          >
            <Search className="w-4 h-4 opacity-50 group-hover:opacity-100" />
            <span className="text-xs font-bold tracking-tight">Search Curriculum...</span>
            <div className="ml-auto flex items-center gap-1 opacity-20 group-hover:opacity-60 transition-opacity">
              <Command className="w-3 h-3" />
              <span className="text-[10px] font-bold">K</span>
            </div>
          </button>
        </div>
      )}

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto py-6 scrollbar-hide px-3 space-y-8">
        {curriculum.map((part: Part) => (
          <div key={part.id}>
            {!isCollapsed && (
              <p className="px-4 mb-4 text-[10px] font-black text-white/60 uppercase tracking-[0.25em] flex items-center gap-2">
                <LayoutGrid className="w-3 h-3 opacity-50" />
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
                        isModuleActive ? "bg-primary text-white" : "text-white/20 hover:text-white/40 hover:bg-white/[0.05]"
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
                          ? "bg-white/[0.06] text-white" 
                          : "text-white/30 hover:text-white/60 hover:bg-white/[0.03]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all",
                          isModuleActive ? "bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "bg-white/10 group-hover/module:bg-white/30"
                        )} />
                        <span className="text-sm font-black tracking-tight text-white">{module.title}</span>
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
                          className="overflow-hidden ml-4 mt-1 border-l border-white/[0.03] pl-2 space-y-1"
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
                                    "w-full text-left px-4 py-3 rounded-2xl text-[11px] font-bold transition-all flex flex-col gap-2 group/lesson border",
                                    isActiveLesson 
                                      ? "bg-primary/5 border-primary/20" 
                                      : "border-transparent text-white/70 hover:text-white hover:bg-white/[0.03]"
                                  )}
                                >
                                  <div className="flex items-center justify-between w-full">
                                    <span className={cn(
                                      "truncate font-black tracking-tight",
                                      isActiveLesson ? "text-white" : "text-inherit"
                                    )}>{lesson.title}</span>
                                    {isActiveLesson && <motion.div layoutId="active-indicator" className="w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]" />}
                                  </div>
                                  
                                  <div className="flex items-center gap-2">
                                    <span className={cn(
                                      "px-1.5 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-[0.2em]",
                                      levelColor
                                    )}>
                                      {lesson.level || 'Core'}
                                    </span>
                                    {lesson.duration && (
                                      <span className="text-[9px] font-bold text-white/50 uppercase tracking-tighter">
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
                                            "w-full text-left flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all",
                                            isActiveSlide 
                                              ? "text-primary bg-primary/[0.05]" 
                                              : isDone 
                                              ? "text-white/80 hover:text-white" 
                                              : "text-white/50 hover:text-white/80"
                                          )}
                                        >
                                          <div className={cn(
                                            "w-3 h-3 rounded-full border flex items-center justify-center transition-all",
                                            isActiveSlide ? "border-primary bg-primary shadow-[0_0_8px_rgba(59,130,246,0.4)]" : "border-white/10"
                                          )}>
                                            {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-white" />}
                                          </div>
                                          <span className="truncate font-bold tracking-tight">{idx + 1}. {slide.title}</span>
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
        "border-t border-white/[0.03] transition-all duration-300 bg-black/20 backdrop-blur-xl",
        isCollapsed ? "p-4" : "p-6"
      )}>
        {!isCollapsed ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Overall Progress</span>
              </div>
              <span className="text-xs font-black text-primary drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">{progressPct}%</span>
            </div>
            <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden border border-white/[0.02] relative">
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
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#05050a] bg-white/5 flex items-center justify-center text-[8px] font-bold text-white/40">
                    {i}
                  </div>
                ))}
              </div>
              <button className="p-2 rounded-lg hover:bg-white/[0.05] text-white/20 hover:text-white transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary shadow-lg shadow-primary/10">
              {progressPct}%
            </div>
            <button className="p-2 rounded-lg text-white/10 hover:text-white/40 transition-all">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.aside>
  );
}