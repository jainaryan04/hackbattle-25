"use client";
import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/about";
import FaqSection from "src/components/FaqSection";
import SpeechBubble from "src/app/components/SpeechBubble";
import SpeakerSection from "./components/speaker";
import VineDivider from "./components/VineDivider";
import PS from "./components/ps";
import CustomCursor from "./components/Cursor";

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!showContent) {
    if (isMobile) {
      return <SpeechBubble onFinish={() => setShowContent(true)} />;
    }
    return <LandingPage onFinish={() => setShowContent(true)} />;
  }

  return (
    <div>
      {!isMobile && <CustomCursor />}
      {/* <VineDivider /> */}
      <About />
      <PS />
      {/* <SpeakerSection /> */}
      <FaqSection />
    </div>
  );
}
