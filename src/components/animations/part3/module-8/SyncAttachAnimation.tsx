"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, MinusCircle, RefreshCw, ToggleLeft, ArrowUpDown } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type Op = 'attach' | 'detach' | 'sync' | 'syncWithout' | 'toggle';

interface OpConfig {
  label: string;
  code: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  input: number[];
  // Given a current pivot state, return the next state
  apply: (current: number[]) => number[];
}

// ─── Operation definitions ────────────────────────────────────────────────────
const OPS: Record<Op, OpConfig> = {
  attach: {
    label: 'attach()',
    code: '->attach([3])',
    color: 'blue',
    icon: <PlusCircle className="w-4 h-4" />,
    description: 'បន្ថែម Role 3 ចូល Pivot (មិន check duplicate)',
    input: [3],
    apply: (cur) => [...cur, 3],          // intentionally allows duplicate
  },
  detach: {
    label: 'detach()',
    code: '->detach([1])',
    color: 'red',
    icon: <MinusCircle className="w-4 h-4" />,
    description: 'ដក Role 1 ចេញពី Pivot',
    input: [1],
    apply: (cur) => cur.filter(id => id !== 1),
  },
  sync: {
    label: 'sync()',
    code: '->sync([1, 3])',
    color: 'emerald',
    icon: <RefreshCw className="w-4 h-4" />,
    description: 'Pivot = [1, 3] ← លុបដែលលើស, បន្ថែមដែលខ្វះ',
    input: [1, 3],
    apply: () => [1, 3],
  },
  syncWithout: {
    label: 'syncWithoutDetaching()',
    code: '->syncWithoutDetaching([4])',
    color: 'violet',
    icon: <ArrowUpDown className="w-4 h-4" />,
    description: 'Append Role 4 — មិនលុប Record ចាស់',
    input: [4],
    apply: (cur) => cur.includes(4) ? cur : [...cur, 4],
  },
  toggle: {
    label: 'toggle()',
    code: '->toggle([2, 3])',
    color: 'amber',
    icon: <ToggleLeft className="w-4 h-4" />,
    description: 'Role 2 → លុប (មានហើយ)  |  Role 3 → បន្ថែម (គ្មាន)',
    input: [2, 3],
    apply: (cur) => {
      let next = [...cur];
      [2, 3].forEach(id => {
        if (next.includes(id)) next = next.filter(x => x !== id);
        else next.push(id);
      });
      return next;
    },
  },
};

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; pill: string; pillText: string }> = {
  blue:    { bg: 'bg-blue-500',    text: 'text-blue-600',    border: 'border-blue-200',   pill: 'bg-blue-100',    pillText: 'text-blue-700'    },
  red:     { bg: 'bg-red-500',     text: 'text-red-600',     border: 'border-red-200',    pill: 'bg-red-100',     pillText: 'text-red-700'     },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200',pill: 'bg-emerald-100', pillText: 'text-emerald-700' },
  violet:  { bg: 'bg-violet-500',  text: 'text-violet-600',  border: 'border-violet-200', pill: 'bg-violet-100',  pillText: 'text-violet-700'  },
  amber:   { bg: 'bg-amber-500',   text: 'text-amber-600',   border: 'border-amber-200',  pill: 'bg-amber-100',   pillText: 'text-amber-700'   },
};

const INITIAL_PIVOT = [1, 2];
const ALL_ROLES = [1, 2, 3, 4];
const OPS_ORDER: Op[] = ['attach', 'detach', 'sync', 'syncWithout', 'toggle'];

// ─── Component ────────────────────────────────────────────────────────────────
export function SyncAttachAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeOp, setActiveOp] = useState<Op>('sync');
  const [pivot, setPivot] = useState<number[]>(INITIAL_PIVOT);
  const [isAnimating, setIsAnimating] = useState(false);
  const [applied, setApplied] = useState(false);

  // Auto-cycle through operations
  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveOp(prev => {
        const idx = OPS_ORDER.indexOf(prev);
        return OPS_ORDER[(idx + 1) % OPS_ORDER.length];
      });
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  // Reset pivot and applied state whenever op changes
  useEffect(() => {
    setPivot(INITIAL_PIVOT);
    setApplied(false);
  }, [activeOp]);

  // Auto-apply the operation after a delay
  useEffect(() => {
    if (applied) return;
    const t = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setPivot(prev => OPS[activeOp].apply(prev));
        setApplied(true);
        setIsAnimating(false);
      }, 600);
    }, 1800);
    return () => clearTimeout(t);
  }, [activeOp, applied]);

  const op = OPS[activeOp];
  const c = COLOR_MAP[op.color];

  const handleTabClick = useCallback((key: Op) => {
    if (key === activeOp) return;
    setActiveOp(key);
  }, [activeOp]);

  return (
    <div className="w-full max-w-3xl flex flex-col gap-5 select-none">

      {/* ── Tabs ── */}
      <div className="flex flex-wrap gap-2 justify-center">
        {OPS_ORDER.map(key => {
          const cfg = OPS[key];
          const col = COLOR_MAP[cfg.color];
          const isActive = key === activeOp;
          return (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-lg font-bold border-2 transition-all duration-200 cursor-pointer
                ${isActive
                  ? `${col.bg} text-white border-transparent shadow-md scale-105`
                  : 'bg-white text-black border-slate-200 hover:border-slate-300 hover:scale-105'
                }`}
            >
              {cfg.icon}
              {cfg.label}
            </button>
          );
        })}
      </div>

      {/* ── Main visual ── */}
      <div className="flex items-center justify-between gap-6 px-4">

        {/* Input list */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="text-lg font-bold text-black uppercase tracking-widest">Input</div>
          <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-2">
            {ALL_ROLES.map(id => {
              const isSelected = op.input.includes(id);
              return (
                <div key={id}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-lg font-semibold transition-all
                    ${isSelected ? `${c.pill} ${c.pillText} border ${c.border}` : 'bg-white text-black border border-slate-100'}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-lg font-black
                    ${isSelected ? c.bg + ' text-white' : 'bg-slate-200 text-black'}`}>
                    {id}
                  </span>
                  Role {id}
                  {isSelected && <span className="ml-auto text-md opacity-70">selected</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow + method badge */}
        <div className="flex flex-col items-center gap-3 shrink-0">
          <motion.div
            animate={{ scale: isAnimating ? 1.3 : 1, rotate: isAnimating ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${c.bg}`}
          >
            {op.icon && React.cloneElement(op.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
          </motion.div>
          <div className={`font-mono text-lg font-bold px-2 py-1 rounded-lg ${c.pill} ${c.pillText} border ${c.border}`}>
            {op.code}
          </div>
          <AnimatePresence>
            {isAnimating && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="text-lg font-bold text-black"
              >
                running...
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pivot Table result */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <div className="text-lg font-bold text-black uppercase tracking-widest">Pivot Table</div>
          <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[164px] flex flex-col gap-2">
            <AnimatePresence mode="popLayout">
              {pivot.map((id, idx) => (
                <motion.div
                  key={`${id}-${idx}`}
                  layout
                  initial={{ opacity: 0, x: 30, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.85 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="flex justify-between items-center bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm text-lg"
                >
                  <span className="text-black font-mono">user:1</span>
                  <span className={`font-bold ${c.text}`}>role:{id}</span>
                </motion.div>
              ))}
              {pivot.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-black text-lg mt-4"
                >
                  (empty pivot)
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* ── Description bar ── */}
      <div className={`text-center text-lg font-semibold px-4 py-2 rounded-xl ${c.pill} ${c.pillText} border ${c.border}`}>
        {op.description}
      </div>

    </div>
  );
}
