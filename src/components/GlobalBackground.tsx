"use client";

import React from 'react';

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* Primary Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `
            linear-gradient(#000 1.5px, transparent 1.5px),
            linear-gradient(90deg, #000 1.5px, transparent 1.5px)
          `,
          backgroundSize: '80px 80px',
        }} 
      />

      {/* Secondary Fine Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }} 
      />

      {/* Elegant Radial Gradients for Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(244,63,94,0.03)_0%,transparent_50%)]" />

      {/* Noise Texture for Premium Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />
    </div>
  );
};
