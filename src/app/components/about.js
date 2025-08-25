'use client';
import { useMediaQuery } from 'react-responsive';
const BREAKPOINT = 768;

const About = () => {
    const isDesktop = useMediaQuery({ query: `(min-width: ${BREAKPOINT}px)` });
    return isDesktop ? <DesktopAbout /> : <MobileAbout />;
};
const DesktopAbout = () => (
    <div
        style={{
            width: '100vw',
            height: '100vh',
            minHeight: '100svh',
            background: "url('/bg-about.svg') no-repeat center center / cover",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <div
            style={{
                borderRadius: '22px',
                overflow: 'hidden',
                clipPath: 'inset(0 round 22px)',  // Forces rounded clipping
                background: "url('/about-box-bg.svg') no-repeat center center / 100% auto",
                width: '660px',
                height: '470px',
                position: 'relative',
            }}
        >
            {/* Background box */}
            <div
                style={{
                    padding: '2rem 1.5rem',
                    color: '#faf6da',
                    textAlign: 'center',
                    fontFamily: '"Press Start 2P", Arial, sans-serif',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    background: 'none',
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    position: 'relative',
                    zIndex: 1,
                    borderRadius: '22px',    // Match rounded edges inside
                }}
            >

            </div>

            <img
                src="/about-box-overlay.svg"
                alt="Overlay Box"
                style={{
                    position: 'absolute',
                    top: '26px',
                    left: '34px',
                    width: '590px',     // increase to make bigger
                    height: 'auto',     // keeps aspect ratio
                    pointerEvents: 'none',
                    zIndex: 2,
                    borderRadius: '18px',
                }}
            />
            {/* Text panel above */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,                 // fill the card
                    display: 'flex',          // easy center
                    alignItems: 'center',     // vertical center
                    justifyContent: 'center', // horizontal center
                    zIndex: 2,                // above overlay
                    pointerEvents: 'none',    // optional: let clicks pass through
                }}
            >
                <div
                    style={{
                        maxWidth: 520,
                        padding: '16px 20px',
                        textAlign: 'center',
                        color: '#FAF6DA',
                        fontFamily: '"Press Start 2P", Arial, sans-serif',
                    }}
                >
                    <h2 style={{ margin: '-10px 0px 50px 0', fontSize: '2.4rem', letterSpacing: 2 }}>
                        ABOUT
                    </h2>
                    <p style={{ margin: 2, fontSize: '1.1rem', lineHeight: 1.6, color: '#FAF6DA' }}>
                        Join the adrenaline‑pumping 36‑hour HackBattle by IEEE CS VIT, where tech
                        innovators gather for groundbreaking challenges, keynote sessions, and engaging
                        activities that ignite creativity and drive innovation.
                    </p>
                </div>
            </div>
        </div>
        <img
            src="/axolotl.svg"      // update filename
            alt="Axolotl"
            style={{
                position: 'fixed',
                left: '100px',
                bottom: '50px',
                width: 'min(14vw, 180px)',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 3,
            }}
        />
        <img
            src="/torch.svg"        // update filename
            alt="Torch"
            style={{
                position: 'fixed',          // stick to viewport
                left: '30px',               // to the left side
                bottom: '80px',             // a bit above the bottom
                width: 'min(9vw, 40px)',    // smaller, responsive cap
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 3,
            }}
        />
        <img
            src="/campfire.svg"        // update filename
            alt="Campfire"
            style={{
                position: 'fixed',
                right: '50px',
                bottom: '28px',
                width: 'min(10vw, 140px)',
                height: 'auto',
                pointerEvents: 'none',
                zIndex: 3,
            }}
        />
    </div>
);
const MobileAbout = () => (
    <div
        style={{
            width: '100vw',
            minHeight: '100dvh',
            background: "url('/mobile-about-bg.svg') no-repeat center/cover",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            color: '#FAF6DA',
            fontFamily: '"Press Start 2P", Arial, sans-serif',
        }}
    >

        <div style={{ position: 'relative', width: '100%', maxWidth: 300, transform: 'rotate(-7deg)' }}>
            {/* back SVG */}
            <img
                src="/glass-back.svg"
                alt=""
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: 'auto',
                    zIndex: 0,
                    pointerEvents: 'none',
                    transformOrigin: 'center',
                }}
            />
            {/* front SVG */}
            <img
                src="/glass-front.svg"
                alt=""
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: 'auto',
                    zIndex: 1,
                    pointerEvents: 'none',
                    transformOrigin: 'center',
                }}
            />

        </div>

    </div>
);
export default About;
