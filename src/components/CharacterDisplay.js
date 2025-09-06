'use client';
import React from 'react';
import Image from 'next/image';

export default function CharacterDisplay({ characterSrc, className, style }) {
  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square">
      <Image
        key={characterSrc}
        src={characterSrc}
        alt="Minecraft Character"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        height={0}
        width={0}
        className={`hidden md:block absolute top-0 left-0 w-full h-full object-contain select-none animate-fade-in-out ${className}`}
        style={style}
      />
    </div>
  );
}