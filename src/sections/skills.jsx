import { Cpu, Database, Globe, Download, Zap } from "lucide-react";
import { services } from "../data/services";

export const Skills = () => {
  return (
    <>
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
    </>
  );
};