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
      className="relative w-full min-h-screen flex items-center justify-center bg-[url('/speaker.webp')] bg-cover bg-center"
    >
      {/* Title */}
      <h2 className="absolute top-10 text-6xl text-[#EFE7A1] font-pixeboy text-shadow-lg text-shadow-black/80">
        SPEAKER
      </h2>

      {/* Scroll + Overlay Text */}
      <div
        className={`relative flex items-center justify-center z-20 origin-top transition-all duration-700 ease-in-out
          ${animate ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
        `}
      >
        <Image
          src="/patch.webp"
          alt="Patch"
          width={450}
          height={450}
          className="object-contain"
          draggable="false"
        />

        {/* Overlay Text */}
        <p
          className={`absolute text-6xl font-pixeboy text-black transition-opacity duration-700 delay-100
            ${animate ? "opacity-100" : "opacity-0"}
          `}
        >
          STAY TUNED
        </p>
      </div>
    </section>
  );
}
