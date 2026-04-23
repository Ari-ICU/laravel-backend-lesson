"use client";

import React, { useState, useEffect } from 'react';
import { Slide } from '@/data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, ArrowRight, ArrowLeft, Lightbulb,
  HelpCircle, CheckCircle2, XCircle, Trophy,
  BookOpen, ChevronRight, Globe, 
  Monitor, Copy, ExternalLink, Sparkles,
  ShieldCheck, Activity, Maximize2, Minimize2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { DeploymentAnimation } from './animations/DeploymentAnimation';
import { PerformanceAnimation } from './animations/PerformanceAnimation';
import { SecurityAnimation } from './animations/SecurityAnimation';
import { DatabaseAnimation } from './animations/DatabaseAnimation';
import { InheritanceAnimation } from './animations/InheritanceAnimation';
import { ClassObjectAnimation } from './animations/ClassObjectAnimation';
import { LoopsAnimation } from './animations/LoopsAnimation';
import { LogicAnimation } from './animations/LogicAnimation';
import { FunctionsAnimation } from './animations/FunctionsAnimation';
import { DataTypesAnimation } from './animations/DataTypesAnimation';
import { IOAnimation } from './animations/IOAnimation';
import { SyntaxAnimation } from './animations/SyntaxAnimation';
import { SqlNoSqlAnimation } from './animations/SqlNoSqlAnimation';
import { SqlSelectionAnimation } from './animations/SqlSelectionAnimation';
import { SqlManipulationAnimation } from './animations/SqlManipulationAnimation';
import { DatabaseKeysAnimation } from './animations/DatabaseKeysAnimation';
import { TeachingHUD } from './TeachingHUD';


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
  return text.en;
};

