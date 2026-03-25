import React, { useState, useEffect, useRef, useContext, createContext } from 'react';
import {
  AlertCircle
} from 'lucide-react';

import { ThreeBackground } from "./Background"
import IntroPage from "./components/intro-website";
import { HeroSection } from "./sections/hero";
import { Navbar } from "./components/navbar";

import { ContactModal } from "./components/modals/contact-modal";

import { Skills } from './sections/skills';
import { ProjectGallery } from './sections/project-gallery';
import ProjectSection from './sections/project-section';
import { Footer } from "./components/footer";
import About from './sections/about';

const App = () => {
  // State for Contact Modal
  const [showContactModal, setShowContactModal] = useState(false);

  // New State for Notification
  const [notification, setNotification] = useState(null);
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <>
      <div className=" min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-auto" >
        <IntroPage setShowMainContent={setShowMainContent} />
        <ThreeBackground />
        {/* Persistent Notification System */}
        {notification && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] animate-in slide-in-from-top-4 duration-300">
            <div className="bg-red-500/90 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-3 font-black uppercase tracking-widest text-[10px]">
              <AlertCircle size={18} className="animate-pulse" />
              {notification}
            </div>
          </div>
        )}

        <div className={`relative z-10 transition-opacity duration-1500 ${showMainContent ? 'opacity-100' : 'opacity-0'
          }`}>

          <Navbar setShowContactModal={setShowContactModal} />

          <HeroSection setShowContactModal={setShowContactModal} />
          <About />
          {/*  Skills /> */}
          {/* <ProjectGallery setNotification={setNotification} /> */}
          <ProjectSection />



          <Footer />
        </div>

        {/* Popup Contact Form Modal */}
        {showContactModal && (
          <ContactModal setShowContactModal={setShowContactModal} />
        )}
      </div>
    </>
  );
};

export default App;