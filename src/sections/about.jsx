
import { Github, ExternalLink, ChevronDown, ChevronUp, Database, Sparkles, Terminal, Server, GraduationCap, ShieldCheck, Code2, Layout, CheckCircle2, Cpu } from 'lucide-react';
import { services } from '../data/services';

const About = () => {
  const techStack = {
    backend: ["Python", "FastAPI", "PostgreSQL", "SQLite", "JWT Auth", "OAuth", "Pydantic"],
    languages: ["C++ (OOP)", "Java (OOP)", "Node.js"],
    frontend: ["React", "Tailwind CSS", "Axios", "jQuery"],
    tools: ["Docker", "Git", "AWS", "Redis"]
  };

  const mainService = services[1]; // Full-Stack / Backend focus
  return (
    <>
      <section className="py-20 px-36 max-w-8xl flex flex-row gap-8 justify-center items-center" id="about">
          {/* Left: Image Side */}
          <div className="relative aspect-square w-[50%] h-auto rounded-3xl overflow-hidden bg-slate-950 border border-slate-800">
            <img
              src="/assets/about-image.jpg"
              alt="Backend Developer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Status</p>
                    <p className="text-sm font-bold text-white">System Operational</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Focus</p>
                  <p className="text-sm font-mono text-emerald-400">High-Availability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <GraduationCap size={14} className="text-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">Computer Engineering Graduate</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {mainService.subtitle.split('|')[0]} |{' '}
              <span className={`${mainService.color} font-mono italic`}>
                {mainService.subtitle.split('|')[1] || ''}
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed text-lg">
              {mainService.serviceDesc}
            </p>

            {/* Offerings */}
            <div className="grid grid-cols-1 gap-3">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                Core Offerings
              </h4>
              {mainService.offerings.map((offering, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    {offering}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Stack */}
            <div className="flex flex-col w-[50%] gap-3">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {mainService.skills.map((tech) => (
                  <span
                    key={tech}
                    className="text-[14px] font-mono text-emerald-300 bg-emerald-500/5 px-2 py-1.5 rounded border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default About;