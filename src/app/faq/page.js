'use client'; 

import React, { useState, useEffect } from 'react'; 
import { VT323 } from 'next/font/google';
import FaqItem from '../components/FaqItem'; 
import { usePathname } from 'next/navigation';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Fireflies = () => {
  const fireflyCount = 25;
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const pathname = usePathname(); 

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const isOnDedicatedFaqPage = pathname === '/faq'; 
  const isOnRootPage = pathname === '/';

  const shouldShowFixedElements = isOnDedicatedFaqPage || isOnRootPage;

  const positioningClass = isOnDedicatedFaqPage ? 'fixed' : 'absolute';


  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center p-4 bg-[url('/faq-background.svg')] bg-cover bg-center text-white overflow-hidden ${vt323.className}`}>

      <Fireflies />
      

      <main className="w-full mx-auto flex flex-col items-center z-10 p-4 md:flex-row md:items-center md:justify-between md:px-12">

        <div className="w-full flex justify-center items-center mb-8 md:flex-none md:w-1/3 md:justify-start md:items-center md:ml-8 md:mt-10">
          <h1 className="text-6xl md:text-8xl font-bold text-[#f2e5a6] [text-shadow:3px_3px_#3a1d0c] animate-glow-pulse">FAQs</h1>
        </div>

        <div className="space-y-4 w-full md:flex-1 md:space-y-4 md:pl-8 md:mt-10">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              headImageSrc={item.headImageSrc} 
              isOpen={openIndex === index} 
              toggleItem={() => toggleItem(index)} 
            />
          ))}
        </div>

      </main>


      {shouldShowFixedElements && (
        <div className="hidden md:block">


          <div className={`${positioningClass} bottom-[185px] left-[285px] z-10`}>
            <img 
              src="/Blaze_BE.gif"
              alt="Minecraft Blaze" 
              className="w-40 h-80 transform scale-x-[-1]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
