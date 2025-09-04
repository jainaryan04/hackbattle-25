"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProblemStatements() {
  const [active, setActive] = useState(null);

  const handleClick = (i) => {
    setActive(active === i ? null : i); // toggle expand
    const audio = new Audio("/audio/statement.wav");
    audio.play();
  };

  return (
    <section id="ps">
      <div className="relative flex flex-col items-center h-screen w-full text-center">
        <Image
          src="/ps.svg"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
          draggable="false"
        />

        <h1 className="text-2xl md:text-[6vh] font-bold text-[#f2e5a6] [text-shadow:3px_3px_#3a1d0c] animate-glow-pulse relative z-10 my-[8vh]">
          PROBLEM STATEMENTS
        </h1>

        <div className="flex flex-col md:flex-row w-[60vw] gap-y-[1vh] gap-x-[1vw] md:gap-y-0 h-[70vh] overflow-hidden relative z-10">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className={`relative transition-all duration-500 ease-in-out cursor-pointer rounded-2xl overflow-hidden
                ${active === i 
                  ? "md:flex-[6] flex-[6]" 
                  : active === null 
                    ? "flex-1" 
                    : "md:flex-[0.5] flex-[0.5]"
                }
              `}
              onClick={() => handleClick(i)}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(/ps/${i + 1}.svg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(1.1) contrast(1.1)",
                }}
              />

              {active === i && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-2xl font-bold tracking-wider z-10">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
