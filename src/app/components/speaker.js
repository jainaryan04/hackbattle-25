"use client";
import Image from "next/image";

export default function SpeakerSection() {
  return (
    <section
      id="speakers"
      className="relative w-full min-h-screen flex items-center justify-center bg-[url('/bg-speaker.svg')] bg-cover bg-center"
    >
      {/* Title */}
      <h2 className="absolute top-10 text-5xl text-[#EFE7A1] font-pixeboy text-shadow-lg text-shadow-black/80">
        SPEAKER
      </h2>

      {/* Center Scroll */}
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        
      </div>

      {/* Left Steve */}
      <div className="absolute bottom-20 left-40">
        <Image
          src="/Steve.svg"
          alt="Steve Left"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Right Steve */}
      <div className="absolute bottom-20 right-40">
        <Image
          src="/steve2.svg"
          alt="Steve Right"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </section>
  );
}
