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
          className="bg-[url('/wood-texture.svg')] bg-cover text-black px-4 py-2 rounded-lg font-bold"
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
        {/* Borders - always visible */}
        <div className="absolute inset-0 z-50 pointer-events-none">
          {/* Top border */}
          <div className="absolute top-0 left-0 w-full h-8 bg-[url('/border-top.svg')] bg-repeat-x"></div>
          {/* Bottom border */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-[url('/border-top.svg')] bg-repeat-x rotate-180"></div>
          {/* Left border */}
          <div className="absolute top-0 left-0 h-full w-8 bg-[url('/border.svg')] bg-repeat-y"></div>
          {/* Right border */}
          <div className="absolute top-0 right-0 h-full w-8 bg-[url('/border.svg')] bg-repeat-y"></div>
        </div>

        {/* Menu background + content */}
        <div className="h-full w-full bg-[url('/menu-bg.svg')] bg-cover flex flex-col p-6 relative z-40">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white absolute top-6 right-6 z-50"
          >
            ✕
          </button>

          {/* Menu Items */}
          <div className="flex flex-col gap-6 mt-16">
            {/* Item 1 */}
            <div className="flex items-center gap-0">
              <Image
                src="/icon1.svg"
                alt="Home"
                width={68}
                height={68}
                className="flex-shrink-0 -ml-0"
              />
              <button
                onClick={() => router.push("/")}
                className="bg-[url('/stone.svg')] bg-cover min-w-[160px] px-6 py-3 rounded text-black text-lg hover:brightness-110"
              >
                HOME
              </button>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-0">
              <Image
                src="/icon2.svg"
                alt="About"
                width={68}
                height={68}
                className="flex-shrink-0 -ml-0"
              />
              <button
                onClick={() => router.push("/about")}
                className="bg-[url('/stone.svg')] bg-cover min-w-[160px] px-6 py-3 rounded text-black text-lg hover:brightness-110"
              >
                ABOUT
              </button>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-0">
              <Image
                src="/icon3.svg"
                alt="FAQs"
                width={68}
                height={68}
                className="flex-shrink-0 -ml-0"
              />
              <button
                onClick={() => router.push("/faqs")}
                className="bg-[url('/stone.svg')] bg-cover min-w-[160px] px-6 py-3 rounded text-black text-lg hover:brightness-110"
              >
                FAQs
              </button>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-0">
              <Image
                src="/icon4.svg"
                alt="Tracks"
                width={68}
                height={68}
                className="flex-shrink-0 -ml-0"
              />
              <button
                onClick={() => router.push("/tracks")}
                className="bg-[url('/stone.svg')] bg-cover min-w-[160px] px-6 py-3 rounded text-black text-lg hover:brightness-110"
              >
                TRACKS
              </button>
            </div>

            {/* Item 5 */}
            <div className="flex items-center gap-1">
              <Image
                src="/icon5.svg"
                alt="Timeline"
                width={68}
                height={68}
                className="flex-shrink-0 -ml-1"
              />
              <button
                onClick={() => router.push("/timeline")}
                className="bg-[url('/stone.svg')] bg-cover min-w-[160px] px-6 py-3 rounded text-black text-lg hover:brightness-110"
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
