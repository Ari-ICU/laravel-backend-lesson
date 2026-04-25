"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SlideViewer } from '@/components/SlideViewer';
import { curriculum } from '@/data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Sparkles, BookOpen, Clock, 
  Users, Monitor, ChevronRight, Zap,
  Terminal, ShieldCheck, Database, Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CurriculumOverlay } from '@/components/CurriculumOverlay';

export default function Home() {
  const [activeModuleId, setActiveModuleId] = useState<string | undefined>(undefined);
  const [activeLessonId, setActiveLessonId] = useState<string | undefined>(undefined);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [view, setView] = useState<'intro' | 'slides'>('intro');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCommandCenterOpen, setIsCommandCenterOpen] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedModuleId = localStorage.getItem('laravel-active-module');
    const savedLessonId = localStorage.getItem('laravel-active-lesson');
    const savedSlideIndex = localStorage.getItem('laravel-slide-index');
    const savedView = localStorage.getItem('laravel-app-view');

    if (savedModuleId) setActiveModuleId(savedModuleId);
    else setActiveModuleId(curriculum[0].modules[0].id);

    if (savedLessonId) setActiveLessonId(savedLessonId);
    else setActiveLessonId(curriculum[0].modules[0].lessons[0].id);

    if (savedSlideIndex) setCurrentSlideIndex(parseInt(savedSlideIndex, 10));
    if (savedView) setView(savedView as 'intro' | 'slides');
    
    setIsLoaded(true);
  }, []);

  // Keyboard shortcuts for global navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;

      if (e.key.toLowerCase() === 'k') {
        setIsCommandCenterOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    if (!isLoaded) return;

    if (activeModuleId) localStorage.setItem('laravel-active-module', activeModuleId);
    if (activeLessonId) localStorage.setItem('laravel-active-lesson', activeLessonId);
    localStorage.setItem('laravel-slide-index', currentSlideIndex.toString());
    localStorage.setItem('laravel-app-view', view);
  }, [activeModuleId, activeLessonId, currentSlideIndex, view, isLoaded]);

  const currentModule = curriculum.flatMap(p => p.modules).find(m => m.id === activeModuleId);
  const currentLesson = currentModule?.lessons.find(l => l.id === activeLessonId);
  const currentSlide = currentLesson?.slides[currentSlideIndex];

  const handleNext = () => {
    if (currentLesson && currentSlideIndex < currentLesson.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      const allModules = curriculum.flatMap(p => p.modules);
      const moduleIdx = allModules.findIndex(m => m.id === activeModuleId);
      const lessonIdx = currentModule?.lessons.indexOf(currentLesson!) ?? -1;
      
      if (currentModule && lessonIdx < currentModule.lessons.length - 1) {
        setActiveLessonId(currentModule.lessons[lessonIdx + 1].id);
        setCurrentSlideIndex(0);
      } else if (moduleIdx < allModules.length - 1) {
        const nextModule = allModules[moduleIdx + 1];
        setActiveModuleId(nextModule.id);
        setActiveLessonId(nextModule.lessons[0].id);
        setCurrentSlideIndex(0);
      }
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) setCurrentSlideIndex(prev => prev - 1);
    else {
      const allModules = curriculum.flatMap(p => p.modules);
      const moduleIdx = allModules.findIndex(m => m.id === activeModuleId);
      const lessonIdx = currentModule?.lessons.indexOf(currentLesson!) ?? -1;

      if (currentModule && lessonIdx > 0) {
        const prevLesson = currentModule.lessons[lessonIdx - 1];
        setActiveLessonId(prevLesson.id);
        setCurrentSlideIndex(prevLesson.slides.length - 1);
      } else if (moduleIdx > 0) {
        const prevModule = allModules[moduleIdx - 1];
        setActiveModuleId(prevModule.id);
        const prevLesson = prevModule.lessons[prevModule.lessons.length - 1];
        setActiveLessonId(prevLesson.id);
        setCurrentSlideIndex(prevLesson.slides.length - 1);
      }
    }
  };

  const handleSelectLesson = (moduleId: string, lessonId: string, slideIndex: number = 0) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
    setCurrentSlideIndex(slideIndex);
    setView('slides');
  };

  if (!isLoaded) return <div className="h-screen bg-background" />;

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/30">
      <Sidebar
        activeModuleId={activeModuleId}
        activeLessonId={activeLessonId}
        activeSlideIndex={currentSlideIndex}
        onSelectLesson={handleSelectLesson}
        onOpenCommandCenter={() => setIsCommandCenterOpen(true)}
      />

      <AnimatePresence mode="wait">
        {view === 'intro' ? (
          <motion.main
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 relative overflow-hidden flex flex-col"
          >
            {/* Hero Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 rounded-[2rem] bg-black/[0.03] border border-black/10 flex items-center justify-center mb-10 shadow-2xl"
              >
                <Zap className="w-10 h-10 text-primary fill-primary/10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center max-w-5xl"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.03] border border-black/[0.08] text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8">
                  <Sparkles className="w-3.5 h-3.5" />
                  Next-Gen Backend Engineering
                </div>

                <h1 className="text-[7rem] font-black tracking-tighter leading-[0.9] mb-10 text-black">
                  Laravel <span className="gradient-text">Expert</span>
                  <br />Masterclass
                </h1>

                <p className="text-3xl text-black/40 font-medium leading-relaxed mb-16 max-w-3xl mx-auto">
                  The definitive curriculum for building elite-grade, 
                  high-performance applications with the world's most 
                  loved PHP framework.
                </p>

                <div className="flex items-center justify-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setView('slides')}
                    className="px-12 py-6 bg-black text-white rounded-[2rem] font-black text-xl uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 group"
                  >
                    <Rocket className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    Initialize Course
                  </motion.button>

                  <div className="flex items-center gap-3 px-8 py-6 rounded-[2rem] bg-black/[0.03] border border-black/[0.06] text-black/30 text-sm font-bold">
                    <Monitor className="w-5 h-5 opacity-40" />
                    Projector Ready
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <div className="px-20 py-10 border-t border-black/[0.03] bg-white/20 backdrop-blur-xl relative z-10">
              <div className="grid grid-cols-4 gap-10 max-w-7xl mx-auto">
                {[
                  { icon: BookOpen, label: '12 Modules', sub: 'Comprehensive Path', color: 'text-primary' },
                  { icon: Terminal, label: 'Live Code', sub: 'Hands-on Learning', color: 'text-secondary' },
                  { icon: ShieldCheck, label: 'Security', sub: 'Enterprise Focus', color: 'text-primary' },
                  { icon: Database, label: 'Scale', sub: 'Database Mastery', color: 'text-secondary' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-5 group"
                  >
                    <div className={cn("w-14 h-14 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center justify-center group-hover:border-black/20 transition-all", item.color)}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xl font-black text-black">{item.label}</p>
                      <p className="text-[10px] font-bold text-black/20 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.main>
        ) : (
          <motion.div
            key="slides"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 relative flex flex-col"
          >
            {currentSlide ? (
              <SlideViewer
                slide={currentSlide}
                onNext={handleNext}
                onPrev={handlePrev}
                isFirst={currentSlideIndex === 0 && activeModuleId === curriculum[0].modules[0].id && activeLessonId === curriculum[0].modules[0].lessons[0].id}
                isLast={
                  currentLesson
                    ? currentSlideIndex === currentLesson.slides.length - 1 &&
                      activeModuleId === curriculum.flatMap(p => p.modules).at(-1)?.id &&
                      activeLessonId === curriculum.flatMap(p => p.modules).at(-1)?.lessons.at(-1)?.id
                    : false
                }
                currentSlideIndex={currentSlideIndex}
                totalSlides={currentLesson?.slides.length || 0}
                moduleTitle={currentModule?.title}
                lessonTitle={currentLesson?.title}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)]" />
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-black/[0.03] border border-black/5 flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-8 h-8 text-black/20 animate-spin-slow" />
                  </div>
                  <p className="text-black/20 text-xl font-black uppercase tracking-[0.2em]">Select a module to begin</p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Curriculum Command Center */}
      <CurriculumOverlay 
        isOpen={isCommandCenterOpen}
        onClose={() => setIsCommandCenterOpen(false)}
        onSelectLesson={handleSelectLesson}
        activeLessonId={activeLessonId}
      />
    </div>
  );
}