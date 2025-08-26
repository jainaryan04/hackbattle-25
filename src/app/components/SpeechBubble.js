"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function SpeechBubble({ texts }) {
    const router =useRouter();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < texts.length - 1) {
      setIndex(index + 1);
    } else {
      
      router.push("/LandingPagePhone"); 
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <Image
        src="/phone-bg.svg"
        alt="background"
        fill
        className="object-cover"
      />

      {/* Character */}
      <div className="absolute bottom-10 left-0">
        <Image src="/phone-man.svg" alt="character" width={300} height={300} />
      </div>

      {/* Speech bubble */}
      <div className="absolute top-90 left-20">
        <div className="relative inline-block">
          {/* Bubble frame */}
          <Image
            src="/dialogbox-phone.svg"
            alt="bubble"
            width={400}
            height={400}
          />

          {/* Text inside bubble */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-center font-[Press_Start_2P] text-[20px] leading-[1] tracking-[-0.07em]"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontWeight: 990,
                fontSize: "35px",
                lineHeight: "100%",
                letterSpacing: "-0.07em",
                transform: "translateY(-20px)",
                whiteSpace: "pre-line",
              }}
            >
              {texts[index]}
            </p>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-35 rounded px-2"
          >
            <Image
              src="/arrow-phone.svg"
              alt="bubble"
              width={80}
              height={100}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
