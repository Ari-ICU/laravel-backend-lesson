"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, MousePointer2, ArrowRight, Server, Database, Globe, CheckCircle, Send, UserCheck } from 'lucide-react';

export function FeatureTestingFlowAnimation({ isProjectorMode }: { isProjectorMode?: boolean }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Browser Simulation", icon: Monitor, color: "bg-blue-500" },
    { title: "Routing & Auth", icon: Server, color: "bg-indigo-500" },
    { title: "Business Logic", icon: Send, color: "bg-purple-500" },
    { title: "Database State", icon: Database, color: "bg-emerald-500" }
  ];

  const handleNext = () => {
    setActiveStep(prev => (prev + 1) % (steps.length + 1));
  };

  return (
    <div className={`relative w-full max-w-5xl min-h-[500px] flex flex-col items-center justify-center transition-all duration-500 ${isProjectorMode ? "scale-110" : ""}`}>
      
      {/* Legend */}
      <div className="absolute top-0 right-0 p-6 bg-white/50 backdrop-blur rounded-[2rem] border-2 border-black/5 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-[10px] font-black uppercase">End-to-End Coverage</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-[10px] font-black uppercase">Full App Booting</span>
        </div>
      </div>

      {/* Main Flow Container */}
      <div className="flex items-center justify-between w-full px-12 relative h-64">
        
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center gap-6 relative">
              <motion.div 
                animate={activeStep === idx ? { scale: 1.2, y: -10 } : { scale: 1, y: 0 }}
                className={`w-32 h-32 rounded-[2.5rem] border-4 flex items-center justify-center transition-all duration-500 ${activeStep >= idx ? `${step.color} border-black shadow-2xl text-white` : 'bg-white border-slate-100 text-slate-200'}`}
              >
                <step.icon className="w-16 h-16" />
                
                {/* Pointer Animation for Step 0 */}
                {idx === 0 && activeStep === 0 && (
                  <motion.div 
                    animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-0 right-0 text-black"
                  >
                    <MousePointer2 className="w-8 h-8 fill-white" />
                  </motion.div>
                )}
              </motion.div>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${activeStep === idx ? 'text-black' : 'text-slate-300'}`}>
                {step.title}
              </span>
              
              {/* Success Check */}
              {activeStep > idx && (
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute -top-4 -right-4 bg-white rounded-full border-2 border-black p-1 shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </motion.div>
              )}
            </div>

            {idx < steps.length - 1 && (
              <motion.div 
                animate={activeStep === idx ? { opacity: [0.2, 1, 0.2] } : { opacity: activeStep > idx ? 1 : 0.1 }}
                transition={activeStep === idx ? { repeat: Infinity, duration: 1 } : {}}
              >
                <ArrowRight className="w-10 h-10 text-black" />
              </motion.div>
            )}
          </React.Fragment>
        ))}

        {/* Final Assert Result */}
        {activeStep === 4 && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="bg-emerald-500 border-4 border-black px-16 py-8 rounded-[3rem] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex items-center gap-8">
               <UserCheck className="w-20 h-20 text-white" />
               <div className="flex flex-col text-white">
                  <span className="text-4xl font-black uppercase tracking-widest leading-none">Assert: OK</span>
                  <span className="text-sm font-bold uppercase tracking-widest opacity-80">Full User Flow Verified</span>
               </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Control Panel */}
      <div className="mt-20 flex flex-col items-center gap-6">
        <button
          onClick={handleNext}
          className="group relative px-12 py-5 bg-white border-4 border-black rounded-full font-black uppercase tracking-[0.2em] text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-4">
            {activeStep === 4 ? "RESET FLOW" : "NEXT STEP"}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </div>
          <motion.div 
            className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity"
          />
        </button>
        
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
          <Globe className="w-4 h-4" />
          Feature Testing: Simulating real-world scenarios
        </p>
      </div>
    </div>
  );
}
