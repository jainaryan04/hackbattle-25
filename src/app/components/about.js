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
    <section id="about">
        <div className="w-full h-screen bg-[url('/bg-about.svg')] select-none bg-center bg-cover flex items-center justify-center relative">

            {/* ✨ Glowing Spores */}
            <div className="absolute inset-0 z-[1]">
                <GlowingSpores />
            </div>

            {/* Main box */}
            <div className="relative w-[47vw] h-[72vh] rounded-[22px] bg-[url('/about-box-bg.svg')] bg-center bg-[length:100%_auto]">

                {/* Background box with text */}
                <div className="absolute inset-0 p-8 text-[#faf6da] text-center font-['Press_Start_2P'] text-[1.1rem] leading-[1.6] z-[1] rounded-[22px] box-border">
                </div>

                {/* Overlay Box */}
                <img
                    src="/about-box-overlay.svg"
                    alt="Overlay Box"
                    className="absolute top-[3.4vh] left-0 w-[594vw] h-[65vh] z-[2] rounded-[18px] pointer-events-none"
                />

                {/* Text panel */}
                <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
                    <div className="max-w-[520px] px-5 py-4 text-center text-[#FAF6DA] font-['Press_Start_2P']">
                        <h2 className="mt-[1vh] mb-[5vw] text-[2.4rem] text-shadow-lg text-shadow-black/80">
                            ABOUT
                        </h2>
                        <p className="text-[1.1rem] leading-[1.6] text-shadow-lg text-shadow-black/80">
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
                className="absolute left-[8vw] bottom-[5vh] w-[12vw] z-[3] pointer-events-none"
            />

            {/* Torch */}
            <div className="absolute left-[3vw] bottom-[8vh] z-[4]">
                <img
                    src="/torch.svg"
                    alt="Torch"
                    className="w-[2vw] h-[15vh] pointer-events-none"
                />
                <Smoke /> {/* 🌫️ Smoke rising */}
            </div>

            {/* Campfire */}
            <div className="absolute right-[4vw] bottom-[3vh] z-[4]">
                <img
                    src="/campfire.svg"
                    alt="Campfire"
                    className="w-[10vw] pointer-events-none"
                />
                <Smoke /> {/* 🌫️ Smoke rising */}
            </div>
        </div>
    </section>
);


const MobileAbout = () => (
    <div className="min-h-[100dvh] bg-[url('/mobile-about-bg.svg')] bg-no-repeat bg-cover flex flex-col items-center relative text-[#FAF6DA] font-['Press_Start_2P']">
        <div className="relative w-full max-w-[min90vw] translate-y-[32vh] ml-[1vw]">
            {/* Back glass (bigger) */}
            <img
                src="/glass-back.svg"
                alt=""
                className="absolute z-0 pointer-events-none
                   w-[101%] max-w-none
                   left-1/2 -translate-x-1/2
                   top-1/2 -translate-y-1/2
                   scale-110 opacity-90 -rotate-[7deg]"
            />
            {/* Front glass (smaller) */}
            <img
                src="/glass-front.svg"
                alt=""
                className="absolute z-[1] pointer-events-none
                   w-[94%] max-w-none
                   left-[1vw] -translate-x-1
                   top-1/2 -translate-y-1/2
                   scale-100"
            />
            <h2
                className="
          absolute left-1/2 -translate-x-1/2
          -top-[42vw]
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
            className="absolute left-[76vw] bottom-[50vh] w-[20vw] h-auto pointer-events-none z-[3]"
        />
        {/* Campfire */}
        <div className="absolute left-[32vw] bottom-[3vw] z-[4]">
            <img
                src="/campfire.svg"
                alt="Campfire"
                className="w-[34vw] h-auto pointer-events-none"
            />
            <Smoke /> {/* 🌫️ Smoke rising */}
        </div>
    </div>
);
export default About;