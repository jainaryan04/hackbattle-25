"use client";
import Image from "next/image";
import MobileLanding from "./MobileLanding";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image for desktop */}
      <Image
        src="/background.svg"
        alt="Background"
        fill
        className="object-cover hidden md:block"
        priority
      />

      {/* Background image for mobile */}
      <Image
        src="/phone-bg.svg"
        alt="Background"
        fill
        className="object-cover md:hidden"
        priority
      />

      <div className="absolute top-0 left-150 w-64 h-168 hidden md:block overflow-hidden z-0">
        {/* Static Waterfall Background */}
        <img
  src="/video/waterfall.gif"
  alt="Waterfall"
  className="w-full h-full object-cover"
/>

      </div>

      {/* Mobile Landing Component */}
      <div className="md:hidden">
        <MobileLanding />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        {/* Left vine + leaf */}
        <div className="absolute top-0 left-2 flex justify-center space-x-1 py-1 z-10">
          <Image src="/vine1.svg" width={410} height={410} alt="Left Vine" />
          <Image
            src="/leaf1.svg"
            width={220}
            height={220}
            alt="Left Leaf"
            className="absolute top-0 left-4 leaf-sway"
          />
        </div>

        {/* Navbar */}
        <nav className="relative flex justify-center gap-8 py-6 z-10">
          {["Home", "About", "FAQs", "Tracks", "Timeline"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-lg bg-[url('/wood.svg')] bg-cover text-2xl lg:text-4xl font-bold text-black font-pixeboy hover:scale-105 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right vines + leaves */}
        <div className="absolute top-0 right-0 flex space-x-2 z-10">
          {/* Vine 1 */}
          <Image
            src="/vine2.svg"
            alt="Vine 1"
            width={70}
            height={160}
            className="object-contain vine-sway"
          />{" "}
          <Image
            src="/vine2.svg"
            alt="Vine 2"
            width={70}
            height={120}
            className="object-contain vine-sway"
          />{" "}
          <Image
            src="/vine2.svg"
            alt="Vine 3"
            width={70}
            height={160}
            className="object-contain vine-sway"
          />{" "}
          <Image
            src="/vine2.svg"
            alt="Vine 4"
            width={70}
            height={160}
            className="object-contain vine-sway"
          />{" "}
          <div className="absolute -top-12 flex space-x-[-20px]">
            {" "}
            <Image
              src="/leaf3.svg"
              alt="Leaf 1"
              width={110}
              height={110}
              className="leaf-sway"
            />{" "}
            <Image
              src="/leaf3.svg"
              alt="Leaf 2"
              width={110}
              height={110}
              className="leaf-sway"
            />{" "}
            <Image
              src="/leaf3.svg"
              alt="Leaf 3"
              width={110}
              height={110}
              className="leaf-sway"
            />
          </div>
        </div>

        {/* Hero section */}
        {/* Hero section */}
        <section className="relative w-[50vw] z-10 flex flex-col items-center text-center mt-10">
          <div className="z-10 font-pixeboy text-[20vh] leading-none [text-shadow:4px_4px_4px_var(--tw-shadow-color)] shadow-[#FFF58C] text-[#F3EDCB]">HACK</div>
          <div className="z-10 font-pixeboy text-[20vh] leading-none [text-shadow:4px_4px_4px_var(--tw-shadow-color)] shadow-[#FFF58C] text-[#F3EDCB]">
            BATTLE
          </div>
          <div className="z-10 font-pixeboy text-6xl mt-4">
            JOIN THE ULTIMATE
          </div>
          <div className="z-10 font-pixeboy text-6xl mt-2">Hackathon</div>

          {/* Register button */}
          <div className="relative mt-6">
            <button className="hover:scale-110 transition">
              <Image
                src="/register.svg"
                alt="Register"
                width={350}
                height={400}
                className="w-48 sm:w-64 lg:w-72"
              />
            </button>
          </div>
        </section>

        {/* Characters */}
        <div className="absolute bottom-36 right-[8%] -translate-x-1/2 z-10">
          <Image
            src="/man.svg"
            alt="Hero"
            width={350}
            height={900}
            className="w-40 sm:w-56 lg:w-80"
          />
        </div>
        <div className="absolute bottom-59 right-1 -translate-x-1/2 z-10">
          <Image
            src="/dog.svg"
            alt="Creature2"
            height={54}
            width={54}
            className="w-16 sm:w-20 lg:w-24"
          />
        </div>
      </div>
    </div>
  );
}
