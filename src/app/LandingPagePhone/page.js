"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LandingPagePhone() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-['Press_Start_2P']">
      {/* Background */}
      <Image
        src="/landing-bg.svg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top Navbar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-30">
        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl"
        >
          ☰
        </button>

        {/* Login button */}
        <button
          onClick={() => router.push("/login")}
          className="bg-[url('/stone.svg')] bg-cover text-black px-4 py-2 rounded-lg font-bold"
        >
          LOGIN
        </button>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-20"
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
     
        <div className="h-full w-full bg-[url('/menu-bg.svg')] bg-cover flex flex-col p-4">

          <div className="flex-1 w-full   p-6 flex flex-col gap-6 relative">
           
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-white absolute top-2 right-2"
            >
              ✕
            </button>

            {/* Menu Items */}
            <div className="flex items-center gap-2">
              <Image src="/icon1.svg" alt="Home" width={64} height={64} />
              <button
                onClick={() => router.push("/")}
                className="bg-[url('/wood-texture.svg')] bg-cover px-8 py-3 rounded text-black text-sm hover:brightness-110"
              >
                HOME
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/icon2.svg" alt="About" width={64} height={64} />
              <button
                onClick={() => router.push("/about")}
                className="bg-[url('/wood-texture.svg')] bg-cover px-8 py-3 rounded text-black text-sm hover:brightness-110"
              >
                ABOUT
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/icon3.svg" alt="FAQs" width={64} height={64} />
              <button
                onClick={() => router.push("/faqs")}
                className="bg-[url('/wood-texture.svg')] bg-cover px-8 py-3 rounded text-black text-sm hover:brightness-110"
              >
                FAQs
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/icon4.svg" alt="Tracks" width={64} height={64} />
              <button
                onClick={() => router.push("/tracks")}
                className="bg-[url('/wood-texture.svg')] bg-cover px-8 py-3 rounded text-black text-sm hover:brightness-110"
              >
                TRACKS
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/icon5.svg" alt="Timeline" width={64} height={64} />
              <button
                onClick={() => router.push("/timeline")}
                className="bg-[url('/wood-texture.svg')] bg-cover px-6 py-3 rounded text-black text-sm hover:brightness-110"
              >
                TIMELINE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-start text-left mt-10 ml-5 space-y-2">
          <div className="relative z-10 flex flex-col items-start top-20 text-left mb-5 ml-10 space-y-2">
            <Image src="/HACK.svg" width={250} height={250} alt="Hack" />
          </div>
          <div className="relative z-10 flex flex-col items-start top-21 text-left mb-8 ml-5 space-y-2">
            <Image src="/BATTLE.svg" width={720} height={720} alt="Battle" />
          </div>
          <div className="relative z-10 flex flex-col top-21 items-start text-left mb-5 ml-1 space-y-6">
            <Image
              src="/JOIN THE ULTIMATE.svg"
              width={580}
              height={580}
              alt="Join"
            />
          </div>
          <div className="relative z-10 flex flex-col top-22 items-start text-left mb-2 ml-19 space-y-6">
            <Image
              src="/HACKATHON.svg"
              width={200}
              height={200}
              alt="Hackathon"
            />
          </div>
          <div className="flex gap-4">
            <button className="mx-3 py-44 border-white rounded-lg hover:bg-white hover:text-black transition">
              <Image
                src="/register.svg"
                width={300}
                height={200}
                alt="Register"
              />
            </button>
          </div>
        </section>

        {/* Character */}
        <div className="absolute top-140 left-0">
          <Image
            src="/phone-man.svg"
            alt="character"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute bottom-39 left-94 -translate-x-1/2 flex items-end gap-9 z-10">
          <Image src="/dog.svg" alt="Creature2" width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
