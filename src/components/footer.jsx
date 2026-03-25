import { Linkedin, Github, Facebook, Mail } from 'lucide-react';
import { contact, cvLinks } from '../constants/contacts';

export const Footer = () => {
  return (
    <>
      <footer className="py-20 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-center md:text-left mt-0">
              <p className="text-slate-600 text-[10px] tracking-[0.2em] font-black uppercase mb-4">
                Full-Stack Developer &bull; Software Engineer &bull; Remote Available
              </p>
              <h4 className="text-xl font-black uppercase tracking-tight text-white mb-6">
                Connect with me
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500">
                <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-500 hover:border-blue-500/50 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-white/50 transition-all">
                  <Github size={20} />
                </a>
                <a href={contact.facebookUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-blue-600 hover:border-blue-600/50 transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4 opacity-60">
              <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-left">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mobile Contacts</p>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-slate-200"> {contact.phones.primary} </span>
                  <span className="text-sm font-bold text-slate-200"> {contact.phones.secondary} </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-left">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Contacts</p>
                <div className="flex flex-col gap-1 md:items-end">
                  <a href={`mailto:${contact.emails.primary}`} className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors">
                    {contact.emails.primary}
                  </a>
                  <a href={`mailto:${contact.emails.secondary}`} className="text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors">
                    {contact.emails.secondary}
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[9px] font-black text-slate-700 uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} © 2026 TechDevRichard| Built with React & Tailwind
            </div>
            <div className="flex gap-6">
              <a href={cvLinks.software} target="_blank" rel="noreferrer" className="text-[9px] font-black text-slate-600 uppercase tracking-widest hover:text-blue-500 transition-colors">Download CV</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};