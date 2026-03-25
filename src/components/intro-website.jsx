import React, { useEffect, useState } from 'react';

const IntroPage = ({setShowMainContent}) => {
  const [isIntroActive, setIsIntroActive] = useState(true);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      setIsIntroActive(false);
      setTimeout(() => {
        setShowMainContent(true);
      }, 300);
    }, 2800);

    return () => clearTimeout(slideTimeout);
  }, []);

  return (
    <>
      {/* Intro Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950 flex flex-col justify-center items-center z-[100] transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${!isIntroActive ? '-translate-y-full' : 'translate-y-0'
          }`}
      >
        <div className="text-center animate-fade-in-scale px-4">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4">
            TechDevRichard
          </h1>
          <p className="text-sky-400 text-sm md:text-xl uppercase tracking-[0.4em] font-medium">
            Software Engineer
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroPage;