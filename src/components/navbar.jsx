import { useState, useRef } from "react";
import { Mail, Bot } from 'lucide-react';
import { Linkedin, Facebook, Github } from '../../svc-icons';
import { contact } from "../constants/contacts";

export const Navbar = ({ setShowContactModal }) => {

  // Mouse tracking state for the navbar tilt effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  

  const navRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 15;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 5;
    setMousePos({ x, y });
  };

  const resetNav = () => setMousePos({ x: 0, y: 0 });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Header Navigation */}
      <nav className="fixed left-0 right-0 z-50 flex justify-center mt-6 px-6 pointer-events-z">
        <div
          ref={navRef} onMouseMove={handleMouseMove} onMouseLeave={resetNav}
          style={{
            transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) translateY(${mousePos.y}px) translateX(${mousePos.x}px)`,
          }}
          className="pointer-events-auto nav-glow-border rounded-full "
        >
          <div className="bg-slate-950/60 backdrop-blur-2xl border border-white/10 rounded-full px-16 py-3 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all group duration-500">
            <div className=" flex items-center gap-5 text-sm font-black uppercase tracking-[0.2em] text-slate-300">

              <div className="flex gap-1 flex-row items-center hover:text-white transition-colors text-blue-500 relative group/btn">
                <Bot size={14} />
                <button onClick={() => scrollToSection("hero")} >
                  <span className="relative">
                    TechDevRichard
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover/btn:w-full transition-all duration-300" />
                  </span>
                </button>
              </div>

              <button onClick={() => scrollToSection("projects")} className="hover:text-blue-300 relative group/btn ">
                <span className="relative">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover/btn:w-full transition-all duration-300" />
                </span>
              </button>

              <button onClick={() => scrollToSection("about")} className="hover:text-blue-300 relative group/btn ">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover/btn:w-full transition-all duration-300" />
              </button>

              <button
                onClick={() => setShowContactModal(true)}
                className="text-white hover:text-blue-300 transition-all flex items-center gap-2 relative group/btn"
              >
                <Mail size={12} className="text-blue-500 group-hover/btn:scale-110 transition-transform" />
                <span className="relative">
                  Hire Me
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover/btn:w-full transition-all duration-300" />
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
          </div>
        </div>
      </nav>
    </>
  );
};