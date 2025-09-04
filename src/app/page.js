"use client";
import { useState, useEffect } from "react";
import Home from "./components/LandingPage"; // landing
import About from "./components/about";
import FaqSection from "src/components/FaqSection";
import SpeechBubble from "src/app/components/SpeechBubble";
import PS from "./components/ps";
import CustomCursor from "./components/Cursor";

export default function Page() {
  const [speechBubbleComplete, setSpeechBubbleComplete] = useState(false);
  const [landingLoaded, setLandingLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure we're on the client side
    setIsClient(true);
    
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't render anything until client-side hydration is complete
  if (!isClient) {
    return <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
    <img src="/loader.gif" alt="Loading..." className="w-32 h-32" />
  </div>;
  }

  return (
    <div>
      {!isMobile && <CustomCursor />}
      
      {/* Mobile: Show SpeechBubble first, then Home after bubble is done */}
      {isMobile ? (
        <>
          {!speechBubbleComplete && (
            <SpeechBubble onFinish={() => setSpeechBubbleComplete(true)} />
          )}
          {speechBubbleComplete && (
            <Home onFinish={() => setLandingLoaded(true)} />
          )}
        </>
      ) : (
        /* Desktop: Show Home directly */
        <Home onFinish={() => setLandingLoaded(true)} />
      )}

      {/* Only render other pages after landing sequence is complete */}
      {landingLoaded && speechBubbleComplete && (
        <>
          <About />
          <PS />
          <FaqSection />
        </>
      )}
    </div>
  );
}