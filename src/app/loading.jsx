import { IoFootballOutline } from 'react-icons/io5';

export default function Loading() {
  return (
    <div className="min-h-[75vh] w-full flex flex-col items-center justify-center bg-[#0f172a] text-white px-4">
      <div className="relative flex items-center justify-center">
       
        <div className="absolute w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
        
       
        <div className="relative text-emerald-500 animate-spin [animation-duration:2.5s] z-10">
          <IoFootballOutline className="w-16 h-16 md:w-20 md:h-20" />
        </div>
      </div>

     
      <div className="mt-6 flex flex-col items-center space-y-2">
        <h3 className="text-base md:text-lg font-bold tracking-wide text-slate-200 flex items-center gap-1">
          Preparing the Pitch
          <span className="flex gap-1 items-center ml-0.5">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
          </span>
        </h3>
        <p className="text-xs text-slate-400 font-medium">Fetching latest sports facilities...</p>
      </div>
    </div>
  );
}