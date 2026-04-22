"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SlideViewer } from '@/components/SlideViewer';
import { curriculum, Slide } from '@/data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Sparkles, BookOpen, Clock, Users } from 'lucide-react';

export default function Home() {
  const [activeModuleId, setActiveModuleId] = useState<string | undefined>(curriculum[0].modules[0].id);
  const [activeLessonId, setActiveLessonId] = useState<string | undefined>(curriculum[0].modules[0].lessons[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [view, setView] = useState<'intro' | 'slides'>('intro');

  // Find current data
  const currentModule = curriculum.flatMap(p => p.modules).find(m => m.id === activeModuleId);
  const currentLesson = currentModule?.lessons.find(l => l.id === activeLessonId);
  const currentSlide = currentLesson?.slides[currentSlideIndex];

  const handleNext = () => {
    if (currentLesson && currentSlideIndex < currentLesson.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      // Logic for next lesson
      const moduleIdx = currentModule ? curriculum.flatMap(p => p.modules).indexOf(currentModule) : -1;
      const lessonIdx = currentModule?.lessons.indexOf(currentLesson!) ?? -1;
      
      if (currentModule && lessonIdx < currentModule.lessons.length - 1) {
        const nextLesson = currentModule.lessons[lessonIdx + 1];
        setActiveLessonId(nextLesson.id);
        setCurrentSlideIndex(0);
      }
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleSelectLesson = (moduleId: string, lessonId: string, slideIndex: number = 0) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
    setCurrentSlideIndex(slideIndex);
    setView('slides');
  };

  if (view === 'intro') {
    return (
      <div className="flex h-screen bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary blur-[150px] rounded-full" />
        </div>

        <Sidebar 
          activeModuleId={activeModuleId} 
          activeLessonId={activeLessonId}
          activeSlideIndex={currentSlideIndex}
          onSelectLesson={handleSelectLesson}
        />

        <main className="flex-1 flex flex-col items-center justify-center p-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-8">
              <Sparkles className="w-4 h-4" />
              Master Backend Engineering
            </div>
            
            <h1 className="text-8xl font-black tracking-tighter mb-10 leading-tight">
              Laravel <span className="gradient-text">Masterclass</span>
            </h1>
            
            <p className="text-3xl text-white/80 leading-relaxed mb-16 font-medium">
              Deep dive into the world of scalable backend development with Laravel. 
              From fundamentals to advanced enterprise architecture.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { icon: BookOpen, label: '12 Modules', sub: 'Comprehensive' },
                { icon: Clock, label: '24 Hours', sub: 'Course Length' },
                { icon: Users, label: 'Live Q&A', sub: 'Expert Support' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 border-white/5">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-sm font-bold text-white/90">{item.label}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">{item.sub}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setView('slides')}
              className="px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-2xl shadow-primary/40 hover:scale-105 transition-all flex items-center gap-3 mx-auto group"
            >
              <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Start Learning
            </button>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
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
          isLast={false} 
          currentSlideIndex={currentSlideIndex}
          totalSlides={currentLesson?.slides.length || 0}
          moduleTitle={currentModule?.title}
          lessonTitle={currentLesson?.title}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white/20">Select a lesson to start</p>
        </div>
      )}
    </div>
  );
}
