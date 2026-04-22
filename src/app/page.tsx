"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SlideViewer } from '@/components/SlideViewer';
import { curriculum } from '@/data/curriculum';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, BookOpen, Clock, Users, Monitor } from 'lucide-react';

export default function Home() {
  const [activeModuleId, setActiveModuleId] = useState<string | undefined>(undefined);
  const [activeLessonId, setActiveLessonId] = useState<string | undefined>(undefined);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [view, setView] = useState<'intro' | 'slides'>('intro');
  const [isLoaded, setIsLoaded] = useState(false);

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
      const lessonIdx = currentModule?.lessons.indexOf(currentLesson!) ?? -1;
      if (currentModule && lessonIdx < currentModule.lessons.length - 1) {
        setActiveLessonId(currentModule.lessons[lessonIdx + 1].id);
        setCurrentSlideIndex(0);
      }
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) setCurrentSlideIndex(prev => prev - 1);
  };

  const handleSelectLesson = (moduleId: string, lessonId: string, slideIndex: number = 0) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
    setCurrentSlideIndex(slideIndex);
    setView('slides');
  };

  // Prevent rendering before state is restored to avoid flickering
  if (!isLoaded) return <div className="h-screen bg-[#0a0a0f]" />;

  // ── Intro / Landing ──────────────────────────────────────────────
  if (view === 'intro') {
    return (
      <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">

        {/* Sidebar still accessible on intro */}
        <Sidebar
          activeModuleId={activeModuleId}
          activeLessonId={activeLessonId}
          activeSlideIndex={currentSlideIndex}
          onSelectLesson={handleSelectLesson}
        />

        {/* Hero area */}
        <main className="flex-1 flex flex-col items-center justify-center px-16 relative overflow-hidden">

          {/* Ambient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(99,102,241,0.13),transparent)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl relative z-10"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.09] text-xs font-black text-primary uppercase tracking-[0.25em] mb-10">
              <Sparkles className="w-4 h-4" />
              Expert Backend Engineering
            </div>

            {/* 
              PROJECTOR KEY: massive title — readable from anywhere in the room.
              Use very high-contrast white + branded accent.
            */}
            <h1 className="text-[5.5rem] font-black tracking-tight leading-[1.05] mb-8 text-white">
              Laravel{' '}
              <span className="text-primary drop-shadow-[0_0_40px_rgba(99,102,241,0.5)]">
                Expert Course
              </span>
            </h1>

            <p className="text-2xl text-white/60 font-medium leading-relaxed mb-14 max-w-2xl mx-auto">
              Deep dive into scalable backend development —
              from fundamentals to enterprise architecture.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-5 mb-12">
              {[
                { icon: BookOpen, label: '12 Modules', sub: 'Comprehensive' },
                { icon: Clock,    label: '24 Hours',   sub: 'Course Length' },
                { icon: Users,    label: 'Live Q&A',   sub: 'Expert Support' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-center gap-3 py-6 px-4 rounded-3xl bg-white/[0.04] border border-white/[0.07]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xl font-black text-white">{item.label}</p>
                  <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.2em]">{item.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex items-center justify-center gap-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setView('slides')}
                className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl shadow-primary/30 hover:brightness-110 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-3 group"
              >
                <Rocket className="w-6 h-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                Start Learning
              </motion.button>

              {/* Projector mode hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.07] text-white/30 text-sm font-bold"
              >
                <Monitor className="w-5 h-5" />
                Projector-ready
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  // ── Slides view ───────────────────────────────────────────────────
  return (
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">
      <Sidebar
        activeModuleId={activeModuleId}
        activeLessonId={activeLessonId}
        activeSlideIndex={currentSlideIndex}
        onSelectLesson={handleSelectLesson}
      />

      {currentSlide ? (
        <SlideViewer
          slide={currentSlide}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={currentSlideIndex === 0 && activeLessonId === curriculum[0].modules[0].lessons[0].id}
          isLast={
            currentLesson
              ? currentSlideIndex === currentLesson.slides.length - 1 &&
                activeLessonId === curriculum.flatMap(p => p.modules).at(-1)?.lessons.at(-1)?.id
              : false
          }
          currentSlideIndex={currentSlideIndex}
          totalSlides={currentLesson?.slides.length || 0}
          moduleTitle={currentModule?.title}
          lessonTitle={currentLesson?.title}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white/20 text-xl font-semibold">Select a lesson to begin</p>
        </div>
      )}
    </div>
  );
}