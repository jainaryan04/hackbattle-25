'use client';

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
    <div className="w-screen h-screen min-h-[100svh] bg-[url('/bg-about.svg')] bg-no-repeat bg-center bg-cover flex items-center justify-center relative">
        <div className="relative w-[660px] h-[470px] rounded-[22px] overflow-hidden [clip-path:inset(0_round_22px)] bg-[url('/about-box-bg.svg')] bg-no-repeat bg-center bg-[length:100%_auto]">
            {/* Background box with text */}
            <div className="absolute inset-0 p-8 text-[#faf6da] text-center font-['Press_Start_2P',Arial,sans-serif] text-[1.1rem] leading-[1.6] z-[1] rounded-[22px] box-border">
                {/* empty background container */}
            </div>

            {/* Overlay Box */}
            <img
                src="/about-box-overlay.svg"
                alt="Overlay Box"
                className="absolute top-[26px] left-[34px] w-[590px] h-auto pointer-events-none z-[2] rounded-[18px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)] shadow-xl shadow-black/30"
            />

            {/* Text panel */}
            <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
                <div className="max-w-[520px] px-5 py-4 text-center text-[#FAF6DA] font-['Press_Start_2P',Arial,sans-serif]">
                    <h2 className="mt-[-10px] mb-[50px] text-[2.4rem] tracking-[2px] text-shadow-lg text-shadow-black/80">ABOUT</h2>
                    <p className="m-[2px] text-[1.1rem] leading-[1.6] text-[#FAF6DA] text-shadow-lg text-shadow-black/80">
                        Join the adrenaline‑pumping 36‑hour HackBattle by IEEE CS VIT, where tech innovators gather for
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
            className="fixed left-[100px] bottom-[50px] w-[min(14vw,180px)] h-auto pointer-events-none z-[3]"
        />

        {/* Torch */}
        <img
            src="/torch.svg"
            alt="Torch"
            className="fixed left-[30px] bottom-[80px] w-[min(9vw,40px)] h-auto pointer-events-none z-[3]"
        />

        {/* Campfire */}
        <img
            src="/campfire.svg"
            alt="Campfire"
            className="fixed right-[50px] bottom-[28px] w-[min(10vw,140px)] h-auto pointer-events-none z-[3]"
        />
    </div>
);

const MobileAbout = () => (
    <div className="w-screen min-h-[100dvh] bg-[url('/mobile-about-bg.svg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-start relative text-[#FAF6DA] font-['Press_Start_2P',Arial,sans-serif]">
        <div className="relative w-full max-w-[320px] mt-72 ml-4">
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
                   left-3 -translate-x-1
                   top-1/2 -translate-y-1/2
                   scale-100"
            />
            <h2
                className="
          absolute left-1/2 -translate-x-1/2
          -top-[180px]
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
                        Join the adrenaline‑pumping 36‑hour HackBattle by IEEE CS VIT, where tech innovators gather
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
            src="/axolotl.svg"
            alt="Axolotl"
            className="fixed left-[3px] bottom-[420px] w-[min(14vw,170px)] h-auto pointer-events-none z-[3]"
        />
        {/* Torch */}
        <img
            src="/torch2.svg"
            alt="Torch"
            className="fixed left-[370px] bottom-[260px] w-[min(9vw,30px)] h-auto pointer-events-none z-[3]"
        />
    </div>
);

export default About;
