import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Facebook, ChevronRight, Cpu, Globe, BarChart3, Code2, Wrench, Search, Bot} from 'lucide-react';
import { cvLinks, contact } from "../constants/contacts";

export const Navbar = ({ setShowContactModal }) => {
  const [specialistType, setSpecialistType] = useState(0);

  // Mouse tracking state for the navbar tilt effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  const specialistRoles = [
    { text: "AI Automation Specialist", icon: <Bot size={12} /> },
    { text: "Data Analyst", icon: <Search size={12} /> },
    { text: "Web Developer", icon: <Globe size={12} /> },
    { text: "Software Engineer", icon: <Code2 size={12} /> },
    { text: "Computer Technician", icon: <Wrench size={12} /> }
  ];

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 15;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 5;
    setMousePos({ x, y });
  };

  const resetNav = () => setMousePos({ x: 0, y: 0 });

  return (
    <>
      {/* Floating Header Navigation */}
      <nav className="fixed left-0 right-0 z-50  flex justify-center mt-6 px-6 pointer-events-none">
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetNav}
          style={{
            transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) translateY(${mousePos.y}px) translateX(${mousePos.x}px)`,
          }}
          className="pointer-events-auto nav-glow-border p-[1px] rounded-full "
        >
          <div className="bg-slate-950/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all group duration-500">
            <div className=" flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
              <div className="w-[130px] h-[30px] flex items-center gap-2 animate-fade-in-out" key={specialistType}>
                {specialistRoles[specialistType].icon}
                <span>{specialistRoles[specialistType].text}</span>
              </div>
              <a href="#services" className="hover:text-blue-400 transition-colors">Expertise</a>
              <button
                onClick={() => setShowContactModal(true)}
                className="text-white hover:text-blue-300 transition-all flex items-center gap-2 relative group/btn"
              >
                <Mail size={12} className="text-blue-500 group-hover/btn:scale-110 transition-transform" />
                <span className="relative">
                  Hire Me
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover/btn:w-full transition-all duration-300" />
                </span>
              </button>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Github size={18} />
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href={contact.facebookUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-tighter text-slate-500 self-center mr-1 flex items-center gap-1">
                Get CV <ChevronRight size={10} className="animate-bounce-x" />
              </span>
              <a href={cvLinks.software} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-black hover:border-blue-500 transition-all">
                <Cpu size={10} className="text-blue-500" /> Software
              </a>
              <a href={cvLinks.web} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-black hover:border-emerald-500 transition-all">
                <Globe size={10} className="text-emerald-500" /> Web
              </a>
              <a href={cvLinks.data} target="_blank" rel="noreferrer" className="group flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[10px] font-black hover:border-purple-500 transition-all">
                <BarChart3 size={10} className="text-purple-500" /> Data
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};