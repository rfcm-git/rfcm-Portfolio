import React, { useContext } from 'react';
import { Linkedin, Github, Facebook, Mail } from 'lucide-react';
import { contact, cvLinks } from '../constants/contacts';

export const Footer = ({setShowContactModal}) => {
  return (
    <>
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
              &copy; {new Date().getFullYear()} Richard Francis Malana. All rights reserved.
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