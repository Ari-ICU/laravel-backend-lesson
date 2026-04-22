"use client";

import React from 'react';
import { Slide } from '@/data/curriculum';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Book, Lightbulb, Code2, ArrowRight, ArrowLeft, Layers, Globe, ChevronRight, HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

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

export function SlideViewer({ 
  slide, onNext, onPrev, isFirst, isLast, currentSlideIndex, totalSlides, moduleTitle, lessonTitle 
}: SlideViewerProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  // Reset selection when slide changes
  useEffect(() => {
    setSelectedOption(null);
  }, [slide.id]);

  const highlightCode = (code: string, lang: string = 'php') => {
    if (!code) return "";
    
    let escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Strategy: Highlight keywords, then variables, then comments.
    // Use placeholders for strings to prevent inner-string highlighting.
    const strings: string[] = [];
    escaped = escaped.replace(/"(.*?)"|'(.*?)'/g, (match) => {
      strings.push(`<span class="text-emerald-400">${match}</span>`);
      return `___STR${strings.length - 1}___`;
    });

    if (lang === 'php') {
      escaped = escaped
        .replace(/\b(public|private|protected|function|class|extends|return|new|use|namespace|if|else|elseif|foreach|as|while|for|Route|echo)\b/g, '<span class="text-primary font-black">$1</span>')
        .replace(/(\$[a-zA-Z0-9_]+)/g, '<span class="text-amber-400 font-bold">$1</span>')
        .replace(/(::|-&gt;)/g, '<span class="text-white/40">$1</span>');
    } else if (lang === 'sql') {
      escaped = escaped
        .replace(/\b(SELECT|FROM|WHERE|ORDER BY|DESC|ASC|INSERT INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|id|string|text|timestamps)\b/g, '<span class="text-primary font-black">$1</span>');
    } else if (lang === 'bash') {
      escaped = escaped
        .replace(/\b(composer|php|artisan|require|install|update|make:controller|make:model|serve|laravel new)\b/g, '<span class="text-primary font-black">$1</span>');
    }

    // Comments
    escaped = escaped.replace(/\/\/.*$|#.*$|--.*$/gm, (match) => `<span class="text-white/30">${match}</span>`);

    // Restore strings
    strings.forEach((str, i) => {
      escaped = escaped.replace(`___STR${i}___`, str);
    });

    return escaped;
  };

  const getIcon = () => {
    switch (slide.type) {
      case 'code': return <Code2 className="w-6 h-6" />;
      case 'concept': return <Layers className="w-6 h-6" />;
      case 'intro': return <Globe className="w-6 h-6" />;
      case 'quiz': return <HelpCircle className="w-6 h-6" />;
      default: return <Book className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background relative">
      {/* Dynamic Background based on type */}
      <div className={cn(
        "absolute inset-0 opacity-10 blur-[150px] transition-all duration-1000",
        slide.type === 'code' ? "bg-emerald-500/20" : 
        slide.type === 'quiz' ? "bg-amber-500/10" : "bg-primary/20"
      )} />

      {/* Header with Breadcrumbs */}
      <header className="px-12 py-6 flex justify-between items-center z-10 border-b border-white/5 bg-white/[0.01] backdrop-blur-md">
        <div className="flex-1">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3">
            <span className="hover:text-primary transition-colors cursor-default">{moduleTitle}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{lessonTitle}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl transition-all",
              slide.type === 'code' ? "bg-emerald-500/20 text-emerald-400" : 
              slide.type === 'quiz' ? "bg-amber-500/20 text-amber-400" : "bg-primary/20 text-primary"
            )}>
              {getIcon()}
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white">
              {slide.title}
            </h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-6">
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1.5 transition-all rounded-full",
                    i === currentSlideIndex ? "w-8 bg-primary" : "w-2 bg-white/10"
                  )} 
                />
              ))}
            </div>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
              Progress: {Math.round(((currentSlideIndex + 1) / totalSlides) * 100)}%
            </span>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={onPrev}
              disabled={isFirst}
              className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all border border-white/5",
                isFirst ? "opacity-10 cursor-not-allowed" : "hover:bg-white/10 text-white/60 hover:text-white"
              )}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={onNext}
              disabled={isLast}
              className={cn(
                "px-8 h-12 rounded-2xl flex items-center gap-3 transition-all font-black text-sm uppercase tracking-widest shadow-2xl",
                isLast ? "opacity-20 cursor-not-allowed" : "bg-primary text-white shadow-primary/30 hover:scale-[1.02] active:scale-95"
              )}
            >
              {isLast ? 'Complete' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-y-auto z-10 scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col p-16 gap-16 min-h-full items-center"
          >
            {/* Left Content Side / Question Side */}
            <div className={cn(
              "flex flex-col transition-all duration-700 w-full max-w-6xl",
              (!slide.code && slide.type !== 'quiz') ? "flex-1 justify-center items-center text-center" : "text-left"
            )}>
              <div className="space-y-12 w-full">
                {slide.content.map((paragraph, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.15 }}
                    key={idx} 
                    className={cn(
                      "flex items-start gap-8 group",
                      slide.isList === false && "block text-left"
                    )}
                  >
                    {slide.isList !== false && slide.type !== 'quiz' && (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-2 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--color-primary),0.5)]" />
                      </div>
                    )}
                    <p className={cn(
                      "text-3xl text-white font-medium leading-[1.4] tracking-tight text-left",
                      !slide.code && slide.type !== 'quiz' && "text-3xl leading-[1.3]",
                      slide.isList === false && "text-left"
                    )}>
                      {paragraph.split('**').map((part, i) => 
                        i % 2 === 1 ? <span key={i} className="text-primary font-black px-1">{part}</span> : part
                      )}
                    </p>
                  </motion.div>
                ))}
              </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 w-full flex flex-col gap-6"
                >
                  {slide.link && (
                    <a 
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit px-10 py-5 rounded-3xl bg-primary text-white font-black text-xl uppercase tracking-widest flex items-center gap-4 hover:scale-[1.05] transition-all shadow-2xl shadow-primary/40 group"
                    >
                      <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                      {slide.linkText || 'Download Now'}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  )}

                  {slide.insight && (
                    <div className="glass-card bg-primary/5 border-primary/20 border-l-4 border-l-primary p-10 text-left">
                      <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                          <Lightbulb className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3">Key Takeaway</h4>
                          <p className="text-2xl text-white font-bold leading-relaxed italic">
                            "{slide.insight}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
            </div>

            {/* Bottom Side (Code / Quiz Options) */}
            <div className="w-full max-w-6xl flex flex-col gap-12">
              {slide.type === 'quiz' && slide.options && (
                <div className="grid grid-cols-2 gap-6 w-full">
                  {slide.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === slide.correctAnswer;
                    const showFeedback = selectedOption !== null;

                    return (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        onClick={() => setSelectedOption(idx)}
                        disabled={showFeedback}
                        className={cn(
                          "p-10 rounded-[2.5rem] text-left transition-all flex items-center justify-between group border-2",
                          !showFeedback ? "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10" :
                          isSelected && isCorrect ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" :
                          isSelected && !isCorrect ? "bg-red-500/20 border-red-500/40 text-red-400" :
                          isCorrect ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400/60" : "bg-white/[0.02] border-transparent opacity-40"
                        )}
                      >
                        <span className="text-3xl font-bold">{option}</span>
                        {showFeedback && isCorrect && <CheckCircle2 className="w-10 h-10" />}
                        {showFeedback && isSelected && !isCorrect && <XCircle className="w-10 h-10" />}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {slide.code && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <div className="glass-card p-0 overflow-hidden flex flex-col border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                    <div className="px-10 py-6 border-b border-white/10 bg-white/[0.03] flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-emerald-500/20">
                          <Code2 className="w-6 h-6 text-emerald-400" />
                        </div>
                        <span className="text-xs font-black text-white/40 uppercase tracking-[0.4em]">{slide.language || 'source code'}</span>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500/40" />
                        <div className="w-4 h-4 rounded-full bg-amber-500/40" />
                        <div className="w-4 h-4 rounded-full bg-emerald-500/40" />
                      </div>
                    </div>
                    <pre 
                      className="p-12 overflow-auto text-xl font-mono leading-[1.6] text-white/90 font-bold scrollbar-hide max-h-[50vh]"
                      dangerouslySetInnerHTML={{ __html: highlightCode(slide.code, slide.language) }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
