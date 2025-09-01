"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SpeechBubbleIntro({ onFinish }) {
  const texts = [
    "Hey Hacker, I \n am Steve!",
    "There's a Battle Ahead",
    "Are You Ready?",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Loader delay (simulate image preload)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s
    return () => clearTimeout(timer);
  }, []);

  // Handle text sequence once loader is gone
  useEffect(() => {
    if (loading) return; // don’t start until loader ends

    if (currentIndex === texts.length - 1) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [loading, currentIndex, texts.length, onFinish]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      {/* Background */}
      <Image
        src="/phone-bg.svg"
        alt="background"
        fill
        className="object-cover brightness-110 contrast-110"
      />

      {/* Subtle glowing overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/15 via-teal-200/10 to-transparent  animate-shine"></div>
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-cyan-300/35 via-teal-400/25 to-transparent blur-3xl"></div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-80 h-40 bg-cyan-300/25 blur-2xl rounded-full"></div>
        <div className="absolute inset-0 bg-green-300/10 mix-blend-overlay"></div>
      </div>

      {/* Left leaves */}
      <div className="absolute top-0 left-0 z-40">
        <Image
          src="/leaf1.svg"
          alt="leaves"
          width={160}
          height={200}
          className="leaf-sway"
        />
      </div>

      {/* Right hanging vines */}
      <div className="absolute top-0 right-14 flex flex-row gap-4 z-20">
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/cavevines.svg"
            alt="vine"
            width={45}
            height={80}
            className="object-contain vine-sway"
          />
        ))}
      </div>

      {/* Top-right leaves */}
      <div className="absolute top-0 right-0 z-40">
        <Image
          src="/leaf3.svg"
          alt="leaf-right"
          width={100}
          height={100}
          className="leaf-sway"
        />
      </div>

      {/* Character + Bubble container */}
      <div className="absolute top-95 left-1/3 -translate-x-1/2 flex flex-col items-center">
        {/* Bubble above Steve */}
        <div className="relative mb-4">
          <div className="relative inline-block translate-x-15">
            <Image
              src="/dialogbox-phone.svg"
              alt="bubble"
              width={300}
              height={300}
              className="relative z-10"
            />
            <div className="absolute inset-0 flex bottom-10 items-center justify-center z-30">
              <p className="text-white text-2xl tracking-wide font-pixeboy text-center px-4 whitespace-pre-line">
                {texts[currentIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Character */}
        <Image src="/phone-man.svg" alt="character" width={300} height={300} />
      </div>
    </div>
  );
}
