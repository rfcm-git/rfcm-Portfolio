import { useState, useEffect } from "react";
import { ExternalLink, Eye, Play, AlertCircle } from "lucide-react";
import { Github } from "../../svc-icons.jsx";
import { services } from "../data/services";
import ConfirmationModal from "../components/modals/confirmation-modal";
import { VideoPlayerModal } from "../components/modals/videoplayer-modal";
import ProjectDetailsModal from "../components/modals/project-detail-modal";

const ProjectSection = () => {
  const [pendingUrl, setPendingUrl] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // New States for Interaction
  const [notification, setNotification] = useState(null);
  const [wiggleProject, setWiggleProject] = useState(null);

  // Show modal
  const triggerLiveViewPrompt = (url) => {
    setPendingUrl(url);
    setIsVisible(false);

    // allow DOM to mount first, then animate
    setTimeout(() => setIsVisible(true), 10);
  };

  // Cancel modal
  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(() => setPendingUrl(null), 300);
  };

  // Confirm modal
  const confirmLiveView = () => {
    if (pendingUrl) {
      window.open(pendingUrl, "_blank");
      handleCancel();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleCancel();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Updated Handler for Project Links
  const handleProjectClick = (e, projectTitle, url) => {
    if (unavailableProjects.includes(projectTitle)) {

      e.preventDefault();
      setWiggleProject(projectTitle);
      setNotification("Site is currently unavailable");

      // Stop wiggling after a duration
      setTimeout(() => setWiggleProject(null), 300);

      // Clear notification after 1.5 seconds
      setTimeout(() => setNotification(null), 1500);
    } else {
      window.open(url, "_blank");
    }

  };

  // List of projects that trigger the "Unavailable" effect
  const unavailableProjects = [
    'E-Commerce Website Template',
    'Automated AI Data Pipeline',
    'BI Performance Dashboard'
  ];

  return (
    <>
      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24 px-24 bg-slate-900/20 ">
        <div className="flex flex-col items-center text-center gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-slate-800"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Featured Projects</h2>
            <div className="h-px w-8 bg-slate-800"></div>
          </div>
          <p className="text-slate-500 max-w-lg">A selection of my recent work in systems engineering and interactive web development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.flatMap((s) => s.projects.map((p) => ({ ...p, sId: s.id, sBg: s.bg, sColor: s.color })))
            .map((project, idx) => (
              <div key={idx} className="group bg-slate-950 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all flex flex-col group/card shadow-2xl relative overflow-hidden">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="relative h-64 w-full overflow-hidden group/img-btn"
                >
                  <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover/card:opacity-90 transition-all duration-500 group-hover/img-btn:scale-110" />

                  {/* Click Hint Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/img-btn:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                    <div className="p-3 bg-emerald-500 rounded-full text-white transform scale-90 group-hover/img-btn:scale-100 transition-transform duration-300">
                      <Eye size={24} />
                    </div>
                    <span className="text-white font-bold text-xs uppercase tracking-[0.2em] bg-slate-900/80 px-4 py-2 rounded-xl border border-white/10">
                      View Project Gallery
                    </span>
                  </div>
                </button>

                <div className="p-8 flex flex-col gap-5 relative z-10 -mt-12 bg-slate-950/50 backdrop-blur-xl border-t border-slate-800 rounded-b-3xl grow">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover/card:text-emerald-400 transition-colors">{project.title}</h3>

                    {/* PROJECT ACTIONS UI */}
                    <div className="flex items-center gap-2 relative">
                      {project.git && (
                        <div className="relative group/tooltip">
                          <a href={project.git} target="_blank" rel="noreferrer" className="block p-1">
                            <Github
                              size={18}
                              className={`text-blue-500 transition-all ${project.attentionGrabber ? 'attention-github' : 'hover:text-white hover:scale-110'}`}
                            />
                          </a>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase 
                          tracking-wider rounded-lg opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl 
                          shadow-blue-500/20 translate-y-2 group-hover/tooltip:translate-y-0 z-100"
                          >
                            view source code
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-blue-600" />
                          </div>
                        </div>
                      )}

                      {project.title === 'Hexagonal Pattern Visualization' ? (
                        <button
                          onClick={() => setActiveVideo(project)}
                          title="Watch Demo Video"
                          className="p-1 hover:scale-110 transition-transform text-blue-500 hover:text-blue-400"
                        >
                          <Play size={18} fill="currentColor" />
                        </button>
                      ) : (
                        <a
                          onClick={(e) => {
                            if (project.title === 'Blog Web App Built with FastAPI') {
                              triggerLiveViewPrompt(project.link)
                            } else if (!isVisible) {
                              handleProjectClick(e, project.title, project.link);
                            }
                          }}
                          target="_blank"
                          rel="noreferrer"
                          title="Visit Live Site"
                          className={`p-1 transition-all ${wiggleProject === project.title ? 'animate-slow-wiggle text-red-500' : 'text-blue-500 hover:text-white'}`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}

                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] uppercase tracking-wider font-bold text-slate-500">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Render the separate modal */}
      <ConfirmationModal
        pendingUrl={pendingUrl}
        isVisible={isVisible}
        onCancel={handleCancel}
        onConfirm={confirmLiveView}
      />

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoPlayerModal activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
      )}

      {selectedProject && (
        <ProjectDetailsModal selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          setActiveVideo={setActiveVideo}
          isVisible={isVisible}
          triggerLiveViewPrompt={triggerLiveViewPrompt}
        />
      )}


      {/* Persistent Notification System */}
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] animate-in slide-in-from-top-4 duration-300">
          <div className="bg-red-500/90 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-3 font-black uppercase tracking-widest text-[10px]">
            <AlertCircle size={18} className="animate-pulse" />
            {notification}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSection;