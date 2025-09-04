"use client";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/about";
import FaqSection from "src/components/FaqSection";
import SpeechBubble from "src/app/components/SpeechBubble";
import SpeakerSection from "./components/speaker";
import VineDivider from "./components/VineDivider";

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile && !showContent) {
    return <SpeechBubble onFinish={() => setShowContent(true)} />;
  }

  return (
    <div>
      <LandingPage />
      {/* <VineDivider />  */}
      <About />
      {/* <SpeakerSection/> */}
      <FaqSection />
    </div>
  );
}
