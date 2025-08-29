'use client';
import '../globals.css';
import GlowingSpores from "./GlowingSpores";
import Smoke from "./Smoke";

const About = () => {
    return (
           <>
            {/* Desktop */}
            <div className="hidden md:block">
                <DesktopAbout />
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
                <MobileAbout />
            </div>
        </>
    );
};

const DesktopAbout = () => (
    < section id="about">
    <div className="w-screen h-screen min-h-[100svh] bg-[url('/bg-about.svg')] bg-no-repeat bg-center bg-cover flex items-center justify-center relative">
        {/* ✨ Glowing Spores */}
        <div className="absolute inset-0 z-[1]">
            <GlowingSpores />
        </div>
        <div className="relative w-[min(660px,50vw)] h-[min(470px,50vw)] rounded-[22px] overflow-hidden [clip-path:inset(0_round_22px)] bg-[url('/about-box-bg.svg')] bg-no-repeat bg-center bg-[length:100%_auto]">

            {/* Background box with text */}
            <div className="absolute inset-0 p-8 text-[#faf6da] text-center font-['Press_Start_2P',Arial,sans-serif] text-[1.1rem] leading-[1.6] z-[1] rounded-[22px] box-border">
                {/* empty background container */}
            </div>

            {/* Overlay Box */}
            <img
                src="/about-box-overlay.svg"
                alt="Overlay Box"
                className="absolute top-[min(26px,2vw)] left-[min(34px,3vw)] w-[min(590px,60vw)] h-auto pointer-events-none z-[2] rounded-[18px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] shadow-xl shadow-black/30"
            />

            {/* Text panel */}
            <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
                <div className="max-w-[520px] px-5 py-4 text-center text-[#FAF6DA] font-['Press_Start_2P',Arial,sans-serif]">
                    <h2 className="mt-[-10px] mb-[min(50px,5vw)] text-[2.4rem] tracking-[2px] text-shadow-lg text-shadow-black/80">ABOUT</h2>
                    <p className="m-[2px] text-[1.1rem] leading-[1.6] text-[#FAF6DA] text-shadow-lg text-shadow-black/80">
                        Join the adrenaline-pumping 36-hour HackBattle by IEEE CS VIT, where tech innovators gather for
                        groundbreaking challenges, keynote sessions, and engaging activities that ignite creativity and
                        drive innovation.
                    </p>
                </div>
            </div>
        </div>

        {/* Axolotl */}
        <img
            src="/axolotl.svg"
            alt="Axolotl"
            className="fixed left-[min(100px,8vw)] bottom-[min(50px,5vw)] w-[min(14vw,180px)] h-auto pointer-events-none z-[3]"
        />

        {/* Torch */}
        <div className="fixed left-[min(30px,3vw)] bottom-[min(80px,6vw)] z-[4]">
            <img
                src="/torch.svg"
                alt="Torch"
                className="w-[min(9vw,40px)] h-auto pointer-events-none"
            />
            <Smoke /> {/* 🌫️ Smoke rising */}
        </div>

        {/* Campfire */}
        <div className="fixed right-[min(50px,5vw)] bottom-[min(28px,3vw)] z-[4]">
            <img
                src="/campfire.svg"
                alt="Campfire"
                className="w-[min(10vw,140px)] h-auto pointer-events-none"
            />
            <Smoke /> {/* 🌫️ Smoke rising */}
        </div>
    </div>
     </section>
);

const MobileAbout = () => (
    <div className="w-screen min-h-[100dvh] bg-[url('/mobile-about-bg.svg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-centre relative text-[#FAF6DA] font-['Press_Start_2P',Arial,sans-serif]">
        <div className="relative w-full max-w-[min(320px,90vw)] translate-y-[32vh] ml-[min(4px,1vw)]">
            {/* Back glass (bigger) */}
            <img
                src="/glass-back.svg"
                alt=""
                className="absolute inset-0 z-0 pointer-events-none
                   w-[101%] max-w-none
                   left-1/2 -translate-x-1/2
                   top-1/2 -translate-y-1/2
                   scale-110 opacity-90 -rotate-[7deg]"
            />
            {/* Front glass (smaller) */}
            <img
                src="/glass-front.svg"
                alt=""
                className="absolute inset-0 z-[1] pointer-events-none
                   w-[94%] max-w-none
                   left-[min(3px,1vw)] -translate-x-1
                   top-1/2 -translate-y-1/2
                   scale-100"
            />
            <h2
                className="
          absolute left-1/2 -translate-x-1/2
          -top-[min(42vw)]
          z-[2]
          text-[4rem] tracking-[2px]
          text-shadow-lg text-shadow-black/80
          text-[#EFE7A1] pointer-events-none
        "
            >
                ABOUT
            </h2>
            {/* Text overlay ON TOP of front glass */}
            <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
                <div className="w-[84%] text-center text-[#EFE7A1]">
                    <p className="text-[0.75rem] leading-[1.95] opacity-95">
                        Join the adrenaline-pumping 36-hour HackBattle by IEEE CS VIT, where tech innovators gather
                        for groundbreaking challenges, keynote sessions, and engaging activities that ignite creativity
                        and drive innovation.
                    </p>
                </div>
            </div>
            {/* container spacer to give the absolutely-positioned images height */}
            <div className="invisible w-full pt-[100%]" />
        </div>
        {/* Axolotl */}
        <img
            src="/axolotl-mobile.svg"
            alt="Torch"
            className="fixed left-[min(76vw)] bottom-[min(50vw)] w-[min(20vw)] h-auto pointer-events-none z-[3]"
        />
        {/* Campfire */}
        <div className="fixed left-[min(32vw)] bottom-[min(28px,3vw)] z-[4]">
            <img
                src="/campfire.svg"
                alt="Campfire"
                className="w-[min(34vw)] h-auto pointer-events-none"
            />
            <Smoke /> {/* 🌫️ Smoke rising */}
        </div>
    </div>
   
);

export default About;
