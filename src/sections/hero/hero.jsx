import React, { useState, useContext } from 'react';
import { Github, Linkedin, Facebook, ArrowRight } from 'lucide-react';
import { contact } from '../../constants/contacts';
import { ContactModalContext } from '../../App';

const displayName = "TechDevRichard";
const engineerType = "System & Data";
const isTypingComplete = true; // Set to true to stop the blinking cursor

export const HeroSection = () => {
  const { setShowContactModal } = useContext(ContactModalContext);

  return (
    <>
      {/* Hero / Pitch Profile */}
      < section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center" >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 text-left">
            <div className="mb-2">
              <div className="text-2xl md:text-4xl font-bold tracking-tight text-slate-400 flex items-center gap-2 min-h-[40px]">
                <span className="text-slate-500 font-medium whitespace-nowrap"></span>
                <div className="flex items-center">
                  <span className="text-blue-500">{displayName.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="text-white ml-2">{displayName.split(' ').slice(2).join(' ')}</span>
                  <span className={`w-2 h-6 md:h-8 bg-blue-500 ml-1 ${!isTypingComplete ? 'cursor-blink' : 'opacity-0'}`} />
                </div>
              </div>
            </div>
            <h1 className="flex items-center text-5xl md:text-2xl font-black tracking-tighter mb-6 leading-none uppercase">

              <span className="h-[1.1em] overflow-hidden relative flex items-center">
                <span key={engineerType} className="block animate-slide-right leading-none">
                  {engineerType}
                </span>
              </span>

              <span className="ml-2 animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 font-black leading-none">
                Engineer
              </span>

            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "Building the bridge between <span className="text-white">High-Performance System Logic</span> and <span className="text-white">Actionable Data Intelligence</span>. I turn raw information into automated business growth."
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
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 icon-glow-blue">
                  <Linkedin size={20} className="text-blue-500" />
                </a>
                <a href={contact.facebook} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 icon-glow-blue">
                  <Facebook size={20} className="text-blue-600" />
                </a>
                <a href={contact.github} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2 icon-glow-slate">
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