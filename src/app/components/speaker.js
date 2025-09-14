"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function SpeakerSection() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="speaker"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[url('/speaker.webp')] bg-cover bg-center px-4 md:px-8 lg:px-16"
    >
      {/* Title */}
      <h2 className="text-2xl md:text-[6vh] font-bold text-[#f2e5a6] [text-shadow:3px_3px_#3a1d0c] animate-glow-pulse relative z-10 my-[5vh]">
      
        SPEAKER
      </h2>

      {/* Scroll + Overlay Text */}
      <div
        className={`relative flex items-center justify-center z-20 origin-top transition-all duration-700 ease-in-out mt-18
          ${animate ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
        `}
      >
        <Image
          src="/patch.webp"
          alt="Patch"
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-3/4 max-w-sm md:max-w-md lg:max-w-2xl h-[90vh]"
          draggable="false"
        />

        {/* Overlay Text */}
        <p
          className={`absolute text-xl md:text-3xl lg:text-5xl font-pixeboy text-black transition-opacity duration-700 delay-100
            ${animate ? "opacity-100" : "opacity-0"}
          `}
        >
          STAY TUNED
        </p>
      </div>
    </section>
  );
}
