import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Send, X } from 'lucide-react';

export const ContactModal = ({ setShowContactModal }) => {
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
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight text-white">Get in Touch</h3>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Direct Line to Richard</p>
        </div>
        <button
          onClick={() => setShowContactModal(false)}
          className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      <form ref={formRef} className="p-8 space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
            <input type="text" placeholder="John Doe" name="user_name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" required />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
            <input type="email" placeholder="john@example.com" name="user_email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors" required />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
          <select name="subject" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors appearance-none text-slate-300">
            <option>Software Project Inquiry</option>
            <option>Web Development Request</option>
            <option>Data Analytics / Automation</option>
            <option>Hiring / Full-time Role</option>
            <option>Just saying hello!</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
          <textarea name="message" rows="4" placeholder="How can I help you today?" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-blue-500 outline-none transition-colors resize-none" required></textarea>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4">
          <div className="flex flex-col gap-1 items-center md:items-start opacity-50">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-1">
              <CheckCircle2 size={10} /> Fast Response Guaranteed
            </span>
          </div>
          <button type="submit" className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 group">
            Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  </div >

);
};