export function SlideViewer({
  slide, onNext, onPrev, isFirst, isLast,
  currentSlideIndex, totalSlides, moduleTitle, lessonTitle
}: SlideViewerProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [showHUD, setShowHUD] = useState(false);
  const [isProjectorMode, setIsProjectorMode] = useState(false);
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);
  const [copied, setCopied] = useState(false);


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
      if (e.key === 'ArrowRight' || e.key === ' ') { 
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault(); 
          if (!isLast) onNext(); 
        }
      }
      if (e.key === 'ArrowLeft') { 
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault(); 
          if (!isFirst) onPrev(); 
        }
      }
      if (e.key.toLowerCase() === 'n') {
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          setShowNotes(v => !v);
        }
      }
      if (e.key.toLowerCase() === 'p') {
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          setIsProjectorMode(v => !v);
        }
      }
      if (e.key.toLowerCase() === 'h') {
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          setShowHUD(v => !v);
        }
      }
      if (e.key.toLowerCase() === 'x') {
        if (document.activeElement?.tagName !== 'TEXTAREA') {
          setIsCodeExpanded(v => !v);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isFirst, isLast, onNext, onPrev, setIsCodeExpanded]);

  const copyCode = () => {
    if (slide.code) {
      navigator.clipboard.writeText(slide.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const highlightCode = (code: string, lang: string = 'php') => {
    if (!code) return '';
    let escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const placeholders: { id: string; content: string }[] = [];
    let placeholderIdx = 0;

    // 1. Unified Protection for Strings and Comments
    // This prevents strings inside comments (and vice versa) from being double-processed
    const unifiedRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\/\/.*$|#.*$|--.*$)/gm;
    escaped = escaped.replace(unifiedRegex, (match, str, cmt) => {
      const id = `___PH${placeholderIdx++}___`;
      if (str) {
        placeholders.push({ id, content: `<span class="text-emerald-300 font-medium">${str}</span>` });
      } else {
        placeholders.push({ id, content: `<span class="text-white/40 font-normal">${cmt}</span>` });
      }
      return id;
    });

    // 2. Highlight Keywords in the remaining code
    if (lang === 'php') {
      escaped = escaped
        .replace(/\b(public|private|protected|function|class|extends|return|new|use|namespace|if|else|elseif|foreach|as|while|for|echo|abstract|static|interface|trait)\b/g,
          '<span class="text-sky-300 font-black">$1</span>')
        .replace(/(&lt;\?php|\?&gt;)/g, '<span class="text-white/30">$1</span>')
        .replace(/(\$[a-zA-Z0-9_]+)/g, '<span class="text-secondary">$1</span>')
        .replace(/(::|-&gt;)/g, '<span class="text-white/40">$1</span>')
        .replace(/\b(App|User|Controller|Request|Route|DB|Schema|Blueprint)\b/g, '<span class="text-primary">$1</span>');
    }

    // 3. Restore all protected blocks
    placeholders.forEach(ph => {
      escaped = escaped.replace(ph.id, ph.content);
    });

    return escaped;
  };

  const renderAnimation = () => {
    switch (slide.animation) {
      case 'deployment': return <DeploymentAnimation />;
      case 'performance': return <PerformanceAnimation />;
      case 'security': return <SecurityAnimation />;
      case 'database': return <DatabaseAnimation />;
      case 'inheritance': return <InheritanceAnimation />;
      case 'class_object': return <ClassObjectAnimation />;
      case 'loops': return <LoopsAnimation />;
      case 'logic': return <LogicAnimation />;
      case 'functions': return <FunctionsAnimation />;
      case 'data_types': return <DataTypesAnimation />;
      case 'io': return <IOAnimation />;
      case 'syntax': return <SyntaxAnimation />;
      case 'sql_nosql': return <SqlNoSqlAnimation />;
      case 'sql_selection': return <SqlSelectionAnimation />;
      case 'sql_manipulation': return <SqlManipulationAnimation />;
      case 'database_keys': return <DatabaseKeysAnimation />;
      default: return null;
    } 
  };

  const typeLabel: Record<string, { label: string; color: string; icon: any }> = {
    intro:   { label: 'Introduction',  color: 'bg-primary/10 text-primary border-primary/20', icon: Sparkles },
    concept: { label: 'Concept',       color: 'bg-primary/10 text-primary border-primary/20', icon: Lightbulb },
    code:    { label: 'Implementation', color: 'bg-secondary/10 text-secondary border-secondary/20', icon: Code2 },
    quiz:    { label: 'Knowledge Check', color: 'bg-secondary/10 text-secondary border-secondary/20', icon: HelpCircle },
    summary: { label: 'Course Summary',  color: 'bg-primary/10 text-primary border-primary/20', icon: Trophy },
  };

  const badge = typeLabel[slide.type] ?? { label: slide.type, color: 'bg-white/5 text-white/40 border-white/10', icon: BookOpen };

  return (
    <div className={cn(
      "flex-1 flex flex-col h-screen overflow-hidden bg-background relative transition-all duration-700",
      isProjectorMode ? "text-lg" : "text-base"
    )}>

      {/* ── Ambient Background ──────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      {/* ── TOP BAR ─────────────────────────────────────────────── */}
      <header className="relative z-30 h-20 flex items-center justify-between px-10 bg-background/40 backdrop-blur-md border-b border-white/[0.03]">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] leading-none mb-1">{moduleTitle}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white/80 truncate max-w-[200px]">{lessonTitle}</span>
              <div className={cn(
                'px-2.5 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest border flex items-center gap-1.5',
                badge.color
              )}>
                <badge.icon className="w-3 h-3" />
                {badge.label}
              </div>
            </div>
          </div>
        </div>

        {/* Center: Progress */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div key={i} className={cn(
                'h-1.5 rounded-full transition-all duration-500',
                i === currentSlideIndex
                  ? 'w-8 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : i < currentSlideIndex
                  ? 'w-1.5 bg-white/30'
                  : 'w-1.5 bg-white/10'
              )} />
            ))}
          </div>
          <span className="font-mono text-[10px] font-bold text-white/20 ml-2">
            {String(currentSlideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsProjectorMode(!isProjectorMode)}
            className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center transition-all border',
              isProjectorMode
                ? 'bg-primary/5 border-primary/20' 
                : 'border-transparent text-white/60 hover:text-white/90 hover:bg-white/[0.03]'
            )}
            title="Projector Mode (P)"
          >
            <Monitor className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowNotes(v => !v)}
            className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center transition-all border',
              showNotes
                ? 'bg-primary border-primary/40 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                : 'border-transparent text-white/60 hover:text-white/90 hover:bg-white/[0.03]'
            )}
            title="Instructor Notes (N)"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          <div className="h-6 w-px bg-white/5 mx-1" />

          <button
            onClick={() => {
              setIsCodeExpanded(false);
              onPrev();
            }}
            disabled={isFirst}
            className={cn(
              'w-10 h-10 rounded-xl flex items-center justify-center border transition-all',
              isFirst
                ? 'opacity-20 cursor-not-allowed border-white/5 text-white/20'
                : 'border-transparent text-white/60 hover:text-white/90 hover:bg-white/[0.03]'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setIsCodeExpanded(false);
              onNext();
            }}
            disabled={isLast}
            className={cn(
              'px-6 h-10 rounded-xl flex items-center gap-2 font-black text-[11px] uppercase tracking-[0.15em] transition-all border',
              isLast
                ? 'opacity-20 cursor-not-allowed border-white/5 text-white/20'
                : 'bg-white text-black hover:bg-white/90 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]'
            )}
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* ── MAIN SLIDE BODY ─────────────────────────────────────── */}
      <main className="relative z-20 flex-1 overflow-y-auto scrollbar-hide py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "min-h-full flex flex-col gap-12 mx-auto w-full transition-all duration-500",
              isProjectorMode ? "max-w-[1100px] px-10" : "max-w-[1300px] px-20"
            )}
          >
            {/* Header Area */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-12 bg-primary/40" />
                <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Section {currentSlideIndex + 1}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={cn(
                  "font-black tracking-tight leading-[1.05] text-white transition-all duration-500",
                  isProjectorMode ? "text-7xl" : "text-6xl",
                  slide.type === 'summary' && "gradient-text"
                )}
              >
                {slide.title}
              </motion.h1>
            </div>

            {/* Content Body */}
            {/* Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1">
              {/* Left Column: Core Content */}
              {!isCodeExpanded && (
                <div className={cn(
                  "space-y-12",
                  (slide.code || slide.useCase) ? "lg:col-span-7" : "lg:col-span-12"
                )}>
                {((slide.content && slide.content.length > 0) || (slide.body && slide.body.length > 0)) && (
                  <div className="space-y-8">
                    {(slide.content || slide.body || []).map((paragraph, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className={cn(
                          "flex items-start gap-6 group",
                          slide.isList === false && "block"
                        )}
                      >
                        {slide.isList !== false && slide.type !== 'quiz' && (
                          <div className="mt-3 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/10 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-125 transition-transform" />
                        )}
                        <p className={cn(
                          "font-medium text-white leading-relaxed transition-all duration-500",
                          isProjectorMode ? "text-4xl" : "text-3xl"
                        )}>
                          {renderText(paragraph).split('**').map((part, i) =>
                            i % 2 === 1
                              ? <span key={i} className="text-white font-black">{part}</span>
                              : part
                          )}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Right Column: Technical Details */}
              {(slide.code || slide.useCase) && (
                <div className={cn(
                  "space-y-8 transition-all duration-500",
                  isCodeExpanded ? "lg:col-span-12" : "lg:col-span-5"
                )}>
                  {/* Real-world Use Case */}
                  {!isCodeExpanded && slide.useCase && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-10 rounded-[3rem] bg-primary/5 border border-primary/20 space-y-4 relative group overflow-hidden"
                    >
                      <div className="flex items-center gap-4 text-primary">
                        <Activity className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Real-World Use Case</span>
                      </div>
                      <p className={cn(
                        "font-black tracking-tight text-white leading-relaxed",
                        isProjectorMode ? "text-2xl" : "text-xl"
                      )}>
                        {renderText(slide.useCase)}
                      </p>
                    </motion.div>
                  )}

                  {/* Enhanced Code Block */}
                  {slide.code && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "rounded-[3rem] bg-[#05050a] border border-white/10 overflow-hidden shadow-2xl flex flex-col group/code transition-all duration-500",
                        isCodeExpanded && "ring-2 ring-primary/40 shadow-primary/10"
                      )}
                    >
                      <div className="px-8 py-5 bg-white/[0.03] border-b border-white/[0.05] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/40" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                          </div>
                          <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] ml-4">Snippet</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/5 text-[10px] font-black text-white/40 hover:text-white transition-all"
                            title={isCodeExpanded ? "Shrink View" : "Expand Full Width"}
                          >
                            {isCodeExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                            {isCodeExpanded ? 'SHRINK' : 'EXPAND'}
                          </button>
                          <button 
                            onClick={copyCode}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/5 text-[10px] font-black text-white/40 hover:text-white transition-all"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            {copied ? 'COPIED' : 'COPY'}
                          </button>
                        </div>
                      </div>
                      <pre className={cn(
                        "p-10 overflow-x-auto custom-scrollbar bg-black/40 transition-all duration-500",
                        isCodeExpanded ? "min-h-[400px]" : "max-h-[500px]"
                      )}>
                        <code 
                          className={cn(
                            "font-mono leading-relaxed block",
                            isCodeExpanded || isProjectorMode ? "text-2xl" : "text-xl"
                          )}
                          dangerouslySetInnerHTML={{ __html: highlightCode(slide.code, slide.language) }} 
                        />
                      </pre>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

              {/* Animation Section */}
              {slide.animation && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-[3rem] p-12 glass-panel border border-white/[0.05] flex justify-center items-center"
                >
                  {renderAnimation()}
                </motion.div>
              )}

              {/* Insight / Key Takeaway */}
              {slide.insight && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative p-10 rounded-[2.5rem] bg-primary/[0.03] border border-primary/20 overflow-hidden group/insight"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover/insight:opacity-[0.07] transition-opacity">
                    <Lightbulb className="w-32 h-32 text-primary -rotate-12" />
                  </div>
                  <div className="relative flex items-start gap-8">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                      <Lightbulb className="w-8 h-8 text-primary fill-primary/10" />
                    </div>
                    <div className="space-y-3">
                      <p className="text-[11px] font-black text-primary/60 uppercase tracking-[0.4em]">Expert Insight</p>
                      <p className={cn(
                        "text-white font-bold italic leading-snug transition-all duration-500",
                        isProjectorMode ? "text-5xl" : "text-4xl"
                      )}>
                        "{renderText(slide.insight)}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quiz Grid */}
              {slide.type === 'quiz' && slide.options && (
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {slide.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === slide.correctAnswer;
                    const showFeedback = selectedOption !== null;

                    return (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        onClick={() => setSelectedOption(idx)}
                        disabled={showFeedback}
                        className={cn(
                          "relative p-10 rounded-[2.5rem] text-left transition-all border-2 flex flex-col gap-4 overflow-hidden group/quiz",
                          !showFeedback
                            ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10 hover:translate-y-[-4px]"
                            : isSelected && isCorrect
                            ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-300"
                            : isSelected && !isCorrect
                            ? "bg-rose-500/10 border-rose-500/40 text-rose-300"
                            : isCorrect
                            ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-300/60"
                            : "bg-white/[0.01] border-transparent opacity-20"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center border font-black text-lg transition-all",
                            !showFeedback ? "bg-white/5 border-white/10 text-white/40 group-hover/quiz:bg-primary group-hover/quiz:text-white group-hover/quiz:border-primary" :
                            isCorrect ? "bg-emerald-500 border-emerald-500 text-white" :
                            isSelected && !isCorrect ? "bg-rose-500 border-rose-500 text-white" : "bg-white/5 border-white/5"
                          )}>
                            {String.fromCharCode(65 + idx)}
                          </div>
                          {showFeedback && isCorrect && <CheckCircle2 className="w-8 h-8 text-emerald-400" />}
                          {showFeedback && isSelected && !isCorrect && <XCircle className="w-8 h-8 text-rose-400" />}
                        </div>
                        <span className={cn(
                          "font-black leading-tight tracking-tight transition-all duration-500",
                          isProjectorMode ? "text-4xl" : "text-3xl"
                        )}>
                          {renderText(option)}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* External Resource */}
              {slide.link && (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center flex items-center gap-6 px-16 py-8 rounded-[3rem] bg-white text-black font-black text-xl uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.15)] group"
                >
                  <Globe className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                  {slide.linkText || 'EXPLORE RESOURCE'}
                  <ExternalLink className="w-6 h-6 opacity-40" />
                </motion.a>
              )}

            {/* Bottom Spacer */}
            <div className="h-20" />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── KEYBOARD HINT BAR ───────────────────────────────────── */}
      <footer className="relative z-30 h-10 flex items-center justify-center gap-10 bg-black/40 backdrop-blur-xl border-t border-white/[0.03]">
        {[
          { key: '←', label: 'PREV' },
          { key: '→', label: 'NEXT' },
          { key: 'N', label: 'NOTES' },
          { key: 'P', label: 'PROJECTOR' },
          { key: 'X', label: 'FULL CODE' },
          { key: 'H', label: 'TOOLS' },
        ].map((hint) => (
          <div key={hint.key} className="flex items-center gap-2">
            <kbd className="px-2 py-0.5 rounded bg-white text-black text-[10px] font-black">{hint.key}</kbd>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">{hint.label}</span>
          </div>
        ))}
      </footer>

      {/* ── INSTRUCTOR NOTES ────────────────────────────────────── */}
      <AnimatePresence>
        {showNotes && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 bottom-0 w-[450px] z-50 flex flex-col bg-[#05050a]/95 backdrop-blur-3xl border-l border-white/[0.05] shadow-[-50px_0_100px_rgba(0,0,0,0.8)]"
          >
            <div className="h-20 flex items-center justify-between px-8 border-b border-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-black text-white tracking-tight">Instructor Notes</h3>
              </div>
              <button onClick={() => setShowNotes(false)} className="p-2 rounded-xl hover:bg-white/[0.05] text-white/20 hover:text-white transition-all">
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 p-8 flex flex-col gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Current Slide</span>
                <p className="text-xl font-bold text-white leading-tight">{slide.title}</p>
              </div>
              <textarea
                value={note}
                onChange={(e) => saveNote(e.target.value)}
                placeholder="Write your teaching pointers here..."
                className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 text-white/80 text-xl font-medium resize-none focus:outline-none focus:border-primary/40 focus:bg-white/[0.04] transition-all placeholder:text-white/10 leading-relaxed"
              />
              <div className="p-6 rounded-2xl bg-primary/[0.03] border border-primary/10 flex gap-4">
                <Lightbulb className="w-6 h-6 text-primary shrink-0" />
                <p className="text-xs text-primary/60 font-bold leading-relaxed uppercase tracking-wider">
                  Notes are stored locally. Useful for live workshops and recurring classes.
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      {/* Teaching HUD Overlay */}
      <TeachingHUD isActive={showHUD} onClose={() => setShowHUD(false)} />
    </div>
  );
}