import React, { useState, useEffect } from 'react';

const IntroPage = ({ setShowMainContent}) => {
  const [isIntroActive, setIsIntroActive] = useState(true);

  useEffect(() => {
    // Phase 1: The Intro sequence (corresponds to the 2.5s CSS animation)
    const slideTimeout = setTimeout(() => {
      setIsIntroActive(false);
      // Phase 2: Fade in the content slightly after the slide starts
      setTimeout(() => {
        setShowMainContent(true);
      }, 300);
    }, 2800);

    return () => clearTimeout(slideTimeout);
  }, []);

  useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

  return () => {
    // Cleanup on unmount
    document.body.style.overflow = '';
  };
}, [isIntroActive]);

  return (
    <div
      className={`fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[9999] transition-transform duration-1000 cubic-bezier(0.87, 0, 0.13, 1) ${!isIntroActive ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <div className="text-center animate-fade-in-scale">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2">
          TechDevRichard
        </h1>
        <p className="text-sky-400 text-sm md:text-lg uppercase tracking-[0.3em] font-medium">
          Computer Engineeer
        </p>
      </div>
      </div>

  );
};

export default IntroPage;