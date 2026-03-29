import { X } from 'lucide-react';

export const VideoPlayerModal = ({ activeVideo, setActiveVideo }) => {
  return (
    <>
      <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
        <div
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-x5"
          onClick={() => setActiveVideo(null)}
        />
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-linear-to-b from-black/80 to-transparent z-10">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white">{activeVideo.title}</h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Project Simulation Demo</p>
            </div>
            <button
              onClick={() => setActiveVideo(null)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <video
            src={activeVideo.videoUrl}
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </>
  );
};