"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, Eraser, MousePointer2, Timer, RotateCcw, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeachingHUDProps {
  isActive: boolean;
  onClose: () => void;
}

export function TeachingHUD({ isActive, onClose }: TeachingHUDProps) {
  const [mode, setMode] = useState<'draw' | 'spotlight' | 'none'>('none');
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ── Timer Logic ───────────────────────────────────────────
  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // ── Drawing Logic ────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call

    if (mode !== 'draw' || !canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [mode]);

  const startDrawing = (e: React.MouseEvent) => {
    if (mode !== 'draw') return;
    setIsDrawing(true);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(e.clientX, e.clientY);
  };

  const draw = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (!isDrawing || mode !== 'draw') return;
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.lineTo(e.clientX, e.clientY);
    ctx?.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);
  };

  if (!isActive) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] pointer-events-none"
      onMouseMove={draw}
    >
      {/* ── Spotlight Layer ────────────────────────────────────── */}
      <AnimatePresence>
        {mode === 'spotlight' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 pointer-events-auto"
            style={{
              clipPath: `circle(150px at ${mousePos.x}px ${mousePos.y}px)`
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Drawing Canvas ─────────────────────────────────────── */}
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 cursor-crosshair transition-opacity",
          mode === 'draw' ? "pointer-events-auto opacity-100" : "opacity-0"
        )}
        onMouseDown={startDrawing}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
      />

      {/* ── Toolbar ────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-2xl border border-black/10 rounded-[2.5rem] shadow-2xl"
      >
        {/* Timer Display */}
        <div className="flex items-center gap-4 px-4 border-r border-black/10 mr-2">
          <div className="w-10 h-10 rounded-xl bg-black/[0.05] flex items-center justify-center">
            <Timer className={cn("w-5 h-5", isTimerRunning ? "text-primary animate-pulse" : "text-black/20")} />
          </div>
          <span className="text-xl font-mono font-black text-black w-16">{formatTime(time)}</span>
          <button 
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="p-2 rounded-lg hover:bg-black/10 text-black/40 transition-colors"
          >
            <RotateCcw className="w-4 h-4" onClick={(e) => { e.stopPropagation(); setTime(0); }} />
          </button>
        </div>

        {/* Tools */}
        <div className="flex items-center gap-2">
          <ToolButton 
            active={mode === 'draw'} 
            onClick={() => setMode(mode === 'draw' ? 'none' : 'draw')}
            icon={<Pencil className="w-5 h-5" />}
            label="Pen (D)"
          />
          <ToolButton 
            active={mode === 'spotlight'} 
            onClick={() => setMode(mode === 'spotlight' ? 'none' : 'spotlight')}
            icon={<MousePointer2 className="w-5 h-5" />}
            label="Spotlight (S)"
          />
          <ToolButton 
            active={false} 
            onClick={clearCanvas}
            icon={<Eraser className="w-5 h-5" />}
            label="Clear"
          />
        </div>

        <div className="w-px h-8 bg-black/10 mx-2" />

        <button 
          onClick={onClose}
          className="p-3 rounded-full hover:bg-rose-500/20 text-rose-400 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
}

function ToolButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-4 rounded-[1.25rem] transition-all flex flex-col items-center gap-2",
        active ? "bg-primary text-white shadow-lg shadow-primary/30" : "hover:bg-black/5 text-black/40 hover:text-black"
      )}
    >
      {icon}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-white border border-black/10 text-[10px] font-black whitespace-nowrap text-black opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </button>
  );
}
