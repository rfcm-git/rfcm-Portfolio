import { ExternalLink, Github } from "lucide-react";
import { services } from "../data/services";


const ProjectSection = () => {
  return (
    <>
      <section id="projects" className="py-20 px-6 bg-slate-900/20">
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-slate-800"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Featured Projects</h2>
            <div className="h-px w-8 bg-slate-800"></div>
          </div>
          <p className="text-slate-500 max-w-lg">A selection of my recent work in systems engineering and interactive web development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.flatMap(s => s.projects.map(p => ({ ...p, sId: s.id, sBg: s.bg, sColor: s.color }))).map((project, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 rounded-3xl hover:border-emerald-500/50 transition-all flex flex-col group/card shadow-2xl relative overflow-hidden">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-60 group-hover/card:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-3 z-30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <a href={project.git} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white shadow-xl">
                  <Github size={18} />
                </a>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-emerald-600/90 backdrop-blur-md border border-emerald-500 rounded-full hover:bg-emerald-500 text-white shadow-xl">
                  <ExternalLink size={18} />
                </a>
              </div>

              <div className="p-8 flex flex-col gap-5 relative z-10 -mt-12 bg-slate-950/50 backdrop-blur-xl border-t border-slate-800 rounded-b-3xl flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover/card:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-[10px] uppercase tracking-wider font-bold text-slate-500">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default ProjectSection;