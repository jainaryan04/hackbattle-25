"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileLanding from "./MobileLanding";
import Link from "next/link";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);



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
        <MobileLanding />
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

      <div className="absolute inset-0 " />

      {/* Navbar */}
      <nav className="relative flex justify-center space-x-8 py-6 z-10">
        {["Home", "About", "FAQs", "Tracks", "Timeline"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`} // links to section IDs
            className="px-4 py-2 rounded-lg bg-[url('/wood.svg')] bg-cover text-4xl font-bold text-black font-pixeboy hover:scale-105 transition"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-start text-left mt-10 ml-5 space-y-6">
        <div className="relative z-10 flex flex-col items-start text-left mb-8 ml-5 space-y-8">
          <Image src="/Group 104.svg" width={720} height={720} alt="Battle" />
        </div>
        <div className="absolute z-10  font-pixeboy text-6xl top-80 left-20 mb-5 ml-15 space-y-6">
          JOIN THE ULTIMATE
        </div>
        <div className="absolute z-10 font-pixeboy text-6xl top-90 left-25 mb-3 ml-35 space-y-6">
          Hackathon
        </div>

        {/* Register Button */}
        <button className="absolute px-50 py-115 hover:scale-110 transition ">
          <Image src="/register.svg" width={350} height={400} alt="Register" />
        </button>
      </section>

      {/* Characters */}
      <div className="absolute bottom-39 right-1/12 -translate-x-1/2  z-10">
        <Image src="/man.svg" alt="Hero" width={350} height={700} />
      </div>
      <div className="absolute bottom-55 right-1 -translate-x-1/2  z-10">
        <Image src="/dog.svg" alt="Creature2" width={100} height={100} />
      </div>
    </div>
  );
}
