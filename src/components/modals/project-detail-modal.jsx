import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ExternalLink, ChevronDown, X, Play } from 'lucide-react';
import { Github } from '../../../svc-icons.jsx';

const ProjectDetailsModal = ({ selectedProject, setSelectedProject, setActiveVideo, triggerLiveViewPrompt, isVisible }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  // Auto-slide effect for project images
  useEffect(() => { 
    let interval;
    if (selectedProject && selectedProject.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [selectedProject]);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => { setSelectedProject(null); setCurrentImgIndex(0); }} />

        <div className="relative overflow-y-auto flex flex-col w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-[2.5rem] duration-500 max-h-[95vh] ">

          <button onClick={() => { setSelectedProject(null); setCurrentImgIndex(0); }} className="absolute top-6 right-6 p-2 bg-slate-900/50 hover:bg-slate-900 backdrop-blur-md rounded-full text-white transition-colors border border-white/10 z-20">
            <X size={24} />
          </button>

          {/* CAROUSEL HEADER IMAGE */}
          <div className="relative h-80 md:h-96 sm:h-96 w-full flex-shrink-0 group/carousel overflow-hidden bg-black">
            {/* Image Container with Hover Expansion */}
            <div className="w-full h-full relative">
              {selectedProject.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={selectedProject.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${i === currentImgIndex ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'}`}
                />
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none opacity-80" />

            {/* Navigation Controls - Only show if multiple images */}
            {selectedProject.images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                  onClick={prevImage}
                  className="p-3 bg-slate-900/60 hover:bg-emerald-600 backdrop-blur-md rounded-full text-white transition-all border border-white/10 pointer-events-auto active:scale-90"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 bg-slate-900/60 hover:bg-emerald-600 backdrop-blur-md rounded-full text-white transition-all border border-white/10 pointer-events-auto active:scale-90"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {selectedProject.images.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImgIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30'}`} />
              ))}
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="relative px-6 pt-8 md:px-10 md:pt-8 overflow-y-auto grid grid-cols-[60%_40%] gap-4 bg-slate-900">

            <div className="grid md:grid-cols-1 gap-2">
              <div className="flex flex-col flex-wrap items-start gap-1 mb-4">
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Technical Project</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              </div>
              <div className="md:col-span-2 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <div className="w-8 h-[1px] bg-slate-800"></div>
                    Project Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-lg">{selectedProject.desc}</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Stack Integration</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tool) => (
                    <span key={tool} className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-emerald-400 group-hover:border-emerald-500/50 transition-colors">{tool}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
                {selectedProject.title === 'Hexagonal Pattern Visualization' ? (
                  <button
                    onClick={() => setActiveVideo(selectedProject)}
                    title="Watch Demo Video"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
                  >
                    <Play size={18} fill="currentColor" />
                    Watch Demo Video
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (selectedProject.title === 'Blog Web App Built with FastAPI') {
                        triggerLiveViewPrompt(selectedProject.link)
                      } else if (!isVisible) {
                        triggerLiveViewPrompt(selectedProject.link); setSelectedProject(null);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-emerald-900/20 active:scale-95"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </button>
                )}
                <button onClick={() => { window.open(selectedProject.git, '_blank'); setSelectedProject(null); }} className="w-full flex items-center justify-center gap-3 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all active:scale-95">
                  <Github size={18} />
                  Source Repository
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <div className="flex flex-col gap-4 p-6 bg-slate-950/50 border border-slate-800 rounded-3xl">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Core Functionalities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.keyFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                      <div className="mt-1 p-0.5 bg-emerald-500/20 rounded text-emerald-500">
                        <CheckCircle2 size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* PERSISTENT SCROLL INDICATOR ARROW */}
            <div className="sticky bottom-0 left-0 right-0 col-span-full flex justify-center pb-4 pointer-events-none z-40 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
              <ChevronDown size={32} className="animate-bounce shadow-lg" />
            </div>
          </div>

        </div>

      </div >
    </>
  );
};

export default ProjectDetailsModal;
