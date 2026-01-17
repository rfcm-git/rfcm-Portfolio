import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  BarChart3, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu,
  Terminal,
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Zap,
  Facebook,
  Bot,
  Download,
  X,
  Send,
  Sparkles,
  Workflow,
  Database,
  Layers,
  Code2,
  Wrench,
  Search
} from 'lucide-react';

const App = () => {
  const [engineerType, setEngineerType] = useState('Software');
  const [specialistType, setSpecialistType] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  
  // Mouse tracking state for the navbar tilt effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  const githubUrl = "https://github.com/rfcm-git";
  const linkedinUrl = "https://linkedin.com/in/richardmalana/";
  const facebookUrl = "https://www.facebook.com/rf.malana/";
  const primaryEmail = "drahcir.fran@gmail.com";
  const secondaryEmail = "richard.malana@outlook.com";
  const phoneNumbers = ["+63-921-7377-119", "+63-994-9891-334"];

  const specialistRoles = [
    { text: "AI Automation Specialist", icon: <Bot size={12} /> },
    { text: "Data Analyst", icon: <Search size={12} /> },
    { text: "Web Developer", icon: <Globe size={12} /> },
    { text: "Software Engineer", icon: <Code2 size={12} /> },
    { text: "Computer Technician", icon: <Wrench size={12} /> }
  ];

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

  // Handle mouse move for the navbar "magnetic" tilt effect
  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 15;
    const y = (e.clientY - (rect.top + rect.height / 2)) / 5;
    setMousePos({ x, y });
  };

  const resetNav = () => setMousePos({ x: 0, y: 0 });

  // CV Links
  const cvLinks = {
    data: "https://drive.google.com/file/d/1Mlx41J2guEXKWZ3DqaLn5oPneQ3EQnlV/view?usp=sharing",
    software: "https://drive.google.com/file/d/1yV69-671UaG8mi1C3YN5OC1aLpt5TxbB/view?usp=sharing",
    web: "https://drive.google.com/file/d/1YoWXPZRnelkddkA3pGTQTZJGvleqlw-j/view?usp=sharing"
  };

  const services = [
    {
      id: 'software',
      title: 'Software Development',
      subtitle: 'System & Backend Specialist',
      color: 'text-blue-500',
      bg: 'bg-blue-500',
      cvUrl: cvLinks.software,
      serviceDesc: 'Developing high-performance applications with expertise in C++ systems, Java backends, and Python automation.',
      skills: ['C++', 'Java', 'Spring Boot', 'Python', 'OpenCV', 'OOP'],
      offerings: [
        'C++ Tooling & Graphics Systems',
        'Java Spring Boot Backend Services',
        'OpenCV Image & Video Processing',
        'System Architecture & Design',
        'Desktop & Enterprise Applications'
      ],
      projects: [
        {
          title: 'Enterprise Java Services',
          desc: 'Scalable backend logic and API development using Spring Boot and microservices architecture.',
          tech: ['Java', 'Spring Boot', 'SQL']
        },
        {
          title: 'Visualization Tooling',
          desc: 'Custom UI components and rapid prototyping tools using ImGui for internal visualization.',
          tech: ['C++', 'ImGui', 'OpenGL']
        }
      ]
    },
    {
      id: 'web',
      title: 'Web Engineering',
      subtitle: 'Modern Full-Stack Transition',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500',
      cvUrl: cvLinks.web,
      serviceDesc: 'Transitioning system-level expertise into scalable web ecosystems. Specializing in Python-based backends and React frontends.',
      skills: ['Next.js', 'ReactJS', 'FastAPI', 'Flask', 'JavaScript', 'Tailwind CSS'],
      offerings: [
        'React & Next.js Single Page Apps',
        'Python (FastAPI/Flask) REST APIs',
        'Responsive & Mobile-First Design',
        'Modern State Management',
        'Full-Stack System Integration'
      ],
      projects: [
        {
          title: 'Next.js Professional Suite',
          desc: 'Scalable web architecture featuring server-side rendering and API integration.',
          tech: ['Next.js', 'Tailwind', 'REST']
        },
        {
          title: 'Python Backend Services',
          desc: 'Robust server-side logic for data-heavy applications using modern frameworks.',
          tech: ['FastAPI', 'PostgreSQL', 'Docker']
        }
      ]
    },
    {
      id: 'data',
      title: 'Data & AI Automation',
      subtitle: 'BI, Databases & Workflow AI',
      color: 'text-purple-500',
      bg: 'bg-purple-500',
      cvUrl: cvLinks.data,
      serviceDesc: 'Leveraging MySQL, Power BI, and automation tools like n8n to transform raw data into actionable business insights.',
      skills: ['MySQL', 'Power BI', 'Excel/VBA', 'n8n', 'Python', 'OpenAI'],
      offerings: [
        'Advanced n8n Workflow Automation',
        'MySQL & MS Access DB Engineering',
        'AI Agent & LLM Orchestration',
        'Power BI Insight Dashboards',
        'Data Cleaning & ETL Pipelines'
      ],
      projects: [
        {
          title: 'Automated AI Data Pipeline',
          desc: 'End-to-end automation using n8n to ingest, process with AI, and sync to databases.',
          tech: ['n8n', 'OpenAI', 'MySQL']
        },
        {
          title: 'BI Performance Dashboard',
          desc: 'Interactive Power BI reports analyzing operational KPIs from multiple data sources.',
          tech: ['Power BI', 'Excel', 'VBA']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 4s ease infinite;
        }
        @keyframes fade-in-out {
          0% { opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2.5s ease-in-out infinite;
        }
        @keyframes slide-right {
          0% { transform: translateX(-20px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-right {
          animation: slide-right 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes rotate-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .nav-glow-border {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s cubic-bezier(0.33, 1, 0.68, 1);
          perspective: 1000px;
        }
        .nav-glow-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 0deg, transparent 0%, transparent 20%, #3b82f6 50%, transparent 80%, transparent 100%);
          animation: rotate-glow 4s linear infinite;
          z-index: -1;
        }
        @keyframes mesh-drift {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .animate-mesh {
          background-image: radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
                            radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.1) 0px, transparent 50%),
                            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
                            radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.1) 0px, transparent 50%);
          background-size: 200% 200%;
          animation: mesh-drift 10s ease infinite alternate;
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        }
        .animate-cta {
          animation: subtle-pulse 3s infinite ease-in-out;
        }
      `}</style>

      {/* Hiring Status Bar */}
      <div className="bg-blue-600/10 border-b border-blue-500/20 py-3 px-6 sticky top-0 z-[60] backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase flex items-center gap-2 overflow-hidden h-4">
             <div className="flex items-center gap-2 animate-fade-in-out" key={specialistType}>
                {specialistRoles[specialistType].icon}
                <span>{specialistRoles[specialistType].text}</span>
             </div>
             <span className="text-slate-600 mx-1">•</span>
             <span className="text-white">Remote Ready</span>
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

      {/* Floating Header Navigation */}
      <nav className="fixed left-0 right-0 z-50 flex justify-center mt-6 px-6 pointer-events-none">
        <div 
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetNav}
          style={{
            transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) translateY(${mousePos.y}px) translateX(${mousePos.x}px)`,
          }}
          className="pointer-events-auto nav-glow-border p-[1px] rounded-full"
        >
          <div className="bg-slate-950/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-all group duration-500">
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
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
              <a href={githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Github size={18} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / Pitch Profile */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7 text-left">
            <div className="mb-2">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-400 flex items-center gap-2">
                <span className="text-slate-500 font-medium">Yo! I'm</span> Richard Francis C. <span className="text-blue-500">Malana</span>
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              <div className="h-[1.1em] overflow-hidden relative">
                <span key={engineerType} className="block animate-slide-right">
                  {engineerType}
                </span>
              </div>
              <span className="animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600 font-black">Engineer</span>
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
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2">
                  <Linkedin size={20} className="text-blue-500" />
                </a>
                <a href={facebookUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2">
                  <Facebook size={20} className="text-blue-600" />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl font-black hover:bg-slate-800 transition-all flex items-center gap-2">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900/50 border border-slate-800 rounded-[2rem] p-8 backdrop-blur-sm">
              <h3 className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase mb-6 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-blue-500" /> Why Hire Me?
              </h3>
              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-bold text-slate-200 flex items-center gap-2 uppercase text-xs">
                    <Code2 size={14} className="text-blue-400" /> Software Engineer in C++
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Strong foundation in low-level systems and high-performance computation. Experienced in **C++ tooling**, graphics visualization with **ImGui/OpenGL**, and image processing using **OpenCV**.
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-slate-200 flex items-center gap-2 uppercase text-xs">
                    <Layers size={14} className="text-emerald-500" /> Full Stack Web Developer
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Expertise in building scalable web ecosystems using **Next.js**, **React**, and **Python (FastAPI/Flask)**. I bridge the gap between complex backend logic and intuitive user interfaces.
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-slate-200 flex items-center gap-2 uppercase text-xs">
                    <Database size={14} className="text-purple-500" /> Data Analytics Expert
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Mastery of the modern data stack: **MySQL**, **Power BI**, and **n8n**. I don't just report numbers; I architect pipelines that transform messy data into strategic assets.
                  </p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-slate-200 flex items-center gap-2 uppercase text-xs">
                    <Bot size={14} className="text-blue-500" /> Workflow AI Specialist
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    Pioneer in **AI Automation** and **Vibe Coding**. I build "Self-Driving" business logic using LLMs and low-code orchestrators to eliminate operational friction.
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1"><Sparkles size={12} className="text-blue-400" /> Vibe Coding</span>
                  <span className="flex items-center gap-1"><Zap size={12} className="text-yellow-500" /> Fast Learner</span>
                  <span className="flex items-center gap-1"><Workflow size={12} className="text-purple-400" /> n8n Power User</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      </section>

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
            <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
              Explore Codebase <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.flatMap(s => s.projects.map(p => ({...p, sId: s.id, sBg: s.bg, sColor: s.color}))).map((project, idx) => (
              <a 
                href={githubUrl} 
                key={idx}
                target="_blank"
                rel="noreferrer"
                className="group p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-2 rounded-lg bg-slate-900 ${project.sColor}`}>
                      <Terminal size={18} />
                    </div>
                    <ExternalLink size={16} className="text-slate-700 group-hover:text-slate-400" />
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Pitch / Contact Section */}
      <section id="contact-pitch" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute -inset-[2px] rounded-[3.1rem] bg-gradient-to-r from-blue-600 via-purple-500 to-emerald-400 animate-gradient opacity-40 group-hover:opacity-100 blur-sm transition-opacity duration-700" />
          
          <div className="relative text-center bg-slate-950 border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 animate-mesh pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">New Chapter</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                Let's solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">technical problems</span>.
              </h2>
              
              <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed italic">
                I am ready to bring my multi-disciplinary engineering background to your team.
              </p>
              
              <div className="flex flex-col items-center gap-10">
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 group/cta animate-cta"
                >
                  <Mail size={22} className="group-hover/cta:scale-110 transition-transform" /> 
                  CONTACT ME DIRECTLY
                </button>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-xl border-t border-white/10 pt-10">
                  <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Contacts</p>
                    <div className="flex flex-col gap-1">
                      <a href={`mailto:${primaryEmail}`} className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors">
                        {primaryEmail}
                      </a>
                      <a href={`mailto:${secondaryEmail}`} className="text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors">
                        {secondaryEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-right">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile Contacts</p>
                    <div className="flex flex-col gap-1">
                      {phoneNumbers.map(num => (
                        <span key={num} className="text-sm font-bold text-slate-200">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left">
              <p className="text-slate-600 text-[10px] tracking-[0.2em] font-black uppercase mb-4">
                Engineering Portfolio &bull; Software Engineer &bull; Remote Available
              </p>
              <h4 className="text-xl font-black uppercase tracking-tight text-white mb-6">
                Connect with me
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500">
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-500 hover:border-blue-500/50 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-white/50 transition-all">
                  <Github size={20} />
                </a>
                <a href={facebookUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-600 hover:border-blue-600/50 transition-all">
                  <Facebook size={20} />
                </a>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-400 hover:border-blue-400/50 transition-all"
                >
                  <Mail size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 opacity-60">
              <div className="text-center md:text-right">
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Portfolio Mirror</p>
                <span className="text-sm font-bold text-slate-500">
                  rfcm-portfolio.dev
                </span>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-[9px] font-black text-slate-700 uppercase tracking-[0.2em]">
               &copy; {new Date().getFullYear()} Richard Francis C. Malana. All rights reserved.
             </div>
             <div className="flex gap-6">
               <a href={cvLinks.software} target="_blank" rel="noreferrer" className="text-[9px] font-black text-slate-600 uppercase tracking-widest hover:text-blue-500 transition-colors">Download CV</a>
             </div>
          </div>
        </div>
      </footer>

      {/* Popup Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-slate-800/50 p-8 border-b border-slate-700 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Get in Touch</h3>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Direct Line to Richard</p>
              </div>
              <button 
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setShowContactModal(false); }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors appearance-none text-slate-300">
                  <option>Software Project Inquiry</option>
                  <option>Web Development Request</option>
                  <option>Data Analytics / Automation</option>
                  <option>Hiring / Full-time Role</option>
                  <option>Just saying hello!</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea rows="4" placeholder="How can I help you today?" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors resize-none" required></textarea>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4">
                <div className="flex flex-col gap-1 items-center md:items-start opacity-50">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-1">
                    <CheckCircle2 size={10} /> Fast Response Guaranteed
                  </span>
                </div>
                <button className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;