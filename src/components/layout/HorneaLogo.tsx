'use client';

import React from 'react';

interface HorneaLogoProps {
  variant?: 'header' | 'hero' | 'icon';
  className?: string;
  darkText?: boolean;
}

export function HorneaLogo({ variant = 'header', className = '', darkText = true }: HorneaLogoProps) {
  const textColor = darkText ? '#0F172A' : '#FFFFFF';
  const goldColor = '#C59B27';

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className || "w-10 h-10"}
      >
        {/* Oven Arch Bricks */}
        <path
          d="M 15 75 A 35 35 0 0 1 85 75"
          stroke={goldColor}
          strokeWidth="6"
          strokeDasharray="9 2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 8 75 A 42 42 0 0 1 92 75"
          stroke={goldColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Base line */}
        <path d="M 10 75 L 90 75" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />
        
        {/* Flame */}
        <path
          d="M 50 25 C 42 38 35 48 35 58 C 35 66 41 72 50 72 C 59 72 65 66 65 58 C 65 48 58 38 50 25 Z"
          fill={goldColor}
        />
        <path
          d="M 50 40 C 45 48 42 54 42 60 C 42 64 45 68 50 68 C 55 68 58 64 58 60 C 58 54 55 48 50 40 Z"
          fill="#FFFDF9"
        />
      </svg>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        {/* Oven Arch + Flame Symbol */}
        <svg
          viewBox="0 0 160 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 sm:w-36 h-auto mb-4"
        >
          {/* Arch bricks outer curve */}
          <path
            d="M 20 100 A 60 60 0 0 1 140 100"
            stroke={goldColor}
            strokeWidth="10"
            strokeDasharray="14 3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 10 100 A 70 70 0 0 1 150 100"
            stroke={goldColor}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Base threshold */}
          <path d="M 15 100 L 145 100" stroke={goldColor} strokeWidth="4" strokeLinecap="round" />

          {/* Central Flame */}
          <path
            d="M 80 25 C 68 45 58 60 58 75 C 58 87 67 96 80 96 C 93 96 102 87 102 75 C 102 60 92 45 80 25 Z"
            fill={goldColor}
          />
          {/* Inner Flame Glow */}
          <path
            d="M 80 48 C 73 60 68 70 68 78 C 68 85 73 90 80 90 C 87 90 92 85 92 78 C 92 70 87 60 80 48 Z"
            fill="#FFFDF9"
          />
        </svg>

        {/* Brand Name HORNEA */}
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider uppercase text-slate-900 leading-none">
          HORNEA
        </h1>

        {/* Tagline */}
        <span className="block text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#C59B27] uppercase font-bold mt-3">
          MOMENTOS RECIÉN HORNEADOS
        </span>
      </div>
    );
  }

  {/* Header variant (compact horizontal / header emblem) */}
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 sm:w-11 sm:h-11 shrink-0"
      >
        <path
          d="M 15 75 A 35 35 0 0 1 85 75"
          stroke={goldColor}
          strokeWidth="7"
          strokeDasharray="9 2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 8 75 A 42 42 0 0 1 92 75"
          stroke={goldColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path d="M 10 75 L 90 75" stroke={goldColor} strokeWidth="3" strokeLinecap="round" />

        <path
          d="M 50 25 C 42 38 35 48 35 58 C 35 66 41 72 50 72 C 59 72 65 66 65 58 C 65 48 58 38 50 25 Z"
          fill={goldColor}
        />
        <path
          d="M 50 40 C 45 48 42 54 42 60 C 42 64 45 68 50 68 C 55 68 58 64 58 60 C 58 54 55 48 50 40 Z"
          fill="#FFFDF9"
        />
      </svg>
      <div>
        <span
          className="font-heading text-xl sm:text-2xl font-extrabold tracking-widest block leading-tight"
          style={{ color: textColor }}
        >
          HORNEA
        </span>
        <span className="block text-[9px] sm:text-[10px] tracking-[0.2em] text-[#C59B27] uppercase font-bold -mt-0.5">
          Momentos Recién Horneados
        </span>
      </div>
    </div>
  );
}
