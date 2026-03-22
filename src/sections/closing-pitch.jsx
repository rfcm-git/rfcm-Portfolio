import { Mail } from "lucide-react";
import { contact } from "../constants/contacts";

export const ClosingPitch = ({setShowContactModal}) => {
  return (
    <>
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
                      <a href={`mailto:${contact.emails.primary}`} className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors">
                        {contact.emails.primary}
                      </a>
                      <a href={`mailto:${contact.emails.secondary}`} className="text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors">
                        {contact.emails.secondary}
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-right">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile Contacts</p>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-slate-200"> {contact.phones.primary} </span>
                      <span className="text-sm font-bold text-slate-200"> {contact.phones.secondary} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};