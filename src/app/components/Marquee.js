"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Marquee() {
  const images = ["/marquee1.png", "/marquee2.png", "/marquee3.png"];
  const words = ["CREATE", "COLLABORATE", "CAFFEINATE"];

  const [imageCount, setImageCount] = useState(0);
  const [rowsPerMarquee, setRowsPerMarquee] = useState(1);
  const [textCount, setTextCount] = useState(10);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate image count - how many 16px cubes fit horizontally
      const count = Math.ceil(width / 16) * 2; // *2 for seamless loop
      setImageCount(count);

      // Calculate rows - how many 16px cubes fit in 5vh vertically
      const rowHeight = (9 / 100) * height; // 5vh in px
      const rowCount = Math.max(1, Math.floor(rowHeight / 16));
      setRowsPerMarquee(rowCount);

      // Calculate text count to match image scroll speed
      // Estimate text width and calculate how many instances needed
      const isMobile = width < 768;
      const estimatedTextWidth = isMobile ? 80 : 120; // Approximate width per text instance
      const textCountNeeded = Math.ceil((width * 2) / estimatedTextWidth);
      setTextCount(Math.max(8, textCountNeeded));
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="font-pixeboy w-full overflow-x-clip text-2xl sm:text-3xl md:text-4xl rotate-2">
      {images.map((src, index) => (
        <div
          key={index}
          className={`marquee-row relative ${
            index === 0 ? "border-t-2" : index === 1 ? "border-2" : "border-b-2"
          } border-black`}
          style={{ height: window.innerWidth < 640 ? "3vh" : "5vh" }}
        >
          {/* Scrolling Images */}
          <div className={`marquee-container absolute inset-0 ${index === 1 ? "reverse" : ""}`}>
            <div className="marquee-content">
              {Array.from({ length: rowsPerMarquee }).map((_, rowIdx) => (
                <div key={rowIdx} className="flex">
                  {Array.from({ length: imageCount }).map((_, i) => (
                    <div key={i} className="relative w-4 h-4 flex-shrink-0">
                      <Image
                        src={src}
                        alt={`Marquee Cube ${index + 1}`}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {Array.from({ length: rowsPerMarquee }).map((_, rowIdx) => (
                <div key={rowIdx} className="flex">
                  {Array.from({ length: imageCount }).map((_, i) => (
                    <div key={i} className="relative w-4 h-4 flex-shrink-0">
                      <Image
                        src={src}
                        alt={`Marquee Cube ${index + 1}`}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling Text */}
          <div className={`marquee-container relative z-10 ${index === 1 ? "reverse" : ""}`}>
            <div className="marquee-content text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] items-center">
              {Array.from({ length: textCount }).map((_, i) => (
                <span key={i} className="px-3 sm:px-4 md:px-6 whitespace-nowrap">
                  {words[index]}
                </span>
              ))}
            </div>
            <div
              className="marquee-content text-white drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] items-center"
              aria-hidden="true"
            >
              {Array.from({ length: textCount }).map((_, i) => (
                <span key={i} className="px-3 sm:px-4 md:px-6 whitespace-nowrap">
                  {words[index]}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <style jsx>{`
        .marquee-row {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-container {
          display: flex;
          width: 200%;
          height: 100%;
        }
        .marquee-content {
          flex: 0 0 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          animation: marquee 50s linear infinite;
          flex-wrap: wrap;
        }
        .reverse .marquee-content {
          animation-direction: reverse;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @media (max-width: 640px) {
          .marquee-content {
            animation-duration: 40s;
          }
        }
      `}</style>
    </div>
  );
}