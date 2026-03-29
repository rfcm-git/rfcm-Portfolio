import { AlertTriangle } from "lucide-react";

const ConfirmationModal = ({ pendingUrl, isVisible, onCancel, onConfirm }) => {
  if (!pendingUrl) return null;

  return (
    <div
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-200 w-full max-w-xl px-4
        transition-all duration-300 ease-out
        ${isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'}
      `}
    >
      <div className="bg-slate-900/90 border border-amber-500/50 backdrop-blur-xl p-4 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 border-l-amber-500">
        <div className="flex items-center gap-4 px-2">
          <div className="p-2 bg-amber-500/20 rounded-full text-amber-500 animate-pulse">
            <AlertTriangle size={20} />
          </div>
          <div className="flex flex-col text-center md:text-left">
            <span className="text-sm font-bold text-white tracking-tight">External Server Notice</span>
            <span className="text-xs text-amber-200/70">Free hosting may take ~90 seconds to wake up.</span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <button
            onClick={onCancel}
            className="flex-1 md:flex-none px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 md:flex-none px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-amber-900/20"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;