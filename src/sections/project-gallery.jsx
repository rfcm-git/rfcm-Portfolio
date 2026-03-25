import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Play, Terminal } from "lucide-react";
import { contact } from "../constants/contacts";
import { services } from "../data/services";
import { VideoPlayerModal } from "../components/modals/videoplayer-modal";


export const ProjectGallery = ({setNotification}) => {
  // State for Wiggling
  const [wiggleProject, setWiggleProject] = useState(null);

  // State for Video Player
  const [activeVideo, setActiveVideo] = useState(null);
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

  // List of projects that trigger the "Unavailable" effect
  const unavailableProjects = [
    'E-Commerce Website Template',
    'Automated AI Data Pipeline',
    'BI Performance Dashboard'
  ];
  return (
    <>

      {/* Project Gallery */}
      <section id="projects" className="py-24 px-6 bg-slate-900/20">
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
        <VideoPlayerModal activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
      )}

    </>
  );
};