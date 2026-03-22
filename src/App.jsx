import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import {
  Globe,
  BarChart3,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cpu,
  Terminal,
  ArrowRight,
  ChevronRight,
  Zap,
  Facebook,
  Bot,
  Download,
  Database,
  Code2,
  Wrench,
  Search,
  Play,
  AlertCircle
} from 'lucide-react';

import { ThreeBackground } from "./Background"
import { services } from "./data/services";
import IntroPage from "./components/intro-website";

import { cvLinks, contact } from "./constants/contacts";

import {ContactModal} from "./components/modals/contact-modal";
import {VideoPlayerModal} from "./components/modals/videoplayer-modal";

import {Footer} from "./components/layouts/footer";
import { ClosingPitch } from './sections/closing-pitch';

const App = () => {

  const [engineerType, setEngineerType] = useState('Software');
  const [specialistType, setSpecialistType] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  // New States for Interaction
  const [notification, setNotification] = useState(null);
  const [wiggleProject, setWiggleProject] = useState(null);

  // State for Typewriter Effect
  const fullName = "Yo! I'm Richard";
  const [displayName, setDisplayName] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // State for Video Player
  const [activeVideo, setActiveVideo] = useState(null);

  // Mouse tracking state for the navbar tilt effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  const [showMainContent, setShowMainContent] = useState(false);

  // Disable scroll during intro and re-enable after main content is shown
  useEffect(() => {
    // Disable scroll during transition
    document.body.style.overflow = 'hidden';

    // Re-enable scroll after transition (1s = 1000ms)
    const timer = setTimeout(() => {
      if (showMainContent) {
        document.body.style.overflow = ''; // allow scroll after fade-in
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = ''; // cleanup
    };
  }, [showMainContent]);

  const specialistRoles = [
    { text: "AI Automation Specialist", icon: <Bot size={12} /> },
    { text: "Data Analyst", icon: <Search size={12} /> },
    { text: "Web Developer", icon: <Globe size={12} /> },
    { text: "Software Engineer", icon: <Code2 size={12} /> },
    { text: "Computer Technician", icon: <Wrench size={12} /> }
  ];

  // List of projects that trigger the "Unavailable" effect
  const unavailableProjects = [
    'E-Commerce Website Template',
    'Automated AI Data Pipeline',
    'BI Performance Dashboard'
  ];

  // Updated Handler for Project Links
  const handleProjectClick = (e, projectTitle) => {
    if (unavailableProjects.includes(projectTitle)) {
      e.preventDefault();
      setWiggleProject(projectTitle);
      setNotification("Site is currently unavailable");

      // Stop wiggling after a duration
      setTimeout(() => setWiggleProject(null), 300);

      // Clear notification after 1.5 seconds
      setTimeout(() => setNotification(null), 1500);
    }
  };

  // Typewriter Logic with looping
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

  // Cycle the roles
  useEffect(() => {
    const engineerInterval = setInterval(() => {
      setEngineerType(prev => prev === 'Software' ? 'Computer' : 'Software');
    }, 3000);

    const specialistInterval = setInterval(() => {
      setSpecialistType(prev => (prev + 1) % specialistRoles.length);
    }, 2500);

    return () => {
      clearInterval(engineerInterval);
      clearInterval(specialistInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 15;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 5;
    setMousePos({ x, y });
  };

  const resetNav = () => setMousePos({ x: 0, y: 0 });

  return (
    <div className=" min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-auto" >
      <IntroPage setShowMainContent={setShowMainContent} />
      <ThreeBackground />
      <div className={`hide-scrollbar overflow-auto relative z-10 transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0'
        }`}>

        {/* Persistent Notification System */}
        {notification && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] animate-in slide-in-from-top-4 duration-300">
            <div className="bg-red-500/90 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-3 font-black uppercase tracking-widest text-[10px]">
              <AlertCircle size={18} className="animate-pulse" />
              {notification}
            </div>
          </div>
        )}

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

        {/* Hero Section */}
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

        {/* Skills / Services Section */}
        <section id="services" className="py-24 px-6 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-4">The Stack</h2>
              <p className="text-3xl md:text-5xl font-bold tracking-tight">Full-Cycle Engineering</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="group flex flex-col p-8 bg-slate-900/30 border border-slate-800 rounded-[2.5rem] hover:border-slate-600 transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${service.bg} bg-opacity-10 flex items-center justify-center ${service.color}`}>
                      {service.id === 'software' && <Cpu size={28} />}
                      {service.id === 'web' && <Globe size={28} />}
                      {service.id === 'data' && <Database size={28} />}
                    </div>
                    <a
                      href={service.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white hover:border-slate-600 hover:scale-105 transition-all"
                    >
                      <Download size={12} className="animate-bounce" /> CV
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {service.serviceDesc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.offerings.map((offering, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <Zap size={12} className={service.color} /> {offering}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800">
                    {service.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-[10px] font-black uppercase tracking-wider text-slate-500">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase mb-4">Project Gallery</h2>
                <p className="text-3xl md:text-4xl font-bold tracking-tight">Recent Work & Contributions</p>
              </div>
              <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                Explore Codebase <ArrowRight size={16} />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.flatMap(s => s.projects.map(p => ({ ...p, sId: s.id, sBg: s.bg, sColor: s.color }))).map((project, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-slate-700 transition-all flex flex-col justify-between relative overflow-visible"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-2 rounded-lg bg-slate-900 ${project.sColor}`}>
                        <Terminal size={18} />
                      </div>
                      <div className="flex gap-3">
                        {project.git && (
                          <div className="relative group/tooltip">
                            <a href={project.git} target="_blank" rel="noreferrer" className="block p-1">
                              <Github
                                size={18}
                                className={`text-slate-700 transition-all ${project.attentionGrabber ? 'attention-github' : 'hover:text-white hover:scale-110'}`}
                              />
                            </a>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider rounded-lg opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl shadow-blue-500/20 translate-y-2 group-hover/tooltip:translate-y-0 z-[100]">
                              click this to see the source code
                              <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-blue-600" />
                            </div>
                          </div>
                        )}

                        {project.title === 'Generating Hexagonal Pattern' ? (
                          <button
                            onClick={() => setActiveVideo(project)}
                            title="Watch Demo Video"
                            className="p-1 hover:scale-110 transition-transform text-blue-500 hover:text-blue-400"
                          >
                            <Play size={18} fill="currentColor" />
                          </button>
                        ) : (
                          <a
                            href={project.link}
                            onClick={(e) => handleProjectClick(e, project.title)}
                            target="_blank"
                            rel="noreferrer"
                            title="Visit Live Site"
                            className={`p-1 transition-all ${wiggleProject === project.title ? 'animate-slow-wiggle text-red-500' : 'text-slate-700 hover:text-white'}`}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Modal Player */}
        {activeVideo && (
          <VideoPlayerModal activeVideo={activeVideo} setActiveVideo={setActiveVideo}/>
        )}

        <ClosingPitch setShowContactModal={setShowContactModal}/>

        <Footer />

        {/* Popup Contact Form Modal */}
          {showContactModal && (
            <ContactModal setShowContactModal={setShowContactModal} />
          )}
      </div>

    </div>
  );
};

export default App;