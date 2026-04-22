"use client";

import React from 'react';
import { Slide } from '@/data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, ArrowRight, ArrowLeft, Lightbulb,
  HelpCircle, CheckCircle2, XCircle, Trophy,
  BookOpen, ChevronRight, Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { DeploymentAnimation } from './animations/DeploymentAnimation';
import { PerformanceAnimation } from './animations/PerformanceAnimation';
import { SecurityAnimation } from './animations/SecurityAnimation';
import { DatabaseAnimation } from './animations/DatabaseAnimation';

interface SlideViewerProps {
  slide: Slide;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
  currentSlideIndex: number;
  totalSlides: number;
  moduleTitle?: string;
  lessonTitle?: string;
}

const FIELD_NOTES_KEY = 'laravel-course-notes';

const renderText = (text: string | { kh: string; en: string } | undefined) => {
  if (!text) return '';
  if (typeof text === 'string') return text;
  // In the future, this can use a language state. For now, default to English.
  return text.en;
};

export function SlideViewer({
  slide, onNext, onPrev, isFirst, isLast,
  currentSlideIndex, totalSlides, moduleTitle, lessonTitle
}: SlideViewerProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(FIELD_NOTES_KEY) || '{}');
    setNote(saved[slide.id] || '');
  }, [slide.id]);

  const saveNote = (value: string) => {
    setNote(value);
    const saved = JSON.parse(localStorage.getItem(FIELD_NOTES_KEY) || '{}');
    saved[slide.id] = value;
    localStorage.setItem(FIELD_NOTES_KEY, JSON.stringify(saved));
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [slide.id]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); if (!isLast) onNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); if (!isFirst) onPrev(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isFirst, isLast, onNext, onPrev]);

  const highlightCode = (code: string, lang: string = 'php') => {
    if (!code) return '';
    let escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const strings: string[] = [];
    escaped = escaped.replace(/"(.*?)"|'(.*?)'/g, (match) => {
      strings.push(`<span class="text-emerald-300">${match}</span>`);
      return `___STR${strings.length - 1}___`;
    });

    if (lang === 'php') {
      escaped = escaped
        .replace(/\b(public|private|protected|function|class|extends|return|new|use|namespace|if|else|elseif|foreach|as|while|for|Route|echo)\b/g,
          '<span class="text-sky-300 font-bold">$1</span>')
        .replace(/(\$[a-zA-Z0-9_]+)/g, '<span class="text-amber-300 font-bold">$1</span>')
        .replace(/(::|-&gt;)/g, '<span class="text-white/50">$1</span>');
    } else if (lang === 'sql') {
      escaped = escaped.replace(
        /\b(SELECT|FROM|WHERE|ORDER BY|DESC|ASC|INSERT INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|id|string|text|timestamps)\b/g,
        '<span class="text-sky-300 font-bold">$1</span>'
      );
    } else if (lang === 'bash') {
      escaped = escaped.replace(
        /\b(composer|php|artisan|require|install|update|make:controller|make:model|serve|laravel new)\b/g,
        '<span class="text-sky-300 font-bold">$1</span>'
      );
    }

    escaped = escaped.replace(/\/\/.*$|#.*$|--.*$/gm, (m) => `<span class="text-white/40 italic">${m}</span>`);
    strings.forEach((s, i) => { escaped = escaped.replace(`___STR${i}___`, s); });
    return escaped;
  };

  const renderAnimation = () => {
    switch (slide.animation) {
      case 'deployment': return <DeploymentAnimation />;
      case 'performance': return <PerformanceAnimation />;
      case 'security': return <SecurityAnimation />;
      case 'database': return <DatabaseAnimation />;
      default: return null;
    }
  };

  const typeLabel: Record<string, { label: string; color: string }> = {
    intro:   { label: 'Introduction',  color: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
    concept: { label: 'Concept',       color: 'bg-violet-500/20 text-violet-300 border-violet-500/30' },
    code:    { label: 'Code',          color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
    quiz:    { label: 'Quiz',          color: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
    summary: { label: 'Summary',       color: 'bg-primary/20 text-primary border-primary/30' },
  };

  const badge = typeLabel[slide.type] ?? { label: slide.type, color: 'bg-white/10 text-white/60 border-white/10' };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[#0a0a0f] relative select-none">

      {/* Subtle ambient glow based on slide type */}
      <div className={cn(
        'absolute inset-0 pointer-events-none transition-all duration-1000',
        slide.type === 'code'    ? 'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]' :
        slide.type === 'quiz'   ? 'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.10),transparent)]' :
        slide.type === 'summary'? 'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]' :
                                  'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.10),transparent)]'
      )} />

      {/* ── TOP BAR ─────────────────────────────────────────────── */}
      <header className="relative z-20 flex items-center justify-between px-10 py-5 border-b border-white/[0.06] bg-black/30 backdrop-blur-sm">

        {/* Breadcrumb + type badge */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-white/30 text-sm font-semibold truncate">{moduleTitle}</span>
          <ChevronRight className="w-4 h-4 text-white/20 shrink-0" />
          <span className="text-white/55 text-sm font-semibold truncate">{lessonTitle}</span>
          <span className={cn(
            'ml-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border shrink-0',
            badge.color
          )}>
            {badge.label}
          </span>
        </div>

        {/* Slide counter + progress dots + nav */}
        <div className="flex items-center gap-5 shrink-0">

          {/* Slide dots — visible on projector */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div key={i} className={cn(
                'rounded-full transition-all duration-300',
                i === currentSlideIndex
                  ? 'w-6 h-2.5 bg-primary'
                  : i < currentSlideIndex
                  ? 'w-2.5 h-2.5 bg-white/30'
                  : 'w-2.5 h-2.5 bg-white/10'
              )} />
            ))}
          </div>

          <span className="font-mono text-sm font-bold text-white/40">
            {currentSlideIndex + 1} / {totalSlides}
          </span>

          {/* Notes toggle */}
          <button
            onClick={() => setShowNotes(v => !v)}
            className={cn(
              'w-11 h-11 rounded-xl flex items-center justify-center transition-all border',
              showNotes
                ? 'bg-primary border-primary/60 text-white'
                : 'border-white/10 text-white/40 hover:text-white hover:bg-white/[0.07]'
            )}
            title="Instructor Notes (N)"
          >
            <BookOpen className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={cn(
              'w-11 h-11 rounded-xl flex items-center justify-center border transition-all',
              isFirst
                ? 'opacity-15 cursor-not-allowed border-white/5 text-white/20'
                : 'border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
            )}
            title="Previous (←)"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={onNext}
            disabled={isLast}
            className={cn(
              'px-7 h-11 rounded-xl flex items-center gap-2.5 font-black text-sm uppercase tracking-widest transition-all border',
              isLast
                ? 'opacity-15 cursor-not-allowed border-white/5 text-white/20'
                : 'bg-primary border-primary/60 text-white hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20'
            )}
            title="Next (→ or Space)"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ── MAIN SLIDE BODY ─────────────────────────────────────── */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full flex flex-col px-16 py-12 gap-10 max-w-[1400px] mx-auto w-full"
          >

            {/* Slide Title — big & projector-friendly */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(
                'font-black tracking-tight leading-[1.1] text-white',
                slide.type === 'summary' ? 'text-6xl text-primary' : 'text-5xl'
              )}
            >
              {slide.title}
            </motion.h1>

            {/* ── CONTENT BULLETS ── */}
            {((slide.content && slide.content.length > 0) || (slide.body && slide.body.length > 0)) && (
              <div className={cn(
                'flex flex-col gap-6',
                slide.type === 'quiz' && 'gap-4'
              )}>
                {(slide.content || slide.body || []).map((paragraph, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.1 }}
                    className={cn(
                      'flex items-start gap-5',
                      slide.isList === false && 'block'
                    )}
                  >
                    {slide.isList !== false && slide.type !== 'quiz' && (
                      <span className="mt-2.5 w-3 h-3 rounded-full bg-primary shrink-0 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
                    )}
                    <p className="text-3xl font-semibold text-white/90 leading-snug">
                      {renderText(paragraph).split('**').map((part, i) =>
                        i % 2 === 1
                          ? <span key={i} className="text-primary font-black">{part}</span>
                          : part
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Animation */}
            {slide.animation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center py-4"
              >
                {renderAnimation()}
              </motion.div>
            )}

            {/* External link */}
            {slide.link && (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-8 py-4 rounded-2xl bg-primary text-white font-black text-lg uppercase tracking-widest flex items-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-primary/30 group"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                {slide.linkText || 'Open Resource'}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            )}

            {/* Key Takeaway */}
            {slide.insight && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex items-start gap-6 p-8 rounded-3xl bg-amber-500/[0.07] border border-amber-400/20 border-l-4 border-l-amber-400"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/15 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-7 h-7 text-amber-300" />
                </div>
                <div>
                  <p className="text-xs font-black text-amber-400 uppercase tracking-[0.3em] mb-2">Key Takeaway</p>
                  {/* Large italic quote — readable at the back of the room */}
                  <p className="text-3xl text-white font-bold italic leading-snug">
                    "{renderText(slide.insight)}"
                  </p>
                </div>
              </motion.div>
            )}

            {/* ── QUIZ OPTIONS ── */}
            {slide.type === 'quiz' && slide.options && (
              <div className="grid grid-cols-2 gap-5 mt-4">
                {slide.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === slide.correctAnswer;
                  const showFeedback = selectedOption !== null;

                  return (
                    <motion.button
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      onClick={() => setSelectedOption(idx)}
                      disabled={showFeedback}
                      className={cn(
                        'p-8 rounded-3xl text-left transition-all flex items-center justify-between gap-4 border-2',
                        !showFeedback
                          ? 'bg-white/[0.04] border-white/10 hover:bg-white/[0.09] hover:border-white/20 cursor-pointer'
                          : isSelected && isCorrect
                          ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300'
                          : isSelected && !isCorrect
                          ? 'bg-red-500/20 border-red-400/60 text-red-300'
                          : isCorrect
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300/60'
                          : 'bg-white/[0.02] border-transparent opacity-30'
                      )}
                    >
                      {/* Large option label for class visibility */}
                      <span className="text-2xl font-bold leading-snug">{renderText(option)}</span>
                      {showFeedback && isCorrect && <CheckCircle2 className="w-9 h-9 shrink-0" />}
                      {showFeedback && isSelected && !isCorrect && <XCircle className="w-9 h-9 shrink-0" />}
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* ── CODE BLOCK ── */}
            {slide.code && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full"
              >
                <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_8px_60px_rgba(0,0,0,0.6)]">
                  {/* Code titlebar */}
                  <div className="px-8 py-4 bg-white/[0.04] border-b border-white/[0.06] flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-black text-white/40 uppercase tracking-[0.35em]">
                        {slide.language || 'source'}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500/50" />
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-500/50" />
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/50" />
                    </div>
                  </div>
                  {/* 
                    PROJECTOR KEY: text-2xl mono, generous line-height, 
                    high-contrast background so code is readable from distance 
                  */}
                  <pre
                    className="p-10 overflow-auto text-[1.35rem] font-mono leading-[1.75] text-white/90 bg-[#0d0d14] max-h-[55vh] scrollbar-hide"
                    dangerouslySetInnerHTML={{ __html: highlightCode(slide.code, slide.language) }}
                  />
                </div>
              </motion.div>
            )}

            {/* Bottom padding for scroll breathing room */}
            <div className="h-8" />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── KEYBOARD HINT BAR (bottom) ───────────────────────────── */}
      <div className="relative z-20 flex items-center justify-center gap-8 py-3 border-t border-white/[0.04] bg-black/20">
        {[
          ['←', 'Previous'],
          ['→ / Space', 'Next'],
          ['N', 'Notes'],
        ].map(([key, action]) => (
          <span key={key} className="flex items-center gap-2 text-white/20 text-xs font-semibold">
            <kbd className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] font-mono text-white/30 text-[11px]">
              {key}
            </kbd>
            {action}
          </span>
        ))}
      </div>

      {/* ── INSTRUCTOR NOTES PANEL ───────────────────────────────── */}
      <AnimatePresence>
        {showNotes && (
          <motion.aside
            initial={{ x: 420, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 420, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="absolute right-0 top-0 bottom-0 w-[420px] z-50 flex flex-col bg-[#0f0f1a]/95 backdrop-blur-2xl border-l border-white/[0.08] shadow-[-40px_0_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-black text-white">Instructor Notes</h3>
              </div>
              <button
                onClick={() => setShowNotes(false)}
                className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors text-white/30 hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-8">
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-[0.25em]">
                Slide: {slide.title}
              </p>
              <textarea
                value={note}
                onChange={(e) => saveNote(e.target.value)}
                placeholder="Add your teaching notes here…"
                className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-white/80 text-lg font-medium resize-none focus:outline-none focus:border-primary/40 transition-all placeholder:text-white/15 leading-relaxed"
              />
            </div>

            <div className="mx-8 mb-8 p-5 rounded-2xl bg-primary/[0.06] border border-primary/20 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-primary/70 font-medium leading-relaxed">
                Notes are saved locally in the browser and will appear when you return to this slide.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}