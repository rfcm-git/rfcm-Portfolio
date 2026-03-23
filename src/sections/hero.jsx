import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { contact } from '../constants/contacts';

export const HeroSection = ({ setShowContactModal }) => {
  const fullName = "Hi! I'm Richard Malana";
  const [displayName, setDisplayName] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingInterval;
    let resetTimeout;

    const startTyping = () => {
      index = 0;
      setDisplayName("");
      setIsTypingComplete(false);

      typingInterval = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayName(fullName.substring(0, index));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
          resetTimeout = setTimeout(startTyping, 2000);
        }
      }, 100);
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
      < section className="relative pt-28 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center" >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-8 text-left">
            <div className="mb-2">
              <div className="text-2xl md:text-6xl font-bold tracking-wide text-slate-400 flex items-center gap-1 min-h-[60px] min-w-[350px]">
                <span className="text-slate-500 font-medium whitespace-nowrap"></span>
                <div className="flex items-center">
                  <span className="text-blue-500">{displayName.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="text-white ml-2">{displayName.split(' ').slice(2).join(' ')}</span>
                  <span className={`w-1 h-8 md:h-12 bg-blue-500 ml-1 ${!isTypingComplete ? 'cursor-blink' : 'opacity-0'}`} />
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "Building <span className="text-white">applications, data insights, and technical solutions</span> that drive results—combining backend development, data analysis, and technical support into practical, real-world solutions."
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowContactModal(true)}
                className="group relative px-8 py-4 bg-white text-slate-950 rounded-xl font-black hover:scale-[1.02] transition-all flex items-center gap-2 animate-cta overflow-hidden"
              >
                <span className="relative z-10">Let's Build Something</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute bottom-3 left-8 right-8 h-[2px] bg-slate-950/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
              <div className="flex gap-2">
                <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 icon-glow-blue">
                  <Linkedin size={20} className="text-blue-500" />
                </a>
                <a href={contact.facebookUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 icon-glow-blue">
                  <Facebook size={20} className="text-blue-600" />
                </a>
                <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 icon-glow-slate">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 relative z-10">
            <img
              src="/assets/hero_image.png"
              alt="Hero Image"
              className="w-full h-auto rounded-3xl 
                              [filter:drop-shadow(1px_0_0_white)_drop-shadow(-1px_0_0_white)_drop-shadow(0_1px_0_white)_drop-shadow(0_-1px_0_white)]
                              hover:scale-105 transition-transform"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      </section >
    </>
  );
};