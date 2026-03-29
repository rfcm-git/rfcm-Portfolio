import { useState, useEffect } from 'react';
import { Facebook, Linkedin, Github, Download } from '../../svc-icons.jsx';
import { contact, cvLinks } from '../constants/contacts';

export const HeroSection = () => {
  const title = "& Technical Virtual Assistant";
  const [displayName, setDisplayName] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [engineerType, setEngineerType] = useState('Full-Stack');

  useEffect(() => {
    const interval = setInterval(() => {
      setEngineerType(prev =>
        prev === 'Full-Stack' ? 'Backend' : 'Full-Stack'
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    let typingInterval;
    let resetTimeout;

    const startTyping = () => {
      index = 0;
      setDisplayName("");
      setIsTypingComplete(false);

      typingInterval = setInterval(() => {
        if (index <= title.length) {
          setDisplayName(title.substring(0, index));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
          resetTimeout = setTimeout(startTyping, 1500);
        }
      }, 1000 / 7);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative py-20 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center relative z-10 w-full">
          <div className="lg:col-span-8 flex flex-col gap-2 text-center lg:text-left">
            <h1 className="flex items-center text-6xl md:text-24xl font-black tracking-normal leading-none uppercase gap-4">
              <span className="h-[1.1em] overflow-hidden relative flex items-center">
                <span key={engineerType} className="block animate-slide-right leading-none">
                  {engineerType}
                </span>
              </span>
              <span className="ml-2 animate-gradient text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-emerald-400 to-blue-600 font-black leading-none">
                Developer
              </span>
            </h1>

            <div className="md:text-2xl font-bold tracking-wide text-slate-400 flex items-center min-h-10 min-w-87.5">
              <span className="text-blue-500">{displayName}</span>
              <span className={`w-1 h-12 md:h-8 bg-blue-500 ml-1 ${!isTypingComplete ? 'cursor-blink' : 'opacity-0'}`} />
            </div>

            <p className="text-slate-400 text-2xl md:text-2xl max-w-4xl mb-10 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              I build scalable <span className="text-white">web applications </span>
              and help businesses streamline workflows through
              <span className="text-white"> automation, data management, technical support, and efficient backend systems.</span>
            </p>
            <div className="flex flex-wrap gap-4">

              <button
                onClick={cvLinks.web ? () => window.open(cvLinks.web, '_blank') : null}
                title="Get CV"
                className="px-16 py-4 bg-white text-slate-950 rounded-xl font-black flex items-center gap-2 hover:bg-slate-200 transition-all icon-glow-slate"
              >
                Get CV
                <Download className="animate-bounce group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex gap-2">
                <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2 icon-glow-blue">
                  <Linkedin size={20} className="text-blue-500" />
                </a>

                <a href={contact.facebookUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2 icon-glow-blue">
                  <Facebook size={20} className="text-blue-600" />
                </a>
                <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2 icon-glow-slate">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 relative z-10">
            <img
              src="/assets/hero_image.png"
              alt="Hero Image"
              className="rounded-3xl filter-[drop-shadow(1px_0_0_white)_drop-shadow(-1px_0_0_white)_drop-shadow(0_1px_0_white)_drop-shadow(0_-1px_0_white)]
                        hover:scale-105 transition-transform"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-125 bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      </section >
    </>
  );
};