"use client";
import Image from "next/image";
import MobileLanding from "./MobileLanding";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden select-none">
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
        <nav className="relative flex items-center justify-between px-8 py-4 bg-[#02554ACC] rounded-full shadow-lg z-20 w-fit mx-auto">
          {/* Left links */}
          <div className="flex gap-8">
            {["Home", "Track", "About", "FAQ", "Timeline"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl lg:text-3xl font-bold font-pixeboy text-[#f8f5c0] hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-8">
            {/* Discord Icon */}
            <a
              href="https://discord.gg/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e2e24] p-2 rounded-full hover:scale-110 transition"
            >
              <img src="/discord.svg" alt="Discord" className="w-6 h-6" />
            </a>

            {/* Login Button */}
            <button className="px-5 py-2 bg-yellow-500 text-black font-pixeboy text-xl rounded-full hover:bg-yellow-400 transition">
              LOGIN
            </button>
          </div>
        </nav>

        {/* Right vines + leaves */}
        <div className="absolute top-0 right-0 flex space-x-2 z-10">
          {/* Vines */}
          {[160, 120, 160, 140].map((h, i) => (
            <Image
              key={i}
              src="/vine2.svg"
              alt={`Vine ${i + 1}`}
              width={70}
              height={h}
              className="object-contain vine-sway"
            />
          ))}

          {/* Leaves overlay */}
          <div className="absolute -top-3 right-50 flex space-x-[-20px]">
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src="/leaf-right.svg"
                alt={`Leaf ${i + 1}`}
                width={150}
                height={150}
                className="leaf-sway"
              />
            ))}
          </div>
        </div>

        {/* Hero section */}

        <section className="relative w-[50vw] z-10 flex flex-col items-center text-center mt-10">
          <div className="z-10 font-pixeboy text-[20vh] leading-none [text-shadow:4px_4px_4px_var(--tw-shadow-color)] shadow-[#FFF58C] text-[#F3EDCB]">
            HACK
          </div>
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
              <p className="relative font-pixeboy text-4xl bottom-15 text-amber-100 ">
                Register
              </p>
            </button>
          </div>
        </section>

        {/* Characters */}
        <div className="absolute bottom-45 right-[8%] -translate-x-1/2 z-10">
          <Image
            src="/man.svg"
            alt="Hero"
            width={350}
            height={900}
            className="w-40 sm:w-56 lg:w-80"
          />
        </div>
        <div className="absolute bottom-58 right-16 -translate-x-1/2 z-10">
          <Image
            src="/frog.svg"
            alt="Creature2"
            height={104}
            width={104}
            className="w-16 sm:w-20 lg:w-24"
          />
        </div>
        <div className="absolute bottom-10 right-29 -translate-x-1/2 z-10">
          <Image
            src="/axo.svg"
            alt="Creature2"
            height={104}
            width={104}
            className="w-16 sm:w-20 lg:w-24"
          />
        </div>
      </div>
    </div>
  );
}
