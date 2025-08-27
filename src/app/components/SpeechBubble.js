"use client";
import { useState ,useEffect} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SpeechBubble() {
  const texts = [
    "Hey Hacker, I \n am Steve!",
    "There's a Battle Ahead",
    "Are You Ready?",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (currentIndex === texts.length - 1) {
      // after showing the last text, wait 2s then redirect
      const timeout = setTimeout(() => {
        router.push("/LandingPagePhone");
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, texts.length, router]);

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
      <div className="absolute top-140 left-0">
        <Image src="/phone-man.svg" alt="character" width={300} height={300} />
      </div>

      {/* Speech bubble */}
      <div className="absolute top-[450px] right-8">
        <div className="relative inline-block">
          <Image
            src="/dialogbox-phone.svg"
            alt="bubble"
            width={300}
            height={300}
            className="relative z-10"
          />

          <div className="absolute inset-0 flex bottom-11 right-1 items-center justify-center z-20">
            <Image
              src="/brown.png"
              alt="brown fill"
              width={280}
              height={280}
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex bottom-11 items-center justify-center z-30">
            <p className="text-white text-3xl  tracking-wide font-pixeboy text-center px-4">
              {texts[currentIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
