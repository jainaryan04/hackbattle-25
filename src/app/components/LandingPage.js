"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SpeechBubble from "./SpeechBubble";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const storyTexts = [
    "Hey Hacker, I \n am Steve !",
    "There's a Battle Ahead",
    "Are You Ready?",
  ];

  if (isMobile) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/phone-bg.svg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <SpeechBubble texts={storyTexts} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background.svg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Navbar */}
      <nav className="relative flex justify-center space-x-8 py-6 z-10">
        {["Home", "About", "FAQs", "Tracks", "Timeline"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 rounded bg-[url('/wood-texture.svg')] bg-cover text-lg font-bold text-black shadow-md hover:scale-105 transition"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-start text-left mt-10 ml-5 space-y-6">
        <div className="relative z-10 flex flex-col items-start text-left mb-5 ml-35 space-y-6">
          <Image src="/HACK.svg" width={500} height={500} alt="Hack" />
        </div>
        <div className="relative z-10 flex flex-col items-start text-left mb-8 ml-5 space-y-8">
          <Image src="/BATTLE.svg" width={720} height={720} alt="Battle" />
        </div>
        <div className="relative z-10 flex flex-col items-start text-left mb-5 ml-15 space-y-6">
          <Image
            src="/JOIN THE ULTIMATE.svg"
            width={580}
            height={580}
            alt="Join"
          />
        </div>
        <div className="relative z-10 flex flex-col items-start text-left mb-3 ml-35 space-y-6">
          <Image
            src="/HACKATHON.svg"
            width={400}
            height={400}
            alt="Hackathon"
          />
        </div>

        {/* Register Button */}
        <button className="px-40 py-4 rounded hover:scale-110 transition ">
          <Image src="/register.svg" width={400} height={400} alt="Register" />
        </button>
      </section>

      {/* Characters */}
      <div className="absolute bottom-40 right-1/7 -translate-x-1/2 flex items-end gap-9 z-10">
        <Image src="/man.svg" alt="Hero" width={300} height={700} />
      </div>
      <div className="absolute bottom-55 right-1 -translate-x-1/2 flex items-end gap-9 z-10">
        <Image src="/dog.svg" alt="Creature2" width={100} height={100} />
      </div>
    </div>
  );
}
