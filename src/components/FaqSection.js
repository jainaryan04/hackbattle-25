'use client';

import React, { useState, useEffect } from 'react';
import { VT323 } from 'next/font/google';
import FaqItem from '../components/FaqItem'; 

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// --- Fireflies Component ---
const Fireflies = () => {
  const fireflyCount = 15;
  const [fireflies, setFireflies] = useState([]); 

  useEffect(() => {
    const generatedFireflies = Array.from({ length: fireflyCount }).map((_, i) => {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 2}px`,
        height: `${Math.random() * 3 + 2}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      return <span key={i} className="firefly" style={style}></span>;
    });
    setFireflies(generatedFireflies);
  }, []); 

  return <div className="absolute top-0 left-0 w-full h-full z-0">{fireflies}</div>;
};

// --- Main FAQ Component ---
export default function FaqSection() {
  const flameBottom = 35; 
  const flameLeft = 78;

  // Define your FAQ data here as an array of objects
  const faqData = [
    {
      question: "What is Hack Battle?",
      answer: "A gamified hackathon where developers team up, compete, and build projects.",
      headImageSrc: "/minecraft-head-steve.jpeg", 
    },
    {
      question: "Do I need Minecraft to join?",
      answer: "Nope! The theme is Minecraft-inspired, but coding is done.",
      headImageSrc: "/minecraft-head-alex.jpeg", 
    },
    {
      question: "How do I register?",
      answer: "Click the 'Register' button on the homepage.",
      headImageSrc: "/minecraft-head-chicken.jpeg", 
    }, 
    {
      question: "Is Hackbattle fresher friendly?",
      answer: "Absolutely!, this is YOUR launchpad.",
      headImageSrc: "/minecraft-head-creeper.jpeg", 
    }
    ,{
      question: "What should i bring?",
      answer: "Your laptop, extention cord, and things you might want.",
      headImageSrc: "/minecraft-head-piglin.jpeg", 
    },
    {
      question: "Is there a team size limit?",
      answer: "Teams can consist of 2-4 members.",
      headImageSrc: "/minecraft-head-zombie.jpeg", 
    },
  ];

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center p-4 bg-[url('/faq-background.svg')] bg-cover bg-center text-white overflow-hidden ${vt323.className}`}>

      <Fireflies />
      {/* ExperienceOrbs component has been removed */}

      <main className="w-full max-w-3xl mx-auto flex flex-col items-center z-10">

        <div className="flex items-center justify-center mb-12 relative"> {/* Added relative for character positioning */}
          <h1 className="text-8xl font-bold text-[#f2e5a6] [text-shadow:3px_3px_#3a1d0c] animate-glow-pulse">FAQ</h1>
        </div>

        <div className="space-y-8 w-full">
          {/* Map over faqData to render FaqItem components */}
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              headImageSrc={item.headImageSrc} 
            />
          ))}
        </div>

      </main>
      
    </div>
  );
}
