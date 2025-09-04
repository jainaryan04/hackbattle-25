'use client';

import React from 'react';

export default function CharacterDisplay({ characterSrc, className, style }) {
  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square">
      <img
        key={characterSrc}
        src={characterSrc}
        alt="Minecraft Character"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className={`absolute top-0 left-0 w-full h-full object-contain select-none animate-fade-in-out ${className}`}
        style={style}
      />
    </div>
  );
}