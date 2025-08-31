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

  useEffect(() => {
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
  }, [currentIndex, texts.length, onFinish]);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      {/* Background */}
      <Image
        src="/phone-bg.svg"
        alt="background"
        fill
        className="object-cover"
      />

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
            src="/vine2.svg"
            alt="vine"
            width={55}
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
              <p className="text-white text-2xl tracking-wide font-pixeboy text-center px-4">
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

      
