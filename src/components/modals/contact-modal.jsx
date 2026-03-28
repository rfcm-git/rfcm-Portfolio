import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Send, X, MessageSquare, Loader2} from 'lucide-react';

export const ContactModal = ({ setShowContactModal }) => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success


  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setShowContactModal(false);
        setFormStatus('idle');
      }, 2000);
    }, 1500);
  };

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setShowContactModal(false);
        },
        (error) => {
          console.error(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-x3 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-slate-800/50 p-8 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Let's talk.</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Interested in working together?</p>
            </div>
          </div>
          <button
            onClick={() => setShowContactModal(false)}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {formStatus === 'success' ? (
          <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-90 duration-500">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-2">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="text-2xl font-bold text-white">Message Sent!</h4>
            <p className="text-slate-400 max-w-xs text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
          </div>
        ) : (

          <form ref={formRef} className="p-8 space-y-6" onSubmit={handleContactSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                <input type="text" placeholder="Juan Dela Cruz" name="user_name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <input type="email" placeholder="juan@example.com" name="user_email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
              <select name="subject" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-emerald-500/50 transition-all text-slate-200">
                <option>New Project Inquiry</option>
                <option>Hiring / Full-time</option>
                <option>Consultation</option>
                <option>General Message</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
              <textarea name="message" rows="4" placeholder="How can I help you today?" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors resize-none" required></textarea>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4">
              <button
                disabled={formStatus === 'sending'}
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-900/10 mt-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending Transmission...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Modal Footer Decor */}
        <div className="px-8 py-4 bg-slate-950/50 border-t border-slate-800 flex justify-center">
          <span className="text-[9px] text-slate-600 font-mono uppercase tracking-[0.3em]">Encrypted Connection Secure</span>
        </div>
        {/*
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
          */}
      </div>
    </div >
  );
};
