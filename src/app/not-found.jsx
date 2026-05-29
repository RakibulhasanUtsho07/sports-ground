import Link from 'next/link';
import { IoFootballOutline } from 'react-icons/io5';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-[#0f172a] text-white">
      <div className="relative flex items-center justify-center">
      
        <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        
        <h1 className="text-[120px] sm:text-[160px] font-black tracking-tighter text-slate-800 leading-none select-none flex items-center justify-center gap-2">
          4
          <span className="inline-block text-emerald-500 animate-spin [animation-duration:8s]">
            <IoFootballOutline className="w-24 h-24 sm:w-32 sm:h-32" />
          </span>
          4
        </h1>
      </div>

     
      <div className="mt-6 max-w-md space-y-3 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100">
          Match Called Off! 
        </h2>
        <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
          The pitch or facility you are looking for doesn't exist, or has been moved to another stadium. Let's get you back in the game!
        </p>
      </div>

      
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-2xl transition-all shadow-xl shadow-emerald-600/10 active:scale-95 group"
        >
          <HiOutlineArrowNarrowLeft className="text-lg transform transition-transform group-hover:-translate-x-1" />
          Back to Ground
        </Link>
      </div>
    </div>
  );
}